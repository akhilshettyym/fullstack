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

## 3. <u> JSX </u> -

JSX (JavaScript XML) is a syntax extension to JavaScript that looks similar to HTML/XML and is commonly used with React to describe what the UI should look like. It was introduced by React and is not part of the JavaScript language specification, but it gets transpiled (usually by Babel) into regular JavaScript function calls — specifically `React.createElement()` calls.

- JSX makes React code more readable and declarative compared to writing pure `React.createElement()` trees manually.

---

### 24. JSX Syntax Rules :

- JSX follows strict rules to ensure it can be reliably transpiled:

1. **Must return a single root element** :
   Every JSX expression must resolve to exactly one **top-level** element (or a fragment). You cannot return multiple sibling elements without wrapping them.

   ```jsx
   // Invalid
   return <h1>Title</h1><p>Paragraph</p>;

   // Valid
   return (
     <div>
       <h1>Title</h1>
       <p>Paragraph</p>
     </div>
   );
   ```

2. **All tags must be properly closed** :
   JSX is XML-like, so self-closing tags are required for elements without children.

   ```jsx
   <img src="logo.png" alt="Logo" />        // Correct
   <img src="logo.png" alt="Logo">          // Invalid
   ```

3. **Use camelCase for attribute names** :
   HTML attributes are case-insensitive and use **kebab-case**, but JSX uses **camelCase** to match JavaScript property names.

   ```jsx
   <div className="container" tabIndex="0">  // Correct
   <div class="container" tabindex="0">      // Invalid in JSX
   ```

4. **JavaScript expressions go inside curly braces `{}`** :
   Anything inside `{}` is evaluated as JavaScript.

5. **No inline HTML comments** :
   Use JavaScript-style comments inside `{}`.

6. **Attributes that are reserved JavaScript words are renamed** :
   `class` → `className`, `for` → `htmlFor`.

---

### 25. JSX vs HTML :

| Aspect            | HTML                             | JSX (in React)                              |
| ----------------- | -------------------------------- | ------------------------------------------- |
| Syntax            | Markup language                  | JavaScript syntax extension                 |
| Attributes        | `class`, `for`, lowercase        | `className`, `htmlFor`, camelCase           |
| Comments          | `<!-- comment -->`               | `{/* comment */}`                           |
| Event handling    | `onclick="jsCode()"`             | `onClick={handleClick}` (camelCase)         |
| Styling           | `style="color: red;"`            | `style={{ color: 'red' }}` (object)         |
| Execution         | Static, parsed by browser        | Transpiled to `React.createElement()` calls |
| Logic             | Limited (mostly via script tags) | Full JavaScript expressions allowed         |
| Self-closing tags | Optional for void elements       | Required                                    |

- JSX is **not** HTML — it’s syntactic sugar for creating React elements.

---

### 26. Expressions in JSX :

- Any valid JavaScript expression can be embedded inside curly braces `{}`.

```jsx
function Welcome() {
  const name = "Akhil";
  const isLoggedIn = true;
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <h1>Hello, {name.toUpperCase()}!</h1>
      <p>Year: {currentYear}</p>
      <p>Status: {isLoggedIn ? "Active" : "Guest"}</p>
      <p>2 + 2 = {2 + 2}</p>
    </div>
  );
}
```

Expressions can include :

- Variables
- Calculations
- Function calls
- Ternary operators
- Template literals
- Array methods (`.map()`, etc.)
- **Note** : You cannot use statements (if, for, while, etc.) directly inside `{}` — only expressions.

---

### 27. Embedding Variables :

- Variables are embedded using curly braces:

```jsx
const user = {
  name: "Akhil",
  age: 30,
  location: "Port Washington, NY",
};

return (
  <div>
    <h2>{user.name}</h2>
    <p>Age: {user.age}</p>
    <p>From: {user.location}</p>
  </div>
);
```

- You can also embed object properties, array items, or computed values directly.

---

### 28. Conditional Rendering in JSX :

- React does not have built-in directives like `v-if` or `*ngIf`. Instead, use JavaScript control flow inside JSX.

#### Common patterns :

