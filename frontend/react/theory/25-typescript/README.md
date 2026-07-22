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

## 25. <u> TypeScript with React </u> -

### 247. Foundation & Component Types - Strongly Typing Props:

In a React and TypeScript application, components are standard JavaScript functions. To enforce type safety, you must explicitly declare the structural shape of a component's incoming inputs (props) using either a type alias or an interface.

```tsx
// Using a type alias to define the shape of incoming
propstype UserCardProps = {
  username: string;          // Required primitive
  age: number;               // Required primitive
  isAdmin: boolean;          // Required primitive
  status?: 'active' | 'idle'; // Optional string literal union
  tags: string[];            // Array of strings
};

export function UserCard({ username, age, isAdmin, status = 'active', tags }: UserCardProps) {
  return (
    <div className={`card ${status}`}>
      <h3>{username} ({age})</h3>
      {isAdmin && <span className="badge">Admin Access</span>}
      <ul>{tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    </div>
  );
}
```

#### Passing Standard Nodes and HTML Attributes:

When building reusable layout elements, your custom components will often need to accept native React child nodes or standard HTML attributes (like custom styling classes or standard container IDs).

```tsx
import React from "react";

type ContainerProps = {
  title: string;
  // Accepts any valid renderable React node (elements, strings, fragments, portals)
  children: React.ReactNode;
  // Pulls in all standard HTML element styling definitions natively
  style?: React.CSSProperties;
};
export function Container({ title, children, style }: ContainerProps) {
  return (
    <section style={style} className="global-container">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
```

---

### 248. Component Definition - FunctionComponent (React.FC):

You will frequently see components typed using the explicit wrapper token `React.FC` (or React.FunctionComponent).

```tsx
// Explicit definition using React.FCexport const AlertBox: React.FC<{ message: string }> = ({ message }) => {
  return <div className="alert">{message}</div>;
};
```

#### Modern Best Practice Strategy:

In modern React development, prefer typing the props directly on the function arguments rather than wrapping the component in React.FC.

- Standard function typing handles default properties cleaner.
- It works naturally with generic component bindings.
- It keeps code syntax simple and explicit.

#### Type-Safe Components:

Type-safe components ensure that errors are caught at compile time rather than during runtime in production. If a developer attempts to use your component without providing a required property, or accidentally passes an invalid data type (such as passing a string to an input expecting an array), the TypeScript compiler will immediately block the build.

---

### 249. State & Hook Typings - Typing State (useState):

The useState hook relies heavily on TypeScript's Type Inference engine. If you initialize state with a clean primitive value, TypeScript automatically infers the correct type for you, meaning you don't need to add explicit type definitions.

```tsx
// TypeScript automatically infers this state is a strict 'boolean' typeconst [isOpen, setIsOpen] = useState(false);
```

#### When to Use Explicit Generic Angle Brackets:

If your state starts as null or undefined before loading asynchronously, or if it transitions between distinct object layouts, you must explicitly pass a type argument using generic angle brackets (<...>).

```js
type UserProfile = {
  id: string;
  email: string;
};
function ProfileViewer() {
  // State can explicitly be either the full UserProfile object structural layout OR null
  const [profile, setProfile] = useState<UserProfile | null>(null);

  return <div>{profile ? profile.email : 'Loading Profile Metrics...'}</div>;
}
```

---

### 250. Typing Refs (useRef):

The useRef hook can be typed in two different ways depending on its use case: interacting with native HTML DOM nodes or managing mutable background variable containers.

#### 1. DOM Element Refs (Read-Only Layout Links):

When linking a ref to a live DOM element layout container, pass the precise native browser element type into the generic block, and initialize the value explicitly with null. This creates a read-only ref where React manages the `.current` property dynamically.

```tsx
import { useRef, useEffect } from "react";

function TextFocusInput() {
  // Direct typing targeting the specific HTML element class
  const htmlInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // TypeScript automatically enforces safe optional chaining checks on current
    htmlInputRef.current?.focus();
  }, []);

  return <input ref={htmlInputRef} type="text" />;
}
```

#### 2. Mutable Instance Containers (Writable Variables):

If you are using a ref to store a background value (like a timer ID or a persistent tracking toggle), initialize the ref with your actual target value. This creates a mutable container where you can freely read and write to `.current`.

```tsx
// Creates a mutable container explicitly typed to hold numbersconst intervalIdRef = useRef<number | null>(null);
const clearTimer = () => {
  if (intervalIdRef.current) {
    clearInterval(intervalIdRef.current);
  }
};
```

---

### 251. Forms & Event Management - Typing React Events:

React handles user actions using its own virtual Synthetic Event Layer to guarantee uniform cross-browser performance. Because of this, you must type inline events using React's specialized semantic event tokens rather than native browser event types.

