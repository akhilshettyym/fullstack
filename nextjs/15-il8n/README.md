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

**Internationalisation (i18n)**: Next.js supports i18n routing. With App Router, nest routes under a dynamic `[lang]` folder or use middleware to detect locale. Example: `app/[lang]/page.tsx` receives `{ params.lang }` and can load language-specific data (see official guide). Use `generateStaticParams` to `pre-render` supported locales.

---

Next.js supports internationalized routing and localization in the App Router. The official guide recommends either putting your app under a dynamic `app/[lang]` segment or using Proxy to detect the user’s preferred locale from Accept-Language and redirect them to the right localized path. The guide also shows that `PageProps<'/[lang]'>` passes the locale through `params.lang`, and that `generateStaticParams` can pre-render supported locales at build time.

A typical structure looks like this:

```ts
app / [lang] / layout.tsx;
page.tsx;
dictionaries.ts;
dictionaries / en.json;
nl.json;
proxy.ts;
```

---

### 1. Detect the locale and redirect with Proxy:

The docs recommend reading _Accept-Language_ and redirecting to the matching locale when the URL does not already contain one. In the official example, Proxy checks whether the pathname already has a supported locale; if not, it prepends the preferred locale and redirects.

```ts
// proxy.ts
import { NextResponse, type NextRequest } from "next/server";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";

const locales = ["en-US", "nl-NL", "nl"];
const defaultLocale = "en-US";

function getLocale(request: NextRequest) {
  const headers = Object.fromEntries(request.headers.entries());
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}
```

That gives you clean locale-aware URLs like /en-US/products or /nl/products.

---

### 2. Use a dynamic [lang] folder:

The official guide says all special files under `app/` should be nested inside `app/[lang]` so the router can forward the locale through the tree. In that model, `app/[lang]/page.tsx` receives `params.lang`.

```tsx
// app/[lang]/page.tsx
export default async function Page(props: PageProps<"/[lang]">) {
  const { lang } = await props.params;
  return <h1>Locale: {lang}</h1>;
}
```

The root layout can also live under the locale segment, for example `app/[lang]/layout.tsx`.

---

### 3. Load locale-specific content on the server:

Next.js’s guide shows a server-only dictionary pattern: keep translation files in JSON, load them with a server-only helper, and narrow the locale before rendering. Because App Router pages and layouts are Server Components by default, the translation files do not need to ship to the browser bundle.

```ts
// app/[lang]/dictionaries.ts
import "server-only";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  nl: () => import("./dictionaries/nl.json").then((m) => m.default),
};

export type Locale = keyof typeof dictionaries;

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
```

```tsx
// app/[lang]/page.tsx
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  return <button>{dict.products.cart}</button>;
}
```

That pattern keeps localization on the server, narrows unsupported locales to a 404, and avoids shipping your full translation set to the client.

---

### 4. Pre-render supported locales:

If you know your supported locales ahead of time, the guide recommends generateStaticParams for static rendering. It can be used in a page or layout, including the root locale layout. The example in the docs returns a locale list and sets `<html lang={...}>` from the locale param.

```tsx
// app/[lang]/layout.tsx
export async function generateStaticParams() {
  return [{ lang: "en-US" }, { lang: "de" }];
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  return (
    <html lang={(await params).lang}>
      <body>{children}</body>
    </html>
  );
}
```

That is the cleanest App Router i18n setup: locale-aware URLs, server-side translation loading, and pre-rendered supported languages.

---
