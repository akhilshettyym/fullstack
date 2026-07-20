// ============================================
// TERNARY OPERATOR (CONDITIONAL OPERATOR)
// ============================================

// THEORY: Ternary operator is shorthand for if...else
// - Syntax: condition ? trueValue : falseValue
// - Evaluates condition, returns one of two values
// - Only JavaScript operator that takes 3 operands (ternary = three)
// - Returns a value, can be assigned or used directly

// THEORY: Use ternary when:
// - Quick assignment based on condition
// - Simple true/false logic
// - Cleaner than if...else for simple cases

// THEORY: Avoid ternary when:
// - Complex nested conditions (becomes hard to read)
// - Multiple statements needed (if...else better)
// - Condition difficult to understand

// THEORY: Nested ternary (possible but avoid for readability):
// - condition1 ? value1 : condition2 ? value2 : value3
// - Hard to read, use if...else instead

// ============================================
// WORKING EXAMPLES
// ============================================

console.log("=== BASIC TERNARY ===");

let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Output: Adult

let age2 = 15;
let status2 = age2 >= 18 ? "Adult" : "Minor";
console.log(status2); // Output: Minor

console.log("\n=== TERNARY VS IF...ELSE ===");

// If...else way
let score = 75;
let result1;
if (score >= 60) {
  result1 = "Passed";
} else {
  result1 = "Failed";
}
console.log("If...else result:", result1); // Output: Passed

// Ternary way (cleaner for simple case)
let result2 = score >= 60 ? "Passed" : "Failed";
console.log("Ternary result:", result2); // Output: Passed

console.log("\n=== TERNARY WITH STRINGS ===");

let name = "John";
let greeting = name === "John" ? "Hello John!" : "Hello stranger!";
console.log(greeting); // Output: Hello John!

console.log("\n=== TERNARY WITH NUMBERS ===");

let marks = 85;
let grade = marks >= 90 ? "A" : marks >= 80 ? "B" : marks >= 70 ? "C" : "F";
console.log("Grade:", grade); // Output: Grade: B

// Note: Nested ternary above is hard to read. Better approach:
function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  return "F";
}
console.log("Grade (if approach):", getGrade(marks)); // Output: Grade: B

console.log("\n=== TERNARY WITH BOOLEANS ===");

let isLogged = true;
let message = isLogged ? "Welcome back!" : "Please log in";
console.log(message); // Output: Welcome back!

console.log("\n=== TERNARY IN EXPRESSIONS ===");

let num = 10;
let doubled = num > 5 ? num * 2 : num;
console.log(doubled); // Output: 20

let value = 0;
let incremented = value > 0 ? value + 1 : value;
console.log(incremented); // Output: 0

console.log("\n=== TERNARY FOR COMPARISON ===");

let temperature = 25;
let weather = temperature > 20 ? "warm" : "cold";
console.log("Weather:", weather); // Output: Weather: warm

let hour = 14;
let timeOfDay = hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening";
console.log("Time of day:", timeOfDay); // Output: Time of day: afternoon

console.log("\n=== PRACTICAL EXAMPLES ===");

// Membership discount
let isMember = true;
let discount = isMember ? 0.2 : 0;
console.log("Discount:", discount * 100 + "%"); // Output: Discount: 20%

// Available status
let inStock = true;
let availability = inStock ? "In stock" : "Out of stock";
console.log(availability); // Output: In stock

// Credit card validation (simplified)
let cardExpired = false;
let cardValid = !cardExpired ? "Valid" : "Expired";
console.log("Card:", cardValid); // Output: Card: Valid

// Age group
let personAge = 25;
let ageGroup = personAge < 18 ? "Minor" : personAge < 60 ? "Adult" : "Senior";
console.log("Age group:", ageGroup); // Output: Age group: Adult

// Even or odd
let number = 7;
let evenOdd = number % 2 === 0 ? "Even" : "Odd";
console.log(number, "is", evenOdd); // Output: 7 is Odd

// Array length check
let items = [1, 2, 3];
let hasItems = items.length > 0 ? true : false;
console.log("Has items:", hasItems); // Output: Has items: true

// Alternative (simpler)
let hasItems2 = items.length > 0;
console.log("Has items (simpler):", hasItems2); // Output: Has items: true