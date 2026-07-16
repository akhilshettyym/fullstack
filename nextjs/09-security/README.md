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

---

**Security**: _Next.js encourages security best practices_: enforce a _Content Security Policy (CSP)_ via headers (see official guide), sanitize inputs, and never expose secrets to the client. Environment variables `(NEXT*PUBLIC* prefix for client)` are managed per runtime. Use next-secure-headers or built-in headers() configuration to harden requests.

---

Security in Next.js comes down to three habits: lock down what the browser can load, validate anything the user sends, and keep secrets on the server. The official docs on data security, CSP, and environment variables all point in that direction.

---

### 1. Use a Content Security Policy:

A `Content Security Policy (CSP)` limits which sources can provide scripts, styles, images, fonts, frames, and other content. Next.js’s official CSP guide says CSP helps defend against `Cross-Site Scripting (XSS)`, `clickjacking`, and other injection attacks.

A simple way to set security headers is the _built-in headers()_ config in `next.config.js`, which lets you attach custom HTTP headers to matching routes.

```js
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none';",
          },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },
};
```

For stricter CSP, the official guide recommends a nonce-based policy. Next.js shows generating a fresh nonce in proxy.ts, setting the CSP header, and then reading the nonce in your layout with headers() when you need to pass it to third-party scripts. The guide also notes that nonce-based CSP requires dynamic rendering and disables static optimization/ISR for those pages.

```ts
// proxy.ts
import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const cspHeader = `
   default-src 'self';
   script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
   style-src 'self' 'nonce-${nonce}';
   img-src 'self' blob: data:;
   font-src 'self';
   object-src 'none';
   base-uri 'self';
   frame-ancestors 'none';
 `
    .replace(/\s{2,}/g, " ")
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", cspHeader);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  response.headers.set("Content-Security-Policy", cspHeader);
  return response;
}
```

---

### 2. Validate and sanitize user input on the server:

Next.js’s forms guide recommends client-side validation for basic checks like required and type="email", and server-side validation with libraries like zod before mutating data. The authentication guide also says Server Actions should be treated carefully, with authorization checks just like public API endpoints.

```jsx
"use server";

import { z } from "zod";

const schema = z.object({
 email: z.string().email(),
 name: z.string().min(1).max(100),
});

export async function createUser(formData: FormData) {
 const parsed = schema.safeParse({
   email: formData.get("email"),
   name: formData.get("name"),
 });

 if (!parsed.success) {
   return { error: "Invalid input" };
 }

 // Safe to continue: mutate database here
}
```

The important mindset is: never trust raw form data. Validate it before storing it, rendering it back into HTML, or using it in queries. That lines up with Next.js’s server-side validation guidance and its “treat mutations like public endpoints” guidance.

---

### 3. Never expose secrets to the client:

By default, environment variables are server-only in Next.js. To expose one to the browser, it must be prefixed with NEXT*PUBLIC*, and those values are inlined into the client bundle at build time. The docs also warn that those values are frozen after build, so they are not good for secrets or runtime-only values.

```js
# server-only
DATABASE_URL=postgres://...

# exposed to browser, so only for non-secret values
NEXT_PUBLIC_ANALYTICS_ID=abc123
// server component or route handler
const dbUrl = process.env.DATABASE_URL; // safe on server

// client component
const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID; // safe to expose
```

**A good rule is simple**: If the browser must never know it, do not give it a `NEXT_PUBLIC_ prefix`. Next.js explicitly says non-NEXT*PUBLIC* values are only available in the Node.js environment.

---

### 4. Protect auth flows and server mutations:

Next.js’s authentication guide says _authentication_, _session management_, and _authorization_ should be treated as separate concerns, and that _Server Actions_ and _Route Handlers_ should perform their own permission checks. It also says Route Handlers and Server Actions should be treated like public-facing endpoints.

```ts
// app/actions.ts
"use server";

import { revalidatePath } from "next/cache";

export async function deletePost(formData: FormData) {
  // verify session and role first
  // if unauthorized, return early

  // delete from DB here
  revalidatePath("/posts");
}
```

## That means UI restrictions alone are not enough. If the action changes data, the server must check whether the user is allowed to do it.

### 5. A practical security checklist:

Use `CSP headers`, preferably with a `nonce-based` policy for strict setups. Validate inputs on the server, especially for forms and mutations. Keep secrets server-only, and only expose truly public values with `NEXT_PUBLIC_`. Make Server Actions and Route Handlers check authentication and authorization on their own.

---
