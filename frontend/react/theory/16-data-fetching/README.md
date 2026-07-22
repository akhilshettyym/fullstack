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

## 16. <u> Side Effects & Data Fetching </u> -

### 182. Core Mechanics & `Tools## Side Effects` & `useEffect`:

In React, a side effect is any operation that affects something outside the scope of the component currently executing. Examples include modifying the DOM, setting up timers, or fetching data.

React components must remain `"pure"` during rendering, meaning the render phase should only calculate UI based on props and state. Side effects are deferred to the useEffect hook, which runs after the browser paints the screen.

#### Syntax and the Dependency Array:

```jsx
useEffect(() => {
  // 1. Setup code (the side effect)

  return () => {
    // 2. Cleanup code (runs before next execution or unmount)
  };
}, [dependencies]); // 3. Dependency array
```

- No Array: Runs after every single render. (Rarely desired).
- Empty Array []: Runs exactly once after the initial mounting render.
- With Dependencies [prop, state]: Runs on mount, and then re-runs only if the values inside the array change between renders.

#### The Cleanup Function:

To prevent memory leaks and unexpected behavior, you must clean up persistent side effects. React runs your cleanup function in two scenarios:

1.  Immediately before running the effect code again (on subsequent dependencies changes).
2.  When the component unmounts from the DOM.

```jsx
useEffect(() => {
  const handleResize = () => console.log(window.innerWidth);
  window.addEventListener("resize", handleResize);

  // Cleanup: removes listener when component leaves the screen
  return () => window.removeEventListener("resize", handleResize);
}, []);
```

---

### 183. Fetch API vs. Axios:

React does not have a built-in utility for HTTP requests; it relies on standard JavaScript tools.

#### Fetch API:

The fetch() method is built directly into modern web browsers, requiring no external packages. It returns a Promise that resolves to a Response object.

- Quirk: It does not automatically reject HTTP error statuses (like 404 Not Found or 500 Internal Server Error). It only rejects if a network error occurs. You must manually check response.ok.
- Data Parsing: Requires an explicit second promise step to extract payload data (e.g., response.json()).

#### Axios:

Axios is a popular third-party library optimized for API requests.

- Automatic JSON Transformation: Automatically parses incoming JSON data, making it instantly accessible via response.data.
- Automatic Error Throwing: Automatically throws an error for any HTTP status code outside the 2xx range, skipping manual status checks.
- Interceptors & Config Defaults: Allows you to intercept requests or responses globally (e.g., automatically attaching authorization headers to every outgoing request).

---

### 184. Async / Await:

While Promises can be chained using .then() and .catch(), async/await provides cleaner, sequential, synchronous-looking syntax for handling asynchronous operations.

Because React's useEffect callback function cannot be directly marked as an async function (as useEffect expects either nothing or a cleanup function back, whereas an async function implicitly returns a Promise), you must declare your async function inside the effect block and call it immediately.

```js
// Incorrect: useEffect(async () => { ... })

// Correct Pattern:
useEffect(() => {
  async function loadData() {
    try {
      const response = await fetch("https://example.com");
      if (!response.ok) throw new Error("Network issue");
      const data = await response.json();
      setItems(data);
    } catch (err) {
      setError(err.message);
    }
  }
  loadData();
}, []);
```

---

### 185. State & Lifecycle Management## Loading States, Error Handling, & Retry Logic:

A production-ready data fetching component typically cycles through specific phases, managed by state variables.

```js
function DataConsumer() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let active = true;
    setIsLoading(true);
    setError(null);

    async function fetchData() {
      try {
        const res = await fetch("https://example.com");
        if (!res.ok) throw new Error("Failed to retrieve profile data.");
        const result = await res.json();

        if (active) setData(result);
      } catch (err) {
        if (active) setError(err.message);
      } finally {
        if (active) setIsLoading(false);
      }
    }

    fetchData();
    return () => {
      active = false;
    };
  }, [retryCount]); // Triggering a retry re-runs this effect

  const handleRetry = () => setRetryCount((prev) => prev + 1);

  if (isLoading) return <p>Loading content...</p>;
  if (error)
    return (
      <p>
        Error: {error} <button onClick={handleRetry}>Retry</button>
      </p>
    );
  return <div>{/* Render data here */}</div>;
}
```

- `Loading State`: Prevents code crashes by ensuring the UI doesn't look for properties of null data while the network request is still pending.
- `Error Handling`: Safely catches failures via try/catch and displays a user-friendly message rather than crashing the application interface.
- `Retry Logic`: Uses a state counter (retryCount) inside the dependency array. Incrementing this counter forces the effect to tear down and restart the data fetching process.

---

### 186. AbortController (Race Conditions & Cleanup):

When a component fetches data and then unmounts or changes parameters before the network request finishes, the application may attempt to call state setters on a component that no longer exists, or display old, stale data that finished loading late. This is known as a race condition.

