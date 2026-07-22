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

## 12. <u> React Hooks (Core) </u> -

- React Hooks, introduced in React 16.8 (2019), allow functional components to use state, lifecycle features, and other React capabilities without classes. Hooks are functions that "hook into" React's state and lifecycle from function components. They promote cleaner, more reusable code and have become the standard way to write React in 2026.

---

### 128. Hooks Rules :

- Hooks follow strict rules to ensure they work correctly with React's rendering and reconciliation :

1. **Only Call Hooks at the Top Level** :
   Do not call Hooks inside loops, conditions, or nested functions. Always call them at the top of your component function. This ensures Hooks are called in the same order on every render, allowing React to track state correctly.

   ```jsx
   // Correct
   function MyComponent() {
     const [count, setCount] = useState(0);
     useEffect(() => {
       /* ... */
     });
     return <div>{count}</div>;
   }

   // Incorrect (conditional Hook call)
   function Bad() {
     if (condition) {
       useEffect(() => {
         /* ... */
       }); // React will throw error
     }
   }
   ```

2. **Only Call Hooks from React Function Components or Custom Hooks**  
   Not from regular JavaScript functions, class components, or outside components.
3. **Custom Hooks Must Start with "use"**  
   This convention helps identify them and enables linting rules (e.g., `eslint-plugin-react-hooks`).
4. **Hooks Are Not Compatible with Class Components**  
   But you can mix functional and class components in the same app.

- React's `eslint-plugin-react-hooks` plugin enforces these rules. Always enable it in your project.

---

### 129. useState :

- `useState` adds local state to functional components.
- Syntax : `const [state, setState] = useState(initialValue);`

- `state`: Current value
- `setState`: Updater function (accepts new value or function)
- `initialValue`: Can be primitive, object, array, or lazy function
- Details : See section 6 for in-depth coverage (initial state, updates, immutability, etc.).
- Example with lazy init :

```jsx
const [user, setUser] = useState(() => loadUserFromLocalStorage());
```

- If we try to update an object passed on to the initial state of the useState then we have to update the object by spreading the prevState and then update so that we don't lose the prev state.
- Or create multiple useStates.

---

### 130. useEffect :

- `useEffect` runs side effects (e.g., data fetching, subscriptions, DOM manipulations) after render.
- Syntax : `useEffect(callback, dependencies);`
- `callback` : Function with effect code. Can return a cleanup function.
- `dependencies` : Array of values. Effect runs if any change (or empty [] for mount only).

How it works :

1. Component renders
2. DOM updates
3. `useEffect` callback runs (if deps changed or first render)

Example : Fetch data

```jsx
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch("/api/data");
    const data = await response.json();
    setData(data);
  };
  fetchData();
}, []); // Empty deps → runs once after mount
```

```jsx
useEffect(() => {
  console.log("Resource Changed");

  return () => {
    console.log("Return from resource change");
  };
}, [resourceType]);
```

Common uses :

- API calls
- Event listeners (add in callback, remove in cleanup)
- Timers/intervals

---

### 131. Effect Dependencies :

- Dependencies control when the effect re-runs :

- No deps : Runs after every render
- Empty [] : Runs once after initial render
- [var1, var2] : Runs after initial + when var1 or var2 changes

Rules :

- Include **all** values from component scope used in callback (state, props, functions)
- ESLint `exhaustive-deps` rule helps
- If a function is a dep, wrap in `useCallback`

Example with dep :

```jsx
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Re-runs when count changes
```

- Omit deps only if you truly want every-render behavior (rare).

---

### 132. Cleanup Functions :

- Return a function from the effect callback to clean up (e.g., remove listeners, cancel subscriptions).

Runs:

- Before next effect run
- On unmount

```jsx
useEffect(() => {
  const handleResize = () => {
    /* ... */
  };
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []); // Cleanup on unmount
```

- Essential for preventing memory leaks in long-lived apps.

---

### 133. Multiple Effects :

- Use as many `useEffect` as needed — better than one giant effect.

```jsx
useEffect(() => {
  /* Fetch user */
}, [userId]);
useEffect(() => {
  /* Setup subscription */
}, [user]);
useEffect(() => {
  /* Update title */
}, [title]);
```

- This separates concerns and makes code easier to read/maintain.

---

### 134. useContext :

- `useContext` subscribes to React Context values without prop drilling.
- Syntax : `const value = useContext(MyContext);`

Example :

```jsx
// Context creation
const ThemeContext = createContext("light");

// Provider
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>;

// Consumer
function Button() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Click</button>;
}
```

- Re-renders when context value changes
- Use for global state (theme, auth, i18n)

---

### 135. useRef :

- `useRef` creates a mutable ref object that persists across renders.
- Syntax : `const ref = useRef(initialValue);`

