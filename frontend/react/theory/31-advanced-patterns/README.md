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

## 31. <u> Advanced Patterns </u> -

Advanced patterns in React allow you to build highly reusable, flexible, and maintainable component libraries. These design patterns decouple business logic from the visual UI, giving consumer developers granular control over styling and state behavior.

---

### 286. Compound Components:

The Compound Components pattern allows a group of components to work together to share implicit state and functionality without forcing the developer to pass explicit props deep down the tree. Think of it like native HTML `<select>` and `<option>` elements.

#### Real-World Example: Tab System:

We use React Context to share state between a parent wrapper and its modular children.

```jsx
import React, { createContext, useState, useContext } from "react";
// 1. Create a context for the compound system
const TabsContext = createContext();
// 2. Parent Component manages the active tab state
export function Tabs({ children, defaultValue }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs-container">{children}</div>
    </TabsContext.Provider>
  );
}
// 3. Child Components consume the implicit shared state
Tabs.Trigger = function Trigger({ value, children }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  return (
    <button
      className={activeTab === value ? "active" : ""}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
};

Tabs.Content = function Content({ value, children }) {
  const { activeTab } = useContext(TabsContext);
  return activeTab === value ? (
    <div className="tab-content">{children}</div>
  ) : null;
};
```

#### How the Developer Uses It:

This gives the user absolute freedom over where to place markup or how to style individual parts without writing extra wiring code.

```jsx
<Tabs defaultValue="profile">
  <div className="tab-navigation-bar">
    <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
    <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
  </div>
  <Tabs.Content value="profile">
    <ProfileForm />
  </Tabs.Content>
  <Tabs.Content value="settings">
    <SettingsPanel />
  </Tabs.Content>
</Tabs>
```

---

### 287. Render Props:

The Render Props pattern shares code between components by passing a JavaScript function as a prop. This function returns a React element, allowing the consumer component to decide exactly how to render the dynamic data provided by the engine.

#### Real-World Example: Mouse Tracker:

```jsx
import React, { useState } from "react";
// Engine component handles logic but renders nothing on its own
function MouseTracker({ render }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
      {render(coords)}
    </div>
  );
}
// How to use it:
export default function App() {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <h1>
          The mouse pointer coordinates are: {x}, {y}
        </h1>
      )}
    />
  );
}
```

---

### 288. Higher-Order Components (HOCs):

A Higher-Order Component is a custom pure function that accepts an existing component as an argument and returns an augmented, enhanced version of that component. It acts as an abstraction wrapper for shared behavioral logic

(Note: While Custom Hooks have largely replaced HOCs, they remain highly prevalent in legacy systems and cross-cutting libraries like Redux or feature flagging engines).

#### Real-World Example: Authentication Guard:

```jsx
import React from "react";
import { Navigate } from "react-router-dom";

function withAuthentication(WrappedComponent) {
  return function EnhancedComponent(props) {
    const isAuthenticated = localStorage.getItem("token"); // Read authorization state

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    // Pass original and injected props smoothly down
    return <WrappedComponent {...props} userRole="Admin" />;
  };
}
// Wrapping a standard dashboard page const ProtectedDashboard = withAuthentication(DashboardView);
```

---

### 289. Controlled vs Uncontrolled Patterns:

This pattern centers on whether data is driven entirely by user interaction with the browser's DOM node directly, or if data is managed entirely within React memory state.

| Feature         | Controlled Pattern                          | Uncontrolled Pattern                         |
| --------------- | ------------------------------------------- | -------------------------------------------- |
| Source of Truth | React Component State                       | The browser's DOM element                    |
| Access Method   | useState values bound to value={state}      | useRef pointing to HTML nodes                |
| Performance     | Triggers re-renders on every keystroke      | Only reads value on-demand (e.g., on submit) |
| Validation      | Easy real-time validation and input masking | Validated post-submission                    |

#### Code Implementation Comparison:

