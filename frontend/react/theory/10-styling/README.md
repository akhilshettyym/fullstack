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

## 10. <u> Styling in React </u> -

- React offers multiple approaches to styling components, ranging from traditional CSS to modern CSS-in-JS solutions. Each method has its strengths, trade-offs, and best use cases. The choice often depends on project size, team preferences, performance requirements, and whether you want scoped styles, theming, or utility-first development.

---

### 98. Inline Styles :

- Inline styles in React are applied directly via the `style` prop, which accepts a **JavaScript object** with camelCase properties.

```jsx
function Button({ isActive }) {
  return (
    <button
      style={{
        backgroundColor: isActive ? "#4CAF50" : "#f44336",
        color: "white",
        padding: "12px 24px",
        border: "none",
        borderRadius: "4px",
        fontSize: "16px",
        cursor: "pointer",
        opacity: isActive ? 1 : 0.6,
        transition: "all 0.3s ease",
      }}
    >
      Click me
    </button>
  );
}
```

**Pros** :

- Dynamic styling is trivial (values from state/props)
- No extra files or build steps
- Scoped to the component

**Cons** :

- No pseudo-classes (`:hover`, `:focus`) or media queries
- Harder to maintain for large components
- No caching/reuse of styles
- Verbose syntax (camelCase, no shorthand like `padding: 12px 24px`)
- Best for : Small components, dynamic values, prototyping.

---

### 99. CSS Stylesheets :

- Classic approach: write CSS in `.css` files and import them.

```css
/* styles/Button.css */
.button {
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}
.button-primary {
  background-color: #4caf50;
  color: white;
}
.button-danger {
  background-color: #f44336;
  color: white;
}
```

```jsx
import "./Button.css";

function Button({ variant = "primary" }) {
  return <button className={`button button-${variant}`}>Click me</button>;
}
```

**Pros**:

- Familiar to everyone
- Full CSS features (pseudo-classes, media queries, animations)
- Easy to share across components

**Cons**:

- Global namespace → class name collisions possible
- No automatic scoping
- Harder to make truly dynamic
- Best for: Small projects, teams already comfortable with plain CSS.

---

### 100. CSS Modules :

- CSS Modules solve the global namespace problem by **automatically generating unique class names**.

```css
/* Button.module.css */
.button {
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
}
.primary {
  background-color: #4caf50;
  color: white;
}
.danger {
  background-color: #f44336;
  color: white;
}
```

```jsx
import styles from "./Button.module.css";

function Button({ variant = "primary" }) {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>Click me</button>
  );
}
```

**Pros**:

- Locally scoped class names (no collisions)
- Clear connection between CSS and component
- Works with all CSS features

**Cons**:

- Slightly more verbose imports
- Requires build tool support (Create React App, Vite, Next.js all support it)
- Best for : Medium to large projects that want scoped CSS without CSS-in-JS.

---

### 101. Styled Components :

- A popular **CSS-in-JS** library that lets you write actual CSS inside JavaScript and creates styled components.

```jsx
import styled from "styled-components";

const Button = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${(props) =>
    props.variant === "primary" ? "#4CAF50" : "#f44336"};
  color: white;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.9;
  }
`;

function App() {
  return <Button variant="primary">Click me</Button>;
}
```

**Pros**:

- Full CSS support + dynamic props
- Automatic scoping (unique class names)
- Theming support via `ThemeProvider`
- Great developer experience (colocation of styles and component)

**Cons**:

- Runtime overhead (styles injected at runtime)
- Larger bundle size
- Learning curve if new to CSS-in-JS

---

### 102. Emotion :

- Emotion is a lightweight, performant CSS-in-JS library with two main APIs: `styled` (like styled-components) and `css` prop.

```jsx
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const buttonStyles = css`
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: white;

  &:hover {
    background-color: #45a049;
  }
`;

function Button() {
  return <button css={buttonStyles}>Click me</button>;
}
```

- Or using `styled` :

```jsx
import styled from "@emotion/styled";

const Button = styled.button`
  padding: 12px 24px;
  /* ... */
`;
```

**Pros** :

- Very fast (better runtime performance than styled-components)
- `css` prop is extremely flexible
- Great TypeScript support
- Theming via `ThemeProvider`
- Best for: Performance-sensitive apps, modern React projects.

---

### 103. SCSS/SASS :

- **SASS extends CSS** with variables, nesting, mixins, etc. Use with `.scss` files and CSS Modules or plain imports.

```scss
// Button.module.scss
$primary: #4caf50;
$danger: #f44336;

.button {
  padding: 12px 24px;
  border: none;
  border-radius: 4px;

  &.primary {
    background-color: $primary;
    color: white;
  }

  &.danger {
    background-color: $danger;
    color: white;
  }

  &:hover {
    opacity: 0.9;
  }
}
```

```jsx
import styles from "./Button.module.scss";

<button className={`${styles.button} ${styles.primary}`}>Click me</button>;
```

**Pros** :

- Powerful features (variables, nesting, mixins, functions)
- Familiar to CSS developers
- Works well with CSS Modules

**Cons** :

- Requires build tool support
- Still global unless using modules

---

### 104. Tailwind CSS :

- Utility-first CSS framework — write styles using class names directly in JSX.

```jsx
<button
  className={`
    px-6 py-3 rounded-md font-medium text-white transition
    ${
      isPrimary
        ? "bg-green-600 hover:bg-green-700"
        : "bg-red-600 hover:bg-red-700"
    }
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
  `}
