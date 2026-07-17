| [Routing & Layouts](../01-routing-layouts/README.md)
| [Server vs Client](../02-server-client/README.md)
| [Data Fetching & Rendering](../03-fetch-render/README.md)
| [Caching & Revalidation](../04-cache-reval/README.md)
| [Build & Runtime](../05-build-runtime/README.md)
| [Middleware & Edge Functions](../06-middleware-edge/README.md)
| [Deployment & Hosting](../07-deployment-hosting/README.md)
| [Middleware & Edge Functions](../06-middleware-edge/README.md)
| [Performance](../08-performance/README.md)
| [Security](../09-security/README.md)
| [Testing](../10-testing/README.md)
| [TypeScript](../11-typescript/README.md)
| [CSS & Styling](../12-css-styling/README.md)
| [State Management](../13-state-mgt/README.md)
| [Auth/Authorization](../14-auth/README.md)
| [Internationalisation (i18n)](../15-il8n/README.md)
| [Accessibility](../16-accessibility/README.md)
| [Analytics & Observability](../17-analytics-obsv/README.md)
| [Migration Strategies](../18-migration-strat/README.md)
| [Monorepos & Micro-frontends](../19-monorepo-micro/READEME.md)
| [Plugin Ecosystem](../20-plugins-eco/README.md)
| [SEO Metadata](../21-seo-metadata/README.md)
| [Server Action](../22-server-actions/README.md)
| [Debugging and Dev Tools](../23-dev-tools/README.md)
| [Prefetching and Lazy Loading](../24-prefetching-lazy/README.md)
| [Progressive Web Apps](../25-web-apps/README.md)

---

**Auth/Authorization**: Commonly done with libraries like **NextAuth.js**, **Clerk**, or **Firebase**. The official guide outlines patterns (e.g. using secure cookies and middleware). Authentication logic runs in **Server Components** or **Middleware/Route** Handlers, never in public client code. Protect pages using session checks, and use **signed cookies** or **JWTs**.

---

Next.js’s auth story is built around a simple rule: keep **authentication** and _authorization_ on the server, and treat the browser as untrusted. The official auth guide breaks the problem into `authentication`, `session management`, and `authorization`, and recommends using an auth library for production because the full flow gets complex quickly. It also explicitly points to Server Actions, Route Handlers, Server Components, and Proxy as the places where auth logic belongs.

---

### 1. Where auth logic should live:

The sensitive parts of auth should run in Server Components, Server Actions, Route Handlers, or Proxy. Next.js’s guide says Server Actions always execute on the server, Route Handlers should be treated like public API endpoints and verified accordingly, and Proxy can centralize redirect logic and pre-filter unauthorized users. That means you should not rely on client-only code for real protection.

A good pattern is: use the client only for the form or UI, send credentials to a Server Action, verify the session on the server, and redirect or deny access there. The docs also note that context providers for auth are only applicable to Client Components, and child Server Components do not receive that session context the way you might expect.

---

### 2. Authentication: proving who the user is:

Authentication is the sign-in step: the user proves identity with credentials or an external provider. Next.js’s auth guide shows a server-side sign-up/login flow that captures credentials in a form, validates them on the server, and then calls your provider or database. The guide recommends an auth library for production because it typically includes auth, session management, and role-based access control.

Example server action:

```ts
// app/actions/auth.ts
"use server";

import { z } from "zod";

const LoginSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export async function login(formData: FormData) {
  const parsed = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return { error: "Invalid credentials" };
  }

  // Check credentials against DB or auth provider here
  // Create session on success
}
```

That matches the guide’s pattern: validate on the server first, then create or verify the account/session.

---

### 3. Session management: remembering the user across requests:

Once the user is authenticated, Next.js recommends storing the session in a cookie or a database, or both.

The docs describe two common approaches: `stateless sessions` stored in cookies and database sessions where the browser only gets an encrypted session identifier. For stateless sessions, the guide says to generate a secret key, `encrypt/decrypt` the session, and use the Next.js cookies() API.

For cookie-based sessions, Next.js recommends server-side cookie settings like `httpOnly`, `secure`, `sameSite: 'lax'`, and `path: '/'`. Those options reduce exposure to client-side JavaScript and help make the cookie safer to use across requests.

Example:

```ts
// app/lib/session.ts
import "server-only";
import { cookies } from "next/headers";

export async function setSession(sessionValue: string) {
  const cookieStore = await cookies();

  cookieStore.set("session", sessionValue, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });
}
```

The official guide also says the session secret should live in an environment variable, and it shows using a server-only session helper so the sensitive logic never ships to the client.

---

### 4. Authorization: deciding what the user can access:

Authorization is separate from authentication. A user may be logged in, but still not allowed to access a route, page, or action. Next.js’s guide explicitly defines authorization as deciding _what routes and data the user can access_, and then shows role-based checks in _Server Components_, _layouts_, _page components_, _Server Actions_, _Route Handlers_, and _Proxy_.

A practical server-side guard looks like this:

```tsx
// app/dashboard/page.tsx
import { redirect } from "next/navigation";
import { verifySession } from "@/app/lib/dal";

export default async function DashboardPage() {
  const session = await verifySession();

  if (!session) {
    redirect("/login");
  }

  return <h1>Welcome back</h1>;
}
```

The auth guide shows the same general pattern: verify the session on the server, and redirect or deny access before rendering protected content.

---

### 5. Proxy for optimistic route protection:

Next.js recommends Proxy for **“optimistic checks”** such as redirecting unauthenticated users away from `protected static routes` or `centralizing permission-based` redirects. The guide says `Proxy runs on every route` and is useful for pre-filtering unauthorized users before they reach the page.

Example:

```ts
// proxy.ts
import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const hasSession = request.cookies.has("session");

  if (!hasSession && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
```

That is a good first line of defense, but it should not replace real server-side checks in Server Components, Server Actions, or Route Handlers. Next.js treats those server checks as the actual authorization layer.

---

### 6. Route Handlers and server actions still need checks:

Route Handlers are public-facing endpoints, so Next.js says to treat them with the same security care as any API route and verify the user before returning sensitive data. Server Actions should also verify permissions before mutating anything.

```ts
// app/api/admin/route.ts
import { verifySession } from "@/app/lib/dal";

export async function GET() {
  const session = await verifySession();

  if (!session || session.userRole !== "admin") {
    return Response.json({ error: "Forbidden" }, { status: 403 });
  }

  return Response.json({ ok: true });
}
```

That pattern is the safest default: validate identity, check role or ownership, then proceed.

---

### 7. Why cookies and JWTs are used:

Next.js’s auth guide discusses `stateless sessions` where session data or a token lives in cookies and is sent with each request, and it also shows **JWT-based encryption/decryption** using a session library. The important idea is not “JWTs everywhere,” but rather “store something signed or encrypted that the server can verify safely.”

The guide also recommends session libraries such as `iron-session` or `Jose`, and notes that Jose is compatible with the `Edge Runtime`. That gives you flexibility depending on whether your auth flow runs in **Node or Edge**.

---

### 8. The clean mental model:

A good Next.js auth setup usually looks like this: the client renders the form, a Server Action or Route Handler validates credentials, the server creates a signed or encrypted session cookie, and then protected pages verify that session before rendering. Proxy can add early route filtering, but the real trust decision still happens on the server.

The safest takeaway is: never trust the public client with auth decisions. Keep secrets server-only, use secure cookies, verify sessions in server code, and use an auth library when possible because the official docs recommend that for security and simplicity.

---
