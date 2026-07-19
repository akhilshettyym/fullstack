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

**Plugin Ecosystem**: Common extensions include `MDX integration` (using @next/mdx), `GraphQL/Apollo`, `headless CMS` (Strapi, Contentful) clients, `Redux Toolkit`, or `React Query`. Next.js has official support for many tools via examples (see Next.js Examples). For styling, consider `Chakra UI` or `Material-UI`; for forms, `react-hook-form` or `Formik`; for images beyond `<Image>`, `sharp` or `Squoosh` can be integrated. Always prefer well-maintained community plugins.

---

Next.js is intentionally flexible here. The docs say the framework supports _“popular community libraries,”_ and the community docs explicitly encourage examples that help developers integrate Next.js with other tools and services. In other words, Next.js does not force a single plugin stack; it expects you to compose the tools that fit your app.

---

### 1. MDX:

MDX is a first-class ecosystem piece in Next.js. The App Router requires mdx-components.tsx when using @next/mdx, and the MDX guide says Next.js can support both local and remote MDX content.

A typical setup looks like:

```js
// next.config.js
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});
```

```tsx
// mdx-components.tsx
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-3xl font-bold">{children}</h1>,
    ...components,
  };
}
```

That is the pattern the App Router expects: an MDX compiler plugin plus the required mdx-components file.

---

### 2. GraphQL / Apollo:

**Apollo Client** is the most common `GraphQL` client in the Next.js ecosystem. Apollo’s docs describe it as a GraphQL client with caching and fetching support, which is why it is commonly paired with Next.js when an app uses GraphQL APIs.

---

### 3. Headless CMS integrations:

Next.js works well with headless CMS tools because App Router pages and Server Components can fetch content directly on the server. Contentful’s docs describe it as a content platform for managing content centrally, and Next.js’s docs point to examples and templates for integrating content systems into Next apps. (Contentful)
Strapi and similar CMSs fit the same pattern: keep the content source external, fetch it in Server Components or Route Handlers, and let Next.js render the result. That makes the CMS part of your data layer, not your UI layer.

---

### 4. State tools:

Redux Toolkit is the official Redux toolset, and TanStack Query is designed around asynchronous/server state. In Next.js, those are common choices when the app needs shared client state or a cache for remote data. (Redux Toolkit)

---

### 5. Forms:

For forms, React Hook Form and Formik are both established options. React Hook Form emphasizes minimal re-renders and alignment with native form validation, while Formik is built around handling values, validation, and submission for more complex forms. (react-hook-form.com)

---

### 6. Styling libraries:

Chakra UI and Material UI both provide mature component systems that work with Next.js. Chakra’s docs explicitly mention Next.js RSC support, and MUI has a dedicated Next.js App Router integration guide. (chakra-ui.com)

---

### 7. Image tooling beyond `<Image>`:

Next.js’s built-in `<Image>` is still the default choice for runtime image optimization, but if you need preprocessing or custom pipelines, tools like sharp and Squoosh are commonly used in the ecosystem. Squoosh is an image compression tool from Google Chrome Labs that reduces image size locally in the browser, which makes it useful for optimization workflows outside the main app runtime.

---

### 8. The practical rule for plugins:

Use the official Next.js feature first, then add community tooling only when it genuinely fills a gap. The safest choice is a package that is actively maintained, documents App Router support, and does not fight Server Components or route-based rendering. That is usually better than a flashy plugin that has not kept up with the framework.

---
