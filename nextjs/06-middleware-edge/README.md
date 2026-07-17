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

**Middleware & Edge Functions**: Traditional `middleware.ts` (Edge middleware) has been renamed `proxy.ts` in Next 16, which now runs on the Node runtime for clearer boundaries. In the App Router, you create API/Edge functions with app/.../route.js files (Route Handlers) using the Web Request/Response API. These can be Node (default) or Edge (by setting export const runtime = 'edge'). Use Route Handlers as an equivalent of old API routes.

---

Next.js now draws a clearer line between request interception and API endpoints.

### 1. middleware.ts is now proxy.ts in Next.js 16:

In Next.js 16, the old **middleware** file convention was renamed to **proxy**. The docs say the rename is meant to better reflect what it does: it sits in front of your app and can _rewrite_, _redirect_, _modify headers_, or _respond_ before a request reaches a route. The function name is now proxy, and the _old middleware.ts convention is deprecated_.

**A key correction**: Proxy files run on the Node.js runtime in Next.js 16, and the runtime config is not available inside Proxy files. That means you do not mark proxy.ts with `runtime = 'edge';` the docs explicitly say Proxy defaults to Node.js runtime and the runtime option is not allowed there.

What Proxy is good for -

- Use it for request-time interception such as:

```js
redirects
rewrites
auth checks
header changes
A/B routing
logging or light request shaping before the route renders
```

Example:

```js
// proxy.ts
import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
 const isLoggedIn = request.cookies.has("session");

 if (!isLoggedIn && request.nextUrl.pathname.startsWith("/dashboard")) {
   return NextResponse.redirect(new URL("/login", request.url));
 }

 return NextResponse.next();
}
```

That runs before the request reaches your page or route.

---

### 2. Route Handlers are the App Router version of API routes:

In the App Router, you create API-like endpoints with Route Handlers inside `app/.../route.ts` or `route.js`. The docs describe them as custom request handlers using the Web Request/Response APIs, and they are the App Router equivalent of API Routes in the Pages Router.

Example structure:

```js
app / api / users / route.ts;
```

Example:

```js
// app/api/users/route.ts
export async function GET(request: Request) {
 return Response.json({ users: ["Akhil", "Sara"] });
}
```

Supported HTTP methods include GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS.

---

### 3. Route Handlers run on Node or Edge:

By default, Route Handlers use the Node.js runtime. If you want the route to run at the Edge, you can set:

```js
export const runtime = "edge";
```

in the route file. The Edge Runtime is a smaller API surface than Node.js and is used for edge-oriented execution.

Node runtime Route Handler

```js
// app/api/reports/route.ts
export async function GET() {
  // Node runtime by default
  return Response.json({ runtime: "node" });
}
```

Edge runtime Route Handler

```js
// app/api/geo/route.ts
export const runtime = "edge";

export async function GET(request: Request) {
 return Response.json({
   runtime: "edge",
   url: request.url,
 });
}
```

The important distinction is that the Edge Runtime has a more limited API set than Node.js, so Node-only modules and APIs are not available there.

---

### 4. Proxy vs Route Handler:

A simple way to remember it:

Proxy is for “should this request even get through, and how should it be shaped before routing?”

Route Handlers are for “this route is an endpoint and returns data or a response.”
So:

- use Proxy for interception, auth gates, redirects, rewrites, request shaping
- use Route Handlers for actual API endpoints and data responses

---

### 5. Where Server Actions fit:

Next.js also supports Server Actions for mutations. That means instead of always creating a separate endpoint for form submissions or writes, you can call server code directly from a form or client interaction and then revalidate paths or tags afterward.

Next.js 16’s docs and release notes continue to support this pattern as a core part of App Router data flow.

Example:

```js
// app/actions.ts
"use server";

import { revalidatePath } from "next/cache";

export async function saveComment(formData: FormData) {
 const text = String(formData.get("text") || "");

 // write to database here

 revalidatePath("/blog");
}
```

That is often cleaner than building a full API route for every mutation.

---

### 6. The practical Next.js 16 mental model:

If you are building in the App Router, think like this:

Proxy sits in front of the app and intercepts requests early. It replaces the old middleware naming and now defaults to the Node.js runtime.

Route Handlers are your API endpoints under app/.../route.ts, using standard Request/Response APIs.

Edge runtime is available for Route Handlers when you need it, but it has a smaller API surface.

Server Actions are the modern mutation path for form submissions and server writes.

---
