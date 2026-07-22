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

## 8. <u> Conditional Rendering </u> -

- Conditional rendering in React refers to showing or hiding parts of the UI based on certain conditions (usually state, props, or other data). React has **no built-in directives** like `v-if` (Vue) or `*ngIf` (Angular). Instead, you use plain JavaScript control flow inside JSX or before the `return` statement.
- All techniques below rely on the fact that JSX expressions can evaluate to:
- JSX elements
- Strings / numbers
- `null` / `undefined` / `false` / `true` → these are **not rendered** in the DOM

---

### 80. if Statements :

- Use regular `if` statements **outside** the JSX `return` to decide what to render.
- Most readable for complex logic or multiple branches.

```jsx
function Dashboard({ isLoggedIn, userRole }) {
  let content;

  if (!isLoggedIn) {
    content = <LoginPrompt />;
  } else if (userRole === "admin") {
    content = <AdminPanel />;
  } else if (userRole === "moderator") {
    content = <ModeratorTools />;
  } else {
    content = <UserDashboard />;
  }

  return (
    <div className="dashboard">
      <h1>Welcome</h1>
      {content}
    </div>
  );
}
```

- Alternative : Early return pattern (very common)

```jsx
function Profile({ user }) {
  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  if (user.isBanned) {
    return <div>Your account has been suspended.</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Location: {user.location}</p>
    </div>
  );
}
```

- **When to use** : Complex conditions, multiple return paths, early exits.

---

### 81. Ternary Operator :

- The most common inline conditional pattern in JSX.
- Syntax : `condition ? trueExpression : falseExpression`

```jsx
function Greeting({ isLoggedIn, name = "Guest" }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back, {name}!</h1> : <h1>Please sign in</h1>}

      <p>You are {isLoggedIn ? "logged in" : "not logged in"}.</p>
    </div>
  );
}
```

- Nested ternaries (use sparingly — can become hard to read) :

```jsx
{
  status === "loading" ? (
    <Spinner />
  ) : status === "error" ? (
    <ErrorMessage message="Failed to load data" />
  ) : (
    <DataList items={items} />
  );
}
```

- **Best practice**: Keep ternaries shallow (1–2 levels). Extract to variables or early returns for deeper logic.

---

### 82. Logical && Operator :

- _Short-circuit evaluation_ : renders the right side **only if** the left side is truthy.
- Very popular for "show this if condition is true, otherwise nothing".

```jsx
function Notification({ unreadCount }) {
  return (
    <div>
      <h2>Messages</h2>
      {unreadCount > 0 && <span className="badge">{unreadCount} new</span>}
      {isAdmin && <AdminToolbar />}
    </div>
  );
}
```

- Also useful with falsy checks :

```jsx
{
  error && <div className="error">{error}</div>;
}
{
  items.length === 0 && <p>No items found.</p>;
}
```

- **Caution** : Be careful with `0`, `""`, etc. — they are falsy.

```jsx
{
  count && <p>You have {count} items</p>;
} // Won't show when count = 0
```

- Fix : Use explicit comparison

```jsx
{
  count !== 0 && <p>You have {count} items</p>;
}
{
  !!count && <p>You have {count} items</p>;
} // double negation
```

---

### 83. Switch Statements :

- Use `switch` **outside** JSX when you have many discrete cases.

```jsx
function StatusBadge({ status }) {
  let badgeClass;
  let label;

  switch (status) {
    case "success":
      badgeClass = "bg-green-500";
      label = "Success";
      break;
    case "warning":
      badgeClass = "bg-yellow-500";
      label = "Warning";
      break;
    case "error":
      badgeClass = "bg-red-500";
      label = "Error";
      break;
    default:
      badgeClass = "bg-gray-500";
      label = "Unknown";
  }
  return <span className={`badge ${badgeClass}`}>{label}</span>;
}
```

- Alternative: Object lookup (often cleaner)

```jsx
const statusStyles = {
  success: { class: "bg-green-500", label: "Success" },
  warning: { class: "bg-yellow-500", label: "Warning" },
  error: { class: "bg-red-500", label: "Error" },
};

function StatusBadge({ status }) {
  const style = statusStyles[status] || {
    class: "bg-gray-500",
    label: "Unknown",
  };
  return <span className={`badge ${style.class}`}>{style.label}</span>;
}
```

### 84. Conditional Components :

- Render different component types based on condition.

```jsx
function PageContent({ role }) {
  return (
    <main>
      {role === "admin" ? <AdminView /> : <UserView />}
      {/* or */}
      {role === "admin" && <AdminOnlyFeatures />}
    </main>
  );
}
```

- Also common : Conditional import (dynamic) with `React.lazy` + `Suspense`

```jsx
const AdminPanel = React.lazy(() => import("./AdminPanel"));

return isAdmin ? (
  <Suspense fallback={<Loading />}>
    <AdminPanel />
  </Suspense>
) : (
  <RegularDashboard />
);
```

---

### 85. Guard Clauses :

- Guard clauses are early returns that handle invalid/edge cases first.
- Very clean pattern for components with preconditions.

```jsx
function UserProfile({ user, isLoading }) {
  if (isLoading) return <LoadingSpinner />;
  if (!user) return <NotFound message="User not found" />;
  if (user.isPrivate && !user.isFriend) {
    return <PrivateProfileMessage />;
  }

  // Main render
  return (
    <div>
      <Avatar src={user.avatar} />
      <h1>{user.name}</h1>
      {/* ... */}
    </div>
  );
}
```

---

### 86. Conditional Styling :

- Apply classes or inline styles conditionally.

1. **Class names** (most common) :

   ```jsx
   <div className={`card ${isFeatured ? "featured" : ""} ${isDark ? "dark-mode" : ""}`}>
   ```

   Libraries that help :
   - `clsx` / `classnames`
   - Tailwind merge (`twMerge`, `cn` helper)

   ```jsx
   import { cn } from "@/lib/utils";

   <div className={cn("card", isFeatured && "featured", isDark && "dark-mode")}>
   ```

2. **Inline styles** :
   ```jsx
   <div style={{
     backgroundColor: isActive ? "#4CAF50" : "#f44336",
     fontWeight: important ? "bold" : "normal",
     opacity: disabled ? 0.6 : 1
   }}>
   ```

---

### 87. Conditional Props :

- Pass props conditionally (very common pattern).

```jsx
<Button
  variant={isPrimary ? "primary" : "secondary"}
  disabled={isSubmitting || !isValid}
  size={isMobile ? "small" : "medium"}
  onClick={handleSubmit}
  {...(isLoading && { "aria-busy": "true" })}
/>
```

- Spread pattern for multiple conditional props :

```jsx
const extraProps = {
  ...(isError && { "aria-invalid": true, "aria-describedby": "error-msg" }),
  ...(isSuccess && { "aria-describedby": "success-msg" }),
};

return <input {...extraProps} />;
```

**Summary Table – When to Use Which** :

| Technique         | Best For                            | Inline? | Readability | Complexity |
| ----------------- | ----------------------------------- | ------- | ----------- | ---------- |
| Early return / if | Preconditions, loading/error states | No      | High        | Any        |
| Ternary           | Simple two-way choice               | Yes     | Good        | Low–Medium |
| && operator       | Show/hide single element            | Yes     | Excellent   | Low        |
| Object lookup     | Many fixed cases                    | No      | High        | Medium     |
| Guard clauses     | Defensive component entry           | No      | Very high   | Any        |
| cn/clsx helpers   | Complex class names                 | Yes     | Excellent   | Any        |

---
