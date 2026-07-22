| [React Fundamentals](../01-fundamentals/README.md)
| [Environment & Tooling Basics](../02-env-tooling/README.md)
| [JSX](../03-jsx/README.md)
| [Components](../04-components/README.md)
| [Props](../05-props/README.md)
| [State](../06-state//README.md)
| [Event Handling](../07-event-handling/README.md)
| [Conditional Rendering](../08-conditionals/README.md)
| [Lists & Keys](../09-lists-keys/README.md)
| [Styling in React](../10-styling/README.md)
| [Forms](../11-forms/README.md)
| [Hooks](../12-hooks/README.md)
| [Component Lifecycle (Conceptual)](../13-comp-lifecycle/README.md)
| [Context APIs](../14-context-api/README.md)
| [State Management (Advanced)](../15-state-mgt/README.md)
| [Side Effects & Data Fetching](../16-data-fetching/README.md)
| [Server State Management](../17-server-state-mgt/README.md)
| [Routing](../18-routing/README.md)
| [Code Splitting & Lazy Loading](../19-code-splitting/README.md)
| [Performance Optimization](../20-perf-opt/README.md)
| [Refs & DOM Manipulation](../21-refs-dom/README.md)
| [Error Handling](../22-error-handling/README.md)
| [Accessibility (a11y)](../23-accessibility/README.md)
| [Testing](../24-testing/README.md)
| [Typescript](../25-typescript/README.md)
| [Build & Deployment](../26-deployment/README.md)
| [Security](../27-security/README.md)
| [Authentication & Authorization](../28-auth/README.md)
| [Internationalization (i18n) ](../29-i18n/README.md)
| [Animations](../30-animations/README.md)
| [Advanced Patterns](../31-advanced-patterns/README.md)
| [Concurrent React](../32-concurrent-react/README.md)
| [Server-Side Rendering (SSR)](../33-server-side-ssr/README.md)
| [Static Site Regeneration (SSG)](../34-static-site-gen/README.md)
| [React Server Components (RSC)](../35-react-server-comp/README.md)
| [Monorepos and Architecture](../36-monorepos-archs/README.md)
| [Devtools and Debugging](../37-devtools/README.md)
| [Versioning and Maintenance](../38-versioning/README.md)
| [Ecosystem and Integration](../39-ecosystem/README.md)
| [Best Practices & Anti-Patterns](../40-best-practices/README.md)

---

## 32. <u> Concurrent React </u> -

Concurrent React marks a fundamental shift in how React manages component execution. Prior to React 18, rendering was a single, uninterrupted, synchronous transaction—once React started rendering an update, nothing could stop it until it finished, which could cause the browser to freeze during heavy computations.

Concurrent rendering makes rendering interruptible. React can pause an ongoing update to handle a high-priority user interaction (like typing or clicking) and then resume, discard, or split the background render.

---

### 295. Concurrent Rendering Concepts:

To understand Concurrent React, consider this analogy:

- Synchronous Rendering (Old): A chef must finish cooking one entire dish before starting the next. If a customer changes their order halfway through, they must wait for the current dish to finish completely anyway.
- Concurrent Rendering (New): A chef can pause preparation on a complex, slow-cooked meal if an urgent order comes in, prepare the quick dish immediately, and then resume the slow-cooked meal without wasting ingredients.

React achieves this by switching from a single stack-based execution to an internal priority-based queue. It splits rendering work into microscopic chunks and checks the browser's main thread between chunks to see if a user interaction is waiting to be processed.

---

### 296. Automatic Batching:

Batching is when React groups multiple state updates into a single re-render to maximize performance.

- Before React 18: React only batched updates inside native React event handlers (like a standard onClick). Updates inside promises, setTimeout functions, or native async/await fetch blocks did not batch, forcing multiple separate re-renders.
- React 18 and Later: Automatic Batching groups all state updates together regardless of where they originate.

```jsx
// React 18 behavior across promises, timeouts, and callbacks:
function handleButtonClick() {
  fetch("/api/user").then(() => {
    // Both updates are batched into exactly ONE single re-render
    setCount((c) => c + 1);
    setUserLoading(false);
  });
}
```

#### Opting Out of Batching:

If your code depends on reading an updated DOM state immediately after a state change, wrap that specific update in flushSync.

```jsx
import { flushSync } from "react-dom";

function absoluteUpdate() {
  flushSync(() => {
    setCount((c) => c + 1); // React renders this update immediately
  });
  // DOM is updated by this line
}
```

---

### 297. Transitions (useTransition):

Transitions allow developers to classify state updates into two categories based on human-centric performance requirements:

1.  Urgent Updates: Direct physical interactions (typing in an input field, moving a slider, clicking a dropdown checkbox). They must reflect immediately to avoid interface lag.
2.  Transition Updates: UI transitions (filtering a massive data list, loading a slow search results page). Users expect these to take a moment.

The useTransition hook allows you to wrap slow state updates inside a startTransition wrapper. This marks the update as low-priority, meaning it will step aside if the user starts typing or interacting elsewhere.

```jsx
import { useState, useTransition } from "react";

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // isPending is true while the background transition render is running
  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    // 1. Urgent: Instantly updates the text input box
    setSearchTerm(e.target.value);

    // 2. Non-urgent: If the user types a new letter, React drops this execution chunk to restart with the new query
    startTransition(() => {
      const filteredItems = heavyComputeSearchFilter(e.target.value);
      setSearchResults(filteredItems);
    });
  }

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleChange} />
      {isPending && <p>Updating results list...</p>}
      <ResultsList items={searchResults} />
    </div>
  );
}
```

---

### 298. useDeferredValue:

While useTransition gives you a function wrapper to control your own internal state setters, useDeferredValue accepts an external piece of data (like a value passed down via props) and creates a low-priority duplicate copy that lags behind the fast-changing original value.

This is highly effective when a parent component updates rapidly but a child component takes a long time to compute its UI layout from those props.

```jsx
import { useDeferredValue } from "react";
function ProductDashboard({ query }) {
  // deferredQuery will match 'query' when the system is resting,
  // but will lag behind when 'query' updates rapidly
  const deferredQuery = useDeferredValue(query);

  return (
    <div style={{ opacity: query !== deferredQuery ? 0.5 : 1 }}>
      {/* HeavyList only re-calculates when deferredQuery updates */}
      <HeavyList search={deferredQuery} />
    </div>
  );
}
```

---

### 299. Suspense for Data Fetching:

Historically, loading states were managed manually by toggling state properties like isLoading inside components. Suspense allows components to declaratively signal to React that they are not ready to render yet because they are waiting for asynchronous data.

When a component is waiting, React pauses rendering that subtree and mounts a fallback layout container.

```jsx
import React, { Suspense } from "react";
// This data resource must be configured with a query client that integrates with Suspense (e.g., TanStack Query, Relay, or Next.js)
const UserProfile = React.lazy(() => import("./UserProfile"));

function App() {
  return (
    <div className="layout">
      <h1>Dashboard</h1>

      {/* React renders SkeletonLoader until UserProfile finishes downloading and fetching its data */}
      <Suspense fallback={<SkeletonLoader />}>
        <UserProfile />
      </Suspense>
    </div>
  );
}
```

---

### 300. Streaming UI & Server-Side Rendering (SSR):

Traditional Server-Side Rendering required an all-or-nothing approach:

1.  The server had to fetch all data for a page.
2.  The server compiled the HTML file completely and sent it to the browser.
3.  The browser displayed the static shell, downloaded JavaScript, and hydrated the entire page to make it interactive.

If a single component (like a slow analytics widget) took 3 seconds to fetch data, the entire page loading sequence stayed completely blocked.
Streaming UI works hand-in-hand with Suspense on modern full-stack architectures (like Next.js App Router). The server streams the layout HTML immediately. As soon as the slow database component finishes executing on the backend, React streams that specific raw HTML chunk down the same open HTTP network pipe and plugs it straight into the live page layout.

---

### 301. Key React 18+ Architectural Features:

Beyond the hooks, Concurrent React brought critical under-the-hood engine revisions:

- createRoot API: The entry point shifted from ReactDOM.render to ReactDOM.createRoot. This explicitly tells React to activate concurrent architecture tracking algorithms across your entire application bundle.
- Strict Mode Enhancements: In development, React deliberately double-mounts every component (Mount -> Unmount -> Mount). This exposes bugs where cleanup functions are missing in useEffect setups, ensuring components can survive being discarded and re-mounted by concurrent background workflows.
- New Hooks Ecosystem: Introduced dedicated primitives for library authors to sync concurrent actions, including useId for accessible server-client matching keys, useSyncExternalStore for external state engines, and useInsertionEffect for CSS-in-JS style injection.

---
