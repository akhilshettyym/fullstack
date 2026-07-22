// ============================================
// BOOLEAN DATA TYPE
// ============================================

// THEORY: Boolean is primitive type with two values: true or false
// - Fundamental for logic and control flow
// - Used in comparisons, conditions, and loops
// - Must be lowercase: true/false (not True/False)
// - Returned by comparison operators

// THEORY: Truthy vs Falsy values
// - FALSY: 0, "", null, undefined, NaN, false
// - TRUTHY: Everything else (1, "hello", [], {}, true, etc.)
// - Used implicitly in if statements and logical operators

// THEORY: Boolean() function converts values to boolean
// - Boolean(0) → false
// - Boolean("") → false
// - Boolean(1) → true
// - Boolean("hello") → true

// THEORY: Avoid Boolean objects (use primitives)
// - let x = true; ✓ Primitive
// - let y = new Boolean(true); ✗ Object (avoid)

// ============================================
// WORKING EXAMPLES
// ============================================

console.log("=== BASIC BOOLEANS ===");

let isActive = true;
let isDeleted = false;

console.log("isActive:", isActive); // Output: true
console.log("isDeleted:", isDeleted); // Output: false
console.log(typeof isActive); // Output: boolean

console.log("\n=== COMPARISONS RETURN BOOLEANS ===");

console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 == 5);   // true
console.log(5 != 3);   // true
console.log(5 >= 5);   // true
console.log(5 <= 3);   // false

console.log("\n=== BOOLEAN() FUNCTION ===");

console.log(Boolean(1));        // true
console.log(Boolean(0));        // false
console.log(Boolean("hello"));  // true
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));      // false
console.log(Boolean([]));       // true (arrays are truthy)
console.log(Boolean({}));       // true (objects are truthy)

console.log("\n=== TRUTHY VALUES ===");

console.log(!!100);            // true
console.log(!!"hello");        // true
console.log(!!true);           // true
console.log(!!1);              // true
console.log(!!(-5));           // true
console.log(!![1, 2, 3]);      // true (array)
console.log(!!{ name: "John" }); // true (object)

console.log("\n=== FALSY VALUES ===");

console.log(!!0);         // false
console.log(!!"");        // false (empty string)
console.log(!!null);      // false
console.log(!!undefined); // false
console.log(!!NaN);       // false
console.log(!!false);     // false

console.log("\n=== IN CONDITIONAL STATEMENTS ===");

let user = "admin";

if (user) {
  console.log("User logged in"); // Output: User logged in (non-empty string is truthy)
}

let count = 0;

if (count) {
  console.log("Items found");
} else {
  console.log("No items"); // Output: No items (0 is falsy)
}

console.log("\n=== LOGICAL OPERATORS WITH BOOLEANS ===");

let a = true;
let b = false;

console.log(a && b);    // false (AND)
console.log(a || b);    // true (OR)
console.log(!a);        // false (NOT)
console.log(!b);        // true (NOT)

console.log("\n=== IN LOOPS ===");

let i = 0;
while (i < 3) {
  console.log("Loop iteration:", i);
  i++;
}

console.log("\n=== PRACTICAL EXAMPLES ===");

// Toggle state
let isVisible = true;
isVisible = !isVisible;
console.log("isVisible after toggle:", isVisible); // Output: false

// Check if array is empty
let items = [];
console.log("Array is empty:", items.length === 0); // Output: true

// Authentication check
let isAuthenticated = true;
if (isAuthenticated) {
  console.log("Welcome user!"); // Output: Welcome user!
}

// Multiple conditions
let hasEmail = true;
let hasPassword = true;
let canLogin = hasEmail && hasPassword;
console.log("Can login:", canLogin); // Output: true

// Age verification
let age = 21;
let isOfLegalAge = age >= 18;
console.log("Is of legal age:", isOfLegalAge); // Output: true

// Default values using ||
let preferredName = "";
let displayName = preferredName || "Guest";
console.log("Display name:", displayName); // Output: Guest

// Nullish coalescing
let configTimeout = null;
let defaultTimeout = configTimeout ?? 5000;
console.log("Timeout:", defaultTimeout); // Output: 5000