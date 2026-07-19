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

**Prefetching & Lazy Loading:** Prefetching is Next.js’s feature of loading page code/data in the background before navigation, making links feel instant. Lazy loading refers to deferring loading of components or libraries until needed, reducing initial bundle size.

---

Next.js automatically prefetches linked routes in production for instant navigation. The guides allow manual control (`router.prefetch`, disabling prefetch, hover-triggered prefetch) to balance performance vs. resource use. Lazy loading client components or libraries reduces initial bundle size.

---

**Why Important:** These techniques enhance performance. Links with `<Link>` auto-prefetch pages (in production) when they enter viewport. Lazy loading client components (with `dynamic()` or splitting) and images can significantly speed up initial loads. These weren’t in the user list but are part of performance tuning.

---

**Key Subtopics/Concerns:**

- **Automatic Prefetch:** By default, Next.js prefetches static routes when a `<Link>` is in view. It fetches the route’s RSC payload into cache (stale for 5min by default).
- **Manual Prefetch:** Use `import { useRouter } from 'next/navigation'; router.prefetch('/path')` to prefetch on events (hover, scroll).
- **Control/Disable:** `<Link prefetch={false}>` disables auto-prefetch. You can implement hover-only prefetch by toggling the `prefetch` prop.
- **Lazy Loading Components:** Use `React.lazy()` or `next/dynamic` to load heavy components only when rendered. Also “lazy” loading images with `<Image>` (loading="lazy" by default).
- **Lazy Loading Dependencies:** `dynamic(() => import('some-lib'), { ssr: false })` for client-side only libraries.
- **Pitfalls:** Over-prefetching can waste bandwidth (footers and rare links). Using many dynamic imports can complicate SSR or cause flicker if not handled.

**Example:**

```tsx
// Prefetch on hover example
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
function HoverLink({ href, children }) {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <div onMouseEnter={() => setActive(true)}>
      <Link href={href} prefetch={active ? null : false}>
        {children}
      </Link>
    </div>
  );
}
```

_This client component delays prefetch until hover. By default `<Link>` would prefetch on viewport enter._

---