```jsx
// Controlled: React drives the input
const [name, setName] = useState("");
<input value={name} onChange={(e) => setName(e.target.value)} />;

// Uncontrolled: DOM handles typing; React pulls on-demand via a ref pointer
const inputRef = useRef();
const handleSubmit = () => console.log(inputRef.current.value);
<input ref={inputRef} />;
```

---

### 290. State Reducer Pattern:

When writing highly complex shared features, components often become unstable because consumer developers need a wide variety of edge-case modifications to internal state transitions. The State Reducer pattern allows your engine to hand state control over to the developer by letting them inject a custom reducer function.

#### Real-World Example: A Customizable Toggle Hook:

```jsx
import { useReducer } from "react";
// Default library state reducer
function toggleReducer(state, action) {
  switch (action.type) {
    case "toggle":
      return { on: !state.on };
    case "reset":
      return { on: false };
    default:
      return state;
  }
}

export function useToggle({ customReducer = toggleReducer } = {}) {
  const [state, dispatch] = useReducer(customReducer, { on: false });

  const toggle = () => dispatch({ type: "toggle" });
  const reset = () => dispatch({ type: "reset" });

  return { on: state.on, toggle, reset };
}
```

If a developer wants a unique modification (e.g., they want a toggle that turns off, but can never be clicked on more than 4 times), they pass their own custom action rules directly into your library's engine, preserving structural reliability.

---

### 291. Polymorphic Components:

A Polymorphic Component is an advanced design configuration that can change its outer HTML tag or wrapper component dynamically using an as prop, while preserving its core style identities and full TypeScript type definitions.

#### Real-World Example: A Generic Text/Button Block:

```jsx
import React from "react";

export function Box({ as: Component = "div", children, ...props }) {
  // Dynamically uses whatever component tag is supplied
  return (
    <Component className="ui-box" {...props}>
      {children}
    </Component>
  );
}
// How to use it:
function Layout() {
  return (
    <>
      <Box as="h1">This compiles to an HTML h1 tag</Box>
      <Box as="button" onClick={() => alert("hi")}>
        Compiles to an action button
      </Box>
    </>
  );
}
```

---

### 292. Slot Pattern:

Popularized by Vue and native Web Components, the Slot Pattern in React involves treating components as generic containers with named layout insertion zones. Instead of nesting structural parameters inside an array of abstract configuration properties, you pass fully-formed DOM elements down explicitly.

#### Real-World Example: Layout Header

```jsx
function AppLayout({ navigationSlot, mainContentSlot, sidebarSlot }) {
  return (
    <div className="grid-shell">
      <nav className="top-bar">{navigationSlot}</nav>
      <aside className="left-panel">{sidebarSlot}</aside>
      <main className="body-pane">{mainContentSlot}</main>
    </div>
  );
}
// Usage:
<AppLayout
  navigationSlot={<GlobalNavbar links={menuItems} />}
  sidebarSlot={<UserFilterGroup />}
  mainContentSlot={<MainAnalyticsDashboard />}
/>;
```

---

### 293. Headless Components:

A Headless Component is a library pattern that encapsulates all business functionality, keyboard accessibility options, and data logic without defining any layout markup, structural DOM tags, or native CSS sheets. It exposes functionality strictly via a custom hook or render prop.

Libraries like Radix UI Primitive, React Table, and Downshift use this model. It lets you use battle-tested, accessible components (like a custom multi-select autocomplete combo-box) while designing the UI to match your company's custom design style perfectly.

---

### 294. Compound Hooks:

Compound Hooks combine standard React Hook paradigms with the Compound Component philosophy. Instead of a single massive state hook that exposes hundreds of variables, multiple independent hooks manage separate structural workflows but share synchronization engines implicitly via a parent hook system or context context bridge.

For instance, a useForm() hook might yield nested specialized hooks like useFieldInput('email') or useFormSubmission(). This keeps your modules distinct, light, and optimized against unnecessary component re-renders.

---
