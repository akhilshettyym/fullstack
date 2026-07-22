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

## 29. <u> Internationalization (i18n) </u> -

Internationalization (i18n) and Localization (l10n) allow your React application to adapt to different languages, cultures, and regional formatting rules automatically.

### 274. Core Localization Concepts:

Before writing code, it is important to distinguish between the two core terms:

- Internationalization (i18n): The process of designing and building your React application so that it can handle multiple languages and cultural formats without structural code changes.
- Localization (l10n): The actual process of adapting your internationalized app for a specific region or language by adding translations and configuring local settings.

---

### 275. Implementing react-i18next:

The industry standard for React is `react-i18next`, which is a powerful plugin built on top of the framework-agnostic i18next library. It uses React Hooks and Context to efficiently provide translations.

#### Installation:

```js
npm install i18next react-i18next i18next-browser-languagedetector
```

#### Initialization Configuration (i18n.js):

You set up a central configuration file to initialize the languages, fallback behavior, and plugins.

```jsx
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./locales/en/translation.json";
import translationES from "./locales/es/translation.json";

const resources = {
  en: { translation: translationEN },
  es: { translation: translationES },
};

i18n
  .use(LanguageDetector) // Automatically detects user browser language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en", // Use English if the user language is unavailable
    interpolation: {
      escapeValue: false, // React already protects against XSS
    },
  });
export default i18n;
```

Import this i18n.js file directly into your root main.jsx or index.js file before rendering the App.

---

### 276. Translation Files:

Translation files are static JSON files structured as key-value pairs. They decouple your hardcoded UI text from your React components.

```json
// src/locales/en/translation.json:
{
  "welcome": "Welcome back, {{name}}!",
  "dashboard": {
    "title": "User Dashboard",
    "logout": "Log Out"
  }
}

// src/locales/es/translation.json:
{
  "welcome": "¡Bienvenido de nuevo, {{name}}!",
  "dashboard": {
    "title": "Tablero de Usuario",
    "logout": "Cerrar Sesión"
  }
}
```

Note: {{name}} acts as a dynamic placeholder variable that can be injected directly from your React state.

#### Using Translations in a Component:

The useTranslation hook gives you access to the t function, which looks up keys from your JSON files.

```jsx
import React from "react";
import { useTranslation } from "react-i18next";

function Profile() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Basic translation with nested keys */}
      <h1>{t("dashboard.title")}</h1>

      {/* Translation passing a dynamic variable */}
      <p>{t("welcome", { name: "Alex" })}</p>
    </div>
  );
}
```

---

### 277. Language Switching:

To let users manually toggle languages, use the i18n.changeLanguage() function. This triggers a re-render of all translated text instantly without requiring a full page refresh.

```jsx
import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="switcher">
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("es")}>Español</button>
    </div>
  );
}
```

---

### 278. Right-to-Left (RTL) Support:

Languages like Arabic and Hebrew read from right to left. When a user switches to an RTL language, your layout needs to mirror horizontally.

#### Step 1: Update the Document Direction:

You can change the dir and lang attributes on the HTML document body dynamically when `i18next` detects a language change.

```js
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function useRtlSupport() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Check if the current language is RTL
    const isRtl = i18n.dir() === "rtl";
    document.documentElement.dir = i18n.dir(); // Sets 'rtl' or 'ltr'
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
}
```

#### Step 2: Use CSS Logical Properties:

Instead of using physical directions like margin-left or padding-right in your CSS, use layout-agnostic CSS Logical Properties. They automatically adjust their orientation based on the document's dir attribute.

- Instead of margin-left: 20px; → Use margin-inline-start: 20px;
- Instead of padding-right: 10px; → Use padding-inline-end: 10px;
- Instead of left: 0; → Use inset-inline-start: 0;
- Instead of text-align: left; → Use text-align: start;

---

### 279. Date & Number Formatting:

Translating strings is only half the battle. Dates, currency, and percentages are formatted differently around the world. Instead of using third-party utilities, leverage the browser's built-in, native Intl Web API.

#### Currency and Number Formatting:

```js
const amount = 1250.50;
// United States: $1,250.50const usCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
}).format(amount);
// Germany: 1.250,50 €const deCurrency = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR'
}).format(amount);
```

#### Date Formatting:

```js
const appointmentDate = new Date('2026-07-22');
// United States: 7/22/2026const usDate = new Intl.DateTimeFormat('en-US').format(appointmentDate);
// United Kingdom: 22/07/2026const ukDate = new Intl.DateTimeFormat('en-GB').format(appointmentDate);
// Long Written Format (e.g., Wednesday, July 22, 2026)const longDate = new Intl.DateTimeFormat(i18n.language, {
  dateStyle: 'full'
}).format(appointmentDate);
```

---
