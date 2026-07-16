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

Routing & Layouts: Next.js uses a filesystem-based routing. In the App Router (/app), pages (page.tsx) and layouts (layout.tsx) are React Server Components by default. The Pages Router (/pages) is legacy (uses getStaticProps/getServerSideProps). App Router supports nested layouts and dynamic routes (e.g. app/blog/[slug]/page.tsx). Root and nested layouts wrap pages hierarchically (see example above).

---

Next.js routing is built around the _file system_: the folders and files we create become **URL routes**. In the modern App Router (/app), Next.js is built on React's newer features like **Server Components, Suspense, and Server functions**. In the older Pages Router (/pages), routes are still file-based, but the router is considered legacy and Next.js recommends the App Router for new work.

---

### 1. The mental model:

- Think of the app like a tree of route segments - each folder adds a URL segment.
- **page.tsx** makes that route publicly reachable, **layout.tsx** wraps the route and any routes beneath it, **[slug]** means “this part of the **URL is dynamic**”, A simple App Router structure might look like this:

```js
app / layout.tsx;
page.tsx;
blog / layout.tsx;
page.tsx[slug] / page.tsx;
```

That would typically map to:

```js
app/page.tsx → /
app/blog/page.tsx → /blog
app/blog/[slug]/page.tsx → /blog/some-post
```

---

### 2. App Router: page.tsx and layout.tsx:

In the App Router, **Layouts and Pages** are **React Server Components by default**. That means they render on the server, can fetch data directly, and **do not** ship their code to the browser bundle **unless you opt** into a Client Component. They also cannot use browser-only APIs like _useState or window_ unless you move that part into a Client Component with **"use client"**.

The App Router requires a root layout at the top level of app/. This is the outer shell for the whole application and usually contains the `<html>` and `<body>` tags.

```js
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
   <html lang="en">
     <body>
       {children}
     </body>
   </html>
 );
}
```

Everything rendered by your app will pass through this layout. So if you put a header, footer, or global providers here, they will appear across the whole site. This is the key difference from the Pages Router, where layout patterns are usually built manually.

- Page component :
  A page.tsx file defines the UI for that route.

```js
// app/page.tsx
export default function HomePage() {
 return <h1>Home</h1>;
}
// app/blog/page.tsx
export default function BlogIndexPage() {
 return <h1>Blog</h1>;
}
```

---

### 3. Nested layouts:

One of the biggest strengths of the App Router is **nested layouts**. If you add a layout.tsx inside a folder, it wraps only the routes inside that folder. Layouts are nested by default, which means parent layouts wrap child layouts through the children prop.

Example:

```js
// app/blog/layout.tsx
export default function BlogLayout({ children }: { children: React.ReactNode }) {
return (
   <section>
     <aside>Blog sidebar</aside>
     <main>{children}</main>
   </section>
 );
}
```

Now this layout wraps both:

```js
/blog
/blog/[slug]
```

That means your blog section can have its own navigation, sidebar, or styling without affecting the rest of the app. This is one of the main reasons the App Router feels more scalable than a manual wrapper approach.

---

### 4. Dynamic routes:

Dynamic routes let you create URLs where part of the path changes, such as blog posts, products, or user profiles. In the App Router, you create them by putting the segment name in square brackets, like [slug]. Next.js then passes the matched value to your page through the params prop.

Example:

```js
// app/blog/[slug]/page.tsx
type PageProps = {
    params: {
        slug: string;
    };
};

export default function BlogPostPage({ params }: PageProps) {
return (
    <article>
        <h1>Post: {params.slug}</h1>
    </article>
);
}
```

If the URL is `/blog/nextjs-routing`, then *params.slug* will be `"nextjs-routing"`.
Dynamic routes with static generation
If you know the possible slugs ahead of time, you can generate them at build time with generateStaticParams. The docs describe dynamic segments as able to be filled in at request time or prerendered at build time.

```js
// app/blog/[slug]/page.tsx
type PageProps = {
    params: {
        slug: string;
    };
};

export async function generateStaticParams() {
const posts = [
    { slug: "nextjs-routing" },
    { slug: "layouts-explained" },
];

return posts.map((post) => ({
    slug: post.slug,
}));
}

export default async function BlogPostPage({ params }: PageProps) {
    return <h1>{params.slug}</h1>;
}
```

That is useful for blogs, docs, portfolios, and any content set that is known ahead of time.

---

### 5. Pages Router (/pages) and how it differs:

The Pages Router still uses file-system routing, and nested folders map to nested URLs just like you would expect. Dynamic routes also work with square brackets, such as **pages/posts/[id].js**.

Example Pages Router structure:

```js
pages / index.tsx;
blog / index.tsx[slug].tsx;
```

A few important differences:

```js
pages/index.tsx becomes /
pages/blog/index.tsx becomes /blog
pages/blog/[slug].tsx becomes /blog/my-post
```

#### Data fetching in the Pages Router

The Pages Router commonly uses:

- getStaticProps for static generation
- getServerSideProps for request-time rendering
- getStaticPaths for dynamic routes that are statically generated
- getStaticProps runs only on the server and never in the browser bundle. 
- getServerSideProps runs on every request. 
- getStaticPaths tells Next.js which dynamic routes to prerender.

Example:

```js
// pages/blog/[slug].tsx
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

type Post = {
    slug: string;
    title: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
return {
    paths: [
        { params: { slug: "nextjs-routing" } },
        { params: { slug: "layouts-explained" } },
    ],
    fallback: false,
};
};

export const getStaticProps: GetStaticProps<{ post: Post }> = async (context) => {
    const slug = context.params?.slug as string;

    const post = {
        slug,
        title: `Post about ${slug}`,
    };

return {
    props: {
        post,
    },
};
};

export default function BlogPostPage({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
    return <h1>{post.title}</h1>;
}
```

```js
// And for server-side rendering:
// pages/profile.tsx
import type { GetServerSideProps } from "next";

type Props = {
    time: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
return {
    props: {
        time: new Date().toISOString(),
    },
};
};

export default function ProfilePage({ time }: Props) {
    return <div>Rendered at: {time}</div>;
}
```

---

### 6. App Router vs Pages Router, in plain English:

- Use the App Router as the default mental model for modern Next.js. It gives you nested layouts, React Server Components by default, and a cleaner way to colocate routing, UI, and data fetching. The Pages Router still works, but it is the older system and Next.js points new users toward the App Router.

##### A simple rule of thumb:

- App Router: best for new apps, nested UI, server-first rendering, modern patterns.
- Pages Router: best when maintaining older projects or learning legacy Next.js patterns.

---

### 7. A practical example:

Imagine a blog site:

```js
app / layout.tsx;
page.tsx;
blog / layout.tsx;
page.tsx[slug] / page.tsx;
```

What happens:

- the root layout gives every page the same global shell
- the blog layout gives every blog page the same sidebar/header
- blog/page.tsx shows the blog index
- blog/[slug]/page.tsx shows one article based on the URL

That structure is what makes the App Router feel “automatic”: the folder tree is the UI tree.

---
