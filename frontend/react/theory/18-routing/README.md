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

## 18. <u> Routing </u> -

### 197. Routing Core Mechanics - Single Page Applications (SPA) & Client-Side Routing:

In a traditional multi-page website, clicking a link forces the browser to request a brand-new HTML document from the server, causing a noticeable page refresh.

React applications are Single Page Applications (SPAs). They load only one minimal HTML file on startup. Client-side routing intercepts browser navigation, dynamically updates the URL bar via the HTML5 History API, and swaps out parts of the React component tree on the screen instantly—all without a single full-page reload.

---

### 198. Router Variants - BrowserRouter vs. HashRouter:

To enable routing, you must wrap your root application inside a Router provider component.

```js
// BrowserRouter URL: https://example.com
import { BrowserRouter } from "react-router-dom";

// HashRouter URL: https://example.com
import { HashRouter } from "react-router-dom";
```

#### BrowserRouter:

- Uses the modern standard browser HTML5 History API (pushState, replaceState).
- Generates clean, standard URL paths (e.g., /about, /users/profile).
- Server Requirement: Requires production web servers (Nginx, Apache, Netlify, Vercel) to be explicitly configured to route all incoming requests back to the main `index.html` file. Otherwise, refreshing a page at /dashboard will result in a standard server 404 Not Found error.

#### HashRouter:

