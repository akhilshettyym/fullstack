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

## 6. <u> State </u> -

- State is any piece of data that can change over time and, when it changes, should trigger a re-render of the component (or parts of the UI). In React, state is what makes components interactive and dynamic. React provides tools to manage state in a predictable and performant way.

---

### 57. State Basics :

- State represents the **internal memory** of a component.
- When state changes, React re-renders the component (and potentially its children).
- State is **local** by default — each component instance has its own state.
- React manages state updates asynchronously and batches them for performance.
- Two main ways to manage state in modern React:
  - `useState` Hook (functional components — recommended)
  - `this.state` / `this.setState` (class components — legacy)

#### Core principle :

- **UI = f(state, props)**  
  Every time state changes, React calls your component function again with the new state → new UI.

---

### 58. useState Hook :

- `useState` is the primary Hook for adding state to functional components. It was introduced in React 16.8.

Syntax:

```jsx
const [state, setState] = useState(initialValue);
```

- Returns a **pair** (array destructuring):
  - `state`: current value
  - `setState`: function to update the value
- Calling `setState` schedules a re-render with the new value.
- `useState` can be called multiple times in one component.

Example:

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

### 59. Initial State :

- The argument passed to `useState` is the **initial value** — used only on the very first render.

```jsx
const [name, setName] = useState("Akhil"); // string
const [isDark, setIsDark] = useState(false); // boolean
const [user, setUser] = useState({ name: "Akhil", city: "Port Washington" }); // object
const [items, setItems] = useState([]); // array
const [count, setCount] = useState(() => expensiveCalculation()); // lazy init
```

**Lazy initialization** (important for expensive computations):

```jsx
const [data, setData] = useState(() => {
  console.log("This runs only once");
  return fetchInitialData(); // expensive operation
});
```

- The function is called only once during initial render — not on updates.

---

### 60. Updating State :

- Never mutate state directly. Always use the setter function.

Correct :

```jsx
setCount(count + 1);
setUser({ ...user, city: "New York" });
setItems([...items, newItem]);
```

Incorrect (will cause bugs) :

```jsx
count++; // mutation
user.city = "New York"; // direct mutation
items.push(newItem); // mutates original array
```

- `setState` can also accept a function (recommended when depending on previous state) :

```jsx
setCount((prevCount) => prevCount + 1);
```

---

### 61. State Immutability :

- React relies on immutability to detect changes efficiently (especially with `React.memo`, `useMemo`, `useEffect` dependencies).
- **Primitives** (string, number, boolean) : Replacing value is fine.
- **Objects & Arrays** : Always create a **new** reference.

Examples :

```jsx
// Object
setUser((prev) => ({ ...prev, name: "Akhil Updated" }));

// Array - add
setTodos((prev) => [...prev, newTodo]);

// Array - remove
setTodos((prev) => prev.filter((t) => t.id !== idToRemove));

// Array - update
setTodos((prev) =>
  prev.map((todo) =>
    todo.id === targetId ? { ...todo, completed: true } : todo,
  ),
);
```

- Immutability prevents subtle bugs and enables performance optimizations.

---

### 62. Functional State Updates :

- When the new state depends on the previous state, always use the functional form to avoid stale closures.
- Problematic (stale state) :

```jsx
// This may batch and use outdated count
setCount(count + 1);
setCount(count + 1); // might only increment once
```

Correct :

```jsx
setCount((prev) => prev + 1);
setCount((prev) => prev + 1); // guaranteed +2
```

Especially important in :

- Event handlers with multiple updates
- `useEffect` when depending on state
- Rapid user interactions (click spamming)

---

### 63. Multiple State Variables :

- You can (and often should) use multiple `useState` calls instead of one large object.

Preferred :

```jsx
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
```

Less preferred (unless tightly related) :

```jsx
const [form, setForm] = useState({ firstName: "", lastName: "", email: "" });
```

**When to use one object**:

- Form data that is submitted together
- Settings object
- Data that is always updated as a unit

**When to split**:

- Independent pieces of state
- Different update frequency
- Easier testing and debugging

---

### 64. Derived State :

- Derived state is state that can be **computed** from other state or props — **do not store it in state**.

Bad:

```jsx
const [fullName, setFullName] = useState("");
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");

useEffect(() => {
  setFullName(`${firstName} ${lastName}`);
}, [firstName, lastName]);
```

Better :

```jsx
const fullName = `${firstName} ${lastName}`.trim();
```

- Use plain variables, `useMemo`, or just compute in render when derived value is cheap.

---

### 65. Lifting State Up :

- When two or more sibling components need to share the same state → **lift it up** to their closest common parent.

Example :

```jsx
function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  return (
    <fieldset>
      <legend>{scale === "c" ? "Celsius" : "Fahrenheit"}</legend>
      <input
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </fieldset>
  );
}

function Calculator() {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const handleCChange = (value) => {
    setTemperature(value);
    setScale("c");
  };

  const handleFChange = (value) => {
    setTemperature(value);
    setScale("f");
  };

  return (
    <>
      <TemperatureInput
        scale="c"
        temperature={temperature}
        onTemperatureChange={handleCChange}
      />
      <TemperatureInput
        scale="f"
        temperature={temperature}
        onTemperatureChange={handleFChange}
      />
    </>
  );
}
```

- State lives in `Calculator` → both inputs stay in sync.

---

### 66. Local vs Global State :

- **Local State** : Managed inside one component using `useState` or `useReducer`. Best for UI-specific concerns (toggle, form input, counter).

- **Global State** : State that many components need to access or update.
  Common solutions :
  - React Context API (built-in)
  - Zustand, Jotai, Recoil (lightweight)
  - Redux, MobX (traditional / complex apps)
- Rule of thumb :
  > Keep state as local as possible. Only lift or globalize when truly needed.

---

### 67. State Synchronization :

- Avoid manually keeping two pieces of state in sync — it leads to bugs.

Anti-pattern :

```jsx
const [count, setCount] = useState(0);
const [double, setDouble] = useState(0);

useEffect(() => {
  setDouble(count * 2);
}, [count]);
```

Better :

```jsx
const [count, setCount] = useState(0);
const double = count * 2; // derived, always correct
```

- If sync is truly required (rare), prefer derived values or controlled components.

---

### 68. State Anti-Patterns :

1. **Direct mutation of state**  
   `count++`, `user.name = "new"`, `items.push()`
2. **Storing derived/computed values in state**  
   Full name, totals, filtered lists
3. **Using state for what should be a ref**  
   Storing previous values, DOM nodes, timers → use `useRef`
4. **Overusing global state**  
   Putting every toggle, form field, etc., into Redux/Context
5. **Ignoring stale closures**  
   Using non-functional updates in rapid-succession scenarios
6. **Storing JSX in state**  
   `setContent(<div>...</div>)` → return JSX directly or use components
7. **Resetting state incorrectly**  
   Using `setState(initial)` instead of a key or reset function

Correct reset example :

```jsx
function Form() {
  const [key, setKey] = useState(0);
  const reset = () => setKey((prev) => prev + 1);

  return <input key={key} />; // remounts component
}
```

- Mastering state management is one of the most important skills in React — it directly affects performance, bug frequency, and maintainability.

---