**Ternary Operator** - Most popular for inline conditions :

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back, Akhil!</h1> : <h1>Please sign in.</h1>}
    </div>
  );
}
```

**Logical AND (&&) Rendering** :

- Short-circuit evaluation — renders only if the left side is truthy:

```jsx
function Notification({ unreadMessages }) {
  return (
    <div>
      <h1>Mailbox</h1>
      {unreadMessages.length > 0 && (
        <p>You have {unreadMessages.length} unread messages!</p>
      )}
    </div>
  );
}
```

- Very common pattern for "show if condition is true, otherwise nothing".

**If Statements (Outside JSX)** :

- For more complex logic, move conditionals outside the return:

```jsx
function Dashboard({ user }) {
  let content;

  if (!user) {
    content = <p>Please log in</p>;
  } else if (user.role === "admin") {
    content = <AdminPanel />;
  } else {
    content = <UserPanel />;
  }

  return <div>{content}</div>;
}
```

**JSX Fragments** :

- Fragments let you group elements without adding extra DOM nodes. Introduced in React 16.2. Two syntaxes :

1. **Short syntax** (preferred):
   ```jsx
   return (
     <>
       <h1>Title</h1>
       <p>Paragraph</p>
       <footer>© 2026</footer>
     </>
   );
   ```
2. **Explicit `<Fragment>`** (useful when you need a key):

   ```jsx
   import { Fragment } from "react";

   return (
     <Fragment key="unique-key">
       <h1>Title</h1>
       <p>Content</p>
     </Fragment>
   );
   ```

- Fragments are especially useful in lists, tables, or when returning multiple elements from a component.

---

### 29. JSX Attributes :

- Attributes in JSX use _camelCase_ and accept JavaScript expressions :

```jsx
<img
  src={imageUrl}
  alt={`Profile of ${user.name}`}
  className={isActive ? "avatar active" : "avatar"}
  width={size}
  onClick={handleClick}
/>
```

Special cases:

- `style` → object (see below)
- `className` instead of `class`
- `htmlFor` instead of `for`
- Boolean attributes: `<input disabled />` = `<input disabled={true} />`

---

### 30. JSX Styling :

- Two main ways to apply styles:

1. **Inline styles** (object syntax):

   ```jsx
   const style = {
     color: "royalblue",
     fontSize: "1.5rem",
     backgroundColor: isDark ? "#333" : "#fff",
     padding: "16px",
   };
   return <div style={style}>Styled content</div>;
   ```

   - Uses camelCase properties
   - Values are usually strings (except numeric values for px)

2. **CSS classes** (most common):
   ```jsx
   <div className={`card ${isFeatured ? "featured" : ""}`}>Content</div>
   ```
   Often combined with libraries like:
   - Tailwind CSS
   - CSS Modules
   - styled-components
   - Emotion

---

### 31. JSX Comments :

- You cannot use HTML comments in JSX. Use JavaScript comments inside curly braces:

```jsx
<div>
  {/* This is a single-line comment */}
  {/* 
    This is a 
    multi-line comment 
  */}
  <p>Content</p>
</div>
```

- Multi-line comments must be wrapped in `{}` even if they span lines.

---

### 32. JSX Spread Attributes :

- Spread operator (`...`) is useful for passing multiple props at once:

```jsx
const buttonProps = {
  type: "submit",
  disabled: isSubmitting,
  className: "btn-primary",
};
return <button {...buttonProps}>Submit</button>;
```

Common use cases:

- Passing down props to child components
- Merging default props with overrides
- Working with libraries that provide prop objects

---

### 33. JSX Children :

- Children are content passed between opening and closing tags:

```jsx
<Layout>
  <Header />
  <main>Main content goes here</main>
  <Footer year={2026} />
</Layout>
```

Children can be:

- Strings: `<p>Hello</p>`
- JSX elements
- Arrays of elements
- Numbers (rendered as strings)
- `null`, `undefined`, `true`, `false` (ignored)
- Access children in a component via `props.children`:

```jsx
function Layout({ children }) {
  return (
    <div className="layout">
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}
```

---

### 34. JSX Keys Concept :

- Keys help React identify which items have changed, been added, or removed in lists. They must be unique among siblings.
- Correct usage:

```jsx
const todos = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Build project" },
];

return (
  <ul>
    {todos.map((todo) => (
      <li key={todo.id}>{todo.text}</li>
    ))}
  </ul>
);
```

**Best practices**:

- Use stable, unique IDs from data (database ID, UUID)
- Never use array index as key (anti-pattern when list order changes)

**Wrong**:

```jsx
{
  todos.map((todo, index) => <li key={index}>{todo.text}</li>);
}
```

- This causes bugs during reordering, filtering, or animations.
  **Why keys matter** : React uses keys during reconciliation to minimize DOM operations and preserve component state (e.g., form input focus).
- Use `React.Fragment` with `key` when you need fragments in a list:

```jsx
{
  items.map((item) => (
    <Fragment key={item.id}>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </Fragment>
  ));
}
```

---
