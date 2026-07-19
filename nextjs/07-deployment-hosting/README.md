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

Deployment & Hosting: Next.js is optimized for Vercel (automatic static export, Edge functions, global CDN). Other providers (Netlify, Cloudflare Pages, AWS Amplify, etc.) support Next.js with varying levels of SSR/Edge support. Next.js 16 adds a Build Adapter API (alpha) to target custom hosts (similar to Next’s plugin system).

---

Next.js can be deployed as a `Node.js server`, a `Docker container`, a `static export`, or through `platform adapters` that target different hosting environments.

The official deploy guide says a single next start process handles the full feature set correctly, including Server Components, ISR, PPR (partial pre-rendering), Cache Components, Server Actions, Proxy, and after(), while static export is a limited mode and adapters vary by platform.

Vercel is the native Next.js platform:

- It is made by the creators of Next.js, is designed to build/scale/secure Next.js apps, and provides a global automated CDN plus preview deployments for each successful build. Vercel’s Next.js framework page also highlights zero-configuration deploys, ISR, SSR, and SSG support on its infrastructure. (Vercel)

For non-Vercel hosts, the key question is not “`does it host Next.js?`” but “`which Next.js features does it support well?`” The Next.js platform guide frames this as

functional fidelity vs. performance fidelity:

- A platform is fully supported if its adapter passes the Next.js compatibility test suite, and performance features like shared cache or edge stitching improve results but are not required for correctness.

Edge support is also host-dependent. Next.js says the Node.js Runtime is the default, while the Edge Runtime has a smaller API surface, does not support ISR, and streaming support depends on the deployment adapter. That means some hosts can run edge-oriented workloads well, while others are better suited to standard Node deployments.

Next.js 16 adds the Build Adapters API (alpha), which lets deployment platforms and custom integrations hook into the build process and modify configuration or build output. The public config uses **experimental.adapterPath**, so custom hosts can plug into Next.js without private framework hooks.

```js
// next.config.js
const nextConfig = {
  experimental: {
    adapterPath: require.resolve("./my-adapter.js"),
  },
};

module.exports = nextConfig;
```

The practical takeaway is simple: Vercel is the smoothest path, Node/Docker/static export are the general self-hosting paths, and adapters are the modern way to make Next.js work on custom platforms with predictable feature support.

---
