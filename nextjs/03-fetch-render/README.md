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

**Data Fetching & Rendering**: In the App Router, data is fetched in Server Components using `fetch` or `database calls`. Next.js 16+ reuses the `React 18 data-fetching model: 
fetch()` requests are memoized and can be cached with directives like `'use cache'`. By default, pages are streamed with React Suspense (non-blocking SSR), or can be statically prerendered. Legacy **SSR/SSG/ISR/CSR** concepts still apply: SSR (fetch per request), SSG (build-time prerendering), ISR (stale-while-revalidate builds via revalidate and on-demand revalidatePath/revalidateTag), and CSR (client-side hydration). Next.js now treats rendering as a spectrum, allowing fine-grained caching and revalidation. A comparison of _SSR/SSG/ISR/CSR_ (and Server Components as a dynamic approach).

---

In the App Router, data fetching usually happens in Server Components. That means page, layout, or nested server component can call fetch() or talk directly to a database/ORM on the server, and Next.js can then stream the result to the browser. The current docs describe this as the App Router’s default data model: Server Components can fetch data, optionally cache the result, and stream UI to the client.

---

### 1. The main idea:

Instead of thinking “SSR vs SSG first,” Next.js now treats rendering more like a spectrum: `some parts can be static and cached`, `some can be dynamic per request`, and `some can be streamed later` when the data is ready.

Next.js 16’s Cache Components emphasize this shift, and the use cache directive is the newer, explicit way to mark routes, components, or functions as cacheable.

That means you are not locked into one rendering mode for the whole app. A route can have a static shell, dynamic sections, cached data, and fine-grained invalidation all at the same time.

---

### 2. Fetching data in a Server Component:

Server Components can use any async I/O, including fetch() and database calls. This is the preferred place for server-only logic because it keeps secrets and heavy data access off the client bundle.

Example:

```js
// app/posts/page.tsx
type Post = {
 id: number;
 title: string;
};

export default async function PostsPage() {
 const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
   next: { revalidate: 60 },
 });

 const posts: Post[] = await res.json();

 return (
   <main>
     <h1>Posts</h1>
     <ul>
       {posts.slice(0, 5).map((post) => (
         <li key={post.id}>{post.title}</li>
       ))}
     </ul>
   </main>
 );
}
```

- This Next.js Server Component fetches data from an API and implements **`Incremental Static Regeneration`** (ISR) via **{ next: { revalidate: 60 } }** to cache the page for 60 seconds.

This works because Server Components can be async, and Next.js handles the server rendering for you. The *fetch API in the App Router is memoized* during a server render pass when the URL and options match, *so repeated calls do not refetch unnecessarily in the same pass*.

---

### 3. fetch() memoization:

A very important behavior in App Router is that fetch() requests with the same **GET URL** and options are **automatically memoized** during a `server render` pass. If you call the same request from multiple Server Components, layouts, pages, generateStaticParams, or generateViewport, Next.js executes it only once and shares the result.

That is why this works well:

```js
// lib/posts.ts
export async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

// app/page.tsx
import { getPosts } from "@/lib/posts";

export default async function HomePage() {
  const posts = await getPosts();
  return <pre>{JSON.stringify(posts.slice(0, 3), null, 2)}</pre>;
}
```

If another Server Component calls getPosts() in the same render pass, the result can be shared instead of fetched again.

---

### 4. "use cache" and Cache Components:

Next.js 16 introduced Cache Components as a more explicit caching model, centered around the use cache directive. The directive can mark a route, component, or function as cacheable, and it can be used at the top of a file or inline on a function/component.

Example:

```js
// app/products/page.tsx
"use cache";

export default async function ProductsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <main>
      <h1>Products</h1>
      <p>Cached page content</p>
      <pre>{JSON.stringify(posts.slice(0, 2), null, 2)}</pre>
    </main>
  );
}
```

