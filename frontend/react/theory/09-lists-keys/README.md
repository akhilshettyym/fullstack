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

## 9. <u> Lists & Keys </u> -

- Rendering lists is one of the most common tasks in React applications. React provides powerful patterns for efficiently displaying, updating, and managing dynamic collections of data (arrays of objects, items, etc.).
- The core mechanism for rendering lists in React is using JavaScript's `Array.map()` inside JSX, combined with the special `key` prop.

---

### 88. Rendering Lists :

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

### 89. Array.map() :

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

### 90. Keys Importance :

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

### 91. Stable Keys :

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

### 92. Index as Key (Pitfalls) :

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

### 93. Nested Lists :

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

### 94. Conditional Lists :

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

### 95. Dynamic Lists :

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

### 96. Filtering Lists :

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

### 97. Sorting Lists :

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
