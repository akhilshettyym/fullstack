// ============================================
// JAVASCRIPT VARIABLES FUNDAMENTALS
// ============================================

// THEORY: Variables are named containers storing data
// - Used to store values that can change during program execution
// - Give data meaningful names making code more readable

// THEORY: JavaScript has 3 ways to declare variables:
// 1. let - Block-scoped, cannot be redeclared (modern, recommended)
// 2. const - Block-scoped, cannot be reassigned (use when value doesn't change)
// 3. var - Function-scoped, can be redeclared (old, avoid in modern code)

// THEORY: Identifier rules for variable names:
// - Must start with letter, underscore (_), or dollar sign ($)
// - Can contain letters, numbers, underscores, dollar signs
// - Cannot be reserved keywords (if, for, let, const, etc.)
// - Case-sensitive: myVar and myvar are different

// THEORY: Naming conventions:
// - Use descriptive names: firstName (good) vs fn (bad)
// - Use camelCase: myVariableName (JavaScript standard)
// - Avoid single letters except in loops: let i;

// ============================================
// WORKING EXAMPLES
// ============================================

// Declaring variables with let
let carName;  // Declaration without initialization
console.log(carName); // Output: undefined

// Declaration with initialization
let age = 25;
console.log(age); // Output: 25

// Multiple variables in one statement
let x = 5, y = 10, z = 15;
console.log(x + y + z); // Output: 30

// Changing variable values (reassignment)
let score = 100;
console.log(score); // Output: 100
score = 95;
console.log(score); // Output: 95

// Using underscore and dollar sign in variable names
let _privateVar = "private";
let $special = "special";
let _userId123 = 456;
console.log(_privateVar, $special, _userId123);

// Descriptive variable names make code clear
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: John Doe

// Variable naming best practices
let userEmail = "john@example.com";  // ✓ Clear and descriptive
let ue = "john@example.com";          // ✗ Too abbreviated
let user_email = "john@example.com";  // ✗ Snake case (not JavaScript convention)
let UserEmail = "john@example.com";   // ✗ Pascal case (for classes, not variables)

// Variables store different types of data
let numberVar = 42;
let stringVar = "Hello";
let booleanVar = true;
let arrayVar = [1, 2, 3];
let objectVar = { name: "John", age: 30 };
console.log(typeof numberVar);   // Output: number
console.log(typeof stringVar);   // Output: string
console.log(typeof booleanVar);  // Output: boolean