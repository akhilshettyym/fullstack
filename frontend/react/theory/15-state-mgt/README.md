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

## 15. <u> State Management (Advanced) </u> -

- State management in React evolves from simple local state to sophisticated global solutions as applications grow. Advanced techniques address scalability, performance, and maintainability, especially in large teams or complex apps. This section covers patterns and libraries beyond basic `useState` and Context.

---

### 162. Local State :

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

### 163. Global State :

- Global state is accessible from any component in the app, often managed outside the component tree (e.g., via stores or Context). It handles data like user authentication, theme, or app-wide settings.

Key characteristics :

- **Accessibility** : Components subscribe to parts of the state.
- **Use cases** : User data, API responses shared across pages, real-time updates.
- **Advantages** : Eliminates prop drilling; centralized updates.
- **Challenges** : Can lead to over-coupling; performance hits if not selective.
- Solutions include Context for simple cases, or libraries like Redux, Zustand for complex ones. Global state often combines with local state for optimal architecture.

---

### 164. Lifting State :

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

### 165. Prop Drilling Solutions :

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

### 166. Context-Based State :

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

### 167. Redux Core Concepts :

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

### 168. Redux Toolkit :

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

### 169. Redux Store :

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

### 170. Actions :

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

### 171. Reducers :

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

### 172. Slices :

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

### 173. Middleware :

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

### 174. Thunk :

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

### 175. Saga (Concept) :

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

### 176. Zustand :

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

### 177. Jotai :

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

### 178. Recoil :

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

### 179. MobX :

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

### 180. State Normalization :

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

### 181. Server vs Client State :

- **Server State** : Data from APIs (e.g., user profiles, posts). Managed with caching, invalidation, loading states.
  - Tools : React Query, SWR, RTK Query.
  - Challenges : Staleness, optimistic updates.

- **Client State** : UI/app-specific (e.g., form drafts, toggles).
  - Tools: Local state, Context, stores.

- Separation : Use dedicated libraries for server state (e.g., React Query for queries/mutations) to handle fetching, caching, errors. Keep client state simple.

---
