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

**SEO (Search Engine Optimization):** involves configuring Next.js pages so search engines index them properly, and social platforms share them attractively. Next.js provides a **Metadata API** (in App Router) and file conventions for titles, descriptions, Open Graph/Twitter tags, sitemaps, and `robots.txt`. Metadata does not change UI but guides crawlers and social previews.

---

Next.js’s _built-in_ Metadata API and file conventions support titles, descriptions, OpenGraph images, sitemaps, and robots.txt. Proper metadata is crucial for search ranking, social sharing, and discoverability.

---

**Why Important:** Proper metadata affects search rankings, click-through rates, and social sharing. Without server-rendered titles/descriptions, crawlers may see empty pages. `Missing` or `incorrect canonical` or `hreflang` tags can penalize SEO. Social media relies on OG tags; without them links appear unattractive. In short, SEO/metadata is crucial for discoverability.

---

**Key Subtopics/Concerns:**

- **Page Metadata API:** `export const metadata = { title, description, openGraph: {...} }` (App Router) or `generateMetadata` function for dynamic pages.
- **File-based metadata:** special files in `app/`: `favicon.ico`, `robots.txt`, `sitemap.xml`, `manifest.json`, OpenGraph images (`opengraph-image.jpg|.tsx`), etc..
- **Dynamic vs Static:** Metadata can be static (in files) or dynamic (via `generateMetadata`). Use the API to set `<title>`, `<meta>` tags (description, canonical, viewport, etc.).
- **Open Graph/Twitter:** Use `openGraph` and `twitter` fields in `metadata` for social previews (images, titles). Next.js also supports dynamic OG image generation via `next/og` ImageResponse.
- **Sitemap & Robots:** Provide a `sitemap.xml` and `robots.txt` to guide crawlers. Next.js can auto-generate these via the MetadataRoute APIs.
- **Best Practices:** Ensure each page has unique `title`/`description`, set `metadataBase` for canonical URLs, include relevant keywords, and validate with tools (like Google’s Lighthouse).
- **Pitfalls:** Not rendering metadata on server (lack SSR), forgetting `robots.txt` (blocking bots), duplicate pages without `canonical`, missing `hreflang` for i18n pages.

**Example:**

