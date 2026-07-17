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

**Migration Strategies**: For legacy Next.js apps, _upgrade incrementally_. Start by enabling the App Router alongside Pages Router, then migrate pages to app/. Use **codemods** (supplied by Next 16) to update imports/config. When upgrading major versions (14→15→16), follow the “Upgrading” guides.

---

For legacy Next.js apps, not `“rewrite everything at once.”` Next.js’s App Router migration guide says the pages and app directories co-exist, and that you can move your application gradually from pages to app.

A sensible migration order is:

- Keep the existing pages/ app running.
- Add app/ for one new route or feature.
- Move shared layout logic into App Router layouts.
- Migrate page by page.
- Remove old pages/ routes only when the App Router versions are stable.

That incremental approach matters because the App Router introduces new conventions such as _Server Components, nested layouts, loading states, and route-based data fetching_. The migration guide explicitly points to step-by-step migration from pages to app rather than a hard switch.

For major upgrades, use the _official upgrade codemods_. Next.js 15’s upgrade guide says you can run `pnpm dlx @next/codemod@canary upgrade latest` to update from 14 to 15, and the guide also mentions manually updating `next`, `react`, `react-dom`, and `eslint-config-next`.

Next.js 16 continues that pattern. The 16 upgrade guide says the upgrade codemod can update `next.config.js` to the new Turbopack config, migrate next lint to the ESLint CLI, convert the old middleware convention to proxy, and remove some deprecated unstable\_ and experimental config usage. It also points to Next.js _DevTools MCP_ for automating upgrade and migration tasks with an AI coding assistant.

That means a practical upgrade path looks like this:

```js
14 → 15
 use upgrade codemod
 update React / Next / ESLint packages

15 → 16
 use upgrade codemod again
 review proxy/middleware changes
 review Turbopack and removed experimental flags
```

Example command from the official guide:

```js
pnpm dlx @next/codemod@canary upgrade latest
```

The important thing is to upgrade in layers and re-test after each step, rather than jumping multiple major versions blindly. The official upgrade guides are written specifically to keep those changes manageable.

---