Uses :

1. **DOM refs**: Access DOM nodes

   ```jsx
   const inputRef = useRef(null);
   <input ref={inputRef} />;
   inputRef.current.focus();
   ```

2. **Mutable values** (not causing re-renders)
   ```jsx
   const intervalRef = useRef(null);
   useEffect(() => {
     intervalRef.current = setInterval(() => {
       /* ... */
     }, 1000);
     return () => clearInterval(intervalRef.current);
   }, []);
   ```

- `ref.current` is mutable
- Doesn't trigger re-renders on change

---

### 136. useReducer :

- `useReducer` manages complex state logic (alternative to `useState`).
- Syntax : `const [state, dispatch] = useReducer(reducer, initialState);`
- `reducer`: Pure function `(state, action) => newState`
- `dispatch`: Send actions

Example : Counter with actions

```jsx
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      Count : {state.count}
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
    </>
  );
}
```

Use when :

- State transitions are complex
- Multiple sub-values
- With middleware (e.g., Redux-like)

---

### 137. useCallback :

- `useCallback` memoizes functions to prevent unnecessary re-creations.
- Syntax : `const memoizedFn = useCallback(fn, dependencies);`
- Returns a memoized version of `fn`
- Changes only if deps change

Example :

```jsx
const handleClick = useCallback(() => {
  console.log("Clicked with count", count);
}, [count]); // New fn only if count changes
```

Use to :

- Pass stable callbacks to memoized children
- As deps in `useEffect`

---

### 138. useMemo :

- `useMemo` memoizes expensive computations.
- Syntax : `const memoizedValue = useMemo(computeFn, dependencies);`
- `computeFn`: Returns value (runs only if deps change)
- Caches result

Example :

```jsx
const filteredList = useMemo(() => {
  return items.filter((item) => item.price > threshold);
}, [items, threshold]); // Re-compute only if items or threshold change
```

Use for :

- Heavy calculations (sorting, filtering)
- Derived state that's expensive
- Diff from `useCallback`: `useMemo` memos values; `useCallback` memos functions.

---

### 139. useLayoutEffect :

- Like `useEffect`, but runs **synchronously** after DOM mutations (before browser paints).
- Syntax : Same as `useEffect`

Use when :

- Measuring DOM (e.g., getBoundingClientRect)
- Mutations that affect layout

```jsx
useLayoutEffect(() => {
  // Measure and adjust DOM before paint
}, [deps]);
```

- Rarely needed; prefer `useEffect` for most side effects.

---

### 140. useImperativeHandle :

- Customizes the instance value exposed by `forwardRef`.
- Syntax : `useImperativeHandle(ref, createHandle, dependencies);`
- Example : Expose custom methods

```jsx
const MyInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focusAndClear: () => {
      inputRef.current.focus();
      inputRef.current.value = "";
    },
  }));
  return <input ref={inputRef} {...props} />;
});
```

- Use sparingly — prefers props over imperative code.

---

### 141. useDebugValue :

- Labels custom Hooks in React DevTools.
- Syntax : `useDebugValue(value, formatFn?);`

```jsx
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);
  useDebugValue(isOnline ? "Online" : "Offline");
  // ...
}
```

- Only runs in dev mode; no production impact.

---

### 142. Custom Hooks :

- Custom Hooks are functions starting with "use" that call other Hooks. They encapsulate reusable logic.
- Example : Fetch Hook

```jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

// Usage
const { data, loading, error } = useFetch("/api/user");
```

Rules :

- Can call other Hooks
- Share logic, not state
- Compose freely

```jsx
const [name, setName] = useLocalStorage("name", "");

import { useState } from "react";

function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}
export default function useLocalStorage(key, initialValue) {
  const [value, setvalue] = useState(() => {
    return getSavedValue(key, initialValue);
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
}
```

---

### 143. Hook Composition :

- Combine multiple Hooks/custom Hooks in one component or Hook.

```jsx
function useUserData(id) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    /* fetch user */
  }, [id]);
  return user;
}

function Profile({ id }) {
  const user = useUserData(id);
  const theme = useContext(ThemeContext);
  // ...
}
```

- Promotes modularity and reusability.

---

### 144. Hook Anti-Patterns :

1. **Violating Rules of Hooks** (conditional calls, etc.)
2. **Missing Dependencies** in `useEffect`/`useCallback`/`useMemo`
3. **Stale Closures** (use functional updates in `setState`)
4. **Overusing Memoization** (premature optimization)
5. **Mutating Refs in Render** (use effects for side effects)
6. **Sharing State Between Hooks** (use Context or lift state)
7. **Calling Hooks in Loops** (extract to component)
8. **Ignoring Cleanup** (memory leaks)

- Use ESLint plugin to catch most; test for edge cases.

---
