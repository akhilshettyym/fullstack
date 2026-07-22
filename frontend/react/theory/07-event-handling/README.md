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

## 7. <u> Event Handling </u> -

- React provides a consistent, cross-browser way to handle DOM events through **Synthetic Events**. These events wrap native browser events and behave predictably across different browsers and devices. React's event system is one of the key reasons developers find event handling simpler and more reliable compared to vanilla JavaScript.

---

### 69. Synthetic Events :

- React creates a **SyntheticEvent** object that normalizes event properties and behavior across browsers.

Key characteristics :

- **Cross-browser consistency** — properties like `event.preventDefault()`, `event.stopPropagation()`, `event.target`, `event.currentTarget`, `event.key`, etc. work the same everywhere.
- **Event pooling** — for performance, React pools (reuses) event objects. After the event handler runs, the event object is cleared (all properties become `null`).
- **Nullified properties** — if you need to access event properties asynchronously (e.g., in a `setTimeout`), you must call `event.persist()` or store needed values beforehand.

Example of pooling issue :

```jsx
function handleClick(event) {
  // This works synchronously
  console.log(event.target.tagName);

  setTimeout(() => {
    // This will log null (because event is pooled and reset)
    console.log(event.target.tagName);

    // Fix 1: Persist the event
    event.persist();
    setTimeout(() => console.log(event.target.tagName), 1000);

    // Fix 2: Store value immediately
    const targetTag = event.target.tagName;
    setTimeout(() => console.log(targetTag), 1000);
  }, 1000);
}
```

- Modern recommendation: Prefer storing values explicitly over `persist()` (deprecated in React 18+ in many cases).

---

### 70. Event Binding :

- In React, event handlers are attached using camelCase property names (e.g., `onClick`, `onChange`, `onSubmit`).

Two main ways to define handlers :

1. **Class components** (legacy)

   ```jsx
   class Button extends React.Component {
     constructor(props) {
       super(props);
       // Bind in constructor (most common pattern)
       this.handleClick = this.handleClick.bind(this);
     }

     handleClick() {
       console.log("Clicked!");
     }

     render() {
       return <button onClick={this.handleClick}>Click</button>;
     }
   }
   ```

2. **Functional components** (modern — preferred)
   - Use arrow functions (lexical `this`) or define inside component (new function on each render)

   ```jsx
   function Button() {
     // Option 1: Define inside render (new function each time)
     const handleClick = () => {
       console.log("Clicked!");
     };

     // Option 2: Memoized with useCallback (better for performance)
     const handleClickMemo = useCallback(() => {
       console.log("Clicked!");
     }, []);

     return <button onClick={handleClick}>Click</button>;
   }
   ```

- **Performance note**: Inline arrow functions (`onClick={() => doSomething()}`) create a new function on every render. Use `useCallback` when passing handlers to memoized children or when performance is critical.

---

### 71. Inline Event Handlers :

- You can define handlers directly in JSX (common for simple cases):

```jsx
<button onClick={() => alert("Clicked!")}>Click me</button>
```

- _Pros_ : Quick and readable for trivial logic.
- _Cons_ : Creates new function every render → can hurt performance when passed to many children or m-emoized components.
- Best practice: Define handler as a named function or use `useCallback`.

---

### 72. Passing Arguments to Handlers :

- Three common patterns :

1. **Arrow function wrapper** (most common)

   ```jsx
   <button onClick={() => handleDelete(item.id)}>Delete</button>
   ```

2. **Bind in render** (less common now)

   ```jsx
   <button onClick={handleDelete.bind(null, item.id)}>Delete</button>
   ```

3. **Using data attributes** (useful in loops)

   ```jsx
   <button data-id={item.id} onClick={handleDelete}>
     Delete
   </button>;

   function handleDelete(e) {
     const id = e.currentTarget.dataset.id;
     // ...
   }
   ```

- Recommendation: Use arrow function wrapper unless you have hundreds/thousands of elements.

---

