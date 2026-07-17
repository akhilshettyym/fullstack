| [Routing & Layouts](../01-routing-layouts/README.md)
| [Server vs Client](../02-server-client/README.md)
| [Data Fetching & Rendering](../03-fetch-render/README.md)
| [Caching & Revalidation](../04-cache-reval/README.md)
| [Build & Runtime](../05-build-runtime/README.md)
| [Middleware & Edge Functions](../06-middleware-edge/README.md)
| [Deployment & Hosting](../07-deployment-hosting/README.md)
| [Middleware & Edge Functions](../06-middleware-edge/README.md)
| [Performance](../08-performance/README.md)
| [Security](../09-security/README.md)
| [Testing](../10-testing/README.md)
| [TypeScript](../11-typescript/README.md)
| [CSS & Styling](../12-css-styling/README.md)
| [State Management](../13-state-mgt/README.md)
| [Auth/Authorization](../14-auth/README.md)
| [Internationalisation (i18n)](../15-il8n/README.md)
| [Accessibility](../16-accessibility/README.md)
| [Analytics & Observability](../17-analytics-obsv/README.md)
| [Migration Strategies](../18-migration-strat/README.md)
| [Monorepos & Micro-frontends](../19-monorepo-micro/READEME.md)
| [Plugin Ecosystem](../20-plugins-eco/README.md)
| [SEO Metadata](../21-seo-metadata/README.md)
| [Server Action](../22-server-actions/README.md)
| [Debugging and Dev Tools](../23-dev-tools/README.md)
| [Prefetching and Lazy Loading](../24-prefetching-lazy/README.md)
| [Progressive Web Apps](../25-web-apps/README.md)

---

**Debugging & Developer Tools:** Techniques and tools to inspect and debug Next.js apps. This includes using source maps, IDE launch configs, browser devtools, and React DevTools. Next.js projects behave like Node apps plus React, so standard JS debugging applies.

---

Next.js supports standard Node/Chrome debuggers, VSCode/IDE launch configurations, and React DevTools. Knowing how to attach debuggers, inspect components, and use source maps can greatly improve development velocity and troubleshooting.

---

**Why Important:** Effective debugging tools are crucial but often overlooked. Knowing how to debug server-side code (e.g. set breakpoints, inspect variables) and client-side code (React DevTools, browser console) makes development faster. Official docs detail VSCode and browser setup, but this topic was not in user list.

---

**Key Subtopics/Concerns:**

- **Source Maps:** Next.js generates source maps in development by default for both server and client. This lets you debug original TypeScript/JSX code.
- **VSCode Setup:** Use a `launch.json` to attach to Node and browser. For example, see the Next.js docs snippet. The basic config launches `npm run dev -- --inspect` for Node and opens Chrome for client.
- **Browser DevTools:** Open `<URL>` in Chrome/Firefox, use Developer Tools Sources/Debugger to set breakpoints in client code. React DevTools extension is recommended to inspect component tree and state.
- **Server Debugging:** Run `npm run dev -- --inspect` (or similar) and connect Chrome to `chrome://inspect`.
- **Node Debugging:** You can attach any Node debugger (WebStorm, VSCode, Chrome). The docs note that any Node-attached debugger works.
- **Tooling:** Next CLI (`next dev`, `next build`, linting), ESLint/TypeScript integration, Hot Reload/Fast Refresh for instant feedback.
- **Pitfalls:** Not using `--inspect` means you can’t debug server code easily. Mixed stack (monorepo) requires adjusting cwd.

**Example:**

```json
// .vscode/launch.json (snippet)
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev -- --inspect"
    },
    {
      "name": "Next.js: debug full-stack",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/next/dist/bin/next",
      "runtimeArgs": ["--inspect"]
    }
  ]
}
```

_This config (from Next.js docs) lets VSCode attach to the Next.js dev server. In VSCode’s Debug panel select “Next.js: debug server-side” and press F5._

---