>
  Click me
</button>
```

- With Tailwind + `clsx`/`cn` helper :

```jsx
import { cn } from "@/lib/utils";

<button
  className={cn(
    "px-6 py-3 rounded-md font-medium text-white transition",
    isPrimary
      ? "bg-green-600 hover:bg-green-700"
      : "bg-red-600 hover:bg-red-700",
    disabled && "opacity-50 cursor-not-allowed",
  )}
>
  Click me
</button>;
```

**Pros** :

- Extremely fast development
- Consistent design
- No context switching between CSS and JSX
- Excellent responsive utilities

**Cons** :

- Long class strings
- Requires discipline to avoid bloat
- Learning curve for utility classes

---

### 105. CSS-in-JS :

- General term for libraries that let you write CSS in JavaScript (Emotion, styled-components, JSS, Linaria, Vanilla Extract, etc.).

**Advantages** :

- Scoped styles
- Dynamic values via props/state
- Theming
- Colocation (styles next to component)

**Disadvantages** :

- Runtime cost (some libraries)
- Larger bundles
- Different mental model than traditional CSS

---

### 106. Dynamic Styling :

- Change styles based on state, props, or runtime values.
- Examples :

```jsx
// Inline
style={{ color: isActive ? 'green' : 'red' }}

// Tailwind
className={cn("text-lg", isActive && "font-bold text-green-600")}

// CSS Modules
className={styles[isActive ? 'active' : 'inactive']}

// Emotion
css`color: ${isActive ? 'green' : 'red'};`
```

---

### 107. Conditional Styling :

- Combine dynamic + conditional patterns (see section 8 for more examples).

```jsx
<div
  className={cn(
    "p-4 rounded-lg",
    isSuccess
      ? "bg-green-100 border-green-500"
      : isError
        ? "bg-red-100 border-red-500"
        : "bg-gray-100 border-gray-300",
  )}
>
  {message}
</div>
```

---

### 108. Global Styles :

- Apply styles that affect the entire app (reset, typography, etc.).
- Common approaches :
- Import a global CSS file in `index.js` / `main.tsx`
  ```jsx
  import "./global.css";
  ```
- Use `:root` or `body` selectors
- Styled-components `createGlobalStyle`

  ```jsx
  import { createGlobalStyle } from "styled-components";

  const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      font-family: 'Inter', sans-serif;
    }
  `;
  ```

---

### 109. Theming :

- Centralized theme management for consistent colors, typography, spacing.
- Common solutions :
- **styled-components / Emotion** `ThemeProvider`
  ```jsx
  <ThemeProvider theme={{ colors: { primary: "#4CAF50" } }}>
    <App />
  </ThemeProvider>
  ```
- **Tailwind** with custom config (`tailwind.config.js`)
- **CSS Variables** (see below)

---

### 110. CSS Variables (Custom Properties) :

- Modern, powerful way to handle theming and dynamic styles.

```css
/* global.css */
:root {
  --primary: #4caf50;
  --danger: #f44336;
  --spacing-unit: 8px;
}

.dark {
  --primary: #66bb6a;
}
```

```jsx
<button style={{ backgroundColor: "var(--primary)" }}>Click</button>
```

- Or in Tailwind :

```jsx
<div className="bg-[--primary] text-white">Themed</div>
```

- **Advantages**: Works everywhere, dynamic updates via JS, great for dark mode.

---

### 111. Responsive Design in React :

- Common patterns :

1. **Tailwind responsive utilities**

   ```jsx
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
   ```

2. **Media queries in CSS/SCSS**

   ```scss
   .container {
     padding: 1rem;
     @media (min-width: 768px) {
       padding: 2rem;
     }
   }
   ```

3. **useMediaQuery** hook (custom or from libraries like `react-responsive`)

   ```jsx
   const isMobile = useMediaQuery("(max-width: 768px)");

   return isMobile ? <MobileNav /> : <DesktopNav />;
   ```

4. **CSS Container Queries** (emerging, modern browsers)

- Best practice: Prefer utility-first (Tailwind) or CSS variables + media queries for maintainable responsive design.

**Summary – Choosing a Styling Approach**

| Approach          | Best For                          | Scoping | Dynamic   | Theming   | Bundle Size  | Learning Curve |
| ----------------- | --------------------------------- | ------- | --------- | --------- | ------------ | -------------- |
| Inline            | Small components, prototyping     | Yes     | Excellent | Poor      | None         | Low            |
| Plain CSS         | Small apps, traditional teams     | No      | Poor      | Poor      | None         | Low            |
| CSS Modules       | Medium/large apps, scoped CSS     | Yes     | Good      | Poor      | None         | Medium         |
| Styled Components | Theming, colocation, large apps   | Yes     | Excellent | Excellent | Medium       | Medium         |
| Emotion           | Performance, modern apps          | Yes     | Excellent | Excellent | Small        | Medium         |
| Tailwind CSS      | Rapid development, design systems | No\*    | Excellent | Excellent | Small–Medium | Medium         |
| SCSS + Modules    | Teams that love SASS features     | Yes     | Good      | Poor      | None         | Medium         |

- \*Tailwind can be scoped with `@apply` or component libraries.

---