```tsx
import React, { useState } from "react";

export function CoreInteractionForm() {
  const [inputValue, setInputValue] = useState("");

  // 1. Typing an input field change event handler
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // event.target points directly to input properties
  };

  // 2. Typing a standard form submit click wrapper
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Safely blocks native full-page browser reloads
    console.log("Form payload dispatched:", inputValue);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button type="submit">Submit Entry</button>
    </form>
  );
}
```

#### Common React Synthetic Event Tokens:

- React.ChangeEvent`<T>`: Used for input fields, checkboxes, textareas, and select elements.
- React.FormEvent`<T>`: Used to capture form submissions.
- React.MouseEvent`<T>`: Used for click actions, hover events, mouse coordinates, and movements.
- React.KeyboardEvent`<T>`: Used to capture keystrokes (onKeyDown, onKeyUp).

---

### 252. State Architecture & Reducers - Typing Context (useContext):

Strongly typing React Context requires an explicit definition block because context must be initialized with a fallback value when created.

```tsx
import { createContext, useContext, useState, ReactNode } from 'react';

// 1. Declare the type structure of the shared context state values type
ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};
// 2. Initialize context with undefined to catch cases where providers are missing
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
// 3. Create a provider wrapper component
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 4. Custom validation consumer hook ensuring context is available
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within an explicit ThemeProvider bounding box.");
  }
  return context;
}
```

---

### 253. Typing Reducers (useReducer):

Typing a useReducer system requires you to define the exact shape of your state object along with a strict type definition for your action payloads. Using a Discriminated Union type for your actions allows TypeScript to automatically determine which payload fields are required based on the action type.

```tsx
import { useReducer } from 'react';
type CounterState = { count: number };

// Discriminated Union pattern for complex state machinestype
CounterAction =
  | { type: 'INCREMENT'; payload: number } // Requires a numeric payload
  | { type: 'DECREMENT'; payload: number } // Requires a numeric payload
  | { type: 'RESET' };                    // No payload allowed

function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.payload };
    case 'DECREMENT':
      return { count: state.count - action.payload };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

export function CounterComponent() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}>+5</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}
```

---

### 254. Generics & Utility Helpers - Generics in React Components:

Generic Components allow you to build highly reusable components that can safely accept varying data shapes while maintaining strict type safety throughout the system (e.g., a reusable dropdown list component that can accept lists of users, products, or links).

```tsx
import React from "react";

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

// Declaring a dynamic Generic mapping component via generic identifier token T
export function CustomList<T>({ items, renderItem }: ListProps<T>) {
  return (
    <div className="list-wrapper">
      {items.map((item, index) => (
        <div key={index} className="list-node">
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}
// Usage Example:type Car = { make: string; model: string };const carInventory: Car[] = [{ make: 'Tesla', model: 'Model 3' }];

<CustomList
  items={carInventory}
  renderItem={(car) => (
    <span>
      {car.make} - {car.model}
    </span>
  )} // 'car' is automatically inferred as type Car
/>;
```

---

### 255. TypeScript Utility Types in React:

TypeScript provides built-in global utility types that let you quickly transform existing type layouts into new structures, reducing code duplication.

#### 1. ComponentProps:

Extracts the type definitions directly out of an existing component or HTML element wrapper.

```tsx
import { ComponentProps } from 'react';

// Grab every standard attribute type available natively on a standard HTML buttontype
PrimaryButtonProps = ComponentProps<'button'> & {
  variant: 'solid' | 'outline';
};
```

#### 2. Pick and Omit

- Pick: Creates a new type by choosing a specific subset of properties from an existing object type.
- Omit: Creates a new type by selecting all properties from an object type and removing a specified set of keys.

```ts
type ComprehensiveUser = {
  id: string;
  name: string;
  email: string;
  billingAddress: string;
  phoneNumber: string;
};
// Create a lightweight type containing only the id and name fieldstype SimpleUserView = Pick<ComprehensiveUser, 'id' | 'name'>;
// Create a type containing everything except the sensitive billing and phone fieldstype PublicUserView = Omit<ComprehensiveUser, 'billingAddress' | 'phoneNumber'>;
```

---

### 256. Strict Mode Verification:

Enabling TypeScript's "strict": true flag inside your configuration profile (tsconfig.json) turns on a suite of comprehensive code checks that ensure a higher level of type safety across your codebase.

- noImplicitAny: Blocks the compiler from automatically converting a variable to an unsafe any type when you forget to declare an explicit type.
- strictNullChecks: Forces you to explicitly handle null and undefined edge cases, eliminating "Cannot read property of undefined" errors at runtime.

---
