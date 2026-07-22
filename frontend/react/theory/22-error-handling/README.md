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

## 22. <u> Error Handling </u> -

### 225. Component Rendering Fault Tolerance - Error Boundaries:

In early versions of React, an unhandled JavaScript error thrown inside any single component's rendering loop would corrupt React's internal state. This caused the entire application to crash and blank out the user's screen.

To solve this, React introduced Error Boundaries. These are specialized components that function like a global try/catch block for your user interface. They catch JavaScript errors anywhere in their child component tree, log the error, and display a fallback UI instead of letting the entire page crash.

#### Strict Boundaries & Exclusions:

Error Boundaries catch errors that occur during:

- Component rendering phases.
- Lifecycle methods (e.g., useEffect or class lifecycle methods).
- The constructor phases of the child tree.

However, Error Boundaries do not catch errors that occur within:

- Asynchronous code (e.g., setTimeout, requestAnimationFrame, or active fetch requests).
- Event handlers (e.g., an error thrown inside an onClick callback).
- Server-side rendering (SSR) processes.
- The Error Boundary component itself (it can only catch errors thrown by its children).

---

### 226. Class Components for Error Boundaries:

As of 2026, React requires Error Boundaries to be written as Class Components. The modern hooks API (useEffect, useState) does not yet have equivalents for React's specialized error lifecycle methods: `getDerivedStateFromError` and `componentDidCatch`.

```jsx
import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    // Initialize standard error state flags
    this.state = { hasError: false, error: null };
  }

  // 1. Static lifecycle method to modify state ahead of rendering the fallback
  static getDerivedStateFromError(error) {
    // Returns an object that merges directly into local state
    return { hasError: true, error };
  }

  // 2. Lifecycle method used to perform side effects, like logging errors
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary intercepted a crash:", error);
    console.log("Component stack trace:", errorInfo.componentStack);

    // Example: sendErrorToTelemetryService(error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI if an error occurred
      return (
        this.props.fallback || (
          <div className="error-panel">
            <h2>Application Error</h2>
            <p>Something went wrong within this section of the app.</p>
          </div>
        )
      );
    }

    // Render children normally if no errors occurred
    return this.props.children;
  }
}
```

#### getDerivedStateFromError vs. componentDidCatch:

- getDerivedStateFromError(error): This method runs during the render phase immediately after an error is thrown. It must remain pure and cannot trigger side effects. It's sole purpose is to return an updated state object (e.g., { hasError: true }) so React can render your fallback UI on the very next frame without flashing a broken interface.
- componentDidCatch(error, errorInfo): This method runs during the commit phase after the fallback UI has mounted. This is where you perform imperative side effects, such as logging the error stack trace to an external tracking service.

---

### 227. Asynchronous & Event-Level Failures - Try/Catch in Async Code & Event Handlers:

Because asynchronous code and event handlers run completely outside of React's main rendering loop, errors thrown within them will not trigger an Error Boundary. You must handle these failures manually using standard JavaScript try/catch statements.

```jsx
import { useState } from "react";

function UserProfileCard() {
  const [userData, setUserData] = useState(null);
  const [localError, setLocalError] = useState(null);

  const handleFetchProfile = async () => {
    try {
      setLocalError(null);
      const res = await fetch("https://example.com");
      if (!res.ok) throw new Error("Could not retrieve remote user profile.");
      const data = await res.json();
      setUserData(data);
    } catch (err) {
      // Intercept async failure locally and update UI state manually
      setLocalError(err.message);
    }
  };

  if (localError)
    return <p className="alert">Failed to load profile: {localError}</p>;
  return <button onClick={handleFetchProfile}>Load Profile</button>;
}
```

#### Routing Event Errors to an Error Boundary:

If you want an event handler or async error to bubble up and trigger an Error Boundary, you can force React to evaluate the error during the rendering phase. You do this by catching the error asynchronously, storing it in state, and throwing it during the next render cycle.

```js
const [error, setError] = useState(null);
if (error) throw error; // Thrown during rendering, so the parent Error Boundary will catch it.
```

---

### 228. Architecture & Telemetry Patterns - Error Boundary Placement Patterns:

You can place Error Boundaries at different levels of your application structure to balance resilience with user experience.

#### 1. The Global Monolithic Boundary:

Placing a single Error Boundary at the absolute root of your component tree (wrapping the `<App />` component) acts as a final safety net. If any part of your app crashes, it replaces the entire screen with a global error page. While this prevents a blank screen, it ruins the user experience for minor bugs.

#### 2. Granular Widget-Level Isolation:

Wrapping individual, non-critical dashboard elements (such as a sidebar notifications list, a weather widget, or an analytics graph) in their own separate Error Boundaries ensures that a crash in one widget is contained. The rest of the dashboard remains fully functional, while the broken widget gracefully displays an isolated error card.

```js
function Dashboard() {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        {/* If the graph crashes, the sidebar and nav bar stay interactive */}
        <ErrorBoundary
          fallback={<div className="card">Chart unavailable.</div>}
        >
          <HeavyAnalyticsGraph />
        </ErrorBoundary>
        <MainSidebar />
      </div>
    </div>
  );
}
```

---

### 229. Global Fallback UI Design:

A well-designed fallback UI should reduce user frustration and help them recover from the error. Good fallback UIs include:

- Clear Explanations: Use plain language to explain that a section crashed, avoiding confusing code stack dumps.
- State Preservation Alerts: Let users know if their unsaved form inputs are safe or if they need to back up data.
- Recovery Mechanisms (Reset Buttons): Provide a "Clear Cache & Retry" button that resets the Error Boundary's internal state to let the user try reloading the component.

```js
// Resetting state within an Error Boundary component
handleReset = () => {
  this.setState({ hasError: false, error: null });
};
```

---

### 230. Logging Errors & Telemetry Integration:

In production environments, you shouldn't rely on users reporting errors. Your application needs an automated logging system to capture and monitor issues in real time.

When an Error Boundary's `componentDidCatch` method captures a crash, it should forward a structured payload to a telemetry service like `Sentry`, `LogRocket`, or `Datadog`.

```js
{
  "timestamp": "2026-07-21T14:20:00.000Z",
  "environment": "production",
  "releaseVersion": "v4.2.1",
  "errorMessage": "Cannot read properties of undefined (reading 'map')",
  "url": "https://myapp.com",
  "componentStack": "\n in HeavyAnalyticsGraph (at Dashboard.jsx:8)\n in ErrorBoundary (at Dashboard.jsx:7)"
}
```

#### Source Maps for Tracking:

Because production JavaScript code is minified and bundled, error stack traces often point to unreadable, compressed files (e.g., main.min.js:1:4300).

To fix this, configure your build tools (Vite, Webpack) to generate Source Maps and upload them privately to your logging platform. This translates the minified production errors back into your original source code file names and line numbers, making debugging straightforward.

---
