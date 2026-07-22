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

## 4. <u> Components </u> -

- Components are the fundamental building blocks of React applications. They are independent, reusable pieces of UI that encapsulate structure, style, and behavior. Components can be _nested_, _managed_, and _composed_ to _create complex interfaces_. React components receive input (props) and return React elements describing what should appear on the screen.

---

### 35. Functional Components :

- Functional components are the modern, _preferred way_ to write React components since the introduction of Hooks in React 16.8. They are simple JavaScript functions that accept props as an argument and return JSX (or null/undefined for no render).

#### Key characteristics :

- **Simplicity** : No `this` keyword, no lifecycle methods (use Hooks instead).
- **Hooks Integration** : Can use state (`useState`), effects (`useEffect`), context (`useContext`), etc.
- **Performance** : Often lighter than class components as they don't create instances.
- **Readability** : Easier to test and understand for most use cases.

Example :

```jsx
import React, { useState } from "react";

function Greeting({ name }) {
  const [greeting, setGreeting] = useState("Hello");

  const handleClick = () => {
    setGreeting("Hi");
  };

  return (
    <div>
      <h1>
        {greeting}, {name}!
      </h1>
      <button onClick={handleClick}>Change Greeting</button>
    </div>
  );
}
// Usage: <Greeting name="Akhil" />
```

- In this example, the component manages local state with `useState` and handles events. Functional components are recommended for new code, as they align with React's shift toward functional programming paradigms.

---

### 36. Class Components (Legacy) :

- Class components are the older way to create React components, using ES6 classes that extend `React.Component`. They were the standard before Hooks and are now considered legacy, though still supported for backward compatibility.

#### Key characteristics :

- **State Management** : Uses `this.state` and `this.setState()`.
- **Lifecycle Methods** : Methods like `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` for side effects.
- **this Binding** : Requires binding methods in the constructor for event handlers.
- **Instances** : Each component creates an instance, which can lead to slightly higher memory usage.

Example :

```jsx
import React from "react";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: "Port Washington, NY" };
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate() {
    this.setState({ location: "New York, NY" });
  }

  render() {
    return (
      <div>
        <h2>User: {this.props.name}</h2>
        <p>Location: {this.state.location}</p>
        <button onClick={this.handleUpdate}>Update Location</button>
      </div>
    );
  }
}
// Usage: <UserProfile name="Akhil" />
```

- While functional components with Hooks can replicate all class features, classes are useful for understanding older codebases or when using error boundaries (via `componentDidCatch`).

---

### 37. Component Naming Conventions :

- Naming conventions in React promote consistency, readability, and avoid conflicts :

1. **PascalCase for Components** : Always capitalize the first letter (e.g., `UserDashboard`, `GreetingButton`). This distinguishes components from regular HTML elements (lowercase).
2. **File Naming** : Match the component name, e.g., `Greeting.jsx` or `Greeting.js`. Use `index.js` for default exports in folders.
3. **Props Naming** : Use camelCase (e.g., `userName`, `isActive`).
4. **Event Handlers** : Prefix with `handle` or `on` (e.g., `handleClick`, `onSubmit`).
5. **Custom Hooks** : Prefix with `use` (e.g., `useFetchData`).
6. **Avoid Abbreviations** : Use descriptive names like `ProfilePicture` instead of `ProfPic`.
7. **Folders** : Group related components (e.g., `components/User/UserProfile.jsx`).

- Following these (often enforced by ESLint plugins like `eslint-plugin-react`) makes codebases scalable and easier for teams to navigate.

---

### 38. Component Composition :

- Composition is the practice of building complex UIs by combining simpler components, similar to how functions compose in programming. It promotes reusability and separation of concerns.

#### Key principles :

- **Nesting** : Pass components as children or via props.
- **Props Passing** : Data flows down the component tree.
- **No Inheritance** : React favors composition over class inheritance (use HOCs or render props instead).

Example :

```jsx
function Header() {
  return <h1>Welcome, Akhil!</h1>;
}

function Content() {
  return <p>Your location: Port Washington, NY</p>;
}

function Footer() {
  return <footer>© 2026</footer>;
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
```

- Here, `App` composes `Header`, `Content`, and `Footer`. This allows independent development and testing of each part.

---

### 39. Reusable Components :

- Reusable components are designed to be used in _multiple places without modification_, _reducing code duplication_. They rely on props for customization.

