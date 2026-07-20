// ============================================
// IF STATEMENT
// ============================================

// THEORY: if statement executes code if condition is true
// - Syntax: if (condition) { /* code */ }
// - Condition must evaluate to boolean (true/false)
// - Curly braces required for multi-line blocks
// - Best practice: Always use braces, even for single line

// THEORY: Condition evaluation:
// - Truthy values: Everything except falsy values
// - Falsy values: false, 0, "", null, undefined, NaN
// - Can use comparison operators: ==, ===, <, >, <=, >=, !=, !==
// - Can use logical operators: &&, ||, !

// THEORY: Nested if:
// - if statements can contain other if statements
// - Better practice: Use logical && to combine conditions
// - Avoids "pyramid of doom" code indentation

// ============================================
// WORKING EXAMPLES
// ============================================

console.log("=== BASIC IF STATEMENT ===");

let age = 18;

if (age >= 18) {
  console.log("You can vote"); // Output: You can vote
}

console.log("\n=== IF WITH NO EXECUTION (FALSE) ===");

let score = 40;

if (score >= 60) {
  console.log("Passed"); // This won't execute
}

console.log("After if block"); // Output: After if block

console.log("\n=== IF WITH COMPARISON OPERATORS ===");

let temperature = 25;

if (temperature > 20) {
  console.log("It's warm"); // Output: It's warm
}

if (temperature < 30) {
  console.log("It's not too hot"); // Output: It's not too hot
}

if (temperature >= 20 && temperature <= 30) {
  console.log("Temperature is ideal"); // Output: Temperature is ideal
}

console.log("\n=== IF WITH STRINGS ===");

let name = "John";

if (name === "John") {
  console.log("Hello John!"); // Output: Hello John!
}

if (name !== "Jane") {
  console.log("You are not Jane"); // Output: You are not Jane
}

console.log("\n=== IF WITH TRUTHY/FALSY VALUES ===");

let user = "admin";

if (user) {
  console.log("User exists"); // Output: User exists
}

let emptyStr = "";

if (emptyStr) {
  console.log("This won't print");
} else {
  console.log("String is empty"); // Output: String is empty
}

console.log("\n=== NESTED IF ===");

let country = "USA";
let age2 = 16;
let canDrive = false;

if (country === "USA") {
  if (age2 >= 16) {
    canDrive = true;
    console.log("You can drive in USA"); // Output: You can drive in USA
  }
}

console.log("Can drive:", canDrive); // Output: Can drive: true

console.log("\n=== USING LOGICAL AND INSTEAD OF NESTING ===");

// Old way (nested)
let country2 = "USA";
let age3 = 16;

if (country2 === "USA") {
  if (age3 >= 16) {
    console.log("You can drive"); // Output: You can drive
  }
}

// Better way (logical AND)
if (country2 === "USA" && age3 >= 16) {
  console.log("You can drive"); // Same result, cleaner code
}

console.log("\n=== MULTIPLE CONDITIONS ===");

let hasLicense = true;
let hasInsurance = true;
let isAwake = true;

if (hasLicense && hasInsurance && isAwake) {
  console.log("Safe to drive"); // Output: Safe to drive
}

console.log("\n=== COMMON PATTERNS ===");

// Checking if value exists
let username = "";

if (username) {
  console.log("Username is set");
} else {
  console.log("Please provide username"); // Output: Please provide username
}

// Validating input
let age4 = 25;

if (age4 >= 0 && age4 <= 120) {
  console.log("Valid age"); // Output: Valid age
}

// Checking multiple types
let value = 42;

if (value > 0) {
  if (value < 100) {
    console.log("Value is between 0 and 100"); // Output: Value is between 0 and 100
  }
}

// Better approach
if (value > 0 && value < 100) {
  console.log("Value is between 0 and 100");
}

console.log("\n=== REAL-WORLD EXAMPLES ===");

// Age group classification
let personAge = 25;

if (personAge < 13) {
  console.log("Child");
} else if (personAge < 18) {
  console.log("Teenager");
} else if (personAge < 65) {
  console.log("Adult"); // Output: Adult
}

// Permission checking
let isAdmin = true;

if (isAdmin) {
  console.log("Access granted to admin panel"); // Output: Access granted to admin panel
}

// Input validation
let userInput = "hello";

if (userInput && userInput.length > 0) {
  console.log("Input received"); // Output: Input received
}