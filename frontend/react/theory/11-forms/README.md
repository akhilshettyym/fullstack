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

## 11. <u> Forms </u> -

- Forms are a core part of most interactive React applications. React provides two main philosophies for managing form inputs: **controlled** and **uncontrolled**. Controlled inputs are overwhelmingly preferred in modern React because they give you full control over the form state, make validation easier, enable dynamic behavior, and keep the UI in sync with the application state.

---

### 112. Controlled Inputs :

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

### 113 Uncontrolled Inputs :

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

### 114. Form State Management :

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

### 115. Input Types :

- HTML input types supported in React (controlled unless noted) :
- `text`, `password`, `email`, `tel`, `url`, `search`, `number`
- `date`, `datetime-local`, `month`, `week`, `time`
- `checkbox`, `radio`
- `file` (always uncontrolled)
- `hidden`, `color`, `range`
- All controlled inputs follow the same pattern: `value` + `onChange`.

---

### 116. Text Inputs :

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

### 117. Checkbox Inputs :

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

### 118. Radio Buttons :

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

### 119. Select Dropdowns :

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

### 120. Textareas :

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

### 121. File Inputs :

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

### 122. Form Validation :

- Two main layers :

1. **HTML5 validation** (browser built-in)
2. **Custom validation** (application logic)

---

### 123. HTML5 Validation :

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

### 124. Custom Validation :

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

### 125. Form Submission :

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

### 126. Handling Multiple Inputs :

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

### 127. Resetting Forms :

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
