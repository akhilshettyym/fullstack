// ============================================
// CONDITIONAL STATEMENTS OVERVIEW
// ============================================

// THEORY: Conditionals execute different code based on conditions
// - Allow programs to make decisions
// - Branch execution path based on true/false conditions

// THEORY: Types of conditional statements:
// 1. if - Executes block if condition is true
// 2. if...else - Executes one block if true, another if false
// 3. if...else if...else - Tests multiple conditions
// 4. switch - Matches value against multiple cases
// 5. Ternary (?:) - Shorthand for simple if...else

// THEORY: When to use each:
// - if: Single condition to check
// - if...else: Two possible paths (yes/no)
// - if...else if...else: Multiple mutually exclusive options
// - switch: Many discrete values to match
// - Ternary: Quick assignment based on condition

// THEORY: Condition evaluation:
// - Conditions return boolean: true or false
// - Uses comparison and logical operators
// - Truthy vs falsy values matter

// ============================================
// WORKING EXAMPLES
// ============================================

console.log("=== IF STATEMENT ===");
let age = 20;

if (age >= 18) {
  console.log("You are an adult"); // Output: You are an adult
}

console.log("\n=== IF...ELSE STATEMENT ===");

let score = 45;

if (score >= 60) {
  console.log("Passed");
} else {
  console.log("Failed"); // Output: Failed
}

console.log("\n=== IF...ELSE IF...ELSE STATEMENT ===");

let hour = 14;

if (hour < 12) {
  console.log("Good morning");
} else if (hour < 18) {
  console.log("Good afternoon"); // Output: Good afternoon
} else {
  console.log("Good evening");
}

console.log("\n=== SWITCH STATEMENT ===");

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday"); // Output: Wednesday
    break;
  default:
    console.log("Unknown day");
}

console.log("\n=== TERNARY OPERATOR ===");

let temperature = 25;
let weather = temperature > 20 ? "warm" : "cold";
console.log("Weather:", weather); // Output: Weather: warm

console.log("\n=== NESTED CONDITIONS ===");

let country = "USA";
let citizenship = "citizen";

if (country === "USA") {
  if (citizenship === "citizen") {
    console.log("Eligible to vote"); // Output: Eligible to vote
  } else {
    console.log("Not eligible");
  }
}

// Better: Use AND operator instead of nesting
if (country === "USA" && citizenship === "citizen") {
  console.log("Eligible to vote"); // Same result, cleaner code
}

console.log("\n=== COMBINING OPERATORS ===");

let hasID = true;
let isOfAge = true;
let canEnter = hasID && isOfAge;

console.log("Can enter:", canEnter); // Output: Can enter: true

let hasMoney = false;
let hasDiscount = true;
let canShop = hasMoney || hasDiscount;

console.log("Can shop:", canShop); // Output: Can shop: true

console.log("\n=== REAL-WORLD EXAMPLE ===");

function checkLogin(username, password) {
  if (!username || !password) {
    return "Please enter both username and password";
  } else if (username === "admin" && password === "123456") {
    return "Login successful!";
  } else {
    return "Invalid credentials";
  }
}

console.log(checkLogin("admin", "123456")); // Output: Login successful!
console.log(checkLogin("admin", "wrong")); // Output: Invalid credentials
console.log(checkLogin("", "123456")); // Output: Please enter both username and password