### 73. Event Delegation :

- React uses a single event listener at the root of the document (event delegation) rather than attaching listeners to every DOM node.

Benefits:

- Better performance (fewer listeners)
- Works even when elements are added/removed dynamically
- Consistent behavior across browsers
- You almost never need to worry about manual delegation in React — it’s handled automatically.

---

### 74. Prevent Default :

- Many browser events have default behavior (e.g., form submit reloads page, link click navigates).
- Use `event.preventDefault()` to stop it :

```jsx
function Form() {
  const handleSubmit = (e) => {
    e.preventDefault(); // stops page reload
    console.log("Form submitted");
    // handle form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Send</button>
    </form>
  );
}
```

- Common use cases: forms, links (`<a onClick={...}>`), drag-and-drop.

---

### 75. Stop Propagation :

- `event.stopPropagation()` prevents the event from bubbling up to parent elements.

```jsx
<div onClick={() => console.log("Parent clicked")}>
  <button
    onClick={(e) => {
      e.stopPropagation();
      console.log("Button clicked");
    }}
  >
    Click me
  </button>
</div>
```

- Clicking button logs only "Button clicked" (parent handler is not triggered).
- Use carefully — overusing can make event flow hard to reason about.

---

### 76. Keyboard Events :

- React normalizes keyboard events across browsers.

Common events :

- `onKeyDown`, `onKeyPress` (deprecated), `onKeyUp`
- Properties: `event.key`, `event.code`, `event.ctrlKey`, `event.shiftKey`, `event.metaKey`, `event.altKey`

Example — Enter key submit :

```jsx
function SearchInput() {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Search:", e.target.value);
    }
  };

  return (
    <input onKeyDown={handleKeyDown} placeholder="Press Enter to search" />
  );
}
```

- Useful keys : `"Escape"`, `"ArrowUp"`, `"ArrowDown"`, `"Tab"`, `" "`, etc.

---

### 77. Mouse Events :

Common mouse events in React :

- `onClick`, `onDoubleClick`
- `onMouseDown`, `onMouseUp`, `onMouseEnter`, `onMouseLeave`, `onMouseOver`, `onMouseOut`
- `onContextMenu` (right-click)
- Properties: `event.clientX`, `event.clientY`, `event.pageX`, `event.pageY`, `event.screenX`, `event.screenY`, `event.button`

Example — hover detection :

```jsx
function HoverCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ background: isHovered ? "#f0f0f0" : "white" }}
    >
      Hover over me
    </div>
  );
}
```

---

### 78. Form Events :

Most important form events :

- `onSubmit` — on `<form>`
- `onChange` — on inputs, select, textarea (fires on every keystroke/value change)
- `onInput` — similar to `onChange` but lower-level
- `onFocus`, `onBlur`
- `onInvalid` — for form validation

Controlled input example:

```jsx
function LoginForm() {
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(email);
      }}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

---

### 79. Custom Events :

- React doesn’t have native custom events like the DOM’s `CustomEvent`, but you can simulate them by passing callback functions as props.

Pattern (very common):

```jsx
// Child
function CustomButton({ onCustomAction }) {
  const trigger = () => {
    onCustomAction?.({ message: "Something happened", value: 42 });
  };

  return <button onClick={trigger}>Trigger Custom Event</button>;
}

// Parent
function Parent() {
  const handleCustom = (data) => {
    console.log("Custom event received:", data);
  };

  return <CustomButton onCustomAction={handleCustom} />;
}
```

For more complex needs (pub/sub across distant components), use :

- Context + state
- Custom hooks
- State management libraries (Zustand, Jotai, Redux)

**Best practices (2026 React) :**

- Prefer named handler functions over inline arrows when passing to children
- Use `useCallback` for expensive or frequently passed handlers
- Always `e.preventDefault()` for form submit and anchor tags when needed
- Avoid `e.persist()` — prefer capturing values early
- Keep event handlers small and focused — move complex logic to custom hooks or state updaters

---
