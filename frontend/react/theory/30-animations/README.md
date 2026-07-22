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

## 30. <u> Animations </u> -

Animations bring user interfaces to life by providing visual continuity, directing user focus, and making interactive states feel tactile. In React, animations range from simple CSS stylesheets to advanced JavaScript physics engines.

### 280. CSS Transitions & CSS Animations:

For simple UI micro-interactions (like hover states, button clicks, or loading spinners), pure CSS remains the most performant choice because it is handled entirely by the browser’s compositing thread.

#### CSS Transitions:

Transitions smoothly change a CSS property value over a specified duration when an element's state changes.

- React implementation: You dynamically toggle a class name based on React state.

```jsx
import "./styles.css";
import React, { useState } from "react";

function ToggleBox() {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      className={`box ${isActive ? "active" : ""}`}
      onClick={() => setIsActive(!isActive)}
    >
      Click Me
    </button>
  );
}
```

```css
/* styles.css */

.box {
  background-color: blue;
  transition:
    background-color 0.3s ease-in-out,
    transform 0.2s ease;
}
.box.active {
  background-color: green;
  transform: scale(1.1);
}
```

#### CSS Animations:

CSS Animations use @keyframes to create complex, multi-step looping or single-shot sequences that don't rely entirely on a simple state transition.

```css
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.spinner {
  animation: spin 1s linear infinite;
}
```

---

### 281. React Transition Group:

The major limitation of native CSS transitions in React is mounting and unmounting. If a component is unmounted `({isVisible && <Box />})`, it disappears instantly, ignoring any CSS fade-out transitions.

react-transition-group solves this by tracking an element's exit state and delaying its actual unmounting until the CSS animation finishes.

```jsx
import "./fade.css";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

function FadeAlert() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      <CSSTransition in={show} timeout={300} classNames="alert" unmountOnExit>
        <div className="alert-box">This alert fades in and out smoothly!</div>
      </CSSTransition>
    </div>
  );
}
```

```css
/* fade.css */

/_ Mounting phase _/ .alert-enter {
  opacity: 0;
}
.alert-enter-active {
  opacity: 1;
  transition: opacity 300ms ease-in;
}

/_ Unmounting phase _/ .alert-exit {
  opacity: 1;
}
.alert-exit-active {
  opacity: 0;
  transition: opacity 300ms ease-out;
}
```

---

### 282. Framer Motion:

**framer-motion** is the industry standard for advanced React animation. It replaces rigid CSS time-based curves with spring physics, making animations feel elastic and natural.

#### Basic Usage:

Instead of complex CSS configurations, you turn standard HTML tags into motion tags and pass animation properties as direct objects.

```jsx
import { motion } from "framer-motion";

function SimpleMotion() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    />
  );
}
```

#### Mount/Unmount Animations (AnimatePresence):

To animate components when they are removed from the React virtual DOM tree, wrap them in AnimatePresence.

```jsx
import { motion, AnimatePresence } from "framer-motion";

function Modal({ isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }} // Triggers seamlessly when isOpen changes to false
          className="modal"
        >
          Modal Content
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

---

### 283. Layout Animations:

In web development, animating layout changes (like elements reordering in a list or shifting when a sibling expands) is notoriously difficult. Framer Motion solves this natively with the layout prop using a technique called `FLIP` (First, Last, Invert, Play).

When code alters the layout, Framer Motion automatically calculates the element's start and end coordinates and animates the difference smoothly.

```jsx
import { useState } from "react";
import { motion } from "framer-motion";

function ExpandableCard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setExpanded(!expanded)}
      className="card"
      style={{ padding: expanded ? "40px" : "20px" }}
    >
      <motion.h2 layout>Click to Expand Card</motion.h2>
      {expanded && <p>This extra text pushes layouts, but smoothly expands!</p>}
    </motion.div>
  );
}
```

---

### 284. Gesture Animations:

Framer Motion simplifies tracking complex pointer events like dragging, hovering, and pressing by converting them into descriptive declarative props.

```jsx
import { motion } from "framer-motion";

function InteractiveElements() {
  return (
    <div className="flex-container">
      {/_ Hover & Tap Gestures _/}
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: "#555" }}
        whileTap={{ scale: 0.95 }}
      >
        Interactive Button
      </motion.button>
      {/* Dragging Gestures with boundaries */}
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
        dragElastic={0.2}
        className="draggable-ball"
      />
    </div>
  );
}
```

---

### 285. Performance Considerations:

Poorly implemented web animations cause layout thrashing and lower your app’s Frame Rate (below 60 FPS), which creates a jarring user experience. Keep these architectural rules in mind:

- Stick to Transform and Opacity: Only animate properties that the browser can offload to the GPU. Changing layout properties like width, height, top, or margin forces the browser to recalculate the entire page blueprint (Layout) and redraw pixels (Paint). Modifying `transform: scale()`, `transform: translateX()`, and `opacity` bypasses this costly recalculation.

- Use will-change sparingly: For heavy CSS animations, adding `will-change: transform;` signals the browser to optimize the element beforehand. Use it only on elements that animate continuously, as over-allocating GPU layers degrades overall mobile performance.

- Orchestrate updates with `requestAnimationFrame`: If you are building highly customized javascript loops or tracking window scroll events for complex path animations, use the browser's native requestAnimationFrame API to ensure code executes exactly right before the next monitor refresh cycle.

- Lazy Load Animation Libraries: Libraries like Framer Motion or Three.js increase bundle sizes significantly. Utilize React's `React.lazy()` or `Next.js` dynamic imports to download those chunked scripts only when a user opens an animated dashboard or opens a heavy modal interface.

---