AbortController is a built-in browser API that lets you cancel an active network request during the useEffect cleanup phase.

```jsx
useEffect(() => {
  const controller = new AbortController();
  const { signal } = controller;

  async function fetchUser() {
    try {
      const res = await fetch(`https://example.com`, { signal });
      const data = await res.json();
      setUser(data);
    } catch (err) {
      if (err.name === "AbortError") {
        console.log("Fetch successfully aborted");
      } else {
        setError(err.message);
      }
    }
  }

  fetchUser();

  // Cancel the request if the user navigates away or parameters change mid-fetch
  return () => controller.abort();
}, []);
```

---

### 187. Data Flow Patterns## Polling:

Polling involves repeatedly hitting an API endpoint at fixed time intervals to keep client data synchronized with a fast-changing server (e.g., chat apps, stock prices, live sports tickers).

In React, polling is established using setInterval combined with useEffect. It is essential to clear the interval during the cleanup function to prevent memory leaks and stacked background intervals.

```jsx
useEffect(() => {
  async function checkStatus() {
    const res = await fetch("https://example.com");
    const data = await res.json();
    setStatus(data);
  }

  checkStatus(); // Run immediately on mount
  const intervalId = setInterval(checkStatus, 5000); // Poll every 5 seconds

  return () => clearInterval(intervalId); // Essential cleanup
}, []);
```

---

### 188. Pagination:

Pagination breaks massive database records down into manageable chunks called "pages" (e.g., 10 items per page). The React application maintains a page state counter, maps it to an API query string, and updates the view when the page index changes.

```jsx
function PaginatedList() {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://example.com{page}&limit=10`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [page]); // Re-runs fetch whenever the page state changes

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
        Prev
      </button>
      <span>Page {page}</span>
      <button onClick={() => setPage((p) => p + 1)}>Next</button>
    </div>
  );
}
```

---

### 189. Infinite Scrolling:

Infinite scrolling appends fresh content as the user scrolls toward the bottom of the page, eliminating explicit pagination buttons (common in social media feeds).

While you can listen to window scroll events, the modern, performant standard is using the Intersection Observer API. This API watches a hidden "anchor" DOM element placed at the bottom of your item list. When that element becomes visible in the viewport, it triggers a fetch for the next page.

```jsx
import { useEffect, useState, useRef } from "react";

function InfiniteFeed() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);

  useEffect(() => {
    // Append items instead of overwriting them
    fetch(`https://example.com{page}`)
      .then((res) => res.json())
      .then((newItems) => setItems((prev) => [...prev, ...newItems]));
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // If the loader div enters the screen, increment the page state
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1.0 },
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>{item.content}</div>
      ))}
      <div
        ref={loaderRef}
        style={{ height: "20px", background: "transparent" }}
      >
        Loading more items...
      </div>
    </div>
  );
}
```

---

### 190. Performance Optimization - Debouncing vs. Throttling:

Both techniques limit how many times a high-frequency action can fire, but they solve different architectural problems.

| Concept    | Behavior                                                                                                                               | Best Used For                                              |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Debouncing | Bundles a series of rapid events into a single execution, running it only after a specified delay period of complete silence.          | Search autocomplete inputs, auto-save forms.               |
| Throttling | Enforces a maximum frequency limit, ensuring an event handler runs at most once per specified time window, ignoring mid-interval spam. | Window resizing, infinite scroll triggers, mouse dragging. |

#### Debounce Implementation Example (Search input)

```js
function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Wait 500ms after the user stops typing before making the API request
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        fetch(`https://example.com{searchTerm}`);
      }
    }, 5000);

    // If the user types another letter before 500ms, clear the old timer and reset
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return <input type="text" onChange={(e) => setSearchTerm(e.target.value)} />;
}
```

---

### 191. Caching Strategies:

Caching prevents redundant network requests by storing previous server responses locally in memory, creating a snappier user experience and reducing server load.

In raw React, basic caching can be implemented by storing responses in a persistent JavaScript object outside the component or inside a React useRef reference container.

```js
// Simple in-memory global cache store
const apiCache = {};

function CachedProfile({ userId }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // If the data is already in cache, use it immediately and skip the network fetch
    if (apiCache[userId]) {
      setProfile(apiCache[userId]);
      return;
    }

    fetch(`https://example.com{userId}`)
      .then((res) => res.json())
      .then((data) => {
        apiCache[userId] = data; // Save response data to cache
        setProfile(data);
      });
  }, [userId]);

  return <div>{profile?.name}</div>;
}
```

#### Modern Production Standards:

While writing manual cache mechanisms within useEffect is a good learning exercise, production apps typically use specialized libraries like TanStack Query (React Query) or SWR. These tools replace boilerplate useEffect fetching code entirely and offer built-in support for caching, background revalidation, automatic retries, and window focus refetching out of the box.

---
