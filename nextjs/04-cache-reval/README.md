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

**Caching & Revalidation**: Next.js 16 introduces refined caching APIs. Use `export const cache = 'force-cache'` or `'no-store'` in route config to override defaults. You can mark data functions with 'use cache' to memoize them. After mutating data on the server, call revalidatePath() or revalidateTag() to trigger updates. The built-in ISR (setting export const revalidate = 60) automatically updates static pages.

---

The current Next.js caching story has two layers you should separate in your head: the `new Cache Components model` and `the older “previous model”`.

When Cache Components are enabled with `cacheComponents: true` in **next.config.ts**, Next.js uses use cache, cacheLife, and tag/path invalidation as the main tools. If you are not using Cache Components, the older route-segment settings like fetchCache and revalidate still apply.

First, one small correction
The **route-level override** is `fetchCache`, not `export const cache`. In the previous model, fetchCache controls the default caching behavior for fetch() calls inside a page, layout, or route handler, while the per-request fetch() option still supports `cache: 'force-cache'` and `cache: 'no-store'`.

---

### 1. The new model: use cache, cacheLife, and tags:

With Cache Components turned on, the use cache directive caches the return value of async functions and components. Next.js documents this as the main way to cache at either the data level or the UI level. cacheLife sets how long that cached output should live, and it must be used inside a cached scope.

A typical pattern looks like this:

```js
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 cacheComponents: true,
};

export default nextConfig;

// app/lib/get-products.ts
import { cacheLife, cacheTag } from "next/cache";

export async function getProducts() {
 "use cache";
 cacheLife("hours");
 cacheTag("products");

 const res = await fetch("https://example.com/api/products");
 return res.json();
}
```

In this setup, use cache stores the result, cacheLife("hours") gives it a lifetime, and cacheTag("products") attaches a tag you can later invalidate.

---

### 2. Why caching matters:

Caching is simply storing the result of data fetching or computation so future requests can reuse it instead of doing the work again. Next.js 16’s caching direction is more fine-grained than the old “everything is SSR or SSG” mindset: you can cache some things, stream some things, and invalidate only the parts that changed. The Next.js 16 release notes and cache docs describe this as part of the newer caching architecture.

---

### 3. Per-request control with fetch():

If you want to control a single request, use the fetch() options.

- `cache: 'force-cache'` tells Next.js to look in the `server-side cache first` and reuse the response if it is fresh; if there is no fresh match, it _fetches again and updates the cache_.
- `cache: 'no-store'` is the opposite: it bypasses caching and fetches fresh data on each request.

Example:

```js
// app/news/page.tsx
export default async function NewsPage() {
  const cached = await fetch("https://example.com/api/headlines", {
    cache: "force-cache",
  });

  const fresh = await fetch("https://example.com/api/live-score", {
    cache: "no-store",
  });

  return <div>...</div>;
}
```

That split is useful when part of the page is stable and another part must always be current.

---

### 4. Route-level caching in the previous model:

If you are not using Cache Components, the old route-segment config still exists. In that model, `fetchCache = 'force-cache'` makes all fetch() calls in that page or layout cache by default, and `fetchCache = 'force-no-store'` forces them to be uncached. Next.js also documents revalidate as a route-segment config that sets the default revalidation time for a page or layout.

Example:

```js
// app/blog/page.tsx
export const fetchCache = "force-cache";
export const revalidate = 60;

export default async function BlogPage() {
  const res = await fetch("https://example.com/api/posts");
  const posts = await res.json();

  return <pre>{JSON.stringify(posts, null, 2)}</pre>;
}
```

In the previous model, revalidate = 60 means the page’s cached output is eligible for refresh every 60 seconds, and the docs note that this does not override an individual fetch() request’s own revalidate setting.

---

### 5. Time-based revalidation:

Time-based revalidation is the “update after a delay” version of caching. In the App Router’s previous model, you can set `next: { revalidate: 3600 }` on a fetch() call, or set `export const revalidate = 60` at the route level to define the default behavior. The docs describe the route-level revalidate _default as effectively caching_, _indefinitely when it is false_, unless a request opts out with no-store or revalidate: 0.

Example:

```js
// app/page.tsx
export const revalidate = 60;

export default async function Page() {
  const res = await fetch("https://example.com/api/home");
  const data = await res.json();

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

That is the classic ISR-style setup: serve cached content fast, then refresh it on the next eligible request after the interval.

---

### 6. On-demand revalidation after mutations:

When data changes on the server, the common pattern is to invalidate the relevant cache right after the mutation. Next.js provides _revalidatePath()_ for a specific route and _revalidateTag()_ for a tagged group of cached data. Both are server-side APIs; they cannot be called from Client Components.

Example with a Server Action:

```js
// app/actions.ts
"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export async function createPost(formData: FormData) {
 const title = String(formData.get("title") || "");

 // save to database here...

 revalidatePath("/blog");
 revalidateTag("posts", "max");
}
```

In Next.js 16, revalidateTag() now requires a cacheLife profile such as "max" for `stale-while-revalidate` behavior, and the old single-argument form is deprecated. The docs also say updateTag() is the `read-your-own-writes` option for Server Actions when the user should see fresh data immediately.

---

### 7. revalidateTag vs updateTag:

Use revalidateTag when it is acceptable to serve stale content briefly while fresh content loads in the background, such as blogs, catalogs, or docs.

Use updateTag inside a Server Action when the user just changed something and should see the new state immediately rather than stale cached data.

That distinction is one of the biggest changes in the newer caching APIs: Next.js is moving from one generic invalidation style to separate tools for background freshness and immediate read-your-own-writes behavior.

---

### 8. How to choose the right tool:

Think of it like this:

Use `use cache + cacheLife` for cached Server Components or async functions in the Cache Components model.

- Use fetch({ cache: "force-cache" }) when one request should be cached.
- Use fetch({ cache: "no-store" }) when a request must always be fresh.
- Use revalidatePath() when a specific page or section changed.
- Use revalidateTag() when many cached entries share one tag and all of them should refresh in the background.
- Use updateTag() when the mutation happened in a Server Action and the next read must be fresh immediately.

---

### 9. A simple way to remember the whole system:

The old model is mostly about where to set cache behavior: route config, fetch options, and revalidate.

The new model is more about what to cache and for how long: cache the function or component with use cache, define lifetime with cacheLife, label it with cacheTag, and invalidate it with revalidatePath, revalidateTag, or updateTag.

---
