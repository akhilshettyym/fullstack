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

## 5. <u> Props </u> -

- Props (short for "properties") are the primary mechanism for passing data from parent components to child components in React. They are **read-only** (immutable from the child's perspective) and allow components to be reusable and configurable.
- Props make React components composable : the same component can behave differently or display different content based on the data it receives.

---

### 47. Props Basics :

- Props are passed to a component as a single object (commonly called `props`).
- A functional component receives props as its first (and usually only) argument.
- A class component receives props via `this.props`.
- Props can contain any valid JavaScript value : strings, numbers, booleans, objects, arrays, functions, JSX elements, etc.
- Changing props from inside a child component is not allowed — doing so is a common anti-pattern.

Basic example :

```jsx
// Parent
function App() {
  return <Greeting name="Akhil" location="Port Washington, NY" />;
}

// Child (functional)
function Greeting(props) {
  return (
    <h1>
      Hello, {props.name} from {props.location}!
    </h1>
  );
}
```

---

### 48. Passing Props :

- Props are passed as attributes in JSX, just like HTML attributes :

```jsx
<UserProfile
  userId={123}
  name="Akhil"
  isPremium={true}
  preferences={{ theme: "dark", notifications: true }}
  onLogout={handleLogout}
/>
```

- Attribute names become property names on the `props` object.
- Values that are JavaScript expressions must be wrapped in curly braces `{}`.
- String literals can be written without braces (React converts them automatically).

Multiple ways to pass the same value:

```jsx
<Counter initialValue={5} />           {/* number */}
<Counter initialValue={"5"} />         {/* string */}
<Counter initialValue={5 + 3} />       {/* expression */}
<Counter initialValue={parseInt("42")} /> {/* function call */}
```

---

### 49. Props Destructuring :

- Instead of accessing props via `props.xxx`, you can destructure them in the function parameter list — cleaner and more common in modern React.

```jsx
// Long form
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Destructured (preferred)
function Greeting({ name, location = "New York" }) {
  return (
    <h1>
      Hello, {name} from {location}!
    </h1>
  );
}
```

- You can also destructure inside the function body:

```jsx
function UserCard(props) {
  const { name, avatarUrl, bio } = props;
  return (
    <div>
      <img src={avatarUrl} alt={name} />
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  );
}
```

---

### 50. Default Props :

- Default props provide fallback values when a prop is not passed by the parent.

Two common ways :

1. **Using default parameter values** (modern & recommended for functional components) :

   ```jsx
   function Button({ label = "Click Me", variant = "primary" }) {
     return <button className={`btn-${variant}`}>{label}</button>;
   }
   ```

2. **Using `defaultProps` static property** (used in class components and older code)

   ```jsx
   function Icon({ name, size = 24 }) {
     return <i className={`icon-${name}`} style={{ fontSize: size }} />;
   }

   Icon.defaultProps = {
     size: 24,
   };
   ```

- Default props are applied only when the prop is `undefined` (not when it's `null`).

---

### 51. Props Validation (PropTypes) :

- PropTypes is a runtime type-checking library that helps catch bugs by validating the types and required status of props.
- Installation (if not using Create React App or Vite template that includes it):

```bash
npm install prop-types
```

Usage :

```jsx
import PropTypes from "prop-types";

function UserInfo({ name, age, isActive, avatar }) {
  return (
    <div>
      <img src={avatar} alt={name} />
      <h2>
        {name} ({age})
      </h2>
      <p>Active: {isActive ? "Yes" : "No"}</p>
    </div>
  );
}

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isActive: PropTypes.bool,
  avatar: PropTypes.string,
  // More validators:
  // onClick: PropTypes.func,
  // items: PropTypes.arrayOf(PropTypes.string),
  // user: PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   name: PropTypes.string
  // })
};
```

Common validators:

- `PropTypes.string`, `.number`, `.bool`, `.func`, `.object`, `.array`
- `.isRequired`
- `.arrayOf()`, `.objectOf()`, `.shape()`, `.oneOf()`, `.oneOfType()`

- **Note**: PropTypes only runs in development mode — zero cost in production.

---

### 52. Children Prop :

- The special `children` prop contains everything passed between the opening and closing JSX tags.

```jsx
function Card({ children, title }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-content">{children}</div>
    </div>
  );
}

// Usage
<Card title="User Profile">
  <p>Name: Akhil</p>
  <p>Location: Port Washington, NY</p>
  <button>Edit</button>
</Card>;
```

- `children` can be:
- String
- JSX element(s)
- Array of elements
- `null` / `undefined` / `false` (ignored in rendering)
- Very common pattern for layout/wrapper components.

---

### 53. Props Drilling :

- _Props drilling_ is the process of passing props through multiple levels of components when they are needed deeper in the tree.

Example of drilling :

```jsx
function App() {
  const user = { name: "Akhil", theme: "dark" };
  return <Layout user={user} />;
}

function Layout({ user }) {
  return <Sidebar user={user} />;
}

function Sidebar({ user }) {
  return <ThemeToggle user={user} />;
}

function ThemeToggle({ user }) {
  return <button>Toggle {user.theme} theme</button>;
}
```

**Problems** :

- Boilerplate
- Hard to maintain
- Components receive props they don't use

**Solutions** :

- React Context API
- State management libraries (Redux, Zustand, Jotai)
- Component composition / render props / children patterns

---

### 54. Immutable Props :

- Props are **read-only** in the component that receives them.
- Never mutate `props` directly (e.g., `props.name = "new"` — forbidden).
- If you need to derive new data, create new variables or use state.
- Immutability ensures predictability and enables optimizations (e.g., `React.memo`, `shouldComponentUpdate`).

Correct:

```jsx
function Display({ user }) {
  const displayName = user.name.toUpperCase(); // new value, props unchanged
  return <h1>{displayName}</h1>;
}
```

Incorrect:

```jsx
function Bad({ user }) {
  user.name = "Changed"; // Never do this!
  return <h1>{user.name}</h1>;
}
```

---

### 55. Passing Functions as Props :

- Functions are commonly passed as props to allow children to communicate upward (callbacks).
- Naming convention: `on` + event name (e.g., `onClick`, `onSubmit`, `onDelete`).

Example :

```jsx
function Parent() {
  const handleDelete = (id) => {
    console.log("Deleting item", id);
  };

  return <Child onDelete={handleDelete} itemId={42} />;
}

function Child({ onDelete, itemId }) {
  return <button onClick={() => onDelete(itemId)}> Delete </button>;
}
```

- This creates unidirectional data flow: parent → child (via props), child → parent (via callback).

---

### 56. Props vs State :

| Aspect              | Props                                       | State                                        |
| ------------------- | ------------------------------------------- | -------------------------------------------- |
| Owned by            | Parent component                            | The component itself                         |
| Mutable?            | No (read-only in child)                     | Yes (via setState / useState)                |
| Purpose             | Pass data/configuration downward            | Manage internal component data/behavior      |
| Causes re-render?   | Yes (when parent re-renders with new props) | Yes (when setState is called)                |
| Can be passed down? | Yes                                         | No (unless lifted to parent or via context)  |
| Typical usage       | Initial values, callbacks, configuration    | Form inputs, toggles, fetched data, UI state |
| Example             | `<User name="Akhil" />`                     | `const [count, setCount] = useState(0)`      |

- **Key Principle** :  
  "If a piece of data is used by multiple components or needs to be updated over time → consider lifting it to state in a common parent (or using context/store). If it's only used inside one component → keep it as local state."

- Props and state together drive the UI: `UI = f(props, state)`.

---
