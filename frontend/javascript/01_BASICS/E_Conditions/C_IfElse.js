// ============================================
// IF...ELSE & IF...ELSE IF...ELSE
// ============================================

// THEORY: if...else executes one of two code blocks
// - if condition true: first block executes
// - if condition false: else block executes
// - Syntax: if (condition) { /* true */ } else { /* false */ }

// THEORY: if...else if...else handles multiple conditions
// - Tests conditions in order, top to bottom
// - Executes first matching block, skips rest
// - else if can be chained multiple times
// - else is optional (executed if all conditions false)

// THEORY: Best practices:
// - Always include else (handles unexpected cases)
// - Order conditions from most specific to least specific
// - Use else if sparingly (switch might be better for many options)
// - Keep conditions simple and readable

// ============================================
// WORKING EXAMPLES
// ============================================

console.log("=== IF...ELSE BASIC ===");

let age = 15;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor"); // Output: You are a minor
}

console.log("\n=== IF...ELSE WITH DIFFERENT CONDITIONS ===");

let hour = 22;

if (hour < 12) {
  console.log("Good morning");
} else {
  console.log("Not morning"); // Output: Not morning
}

console.log("\n=== IF...ELSE IF...ELSE CHAIN ===");

let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C"); // Output: Grade: C
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

console.log("\n=== TIME OF DAY EXAMPLE ===");

let time = 14;

if (time < 12) {
  console.log("Good morning");
} else if (time < 18) {
  console.log("Good afternoon"); // Output: Good afternoon
} else if (time < 21) {
  console.log("Good evening");
} else {
  console.log("Good night");
}

console.log("\n=== TEMPERATURE RANGE ===");

let temperature = 22;

if (temperature < 0) {
  console.log("Freezing");
} else if (temperature < 10) {
  console.log("Cold");
} else if (temperature < 20) {
  console.log("Cool");
} else if (temperature < 30) {
  console.log("Warm"); // Output: Warm
} else {
  console.log("Hot");
}

console.log("\n=== CHECKING MULTIPLE CONDITIONS ===");

let username = "admin";
let password = "12345";
let loginAttempts = 0;

if (username === "admin" && password === "12345") {
  console.log("Login successful"); // Output: Login successful
} else if (username !== "admin") {
  console.log("Invalid username");
} else if (password !== "12345") {
  console.log("Invalid password");
} else {
  console.log("Login failed");
}

console.log("\n=== USER ROLE PERMISSIONS ===");

let userRole = "editor";

if (userRole === "admin") {
  console.log("Can do everything");
} else if (userRole === "editor") {
  console.log("Can edit content"); // Output: Can edit content
} else if (userRole === "viewer") {
  console.log("Can view content only");
} else {
  console.log("Role not recognized");
}

console.log("\n=== AGE-BASED ACCESS ===");

let visitorAge = 25;

if (visitorAge < 13) {
  console.log("Children's section only");
} else if (visitorAge < 18) {
  console.log("Teen content available");
} else if (visitorAge < 65) {
  console.log("Full access"); // Output: Full access
} else {
  console.log("Senior discount available");
}

console.log("\n=== FORM VALIDATION ===");

let userEmail = "";
let userPassword = "pass123";

if (!userEmail) {
  console.log("Email is required"); // Output: Email is required
} else if (!userPassword) {
  console.log("Password is required");
} else if (userEmail.includes("@")) {
  console.log("Email format looks good");
} else {
  console.log("Invalid email format");
}

console.log("\n=== REAL-WORLD: SHIPPING COST ===");

let orderAmount = 75;

if (orderAmount < 50) {
  console.log("Shipping: $10");
} else if (orderAmount < 100) {
  console.log("Shipping: $5"); // Output: Shipping: $5
} else if (orderAmount < 250) {
  console.log("Shipping: FREE");
} else {
  console.log("Shipping: FREE (Express)");
}

console.log("\n=== REAL-WORLD: DISCOUNT CALCULATION ===");

let purchaseAmount = 150;

if (purchaseAmount < 50) {
  console.log("No discount");
} else if (purchaseAmount < 100) {
  console.log("Discount: 5%");
} else if (purchaseAmount < 200) {
  console.log("Discount: 10%"); // Output: Discount: 10%
} else {
  console.log("Discount: 15%");
}