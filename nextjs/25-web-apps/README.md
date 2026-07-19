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

**Progressive Web Apps (PWAs):** PWAs are web apps that use modern web features (service workers, manifest) to behave like native apps (offline, installable). Next.js supports creating PWAs via a `web manifest` and service worker setup in App Router.

Next.js supports building PWAs via a web app manifest (`app/manifest.json|ts`) and service workers. PWAs enable “install to home screen,” offline caching, and push notifications, giving web apps native-like capabilities.

**Why Important:** PWAs enhance user experience on mobile (home-screen app, offline content) and are a strategic niche for many products. Though optional, they are official guides, so for completeness and advanced knowledge.

**Key Subtopics/Concerns:**

- **Web App Manifest:** Create `app/manifest.json` or `manifest.ts` returning `MetadataRoute.Manifest`. This defines name, icons, start_url, display mode, etc.
- **Icons:** Provide a set of app icons in `/public` matching manifest entries.
- **Service Worker:** Next.js doesn’t auto-generate SW; you typically add a `sw.js` in `public/` or use a plugin (like `next-pwa`) for caching assets.
- **Web Push Notifications:** The guide shows adding PushSubscription and sending push messages via actions.
- **Updates:** PWAs allow instant updates without app store. Use service worker caching strategies for assets and API data.
- **Pitfalls:** Offline support can be complex; PWA features like push require HTTPS and manifest validity.

**Example:**

```ts
// app/manifest.ts
import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "My Next PWA",
    short_name: "MyApp",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      { src: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
```

_This manifest (from Next.js guide) allows the app to be installable on devices. You would also add a service worker script (e.g. `public/sw.js`) to handle offline caching._

---
