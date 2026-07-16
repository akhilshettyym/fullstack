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

**Performance**: Next.js automates code-splitting and image/font optimization. Use `<Image>` (auto-optimized) and `<Font>` (built-in Google/font optimization) components. Profiling tools include React Profiler, Lighthouse, and the Next.js DevTools. Use caching headers on static assets, prefetch links (`<Link>` preloads pages), and leverage Vercel’s CDN. Avoid client bloat by preferring Server Components for heavy logic.

---

Next.js bakes a lot of performance work in by default, especially around code splitting, images, fonts, and third-party scripts. It also automatically does route-based code splitting, so users do not download every page’s JavaScript up front.

---

### 1. Image optimization:

The built-in image component is **next/image** — there is not a separate `<Font>-style` image tag. next/image extends the HTML `<img>` element and automatically handles sizing, modern formats, lazy loading, visual stability, and responsive delivery.

```jsx
import Image from "next/image";

export default function Hero() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero banner"
      width={1200}
      height={800}
      priority
    />
  );
}
```

That width/height pair matters because Next.js uses it to reserve space and prevent layout shift while the image loads. For remote images, you must configure allowed hosts with `images.remotePatterns;` otherwise Next.js will reject the URL.

A useful rule of thumb: use priority for the _above-the-fold_ hero image, and let the rest _lazy-load by default_. Next.js also supports static image imports, and those files get hashed and treated as immutable cacheable assets.

---

### 2. Font optimization:

The font system is `next/font`, not a `<Font>` component. Next.js says next/font automatically optimizes fonts, self-hosts them, removes external network requests, and helps avoid layout shift.

```jsx
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
 subsets: ["latin"],
 display: "swap",
});

const myFont = localFont({
 src: "./MyFont.woff2",
 display: "swap",
});

export default function Layout({ children }: { children: React.ReactNode }) {
 return (
   <html lang="en" className={inter.className}>
     <body className={myFont.className}>{children}</body>
   </html>
 );
}
```

For Google fonts, you normally specify subsets so Next.js can preload correctly, and for custom fonts the docs recommend next/font/local.

The big performance win is that the font files are downloaded at build time and served from your app instead of making the browser go back to Google on every visit.

---

### 3. Script optimization:

Use `next/script` for third-party scripts instead of dropping raw `<script>` tags into your app. Next.js can make sure each script loads only once, and you can control when it loads with strategy. The recommended strategies are `beforeInteractive`, `afterInteractive` (default), and `lazyOnload`; there is also an experimental worker strategy that is not supported in the App Router.

```jsx
import Script from "next/script";

export default function Page() {
  return (
    <>
      <Script
        src="https://example.com/analytics.js"
        strategy="afterInteractive"
      />
      <main>...</main>
    </>
  );
}
```

Use `beforeInteractive` only for scripts that truly must run before hydration, and keep most third-party scripts out of the critical path.

Next.js’s production checklist explicitly recommends the Script component because it defers scripts and prevents them from blocking the main thread.

---

### 4. Prefetching with `<Link>`:

Next.js prefetches routes linked with `<Link>` when they enter the viewport in production, which makes navigation feel much faster. For static routes, the full route is prefetched; for dynamic routes, prefetching may be skipped or partial depending on the route setup.

```jsx
import Link from "next/link";

export default function Nav() {
  return <Link href="/dashboard">Dashboard</Link>;
}
```

If you have a huge list of links and do not want that behavior, set prefetch={false} on selected links.

---

### 5. Caching headers for static assets:

Next.js automatically sets long-lived caching headers for truly immutable assets — specifically `Cache-Control: public`, `max-age=31536000`, `immutable` — and the `docs` say this cannot be overridden. These are the kinds of files that are safely content-hashed, such as static image imports.

By contrast, files in the `public/` folder are not safely assumed to be immutable, so Next.js applies `Cache-Control: public`, `max-age=0` there by default. That means `public/` is convenient, but not the same as a hashed build asset.

So the practical rule is:

- hashed build assets and static imports → long cache lifetime, immutable
- public/ assets → conservative caching by default
- dynamic responses → set caching intentionally at the route/server/CDN level

---

### 6. Profiling and measurement:

For component-level performance work, React’s Profiler and React Developer Tools help you inspect render costs and identify unnecessary updates. React also notes that `<Profiler>` can measure rendering performance programmatically, while the Profiler tab in React DevTools is the interactive tool.

For page-level audits, Next.js recommends Lighthouse in incognito mode and pairing it with field data such as Core Web Vitals. Next.js also provides `useReportWebVitals` so you can send real performance metrics into analytics.

Next.js 16.3 also adds a Navigation Inspector in Next.js DevTools, which lets you pause navigation at the loading shell and see what gets prefetched versus what resolves later. That is especially useful when you are tuning route-level performance and streaming behavior.

---

### 7. The big strategy: keep heavy logic on the server:

The fastest client bundle is the one you never ship. Next.js’s own docs emphasize that Server Components reduce client-side JavaScript, while Client Components should be used only when you need interactivity, browser APIs, or state.

That means:

- fetch data in Server Components
- use next/image for media
- use next/font for fonts
- use next/script for third-party scripts
- keep interactive UI in small Client Components only where needed

**A good mental model is**: server for heavy work, client for interaction. That is how Next.js keeps pages fast without forcing you to manually micromanage every optimization.

---
