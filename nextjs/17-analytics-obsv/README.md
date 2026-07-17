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

**Analytics & Observability**: Next.js integrates with _Vercel Analytics out-of-the-box_ for _pageviews_. You can also add _Google Analytics_ or _Segment_ in a custom Script. For _server monitoring_, instrument with _OpenTelemetry_ or _Sentry_. The official Instrumentation guide shows how to register OpenTelemetry on server startup. Collect logs on Vercel or your host, and send error reports (Sentry) from server-side error handlers.

---

Next.js has a built-in path for product analytics and a separate path for server observability. For pageviews, _Vercel’s Web Analytics integrates_ cleanly with Next.js through the Analytics component from `@vercel/analytics/next`, which you add in your root layout.

Vercel’s docs say this wrapper has route support and that Web Analytics tracks page views, top pages, referrers, and visitor demographics, while using anonymized data and no cookies.

A simple setup looks like this:

```tsx
// app/layout.tsx
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

For Google Analytics or similar third-party tools, the official recommendation is to use `next/script` or the newer `@next/third-parties` helpers rather than dropping raw scripts into your pages. Next.js explicitly recommends `@next/third-parties/google` for Google Analytics and `Google Tag Manager`, and its `next/script` guide explains that scripts can be loaded in layouts with strategies like `afterInteractive` and `lazyOnload`.

Example with Google Analytics through the official helper:

```tsx
// app/layout.tsx
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XYZ" />
    </html>
  );
}
```

For server-side monitoring, Next.js provides the `instrumentation.ts|js` convention. The official docs say to place this file at the project root or inside `src/`, and export a `register()` function that runs once when a new Next.js server instance starts, before it handles requests. Next’s `OpenTelemetry` guide shows `@vercel/otel` as the easiest path, and it also says that OpenTelemetry works out of the box on Vercel and can be used with your own collector when self-hosting.

Example instrumentation setup:

```ts
// instrumentation.ts
import { registerOTel } from "@vercel/otel";

export function register() {
  registerOTel("next-app");
}
```

The same instrumentation system also supports `onRequestError`, which Next.js documents as a way to track server errors and send them to any observability provider. The hook receives the error, request, and context, and the context tells you whether the problem happened in the `App Router`, `Pages Router`, a `Server Component`, `Server Action`, `Route Handler`, or `Proxy`.

That is the right place to send errors to `Sentry` or another `backend error tracker`. Next.js’s own release notes say the `onRequestError` hook was designed in collaboration with Sentry specifically to capture rich server-side error context and report it to an observability provider.

A practical server error hook looks like this:

```ts
// instrumentation.ts
import type { Instrumentation } from "next";

export const onRequestError: Instrumentation.onRequestError = async ( err, request, context ) => {
  await fetch("https://errors.example.com/report", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: err instanceof Error ? err.message : String(err),
      request,
      context,
    }),
  });
};
```

So the clean split is: Vercel Analytics / custom third-party scripts for page analytics, and instrumentation + OpenTelemetry + error hooks for server observability.

---
