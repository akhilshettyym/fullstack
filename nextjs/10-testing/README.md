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

**Testing**: Use Jest/Vitest for unit tests, React Testing Library for components, and Cypress/Playwright for E2E. The official docs point to example setups. Write tests for pages/API routes; mock Node/Edge APIs with appropriate runners.

---

Next.js’s official testing guide now points you to four main setups: `Jest`, `Vitest`, `Playwright`, and `Cypress`. In that guide, Jest and Vitest are the unit-testing options, Playwright is the E2E option, and Cypress covers both E2E and component testing. React Testing Library is the usual companion for Jest/Vitest component tests.

The simplest testing split: Use Vitest or Jest for small, isolated logic and simple components. Use React Testing Library when you want to test behavior from the user’s point of view. Use Playwright or Cypress when you want to verify the whole app in a real browser.

---

A good mental model is:

- **Unit tests**: utilities, helpers, formatters, validation, business logic.
- **Component tests**: buttons, forms, modals, nav, client components.
- **Route/API tests**: Route Handlers or API routes, by calling the handler directly with Request/Response. Route Handlers are built on the Web Request/Response APIs.

**E2E test**s: full user journeys, including navigation, form submission, auth, and rendering across the app.

---

### 1. Jest vs Vitest:

Both are valid for Next.js, and Next’s docs provide dedicated setup guides for each. The docs also say that Vitest and Jest do not currently support async Server Components, so for async server components the recommendation is to use E2E tests instead.

For a new App Router project, Vitest is often the lighter choice because Next’s own guide pairs it with React Testing Library and gives a straightforward setup. Jest is still fully supported and has its own next/jest integration.

Vitest example

```ts
// vitest.config.ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
});
```

```ts
// utils/formatCurrency.test.ts
import { describe, expect, it } from "vitest";

function formatCurrency(value: number) {
  return `$${value.toFixed(2)}`;
}

describe("formatCurrency", () => {
  it("formats dollars", () => {
    expect(formatCurrency(12)).toBe("$12.00");
  });
});
```

---

### 2. React Testing Library for components:

React Testing Library is the standard choice for testing what the user sees and does, not implementation details. Next’s Jest and Vitest guides both pair those runners with React Testing Library.

```tsx
// Counter.tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>;
}
```

```tsx
// Counter.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Counter from "./Counter";

describe("Counter", () => {
  it("increments when clicked", async () => {
    render(<Counter />);

    await userEvent.click(screen.getByRole("button"));

    expect(screen.getByRole("button")).toHaveTextContent("Count: 1");
  });
});
```

---

### 3. Testing pages and Server Components:

For async Server Components, the current Next.js docs explicitly recommend E2E instead of unit testing because Jest and Vitest do not support them yet. That means page-level behavior is often better covered by Playwright or Cypress, while smaller synchronous pieces can still be unit tested.

For synchronous page fragments or child components, you can still render them in React Testing Library and mock their inputs. That keeps your tests fast while avoiding the complexity of spinning up the whole app.

---

### 4. Testing Route Handlers and API routes:

Route Handlers in the App Router are built on the standard Web Request and Response APIs, and they are the App Router equivalent of API Routes in pages. The docs also say Route Handlers are only available in app, while API Routes live in pages.

That makes them easy to test directly:

```ts
// app/api/users/route.ts
export async function GET() {
  return Response.json({ name: "Akhil" });
}
// app/api/users/route.test.ts
import { describe, expect, it } from "vitest";
import { GET } from "./route";

describe("GET /api/users", () => {
  it("returns JSON", async () => {
    const res = await GET();
    const data = await res.json();

    expect(data).toEqual({ name: "Akhil" });
  });
});
```

If handler uses request, you can construct a real Request object in the test and pass it in, because the Route Handler API is designed around the Web platform request model.

---

### 5. Mocking Next.js-specific APIs:

A common unit-test issue is `useRouter`. Next.js documents that the “NextRouter was not mounted” error often happens in unit tests, and the fix is to mock the router hook. In the App Router, use the hooks from next/navigation, not next/router.

```js
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    refresh: vi.fn(),
  }),
}));
```

That lets you test navigation behavior without needing the full Next runtime in the test environment.

---

### 6. Mocking Node vs Edge code:

Next.js route segments can run in either the Node.js runtime or the Edge runtime via export const runtime = 'nodejs' | 'edge', and the default is Node.js. Route Handlers use the Web Request/Response APIs, while the Edge runtime is the smaller runtime surface.

That leads to a practical testing rule:

- **Node runtime code**: test with Jest/Vitest in a Node-capable environment, and mock Node-only modules at the boundary.
- **Edge runtime code**: keep tests focused on Web APIs such as Request, Response, fetch, headers, and URL behavior, because the code is meant to run in the Edge runtime’s smaller API surface.

For example:

```ts
// edge-handler.test.ts
import { GET } from "./route";

it("works with a Web Request", async () => {
  const req = new Request("https://example.com/api/geo");
  const res = await GET(req);
  expect(res.ok).toBe(true);
});
```

---

### 7. E2E testing with Playwright and Cypress:

For full browser flows, Playwright and Cypress are the recommended tools in the Next.js docs. Playwright automates Chromium, Firefox, and WebKit from one API, and Cypress supports both E2E and component testing.

Playwright example:

```js
import { test, expect } from "@playwright/test";

test("homepage loads", async ({ page }) => {
 await page.goto("http://localhost:3000");
 await expect(page.getByRole("heading")).toBeVisible();
});
Cypress example:
describe("homepage", () => {
 it("loads", () => {
   cy.visit("/");
   cy.contains("Home");
 });
});
```

- Use E2E when the flow depends on routing, async Server Components, auth, or end-to-end integration across server and browser.
- A practical setup that works well for most Next.js apps, a strong default stack is:

### 8. Vitest for unit tests:

- React Testing Library for component tests
- Playwright for E2E
- Cypress only if it is already in use or wants its component-testing workflow.
- The official docs also provide example starters via create-next-app for Vitest, Jest, Playwright, and Cypress, which makes setup much easier than wiring everything from scratch.

---