use cache is especially useful when you want to cache computed data or whole components, not just raw fetch calls. The docs also describe cacheLife as the way to set the cache lifetime for cached functions or components when using Cache Components.

---

### 5. Streaming with Suspense:

The App Router supports streaming with React Suspense, which means the server can send the page shell first and fill in slower parts later. Next.js documents this as the recommended way to handle uncached or slower data, and loading.tsx is built on Suspense for instant loading UI.

Example:

```js
// app/dashboard/page.tsx
import { Suspense } from "react";

async function SlowStats() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();

  return <div>{data.title}</div>;
}

function LoadingCard() {
  return <div>Loading stats...</div>;
}

export default function DashboardPage() {
  return (
    <main>
      <h1>Dashboard</h1>
      <Suspense fallback={<LoadingCard />}>
        <SlowStats />
      </Suspense>
    </main>
  );
}
```

The benefit is that the route does not have to wait for every piece of data before the user sees anything. The static shell can appear first, and the slower section can stream in later.

---

### 6. SSR, SSG, ISR, and CSR in modern Next.js:

These older terms still matter, but in the App Router they are more like outcomes of your caching and rendering choices than separate systems. Next.js still supports request-time rendering, build-time prerendering, stale-while-revalidate caching, and client-side hydration.

### SSR (server side rendering)

- SSR means the page is rendered on the server for each request. In App Router terms, this is what you get when a route is dynamic or uncached and must resolve fresh data at request time.

- Example use cases: user dashboards, authenticated pages, personalized data, live inventory. Server-only code stays on the server, and the browser receives rendered HTML plus the interactive parts that need hydration.

### SSG (static site generation)

- SSG means the HTML is prerendered ahead of time and served as cached output. In the App Router, this often happens when your route and data can be cached and rendered as a static shell. Next.js’s caching docs and use cache model are the modern way to think about this.

- Example use cases: blogs, docs, marketing pages, portfolios. If the content rarely changes, static rendering is usually the fastest and simplest option.

### ISR (incremental static regeneration)

- ISR means you serve cached content first and refresh it later using revalidation. Next.js documents both time-based and on-demand revalidation, and in the App Router the key APIs are `revalidatePath` and `revalidateTag`.

- *revalidateTag is for invalidating cached data by tag*, while *revalidatePath invalidates a specific route path*. The docs note that revalidateTag is ideal when a slight delay is acceptable and users can receive stale content while fresh data loads in the background.

Example:

```js
// app/actions.ts
"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export async function publishPost() {
  // save to DB here

  revalidatePath("/blog");
  revalidateTag("blog-posts", "max");
}
```

In Next.js 16, revalidateTag() was updated to use a cacheLife profile such as "max" to enable stale-while-revalidate behavior.

### CSR (client side rendering)

- CSR means the browser does more of the work after hydration. In Next.js, this is mainly for interactive parts built as Client Components, or for data that is intentionally fetched in the browser after the initial page load.

- CSR is still useful, but it is no longer the default mental model for the whole app. In App Router, you normally keep as much as possible on the server and only move the interactive pieces to the client.

---

### 7. A practical comparison:

- `SSR`: best when the HTML must be fresh on every request, such as authenticated or highly personalized pages.

- `SSG`: best when the content is mostly stable and can be cached or prerendered.

- `ISR`: best when content is mostly static but must refresh occasionally without a full rebuild.

- `CSR`: best for browser-first interactivity after load, but usually not for the entire app shell in modern Next.js.

- `Server Components`: best for server-first rendering, data access, caching, and minimizing client JavaScript.

---

### 8. A good way to think about it:

- A modern App Router page often looks like this: the server fetches data, memoizes repeated requests, caches what can be cached, streams slow sections with Suspense, and leaves only the interactive controls to the client. That is the “rendering spectrum” Next.js is moving toward.

- The big win is control: you decide what is fresh, what is cached, what streams, and what hydrates in the browser. That is much more flexible than forcing every page into a single SSR or SSG bucket.

---
