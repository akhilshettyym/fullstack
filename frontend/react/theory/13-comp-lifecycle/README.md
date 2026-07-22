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

## 13. <u> Component Lifecycle (Conceptual) </u> -

- The React component lifecycle refers to the series of phases a component goes through from its creation to its removal from the DOM. Understanding the lifecycle is crucial for managing side effects, optimizing performance, and ensuring proper cleanup. React components have three main phases: **Mounting**, **Updating**, and **Unmounting**.
- In class components (legacy), these phases are managed via specific lifecycle methods. In functional components (modern standard), Hooks like `useEffect` and `useLayoutEffect` replicate and simplify this behavior.

---

### 145. Mounting Phase :

- The mounting phase occurs when a component is being created and inserted into the DOM for the first time. This is the initial render cycle.
- Key steps :

1. **Constructor/Initialization** : State and props are set up.
2. **Render** : The component's JSX is evaluated to create the initial DOM structure.
3. **DOM Insertion** : The rendered output is added to the DOM.
4. **Post-Mount Effects** : Side effects (e.g., data fetching, subscriptions) are run after the DOM is updated.

In class components :

- Methods called : `constructor()`, `getDerivedStateFromProps()`, `render()`, `componentDidMount()`

In functional components :

- The component function runs (initial state via `useState`).
- Effects with empty deps (`useEffect(() => {}, [])`) run after mount.

Example (functional) :

```jsx
function MyComponent() {
  useEffect(() => {
    console.log("Component mounted");
    // Fetch data or set up listeners here
  }, []); // Empty array → runs once after mount

  return <div>Hello</div>;
}
```

- This phase is ideal for initial setup, like API calls or event listeners.

---

### 146. Updating Phase :

- The updating phase happens whenever a component's state or props change, causing a re-render. React efficiently diffs the changes and updates only what's necessary.

Key steps :

1. **Receive New Props/State** : Detect changes.
2. **Pre-Update Logic** : Decide if update is needed or derive new state.
3. **Render** : Re-evaluate JSX with new data.
4. **DOM Update** : Apply changes to the DOM.
5. **Post-Update Effects** : Run side effects after update.

Triggers :

- `setState` / `useState` setter
- Prop changes from parent
- Force update (rare)

In class components :

- Methods : `getDerivedStateFromProps()`, `shouldComponentUpdate()`, `render()`, `getSnapshotBeforeUpdate()`, `componentDidUpdate()`

In functional components :

- Component re-runs with new state/props.
- `useEffect` with deps runs if deps changed.

Example :

```jsx
function Counter({ initial }) {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    console.log("Count updated to", count);
    // Side effects based on count
  }, [count]); // Runs after update when count changes

  return <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
}
```

- Optimize with `shouldComponentUpdate` (class) or `React.memo` (functional) to skip unnecessary updates.

---

### 147. Unmounting Phase :

- The unmounting phase occurs when a component is removed from the DOM (e.g., conditional rendering hides it, or parent unmounts).

Key steps :

1. **Pre-Unmount Cleanup** : Remove listeners, cancel requests, clear timers.
2. **Removal** : Component is destroyed, state is lost.

In class components :

- Method: `componentWillUnmount()`

In functional components :

- Cleanup function returned from `useEffect`.

Example :

```jsx
function Timer() {
  useEffect(() => {
    const id = setInterval(() => console.log("Tick"), 1000);
    console.log("Mounted");

    return () => {
      clearInterval(id);
      console.log("Unmounted and cleaned up");
    };
  }, []); // Cleanup runs on unmount

  return <div>Timer running</div>;
}
```

- Always clean up to prevent memory leaks, especially in SPAs where components mount/unmount frequently.

---

### 148. Lifecycle Methods (Class) :

- Class components (legacy, pre-Hooks) use explicit methods for each lifecycle phase. These are called automatically by React.

Full list :

1. **Mounting** :
   - `constructor(props)`v: Initialize state/props bindings.
   - `static getDerivedStateFromProps(props, state)` : Derive state from props (rare).
   - `render()` : Return JSX (pure, no side effects).
   - `componentDidMount()` : DOM is ready; fetch data, add listeners.

2. **Updating** :
   - `static getDerivedStateFromProps(props, state)` : Update state based on prop changes.
   - `shouldComponentUpdate(nextProps, nextState)` : Return false to skip update (optimization).
   - `render()` : Re-render JSX.
   - `getSnapshotBeforeUpdate(prevProps, prevState)` : Capture DOM info before update (e.g., scroll position).
   - `componentDidUpdate(prevProps, prevState, snapshot)` : Post-update; compare prev/current, run effects.

3. **Unmounting**:
   - `componentWillUnmount()`: Cleanup.

4. **Error Handling**:
   - `static getDerivedStateFromError(error)`
   - `componentDidCatch(error, info)`

Example class :

```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.format !== this.props.format) {
      console.log("Format changed");
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    return <div>{this.state.time.toLocaleTimeString()}</div>;
  }
}
```

- Avoid new code with classes; use Hooks instead.

---

### 149. Mapping Lifecycle to Hooks :

- Hooks replace class lifecycles with a more flexible, composable system.

Mapping :

- **constructor** : Initial `useState` calls.
- **componentDidMount** : `useEffect(() => {}, [])`
- **componentDidUpdate** : `useEffect(() => {}, [deps])` (runs after updates when deps change)
- **componentWillUnmount** : Cleanup return from `useEffect`
- **shouldComponentUpdate** : `React.memo` or `useMemo` for children
- **getDerivedStateFromProps** : Compute derived values in render or `useMemo`
- **getSnapshotBeforeUpdate** : `useLayoutEffect` (sync before paint)

Example Hook equivalent of class Clock :

```jsx
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []); // Mount/unmount

  return <div>{time.toLocaleTimeString()}</div>;
}
```

- Hooks are more powerful: Multiple effects, custom Hooks for shared logic.

---

### 150. Side Effects Handling :

- Side effects are operations with external impact (non-pure): API calls, DOM mutations, logging, subscriptions.

In React :

- Handle in `useEffect` / `useLayoutEffect` (functional) or lifecycle methods (class).
- Keep render pure: No side effects in render body.

Best practices :

- Fetch data in effects with deps (e.g., [userId])
- Use async/await or promises inside effects
- Avoid infinite loops: Include all used values in deps
- For server components (React 18+), use Suspense for data fetching

Example : Debounced search

```jsx
useEffect(() => {
  const timeout = setTimeout(() => {
    fetch(`/api/search?q=${query}`);
  }, 300);
  return () => clearTimeout(timeout);
}, [query]);
```

---

### 151. Cleanup Logic :

- Cleanup prevents resource leaks (e.g., open sockets, intervals, event listeners).

In `useEffect` :

- Return a function from the callback.
- Runs before next effect or on unmount.

In classes : `componentWillUnmount` / `componentDidUpdate` (manual).

Common cleanups :

- `clearInterval` / `clearTimeout`
- Remove event listeners: `window.removeEventListener`
- Cancel fetches: `AbortController`
- Close WebSockets/subscriptions

Example with AbortController :

```jsx
useEffect(() => {
  const controller = new AbortController();
  fetch("/api/data", { signal: controller.signal })
    .then((res) => res.json())
    .then(setData)
    .catch((err) => {
      if (err.name !== "AbortError") console.error(err);
    });

  return () => controller.abort();
}, []);
```

- Always implement cleanup for effects that create ongoing resources.

---
