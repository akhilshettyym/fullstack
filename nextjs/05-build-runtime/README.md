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

**Build & Runtime**: Next.js is written in **Rust** using **Speedy Web Compiler (SWC compiler)** and now defaults to **Turbopack (a Webpack successor)** for bundling. `Turbopack is incremental and much faster`. Legacy webpack configuration is still possible.

The Edge Runtime (via Vercel) runs on V8 (no Node APIs, no ISR support). You can designate server code or API routes to `runtime: 'edge'` in **next.config.js** or a **route.js** file for global CDN-like functions. Otherwise, the Node.js runtime is standard. Next.js also supports **“server actions”** for mutations.

---

Next.js’s build pipeline is centered on Rust-based tooling:

- The framework uses **SWC** for compilation and Turbopack as its Rust-based **incremental bundler**. In Next.js 16, Turbopack became the default bundler, and the docs describe it as optimized for faster local development and builds, especially in large apps.

---

A good way to think about this is:

- SWC compiles your code, Turbopack bundles your app. The App Router still supports custom webpack configuration when needed, so webpack is not gone, but it is now the legacy/customization path rather than the default mental model.

---

At runtime, Next.js currently has two server runtimes:

- The `Node.js Runtime` and the `Edge Runtime`. The Node.js Runtime is the default and has access to all Node.js APIs; the Edge Runtime has a smaller API surface and is used in edge-oriented execution paths. The Edge Runtime also does not support ISR, and it does not support all Node.js APIs, so some packages will not work there.

Here is the practical difference in code. A route handler can opt into the Edge Runtime with the route segment config, while Node.js remains the default if you do nothing.

```js
// app/api/geo/route.ts
export const runtime = "edge";

export async function GET() {
  return Response.json({
    message: "Runs on the Edge Runtime",
  });
}
```

If you need Node APIs like fs, path, or certain database drivers, keep that code on the Node.js runtime instead of Edge, because Edge only supports a limited API set.

For mutations, Next.js supports Server Actions, which let you call server code directly from the UI instead of building a separate API layer first. The Next.js homepage describes this as “run server code by calling a function,” and the Server Actions config docs note that Server Actions are stable and enabled by default.

A common Server Action pattern is: save data on the server, then invalidate the cache so the UI refreshes. That is where revalidatePath() and revalidateTag() fit in.

```js
// app/actions.ts
"use server";

import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
 const title = String(formData.get("title") || "");

 // save to DB here

 revalidatePath("/blog");
}
```

---

One useful detail:

- Server Actions also have security-related config such as allowedOrigins, and the docs say Next.js checks the request origin against the host domain to help prevent CSRF (Cross-Site Request Forgery).

So the simplest mental model is this:

- build-time tooling is SWC + Turbopack, runtime is usually Node.js unless you explicitly choose Edge, and server mutations are best handled with Server Actions plus revalidation.

---

`Webpack` and `Turbopack` represent two entirely separate generations of web application bundling architecture. While Webpack has been the JavaScript ecosystem's gold-standard workhorse for over a decade, Turbopack is its modern, Rust-powered successor engineered specifically by Vercel for high-scale frameworks like Next.js.

As of the Next.js 16 framework engine release, Turbopack has graduated to the default out-of-the-box bundler for both local developer runs (next dev) and live production deployment distributions.

---

### 1. Node.js Runtime (The Heavy Lifter):

The Node.js runtime is the standard environment where your code runs on a full, traditional server or serverless cloud function (using the complete V8 engine).

Why Use It:

- You need full backend capabilities. It supports all Node.js APIs and npm packages (e.g., native database drivers, image processing, complex cryptography, file system operations).

How It Works:

- Your server runs in a single data center region (e.g., us-east-1). When a user requests data, the request travels across the globe to that specific data center to process.

The Downside:

- Higher latency for global users and cold starts. If a serverless function hasn't been run recently, it can take anywhere from a few hundred milliseconds to several seconds to boot up before it even begins processing your request.

---

### 2. Edge Runtime (The Global Speedster):

The Edge runtime is a `lightweight subset` of Node.js APIs built on top of high-performance V8 isolates. It executes code directly at CDN edge nodes scattered globally (closest to the user).

Why Use It:

- Low-latency dynamic operations, such as geolocation lookups, A/B testing splits, custom header rewrites, bot protection, or quick data fetches.

How It Works:

- When a user clicks a link, the request hits a server right in their home city. Because the V8 isolates are pre-warmed, cold starts are virtually zero (typically under 10ms).

The Downside:

- Strict resource limits. You cannot use standard Node.js APIs like fs (file system). Many heavy npm libraries (like legacy SQL ORMs or complex PDF generators) will throw compilation errors because they rely on full Node.js internals.

---
