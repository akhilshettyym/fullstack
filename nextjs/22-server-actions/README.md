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

**Forms & Server Actions:** In Next.js App Router, **Forms and Server Actions** refer to handling user-submitted data by `<form action={serverFunction}>`. A Server Action (a React Server Function) processes the `FormData` on the server. This replaces traditional API routes for simple form submissions, enabling full-stack forms with built-in CSRF protection and automatic revalidation.

---

Handling user input and mutations via `<form action={...}>` with React Server Actions is essential for interactive apps. This covers form validation, passing arguments, and secure data mutations.

---

**Why Important:** Almost every app needs user input (login forms, comments, uploads, etc.). Server Actions provide a unified way to handle form submissions: the form submission triggers a server function without an extra API call. It also works seamlessly with Next.js’s caching/revalidation. The user list didn’t explicitly cover this; yet **forms & data mutation** is essential (beyond static data fetching).

---

**Key Subtopics/Concerns:**

- **Server Actions:** A function annotated with `'use server'` inside a component file or imported, called by a form action. Receives a `FormData` object.
- **Form Setup:** A `<form>` can use `action={myServerAction}`. Form fields become `FormData` entries. Hidden inputs or `.bind()` can pass extra args.
- **Validation:** Perform server-side validation inside the action. Use `FormData.get('field')` or `Object.fromEntries(formData)` for multiple fields.
- **Revalidation/Mutation:** After mutation, use Next.js APIs like `revalidatePath()` to update cached pages. The guides also mention optimistic UI (client state while waiting).
- **Security:** Always check user permissions within the action (session, tokens).
- **Client Components:** Use Client components for interactive forms, but the form `action` function can be imported from a Server Component or a shared `app/actions.ts`.
- **Pitfalls:** Forgetting `'use server'` causes client bundling. Sending large files requires streaming APIs (Route Handlers).

**Example:**

```tsx
// app/invoices/page.tsx
export default function InvoicesPage() {
  async function createInvoice(formData: FormData) {
    "use server";
    const { customerId, amount } = Object.fromEntries(formData);
    const user = await getUser();
    if (!user) throw new Error("Not logged in");
    await db.invoice.create({ data: { userId: user.id, customerId, amount } });
    // Revalidate the invoices page to show the new invoice
    revalidatePath("/invoices");
  }
  return (
    <form action={createInvoice}>
      <input name="customerId" placeholder="Customer ID" />
      <input name="amount" type="number" />
      <button type="submit">Create Invoice</button>
    </form>
  );
}
```

_This form submits to the `createInvoice` Server Action, which reads `FormData`, checks auth, mutates the database, and revalidates cache._

---
