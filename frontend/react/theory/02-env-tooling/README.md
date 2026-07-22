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

## 2. <u> Environment & Tooling Basics </u> -

### 11. Node.js Basics (for React) :

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

### 12. npm :

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

### 13. yarn :

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

### 14. pnpm (performant npm) :

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

### 15. Package.json :

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

### 16. Semantic Versioning :

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

### 17. Create React App (CRA) :

- **Create React App (CRA)** is an official CLI tool from Facebook (Meta) for bootstrapping React applications without manual configuration. Launched in 2016, it's ideal for beginners.

#### Usage :

- **Install** : `npx create-react-app my-app` (npx runs without global install).
- **Structure** : Generates folders like `src/` (App.js, index.js), `public/` (index.html).
- **Commands** : `npm start` (dev server), `npm build` (production bundle), `npm test` (Jest), `npm eject` (expose configs).
- **Under the Hood** : Uses Webpack, Babel, ESLint; supports CSS/Sass, TypeScript (via templates).
- **Pros** : Zero-config, fast setup.
- **Cons** : Bloated for large apps; ejection is one-way. As of 2026, alternatives like Vite are gaining traction for speed.

---

### 18. Vite :

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

### 19. Parcel :

- _Parcel_ is a zero-config web application bundler introduced in 2017, supporting React out-of-the-box with fast builds and HMR.

#### Features :

- **Setup** : `npm install --save-dev parcel`, add script: "start" : "parcel index.html".
- **Auto-Handling** : Transpiles JSX/TS, optimizes images/CSS, code-splitting.
- **Build** : `parcel build index.html` for production.
- **Pros** : Simple, fast (multi-core), no config needed.
- **Cons** : Less customizable than Webpack; community smaller.
- Great for quick React prototypes.

---

### 20. Webpack Basics :

- _Webpack_ is a module bundler for JavaScript apps, core to many React setups (e.g., CRA). It bundles JS, CSS, images into static assets.

#### Basics :

- **Config** : `webpack.config.js` with entry (starting file), output (bundle path), loaders (e.g., babel-loader for JSX), plugins (e.g., HtmlWebpackPlugin).
- **Modes** : Development (source maps), Production (minification).
- **Dev Server** : Via webpack-dev-server for HMR.
- **In React** : Transforms JSX to JS, handles imports.
- **Pros** : Highly configurable.
- **Cons** : Steep learning curve.

---

### 21. Babel Basics :

- Babel is a JavaScript transpiler that converts modern JS (ES6+, JSX) to browser-compatible code.

#### Basics :

- **Setup** : Install `@babel/core`, `@babel/preset-env`, `@babel/preset-react`.
- **Config** : `.babelrc` or in Webpack.
- **Plugins/Presets** : Transform syntax (e.g., arrow functions, JSX).
- **In React** : Essential for JSX (`<div>` to `React.createElement`).
- **Pros** : Polyfills features.
- **Cons** : Adds build step.

---

### 22. Development vs Production Builds :

- **Development** : Focuses on DX with source maps, HMR, verbose errors. Slower, larger bundles (e.g., `npm run start` in CRA/Vite).
- **Production** : Optimized for performance—minified, tree-shaken, compressed. No dev tools (e.g., `npm run build`). Deploy to servers/CDNs.
- **Differences** : Env vars (process.env.NODE_ENV), plugins toggle behaviors.
- **Best Practices** : Use env files (.env.development, .env.production) for configs.

---

### 23 Folder Structure Conventions :

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
