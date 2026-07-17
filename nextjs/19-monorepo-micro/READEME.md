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

**Monorepos & Micro-frontends**: Next.js works well in monorepos **(Turborepo or Nx)**. Vercel’s Turborepo docs show how to host multiple `apps/libraries` together. For micro-frontends, you can run multiple Next apps (each with its own basePath in next.config.js) behind a proxy or as isolated sub-apps. You can also use Next’s Parallel Routes and Intercepting Routes (filesystem conventions) to compartmentalise large apps.

---

A monorepo is a `single directory` that contains `multiple projects`, and Vercel’s monorepo docs say that this is a good way to organize related apps and packages together. `Turborepo` is `Vercel’s build system` for this setup, and its docs highlight fast `incremental builds`, `content-aware hashing`, and `Remote Caching`. Vercel also documents Nx support for monorepos.

A common monorepo structure looks like this:

```ts
apps/
web/
admin/
packages/
ui/
config/
```

In this setup, each app can be a separate Next.js project, while *shared UI*, *types*, *utilities*, or *config* live in *packages/*. Turborepo then avoids rebuilding everything every time by hashing only changed inputs and reusing cached outputs.

---

### Sub-path deployments with basePath:

If one Next.js app needs to live under a sub-path like `/docs`, Next.js provides basePath in `next.config.js`. The official docs say this lets you deploy a Next.js application under a sub-path of a domain.

```js
// next.config.js
module.exports = {
  basePath: "/docs",
};
```

That is useful for *multi-app deployments*, *documentation portals*, and *admin panels* that should not sit at the root of the domain.

---

### Micro-frontends:

For `micro-frontends`, Vercel defines them as smaller independently deployable units that render as one `cohesive application`. In practice, that can mean multiple Next apps, each responsible for a section of the product, with routing handled by the platform or by a proxy layer in front of them. The exact proxy setup is an architecture choice, but the core Next.js building block for sub-app isolation is still basePath.

---

### Parallel Routes:

Parallel Routes let you render multiple pages inside the same layout at the same time. Next.js describes them as useful for highly dynamic sections such as dashboards and feeds, and they are created with named` @folder` slots.

Example layout idea:

```ts
app/dashboard/
layout.tsx
@analytics/page.tsx
@team/page.tsx
```

This is a great fit when two panes should update independently but still belong to the same screen. Next.js’s docs specifically say these routes can be rendered simultaneously or conditionally within the same layout.

---

### Intercepting Routes:

Intercepting Routes are for advanced patterns like modals. Next.js says they let you load a route from another part of the app within the current layout while masking the browser URL, which is ideal when you want to preserve context. The docs also show that intercepting routes work well with Parallel Routes for shareable modal flows.

A modal-style structure often looks like:

```ts
app/feed/
page.tsx
@modal/
(..)photo/
page.tsx
```

The important detail is that the (..) matcher is based on route segments, not raw filesystem depth. That makes these routing patterns powerful for large apps where you want contextual overlays instead of full page transitions.

---
