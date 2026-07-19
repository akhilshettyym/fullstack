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

**State Management**: Next.js has no opinion here; you can use `React Context`, `Redux`, `Recoil`, `Zustand`, etc. Prefer `React Query` or `SWR` for server state. Keep long-lived UI state in Client Components or context. Be mindful that App Router remounts layouts on route change if not cached; use the new “Preserving UI state” (preserve scroll, animations) if needed.

---

State management in Next.js is mostly about choosing the right place for the state, not about obeying one framework-wide store. The current docs focus on preserving UI state across navigation, using shared layouts, and using Client Components where interactivity is needed, rather than prescribing a single app-state library.

---

### 1. The practical split:

Use local _UI state_ for things like _toggles, open/closed panels, form inputs, modals, and animation flags_. Keep that state in a Client Component or a nearby client-only context so the browser can manage it directly. React _Query/TanStack Query or SWR_ are a better fit for _server state_: remote data that must be cached, refetched, invalidated, or kept fresh.

TanStack Query describes itself as a “server-state manager,” and SWR describes itself as data fetching with built-in caching, revalidation, and request deduplication.

```tsx
"use client";

import { createContext, useContext, useState } from "react";

const SidebarContext = createContext<{
  open: boolean;
  toggle: () => void } | null>(null);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ open, toggle: () => setOpen((v) => !v) }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebar must be used inside SidebarProvider");
  return ctx;
}
```

That pattern is good for UI state because it stays close to the components that need it. For remote data, React Query or SWR handles caching and invalidation for you instead of making you manage that manually.

---

### 2. Server state vs client state:

A simple rule is:

- **Client state**: theme, drawer open/close, tab selection, draft text, animation state.
- **Server state**: users, posts, notifications, dashboard metrics, inventory, anything fetched from an API or database. TanStack Query’s docs explicitly describe server data as remote, shared, cached, refetched, and sometimes stale on purpose.

That is why libraries like React Query and SWR are so useful in Next.js apps: they give server data a cache, lifecycle, and revalidation model. SWR says it includes _caching_, _revalidation_, and _deduplication_ by default; TanStack Query describes invalidation, background refetching, and query caching as core behaviors. (SWR)

---

### 3. UI state preservation in the App Router:

Next.js now has a dedicated `_Preserving` UI state `guide_`. With `_Cache` Components `enabled_`, Next.js preserves routes using React’s Activity component in hidden mode instead of unmounting them, so component state and DOM state can survive navigation. The docs say this preserves things like form drafts, scroll positions, expanded `<details>` elements, and even video playback progress.

That is a big change from the older workaround-heavy approach. Before Cache Components, preserving page-level state across navigations usually
meant hoisting state into a shared layout or using an external store.

A tiny example of the kind of state this helps with:

```tsx
"use client";

import { useState } from "react";

export default function Filters() {
  const [open, setOpen] = useState(false);

  return (
    <button onClick={() => setOpen((v) => !v)}>
      {open ? "Hide filters" : "Show filters"}
    </button>
  );
}
```

With preserved UI state, that sort of local interaction can remain intact when you navigate away and back, as long as the route is being
preserved by the caching/navigation model.

---

### 4. Scroll and navigation behavior:

Next.js’s `<Link>` keeps scroll position by default in a way similar to browser back/forward behavior, and you can disable that with scroll={false} when needed. The docs also note that navigation uses client-side transitions and built-in prefetching to keep route changes fast.

If you need more fine-grained feedback during navigation, Next.js also exposes `useLinkStatus` for `pending-link UI`, though the docs recommend route-level loading UI first and prefetching for instant transitions.

A clean Next.js setup usually looks like this (The best default setup):

- keep UI state in Client Components or a small client-only context.
- use TanStack Query or SWR for server state and cache invalidation.
- rely on shared layouts and Cache Components when you want route changes to preserve state and DOM.
- use Link defaults for normal navigation and override scroll only when you need custom behavior.

---
