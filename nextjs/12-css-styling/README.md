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

**CSS & Styling**: Next supports CSS Modules (co-located .module.css files scope styles locally), Tailwind CSS (first-class, via tailwindcss plugin), global CSS imports in the root layout, Sass, and any CSS-in-JS (e.g. styled-jsx, styled-components). The docs recommend Tailwind for most styles and CSS Modules for component scope. Global CSS should be minimal (e.g. resets).

---

Next.js gives you several styling paths, but the usual recommendation is simple: use Tailwind for most layout and visual styling, use CSS Modules for component-scoped custom CSS, and keep global CSS minimal. The App Router CSS guide also says global styles can be imported in layouts, pages, or components, but warns that global styles can create conflicts, so they should be reserved for truly global rules like resets or base styles.

---

### 1. CSS Modules:

CSS Modules are the cleanest way to write `component-scoped` CSS in Next.js. The docs say `.module.css` files are locally scoped by generating unique class names, so you can reuse class names like `.container` or `.button` in different files without collisions.

Example:

```css
/* app/components/button.module.css */
.button {
  padding: 12px 16px;
  border-radius: 9999px;
  background: black;
  color: white;
}

.primary {
  background: royalblue;
}
```

```tsx
// app/components/Button.tsx
import styles from "./button.module.css";

type Props = {
  primary?: boolean;
  children: React.ReactNode;
};

export default function Button({ primary, children }: Props) {
  return (
    <button className={`${styles.button} ${primary ? styles.primary : ""}`}>
      {children}
    </button>
  );
}
```

This is a great default when you want custom styling without making the whole app depend on utility classes.

---

### 2. Tailwind CSS:

Tailwind is first-class in Next.js. The App Router CSS guide lists Tailwind CSS as one of the main supported styling methods, and the current setup uses the `@tailwindcss/postcss` plugin plus a global stylesheet that imports Tailwind. The install guide also says the default `create-next-app` setup can enable Tailwind for you.

Example setup:

```css
/* app/globals.css */
@import "tailwindcss";
```

```tsx
// app/layout.tsx
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
   <html lang="en">
     <body>{children}</body>
   </html>
 );
}
```

And then use utilities directly in JSX:

```jsx
export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight">
        Build fast with Next.js
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Tailwind keeps styling close to the component.
      </p>
    </section>
  );
}
```

Next’s styling docs explicitly recommend using Tailwind for component styling and reserving global CSS for base styles.

---

### 3. Global CSS:

Global CSS is for styles that should apply across the whole app, such as `resets`, `typography defaults`, or `app-wide tokens`. In the App Router, you can *import global CSS in your root layout*, and Next.js also notes that global styles can technically be imported into other layouts, pages, or components inside app, though that can create stylesheet conflicts as routes change.

Example:

```css
/* app/globals.css */
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
}
```

```tsx
// app/layout.tsx
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

A good rule is: **global CSS should stay small**. Put broad resets and shared base styles there, and keep everything else in Tailwind or CSS Modules.

---

### 4. SASS (Syntactically Awesome Style Sheets):

Next.js has built-in Sass support once you install the package. The docs say you can use both `.scss` and `.sass`, and you can also combine Sass with CSS Modules using .module.scss or .module.sass.

Example:

```ts
npm install -D sass
```

```css
/* app/components/card.module.scss */
.card {
 padding: 1rem;
 border-radius: 1rem;
 background: #111;
 color: white;
}
```

```jsx
import styles from "./card.module.scss";

export default function Card() {
  return <div className={styles.card}>Hello</div>;
}
```

That gives you Sass features like variables, nesting, and mixins while still keeping styles scoped.

---

### 5. CSS-in-JS:

Next.js supports **CSS-in-JS**, but the App Router setup is not *“drop in a library and forget it.”* The CSS-in-JS guide says App Router CSS-in-JS is a three-step opt-in process: you need a style `registry`, `useServerInsertedHTML`, and a `Client Component wrapper` that provides the registry during server rendering.

Example shape:

```tsx
// app/registry.tsx
"use client";

import { useState } from "react";

export default function Registry({ children }: { children: React.ReactNode }) {
  const [ready] = useState(true);
  return <>{ready ? children : null}</>;
}
```

The exact registry depends on the CSS-in-JS library you use, but the key point is that App Router needs a server-aware integration so styles are collected before they are rendered. The Next.js docs explicitly call out `useServerInsertedHTML` for that purpose.

For libraries like styled-components, the library itself supports writing actual CSS in JavaScript, and Next.js’s guidance is to use the framework-specific App Router setup rather than the old Pages Router pattern. (styled-components)

---

### 6. What to use when:

A practical way to choose is:

- Tailwind for most UI work and fast iteration. Next.js’s docs and starter setup strongly support this direction.
- CSS Modules when you want custom, isolated component styles.
- Global CSS only for base styles and resets.
- Sass when you want preprocessor features with scoped styles.
- CSS-in-JS when your design system or component library already depends on it, knowing the App Router setup is more involved.

---

### 7. A simple Next.js styling rulebook:

If you are starting a new app, a very sane default is: Tailwind for most of the app, CSS Modules for isolated exceptions, and one tiny global stylesheet for resets and base tokens. That lines up with Next.js’s current recommendations and keeps your styling predictable as the app grows.

---
