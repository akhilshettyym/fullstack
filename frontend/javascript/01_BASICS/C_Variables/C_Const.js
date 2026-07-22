// ============================================
// JAVASCRIPT CONST KEYWORD
// ============================================

// THEORY: const was introduced in ES6 (2015)
// - Block-scoped (like let)
// - Cannot be reassigned (immutable binding)
// - Cannot be redeclared
// - MUST be initialized when declared
// - Use const by default, let only when reassignment needed

// THEORY: const creates constant reference, not immutable value
// - Cannot reassign the variable to new value
// - CAN modify properties of objects/arrays stored in const
// - Example: const obj = {}; obj.prop = "value"; ✓ Allowed
// - Example: const obj = {}; obj = null; ✗ Error (reassignment not allowed)

// THEORY: Best practices:
// - Use const for values that never change
// - Use const for objects/arrays (even though contents can change)
// - Use let only when variable needs to be reassigned

// ============================================
// WORKING EXAMPLES
// ============================================

// Basic const usage - value that never changes
const PI = 3.14159;
console.log(PI); // Output: 3.14159

// Attempting to reassign const causes error
// PI = 3.14;  // ✗ ERROR: Assignment to constant variable

// Attempting to increment const causes error
// PI++;  // ✗ ERROR: Assignment to constant variable

// const must be initialized at declaration
const MAX_USERS = 100;  // ✓ Correct
// const MIN_USERS;  // ✗ ERROR: Missing initializer

// const with objects - can modify properties
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

// Modify properties of const object (allowed)
person.age = 31;
console.log(person.age); // Output: 31

// Add properties to const object (allowed)
person.email = "john@example.com";
console.log(person.email); // Output: john@example.com

// Reassign const object itself (NOT allowed)
// person = { firstName: "Jane" };  // ✗ ERROR

// const with arrays - can modify elements
const colors = ["red", "green", "blue"];
console.log(colors[0]); // Output: red

// Change array element (allowed)
colors[0] = "yellow";
console.log(colors); // Output: [ 'yellow', 'green', 'blue' ]

// Add to array (allowed)
colors.push("purple");
console.log(colors); // Output: [ 'yellow', 'green', 'blue', 'purple' ]

// Reassign const array itself (NOT allowed)
// colors = ["black", "white"];  // ✗ ERROR

// Block scope - same as let
const x = 10;
console.log(x); // Output: 10

{
  const x = 20;  // Different scope, same name
  console.log(x); // Output: 20
}

console.log(x); // Output: 10

// const in different blocks (allowed)
const y = 1;
{
  const y = 2;
  console.log("Block y:", y); // Output: Block y: 2
}
console.log("Outside y:", y); // Output: Outside y: 1

// Real-world examples
const API_URL = "https://api.example.com";
const DATABASE_NAME = "myApp";
const DEFAULT_TIMEOUT = 5000;

const config = {
  host: "localhost",
  port: 3000,
  debug: true
};

const settings = [
  { theme: "dark" },
  { language: "en" },
  { notifications: true }
];

// Can modify config properties
config.debug = false;
console.log(config.debug); // Output: false