Design tips :

- **Props-Driven**: Make behavior configurable via props (e.g., `size`, `color`).
- **Default Props**: Provide fallbacks with `defaultProps`.
- **Type Checking**: Use PropTypes or TypeScript for validation.
- **Isolation**: Avoid global state; use context if needed.

Example : A reusable button.

```jsx
import React from "react";
import PropTypes from "prop-types";

function Button({ label, onClick, disabled = false, variant = "primary" }) {
  return (
    <button onClick={onClick} disabled={disabled} className={`btn ${variant}`}>
      {label}
    </button>
  );
}
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};
// Usage: <Button label="Submit" onClick={handleSubmit} />
```

- This button can be reused across forms, modals, etc., with different props.

---

### 40. Presentational Components :

- _Presentational (or "dumb") components_ focus solely on UI rendering. They receive data via props and don't manage _state_ or _side effects_.

#### Characteristics :

- **Input**: Props only.
- **Output**: JSX.
- **No Dependencies**: Minimal imports (e.g., no API calls).
- **Testable**: Easy to snapshot test.

Example:

```jsx
function UserCard({ name, location }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>Location: {location}</p>
    </div>
  );
}
```

- Use them for layouts, styles, and static displays. Pair with container components for logic.

---

### 41. Container Components :

- _Container (or "smart") components_ handle logic, state, and data fetching. They wrap presentational components and pass data via props.

#### Characteristics :

- **Stateful** : Manage state, effects.
- **Business Logic** : API calls, computations.
- **Composition** : Render presentational components.

Example :

```jsx
import React, { useState, useEffect } from "react";
import UserCard from "./UserCard"; // Presentational

function UserContainer() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate fetch
    setUser({ name: "Akhil", location: "Port Washington, NY" });
  }, []);

  return user ? (
    <UserCard name={user.name} location={user.location} />
  ) : (
    <p>Loading...</p>
  );
}
```

- This pattern (from Dan Abramov's blog) separates concerns, improving maintainability.

---

### 42. Stateless vs Stateful Components :

- **Stateless (Functional without Hooks or Pure)**: No internal state; pure functions of props. Rerender only on prop changes. Example : Simple display components.
  ```jsx
  function Stateless({ message }) {
    return <p>{message}</p>;
  }
  ```
- **Stateful** : Manage internal state (via `useState` or `this.state`). Rerender on state changes. Used for interactive elements.
  ```jsx
  function Stateful() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>{count}</button>;
  }
  ```
- Stateless are predictable and optimizable (e.g., with `React.memo`); stateful handle dynamics.

---

### 43. Controlled Components :

- _Controlled components_ have their form values managed by _React state_. The component's value is set via props, and changes update state.
- _Advantages_ : Single source of truth, validation, dynamic updates.

Example (input) :

```jsx
function ControlledInput() {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
```

- Ideal for forms where you need to sync, validate, or derive values.

---

### 44. Uncontrolled Components :

- Uncontrolled components manage their own state internally, using DOM refs to access values.
- _Advantages_ : Simpler for one-off forms; integrates with non-React code.

Example:

```jsx
import React, { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    alert(inputRef.current.value);
  };

  return (
    <>
      <input type="text" ref={inputRef} defaultValue="Initial" />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
```

- Use when React doesn't need to control the value (e.g., file inputs).

---

### 45. Higher Order Components :

- _Higher-Order Components (HOCs)_ are functions that take a component and return an _enhanced version_, adding behavior without modifying the original.
- _Pattern_ : Reuse logic like authentication, logging.

Example :

```jsx
function withLogger(WrappedComponent) {
  return function Enhanced(props) {
    console.log("Props:", props);
    return <WrappedComponent {...props} />;
  };
}

const LoggedGreeting = withLogger(Greeting);
// Usage: <LoggedGreeting name="Akhil" />
```

- Pros: Composition for cross-cutting concerns. Cons: Can lead to wrapper hell; Hooks often replace HOCs.

---

### 46. Dumb vs Smart Components :

- **Dumb (Presentational)** : Focus on UI; props-only; no state/logic. Reusable, testable.
- **Smart (Container)** : Handle data, state, effects; compose dumb components. App-specific.
- This **dichotomy** (similar to presentational/container) encourages separation : Dumb for views, smart for orchestration. In modern React, Hooks blur the lines, but the principle aids architecture.

---
