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

## 14. <u> Context API </u> -

- The **React Context API** is a built-in mechanism for passing data through the component tree without having to pass props manually at every level (avoiding "prop drilling"). It is ideal for global or shared data such as themes, user authentication, language settings, or app-wide configurations.
- Context is part of React core since v16.3 (2018) and became much more practical with the `useContext` Hook in v16.8.

---

### 152. Context Basics :

- Context provides a way to share values between components without passing props explicitly through every level of the tree.
- A context consists of :
  - A **Provider** — supplies the value
  - A **Consumer** — reads the value (or the modern `useContext` Hook)
- Every context has a default value (used when no Provider is found in the tree).
- Context updates cause consumers to re-render (unless memoized).

Key principle :

- Context is **not** a full state management library like Redux — it's best for **low-to-medium frequency updates** and data that many components need to read.

---

### 153. Creating Context :

- Use `React.createContext()` to create a context object.

```jsx
import { createContext } from "react";

// Create context with a default value (optional but recommended)
export const ThemeContext = createContext("light"); // default theme

// Or with a more complex default object
export const UserContext = createContext({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});
```

- The default value is only used when a component tries to consume the context **outside any Provider**.

---

### 154. Provider :

- The `<Context.Provider>` component makes the context value available to all descendants.

```jsx
import { ThemeContext } from "./ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <MainContent />
      <Footer />
    </ThemeContext.Provider>
  );
}
```

- The `value` prop can be any JavaScript value (primitive, object, function, etc.).
- Every time `value` changes (reference equality), all consumers re-render.
- Multiple Providers can be nested (see below).

---

### 155. Consumer :

- The traditional way (pre-Hooks) to read context is using `<Context.Consumer>`.

```jsx
<ThemeContext.Consumer>
  {({ theme }) => <div className={`app ${theme}`}>Current theme: {theme}</div>}
</ThemeContext.Consumer>
```

- This pattern is still valid but verbose. Since React 16.8, `useContext` is preferred in functional components.

---

### 156. useContext Hook :

- The modern, clean way to consume context.

```jsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      className={`btn-${theme}`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      Toggle Theme ({theme})
    </button>
  );
}
```

- Re-renders component when context value changes.
- Must be called inside a component or custom Hook (follows Rules of Hooks).
- Can consume multiple contexts in one component:

```jsx
const theme = useContext(ThemeContext);
const user = useContext(UserContext);
```

---

### 157. Context Value Updates :

- Context value updates are driven by the Provider's `value` prop changing.

Important :

- React uses **reference equality** (`Object.is`) to decide if value changed.
- If you pass a new object every render, consumers re-render even if contents are the same.

Bad (causes unnecessary re-renders) :

```jsx
<ThemeContext.Provider value={{ theme, toggleTheme }}>
  {/* ... */}
</ThemeContext.Provider>
```

- Better (stable reference) :

```jsx
const value = useMemo(() => ({ theme, toggleTheme }), [theme]);
return <ThemeContext.Provider value={value}>{/* ... */}</ThemeContext.Provider>;
```

- Or lift state up and memoize setters with `useCallback`.

---

### 158. Nested Providers :

- You can nest multiple Providers or even the same context with different values.

```jsx
<ThemeContext.Provider value="dark">
  <UserContext.Provider value={currentUser}>
    <Header />
    <Main />
    <Footer />
  </UserContext.Provider>

  {/* Different theme for this subtree */}
  <ThemeContext.Provider value="light">
    <Modal />
  </ThemeContext.Provider>
</ThemeContext.Provider>
```

- Inner Providers override outer ones for their subtree — very useful for modals, panels, or localized settings.

---

### 159. Performance Considerations :

- Context can cause performance issues if not used carefully:
- Every consumer re-renders when Provider value reference changes.
- Deep trees with many consumers → potential bottleneck.

Mitigation strategies :

- Split contexts (one for theme, one for user, one for cart, etc.)
- Memoize context value with `useMemo`
- Memoize consumers with `React.memo` or `useMemo`
- Use selectors or split state (similar to Redux)
- For high-frequency updates → prefer Zustand, Jotai, Recoil, or Redux over Context

---

### 160. Context vs Redux :

| Feature        | Context API                       | Redux                                  |
| -------------- | --------------------------------- | -------------------------------------- |
| Boilerplate    | Very low                          | Higher (actions, reducers, store)      |
| Learning curve | Low                               | Medium–High                            |
| DevTools       | Basic (React DevTools)            | Excellent (Redux DevTools)             |
| Middleware     | None                              | Yes (thunks, sagas, etc.)              |
| Performance    | Can be poor with frequent updates | Optimized with selectors & memoization |
| Best for       | Theme, auth, simple global state  | Complex state, large apps, time-travel |
| Bundle size    | Zero (built-in)                   | Adds ~2–10 KB + middleware             |
| Async handling | Manual (useEffect)                | Built-in via middleware                |

**recommendation** :

- Small–medium apps : Context + `useReducer` or lightweight libs (Zustand, Jotai)
- Large/complex apps with heavy async logic, debugging needs: Redux Toolkit or Zustand

---

### 161. Context Anti-Patterns :

1. **Putting everything in one giant context**  
   → Causes unnecessary re-renders when unrelated data changes.
2. **Passing new object literals every render**  
   → Forces re-renders even if values are the same.
3. **Using context for local component state**  
   → Use `useState` instead; context is for shared data.
4. **Overusing context for prop drilling avoidance**  
   → Sometimes better to compose components or lift state.
5. **No memoization on consumers**  
   → Wrap expensive components in `React.memo` when they consume context.
6. **Mutating context value directly**  
   → Always create new objects/arrays (immutability).

Correct pattern example (stable value) :

```jsx
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
```

---