- Uses the URL hash fragment (the portion after the # symbol) to simulate routing.
- The browser never sends the hash fragment to the web server.
- Useful for legacy architectures, static shared files open directly from a hard drive, or cheap hosting environments where you have zero access to configure server fallback rules.

---

### 199. Declarative Structural Components: Routes & Route:

Routes and Route are the structural foundation blocks used to declare matching paths to target UI components.

```jsx
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
```

- `<Routes>`: Functions like a switch statement. It examines the current browser URL location, searches through its immediate children, and renders only the single best matching `<Route>`.
- `<Route>`: Takes a path string and an element containing the React component to mount when that path matches the browser address bar.
- 404 Pages (path="_"): The asterisk _ acts as a wildcard catch-all symbol. If the router checks all listed routes sequentially and finds no matching path, it falls back to render the 404 error component assigned to this wildcard route.

---

### 200. Client-Side Navigation - Link vs. NavLink:

Using standard HTML `<a href="...">` anchor tags in React causes a full browser page refresh, completely wiping out your local application memory/state. React Router replaces them with declarative components.

```jsx
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      {/* Basic Link */}
      <Link to="/profile">Profile</Link>

      {/* NavLink for Navigation Bars */}
      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? "active-tab" : "inactive-tab")}
      >
        Dashboard
      </NavLink>
    </nav>
  );
}
```

- `<Link>`: Compiles down to an anchor tag in the DOM but overrides the default click behavior, safely changing the URL path and updating the component tree smoothly in place.
- `<NavLink>`: A specialized wrapper designed specifically for active navigation states. It knows exactly when its target path matches the current browser location. It accepts a function in its className or style props, allowing you to dynamically apply CSS classes based on the isActive state.

---

### 201. Dynamic Routing & Context Hooks - Dynamic Routing & useParams:

Dynamic Routing allows a route to match varying patterns rather than static strings (e.g., routing thousands of unique profile pages using a single generic structural template). You specify dynamic segments in the path parameter by prefixing them with a colon (:).

```jsx
// In Route Configuration:
<Route path="/user/:userId" element={<UserProfile />} />;

// In UserProfile Component:
import { useParams } from "react-router-dom";

function UserProfile() {
  // Extract URL parameters cleanly as an object
  const { userId } = useParams();
  return <h1>Viewing Profile for User ID: {userId}</h1>;
}
```

---

### 202. State & URL Management Hooks - useLocation:

Returns the current browser location object, reflecting where the user currently stands in the app. This is highly useful for analytics page tracking, or reading raw location hashes.

```js
const location = useLocation();
console.log(location.pathname); // Output: "/dashboard/settings"
```

#### useSearchParams:

Reads and updates values embedded inside standard URL query strings (the arguments following the ? marker). It acts exactly like a React useState hook, but synchronizes state explicitly inside the browser URL string.

```jsx
import { useSearchParams } from "react-router-dom";

function ProductCatalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category"); // reads "?category=shoes"

  return (
    <button onClick={() => setSearchParams({ category: "electronics" })}>
      Filter Electronics
    </button>
  );
}
```

#### useNavigate:

Enables imperative programmatic navigation inside your custom JavaScript functions, like auto-redirecting a user after a successful login form submission.

```jsx
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Authenticate user logic here...
    navigate("/dashboard", { replace: true }); // 'replace: true' overwrites history stack history
  };

  return <button onClick={handleLogin}>Log In</button>;
}
```

---

### 203. Structural & Architectural Layouts - Nested Routes & Layout Routes:

Nested Routing mirrors complex UI structural hierarchies directly inside your URL layout (e.g., displaying a persistent Sidebar and Topbar navbar across an entire collection of different internal dashboard pages).

To implement this, you nest `<Route>` tags inside a parent `<Route>`. The parent layout component uses the `<Outlet>` component to define precisely where child nested elements should paint on the screen.

```jsx
import { Routes, Route, Outlet } from "react-router-dom";

// 1. Shared Layout Component
function DashboardLayout() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">Navigation Menu</aside>
      <main className="content-area">
        {/* Child components render inside this Outlet placeholder */}
        <Outlet />
      </main>
    </div>
  );
}

// 2. Application Config Tree
function App() {
  return (
    <Routes>
      {/* Layout Route */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        {/* Nested Routes inside Layout */}
        <Route path="analytics" element={<AnalyticsPage />} />{" "}
        {/* URL: /dashboard/analytics */}
        <Route path="settings" element={<SettingsPage />} />{" "}
        {/* URL: /dashboard/settings */}
      </Route>
    </Routes>
  );
}
```

---

### 204. Protected Routes & Route Guards:

Protected Routes (or route guards) restrict application URLs to authenticated users, automatically kicking unauthenticated traffic back to a generic public landing screen or login form.

You build this pattern by creating a custom higher-order structural layout wrapper that intercepts navigation conditionally based on global authorization flags.

```jsx
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ isAuthenticated }) {
  if (!isAuthenticated) {
    // Hard redirect to login screen, saving their intended destination in history
    return <Navigate to="/login" replace />;
  }

  // Render sub-routes if authenticated
  return <Outlet />;
}

// Usage in Route configuration:
<Routes>
  <Route path="/public" element={<PublicHome />} />

  {/* Wrap protected pages together under the Guard component */}
  <Route element={<ProtectedRoute isAuthenticated={userLoggedIn} />}>
    <Route path="/admin" element={<AdminDashboard />} />
    <Route path="/billing" element={<BillingPortal />} />
  </Route>
</Routes>;
```

---

### 205. Performance Optimization - Lazy Loaded Routes:

By default, standard JavaScript imports bundle your entire web application code into a single, massive file that the browser must download completely on startup.

Lazy Loading splits your application into small chunks. The browser only downloads the specific page file it needs when the user explicitly navigates to that path. This is achieved using `React.lazy()` along with the `<Suspense>` boundary element.

```jsx
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Code split imports via React.lazy
const LazyAdmin = React.lazy(() => import("./pages/AdminDashboard"));
const LazyProfile = React.lazy(() => import("./pages/UserProfile"));

function App() {
  return (
    <Routes>
      <Route
        path="/admin"
        element={
          <Suspense fallback={<div>Loading Page Resources...</div>}>
            <LazyAdmin />
          </Suspense>
        }
      />
      <Route
        path="/profile"
        element={
          <Suspense fallback={<div>Loading User Profile...</div>}>
            <LazyProfile />
          </Suspense>
        }
      />
    </Routes>
  );
}
```

---
