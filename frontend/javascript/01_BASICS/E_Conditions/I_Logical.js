// ============================================
// LOGICAL OPERATORS - ADVANCED
// ============================================

// THEORY: Logical operators combine boolean expressions
// - && (AND): Returns true if ALL conditions are true
// - || (OR): Returns true if ANY condition is true
// - ! (NOT): Inverts boolean value

// THEORY: Short-circuit evaluation
// - && stops at first false (doesn't evaluate remaining)
// - || stops at first true (doesn't evaluate remaining)
// - Useful for optimization and avoiding errors

// THEORY: Nullish Coalescing Operator (??)
// - Returns right operand if left is null or undefined
// - Different from || which checks falsy values
// - Useful for default values when 0 or "" are valid

// THEORY: Optional Chaining (?.)
// - Safely access nested properties
// - Returns undefined if property doesn't exist
// - Prevents "Cannot read property of null/undefined" errors

// ============================================
// WORKING EXAMPLES
// ============================================

console.log("=== LOGICAL AND (&&) ===");

let x = 6;
let y = 3;

console.log(x < 10 && y > 1); // true (both true)
console.log(x < 5 && y > 1);  // false (first false)

// Practical use
let age = 20;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("Can drive"); // Output: Can drive
}

console.log("\n=== LOGICAL OR (||) ===");

let isWeekend = false;
let isHoliday = true;

console.log(isWeekend || isHoliday); // true (at least one true)
console.log(x === 5 || y === 5);    // false (both false)

// Practical use
let isAdmin = false;
let isOwner = true;

if (isAdmin || isOwner) {
  console.log("Access granted"); // Output: Access granted
}

console.log("\n=== LOGICAL NOT (!) ===");

let isRaining = false;
console.log(!isRaining); // true

let isEmpty = true;
console.log(!isEmpty);   // false

// Practical use
if (!isEmpty) {
  console.log("Not empty!");
}

console.log("\n=== SHORT-CIRCUIT EVALUATION (&&) ===");

// && stops at first false (doesn't evaluate rest)
let a = false;
let b = true;

// b is NOT evaluated because a is false
console.log(a && b); // false (doesn't check b)

// Practical example
let user = null;
// This is safe - won't evaluate user.age if user is null/false
// console.log(user && user.age); // null (stops at user)

console.log("\n=== SHORT-CIRCUIT EVALUATION (||) ===");

// || stops at first true
let c = true;
let d = false;

console.log(c || d); // true (doesn't check d)

// Practical: default values
let userRole = null;
let role = userRole || "guest";
console.log("Role:", role); // Output: Role: guest

console.log("\n=== NULLISH COALESCING (??) ===");

let timeout = null;
let defaultTimeout = timeout ?? 5000;
console.log("Timeout:", defaultTimeout); // Output: 5000

// Difference between || and ??
let count = 0;
console.log(count || 10);   // Output: 10 (0 is falsy for ||)
console.log(count ?? 10);   // Output: 0 (0 is not null/undefined for ??)

let name = "";
console.log(name || "Guest");    // Output: Guest ('' is falsy)
console.log(name ?? "Guest");    // Output: "" ('' is not null/undefined)

console.log("\n=== COMBINING LOGICAL OPERATORS ===");

let score = 85;
let isPassed = score >= 60 && score <= 100;
console.log("Passed:", isPassed); // Output: true

let hasAccess = (isAdmin || isOwner) && isPassed;
console.log("Has access:", hasAccess); // Output: true

console.log("\n=== PRACTICAL: FORM VALIDATION ===");

let email = "user@example.com";
let password = "secure123";
let agreeTerms = true;

if (email && password && agreeTerms) {
  console.log("Form is valid"); // Output: Form is valid
}

console.log("\n=== PRACTICAL: PERMISSIONS CHECK ===");

let canRead = true;
let canWrite = false;
let canDelete = false;

if (canRead && (canWrite || canDelete)) {
  console.log("Has write permission");
} else {
  console.log("No write permission"); // Output: No write permission
}

console.log("\n=== PRACTICAL: FEATURE FLAGS ===");

let isDevelopment = false;
let debugMode = true;
let showDebug = isDevelopment || debugMode;

console.log("Show debug info:", showDebug); // Output: true

console.log("\n=== PRACTICAL: ERROR HANDLING ===");

let userData = { name: "John", age: 30 };
let invalidData = null;

// Safe access with &&
let userAge = userData && userData.age;
console.log("User age:", userAge); // Output: 30

// let invalidAge = invalidData && invalidData.age;
// console.log("Invalid age:", invalidAge); // undefined (safe)