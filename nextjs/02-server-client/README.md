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

**Server vs Client Components**: By default, components in `/app` are `Server Components` – they render on the server and cannot use React hooks or browser APIs. Use the **"use client"** directive at the top of a file to make it a Client Component (supports state, effects, event handlers). This split reduces client bundle size, as server-only logic (data fetching, auth secrets) stays off the client.

---

In the **App Router**, Next.js treats `pages` and `layouts` as `Server Components` by **default**, which means they render on the server and are a good fit for fetching data, reading secrets, *reducing the JavaScript sent to the browser, and streaming content progressively*. When a part of the UI needs interactivity, browser APIs, or React hooks, you mark that file with "use client" and it becomes a Client Component entry point.

---

### 1. Server Components: the default in /app:

A Server Component runs on the server, not in the browser. In Next.js, that makes it ideal for things like *database access*, *API calls* close to the source, and using tokens or other secrets without exposing them to the client. The docs also call out that **Server Components help reduce client-side JavaScript and can improve first-contentful-paint by streaming content earlier**.

A simple Server Component can fetch data directly:

```js
// app/posts/page.tsx
import { getPosts } from "@/lib/posts";

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
```

This is powerful because the page component itself can do the data work on the server and send only the rendered result to the browser.

---

### 2. Client Components: when you need interaction:

A Client Component is used when the `UI needs state`, `event handlers`, `effects`, `custom hooks`, or `browser-only APIs` such as `window` or `localStorage`. The official docs describe 'use client' as the directive that declares an entry point for code to be rendered on the client side.

Example:

```js
// app/components/counter.tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

Without "use client", this file would be treated as a Server Component, and hooks like useState would not be appropriate there.

---

### 3. What "use client" actually does:

**"use client"** must be placed at the top of the file, before imports or other code, and it defines the boundary between `server-run` and `client-run` code. It does not need to be added to every file in your project; only the files that act as entry points for client-side interactivity need it.

A very important detail is that the `directive affects the file and its transitive dependencies`. In other words, *if a file marked with "use client" imports another module, that imported module becomes part of the client subtree too*.

That means this:

```js
// app/ui/like-button.tsx
"use client";

import { useState } from "react";
import { formatCurrency } from "@/lib/format";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button onClick={() => setLikes(likes + 1)}>{formatCurrency(likes)}</button>
  );
}
```

pulls both the button and anything it imports into the client bundle if those imports are part of the client subtree.

---

### 4. Server Component + Client Component together:

- *The most common pattern is*: `Server Component fetches data`, `Client Component handles interaction`. 
- *The docs show this exact model*: a page fetches a post on the server and passes the data into a client-side like button.

```js
// app/[id]/page.tsx
import LikeButton from "@/app/ui/like-button";
import { getPost } from "@/lib/data";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
 const { id } = await params;
 const post = await getPost(id);

 return (
   <main>
     <h1>{post.title}</h1>
     <LikeButton likes={post.likes} />
   </main>
 );
}
// app/ui/like-button.tsx
"use client";

import { useState } from "react";

export default function LikeButton({ likes }: { likes: number }) {
 const [count, setCount] = useState(likes);

 return <button onClick={() => setCount(count + 1)}>Like {count}</button>;
}
```

That division keeps the interactive part small while leaving the data-heavy part on the server.

---

### 5. Why this reduces bundle size:

The `server/client split` is one of the biggest performance wins in the `App Router`. Next.js says Server Components reduce how much code is sent and run by the client, because only client modules are bundled and evaluated in the browser. The result is a smaller JavaScript payload for the user.
That is why the usual advice is to keep most of your tree as Server Components and push "use client" as far down as possible, only where you truly need interactivity. This keeps the client boundary narrow.

---

### 6. Props passed from server to client must be serializable:

When a Server Component renders a Client Component, the props passed across that boundary must be serializable. The Next.js docs explicitly call this out. For example, plain objects, strings, numbers, and arrays are fine, but passing a function as a prop across that boundary is not.

```js
// server component
<ClientCard title="Hello" />   // good
<ClientCard onClick={() => {}} />  // not valid across the boundary

// This matters because the server has to send that data to the browser in a form React can serialize.
```

---

### 7. Common mistakes:

One common mistake is marking a whole page or layout with "use client" just because one button needs an onClick. That usually makes far more code client-side than necessary. Another mistake is trying to use browser APIs like window or hooks like useEffect in a Server Component, which is exactly the kind of work the client boundary is meant to isolate.

A better pattern is to split like this:

```js
// app/dashboard/page.tsx (server)
import Filters from "./filters";

export default async function DashboardPage() {
 const data = await fetchDashboardData();

 return (
   <>
     <h1>Dashboard</h1>
     <Filters />
     <pre>{JSON.stringify(data, null, 2)}</pre>
   </>
 );
}

// app/dashboard/filters.tsx (client)
"use client";

import { useState } from "react";

export default function Filters() {
 const [value, setValue] = useState("all");

 return (
   <select value={value} onChange={(e) => setValue(e.target.value)}>
     <option value="all">All</option>
     <option value="open">Open</option>
     <option value="closed">Closed</option>
   </select>
 );
}
```

That keeps your data layer on the server and only the interactive control in the browser.

---

### 8. Simple rule to remember:

Use Server Components for data, secrets, and static UI. Use Client Components for hooks, events, browser APIs, and anything interactive. Start with server by default, then add "use client" only where the UI truly needs it.

---