```tsx
// app/[slug]/page.tsx
export const metadataBase = new URL("https://example.com");
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await fetchPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.ogImage || "/default-og.png"],
      url: `/posts/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.ogImage || "/default-og.png"],
    },
  };
}
export default function PostPage() {
  return <article>…</article>;
}
```

_This sets the page title and meta tags dynamically for a blog post. A matching `app/robots.txt` or `app/sitemap.xml` can also be added._

---

### 1. Why SEO matters so much:

If you have a page with no title, no description, no canonical URL, and no social image, then:

- search engines have less context about what the page is about
- social shares look plain and uninviting
- duplicate pages can confuse crawlers
- international pages can be indexed under the wrong locale
- your click-through rate often drops because previews are weak

In a Next.js app, this is especially important because many pages are dynamic. A blog post, product detail page, event page, or landing page should each have metadata tailored to its content.

---

### 2. Static metadata vs dynamic metadata:

Next.js gives you two main ways to set metadata:

#### Static metadata:

Use this when the values are known ahead of time. This is simple, clean, and fast.

```js
export const metadata = {
  title: "About Us",
  description: "Learn more about our company.",
};
```

#### Dynamic metadata:

Use `generateMetadata` when the metadata depends on fetched data or route params.

```js
export async function generateMetadata({ params }) {
  const post = await fetchPost(params.slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}
```

This is the right choice for : blog posts, product pages, category pages, localized pages, user-generated content

---

### 3. The metadataBase setting:

- This is one of the most important SEO settings in App Router.
- `metadataBase` tells Next.js how to resolve relative URLs in metadata, such as:
- Open Graph images, canonical URLs, Twitter images, alternates
- Without it, relative metadata can become ambiguous.

Example:
`export const metadataBase = new URL("https://example.com");`

Why this matters: If you set

```js
openGraph: {
 url: `/posts/my-article`,
}
```

Next.js can resolve that properly against metadataBase. This is especially useful for canonical URLs and Open Graph previews.

---

### 4. Title and description:

These are the most basic and most important metadata fields.

- **Title**: The title tells search engines and browsers what the page is.

Good title examples:
`Pricing | Acme`, `How to Learn Next.js | My Blog`, `iPhone 16 Pro Cases | ShopName`

- **Description**: The description is often used as the snippet in search results.

Good descriptions should: `be specific, match the page content, avoid keyword stuffing, encourage clicks naturally`

Example:

```js
export const metadata = {
  title: "Pricing | Acme",
  description: "Compare plans and choose the best option for your team.",
};
```

A common best practice is to define a title template in your root layout:

```js
export const metadata = {
  title: {
    default: "Acme",
    template: "%s | Acme",
  },
  description: "The best platform for modern teams.",
};
```

Then pages can supply only the page-specific part, such as Pricing, and Next.js formats the final title automatically.

---

### 5. generateMetadata for dynamic pages:

This is the most practical SEO feature in App Router. If you have a blog post route like:

Example:

```tsx
// app/[slug]/page.tsx - you can fetch the post and generate metadata from the same data.
export const metadataBase = new URL("https://example.com");

export async function generateMetadata({ params }) {
  const post = await fetchPost(params.slug);

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/posts/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/posts/${params.slug}`,
      images: [post.ogImage || "/default-og.png"],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.ogImage || "/default-og.png"],
    },
  };
}

export default function PostPage() {
  return <article>...</article>;
}
```

Why this is good: The metadata matches the actual content, search engines see unique titles/descriptions, social previews are accurate, you avoid copy-pasting metadata manually for every post.

---

### 6. Open Graph and Twitter metadata:

These are the tags that make your link previews look good when shared on social platforms.

**Open Graph**: Open Graph controls what appears on platforms like Facebook, LinkedIn, and many messaging apps.

- You usually want: title, description, image, URL, type, Twitter

**Twitter metadata**: is similar, but has Twitter-specific fields.

- You usually want: card type, title, description, image

Example:

```js
export const metadata = {
  openGraph: {
    title: "Next.js SEO Guide",
    description: "A complete guide to SEO in Next.js.",
    url: "/blog/nextjs-seo",
    siteName: "My Blog",
    images: [
      {
        url: "/og/nextjs-seo.png",
        width: 1200,
        height: 630,
        alt: "Next.js SEO Guide",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js SEO Guide",
    description: "A complete guide to SEO in Next.js.",
    images: ["/og/nextjs-seo.png"],
  },
};
```

Good OG image rule: Use a wide 1200 × 630 image for most link previews. That is the common social-sharing shape.

---

### 7. Dynamic OG images:

Next.js also supports generating Open Graph images dynamically for a page or route.

- This is useful when:
- the title changes per post
- the author name changes
- you want a branded preview image
- you want each product or blog post to have a unique share image
- You can generate these with a route-based OG image file or with the image response utilities.

Why this matters: A static OG image is fine for a marketing page. A dynamic OG image is much better for blogs, docs, catalogs, and product pages.

---

### 8. Canonical URLs:

Canonical URLs are important when the same content can be reached through multiple URLs.

**Examples**: ref=twitter, locale versions, filtered search pages, trailing-slash variants, duplicate content from multiple routes, Canonical tags tell crawlers which URL is the preferred one.

```js
alternates: {
 canonical: "/posts/my-article",
}
```

If you skip canonicals on duplicate content, search engines may split ranking signals across multiple pages or choose the wrong page to index.

---

### 9. hreflang for internationalized pages:

- If you have multiple languages, hreflang becomes very important.
- It tells search engines which language or locale version should be shown to users in different regions.

```js
alternates: {
 canonical: "/en/posts/my-article",
 languages: {
   en: "/en/posts/my-article",
   fr: "/fr/posts/my-article",
   de: "/de/posts/my-article",
 },
}
```

- This is especially important if you already use Next.js i18n routing with `app/[lang]`.
- Without hreflang, search engines may show the wrong locale version or treat localized pages as duplicates.

---

### 10. Sitemap:

- A sitemap helps search engines discover your pages.

You can create a sitemap file convention in App Router and let Next.js generate it. This is useful for:

- blogs, docs, e-commerce catalogs, content-heavy sites, large apps with many routes
- A sitemap is not for users. It is a crawler roadmap.

Good sitemaps include:

- important public pages
- canonical URLs
- updated timestamps when available

You do not need to manually link every page in your navigation for crawlers. A sitemap gives them a more complete map.

---

### 11. robots.txt:

robots.txt tells crawlers what they are allowed to access.

This is useful to:

- allow public pages
- block private or duplicate areas
- prevent indexing of admin or internal pages
- point crawlers to your sitemap

A mistake here can be very costly. If robots.txt blocks the wrong paths, search engines may not index your site correctly.

Example idea:

```js
allow /
block /admin
block internal preview routes
point to /sitemap.xml
```

### 12. Favicon and app icons:

Next.js supports file-based metadata for:

- favicon
- Apple touch icon
- app icons
- Open Graph images

These are small, but they matter for polish and branding. The browser tab icon, bookmark icon, and home screen icon all affect how your site appears in the wild.

---

### 13. SEO best practices in Next.js:

Here is the practical checklist:

- Give every page a unique title.
- Give every important page a meaningful description.
- Use metadataBase for clean canonical resolution.
- Use generateMetadata for dynamic content.
- Add Open Graph and Twitter metadata.
- Add canonical URLs for duplicates.
- Add hreflang for locales.
- Generate a sitemap.
- Add robots.txt.
- Make sure metadata is rendered server-side.
- Use descriptive page headings that match metadata.

That last one matters a lot: your page title and your `<h1>` should agree. Search engines and users both benefit from consistency.

---

### 14. Common mistakes:

**Mistake 1**: Using the same title everywhere

- Bad: Home, Home, Home
- Better: `Home | Acme`, `Pricing | Acme`, `Docs | Acme`

**Mistake 2**: Forgetting canonical URLs

- If the same content can be reached in multiple ways, add a canonical URL.

**Mistake 3**: Forgetting locale alternates

- If your site is multilingual, add hreflang.

**Mistake 4**: Using only client-side rendering for metadata

- Metadata should be generated on the server so crawlers see it immediately.

**Mistake 5**: Sharing pages without OG tags

- If you do not provide OG/Twitter metadata, your links often look weak and unattractive in social previews.

---

### 15. How to think about SEO in Next.js:

A useful mental model is:

- metadata = how the page appears to crawlers and social platforms
- page content = how the page appears to humans
- canonical and hreflang = how search engines understand duplicates and locales
- sitemap and robots = how crawlers discover and filter your site

Next.js gives you the infrastructure to manage all of that in a structured way instead of manually editing <head> tags everywhere.

---

### The SEO topic in one sentence:

In Next.js, SEO is the practice of using the Metadata API, file-based metadata conventions, canonical and locale tags, sitemaps, robots rules, and dynamic social previews to make each route easy for search engines and social platforms to understand.

---
