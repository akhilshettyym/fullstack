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

**Accessibility**: Follow standard web best practices (ARIA roles, semantic HTML). Next.js’s `<Image>`, `<Link>`, and forms have good defaults. Test with tools (axe, Lighthouse). There’s no Next-specific A11y API, but use linting (jsx-a11y) and manual checks.

---

Next.js’s accessibility guidance focuses on a few built-in strengths: client-side route announcements, ESL`int with `eslint-plugin-jsx-a11y`, and a strong preference for standard web accessibility practices. The docs also point you to WCAG, WebAIM, color contrast checking, and reduced-motion support.

---

### 1. Route changes are announced:

When navigation happens on the server, screen readers normally announce the page title. For client-side navigation with next/link, Next.js includes a route announcer by default so assistive technologies know the page changed. It first looks at **document.title**, then the first `<h1>`, then the pathname. The docs recommend giving each page a unique, descriptive title.

That means your route-level accessibility work should start with good metadata and headings:

```js
export const metadata = {
  title: "Pricing | Acme",
};

export default function PricingPage() {
  return <h1>Pricing</h1>;
}
```

A good title and a real `<h1>` help both screen readers and general page clarity.

---

### 2. next/image has accessibility-friendly defaults:

Next’s Image component uses the `alt prop` to describe the image for `screen readers` and `search engines`. The docs say alt should replace the image’s meaning, not duplicate nearby caption text. Next’s Image docs also highlight visual stability, responsive sizing, and lazy loading.

```tsx
import Image from "next/image";

export default function Avatar() {
  return (
    <Image
      src="/avatar.jpg"
      alt="Profile photo of Akhil"
      width={256}
      height={256}
    />
  );
}
```

That is the accessible default: always write meaningful alt text unless the image is purely decorative.

---

### 3. next/link and semantics:

The accessibility guide specifically calls out **next/link client-side transitions** and **route announcements**. Next’s routing and migration docs also show that Link renders an anchor under the hood in the modern App Router model, so you keep native link semantics rather than inventing clickable divs.

Use real links for navigation, not buttons pretending to be links. That preserves keyboard behavior, browser history, and screen-reader expectations.

---

### 4. Forms should stay semantic:

Next.js does not replace HTML form accessibility rules. The safest pattern is still standard semantic markup: use `<label>`, name, type, fieldset, and native submit buttons, then validate on the server. Next’s broader guide set emphasizes forms as a normal web primitive rather than a special accessibility API.

A solid pattern is:

```html
<form>
  <label htmlFor="email">Email</label>
  <input id="email" name="email" type="email" />
  <button type="submit">Sign in</button>
</form>
```

That gives you keyboard support, focus behavior, and screen-reader labels by default.

---

### 5. Linting catches a lot early:

Next.js includes **ESLint** support out of the box, and the accessibility guide says `eslint-plugin-jsx-a11y` is included by default to catch issues like invalid `ARIA props`, `unsupported roles`, missing required role props, and missing alt text patterns.

That means your workflow should include linting plus manual checks, not just automated tests. The docs also point you to WebAIM, WCAG 2.2, The A11y Project, contrast checking, and prefers-reduced-motion.

---

### 6. Good habits to keep:

For accessibility in Next.js, the practical rule is: use semantic HTML first, give every page a clear title and heading, write meaningful image alt text, keep links as real links, and let the linter catch the easy mistakes. Then verify contrast, keyboard navigation, and reduced-motion behavior manually.

---
