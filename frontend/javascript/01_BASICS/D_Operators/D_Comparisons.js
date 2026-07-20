// ============================================
// COMPARISON OPERATORS
// ============================================

// THEORY: Comparison operators compare two values
// - Always return boolean: true or false
// - Used in conditional statements and loops

// THEORY: Equality Operators:
// - == : Loose equality (compares value, coerces type)
// - === : Strict equality (compares value AND type)
// - != : Loose inequality
// - !== : Strict inequality

// THEORY: Relational Operators:
// - > : Greater than
// - < : Less than
// - >= : Greater than or equal to
// - <= : Less than or equal to

// THEORY: Key difference: == vs ===
// - "5" == 5 returns true (type coercion)
// - "5" === 5 returns false (type matters)
// - Best practice: Always use === (strict)

// THEORY: String comparison
// - Strings compared alphabetically
// - "Apple" < "Banana" is true
// - "20" < "5" is true (alphabetical, not numeric!)

// ============================================
// WORKING EXAMPLES
// ============================================

console.log("=== EQUALITY OPERATORS (== vs ===) ===");

let num = 5;

// Loose equality (==)
console.log(num == 5);      // true (same value)
console.log(num == "5");    // true (value same, type coerced)
console.log(num == 8);      // false (different value)

// Strict equality (===)
console.log(num === 5);     // true (same value, same type)
console.log(num === "5");   // false (same value, different type!)
console.log(num === 8);     // false (different value)

// Best practice: Use strict equality
console.log(5 === 5);       // true
console.log(5 === "5");     // false ✓ Preferred way
console.log(5 == "5");      // true (but can be misleading)

console.log("\n=== INEQUALITY OPERATORS (!= vs !==) ===");

// Loose inequality (!=)
console.log(num != 5);      // false
console.log(num != "5");    // false (type coerced, equal)
console.log(num != 8);      // true (different values)

// Strict inequality (!==)
console.log(num !== 5);     // false
console.log(num !== "5");   // true (type different!)
console.log(num !== 8);     // true (different values)

console.log("\n=== GREATER THAN / LESS THAN ===");

let x = 5;
console.log(x > 3);         // true
console.log(x > 8);         // false
console.log(x < 10);        // true
console.log(x < 3);         // false

console.log("\n=== GREATER THAN OR EQUAL / LESS THAN OR EQUAL ===");

console.log(x >= 5);        // true (equal)
console.log(x >= 3);        // true (greater)
console.log(x >= 10);       // false

console.log(x <= 5);        // true (equal)
console.log(x <= 10);       // true (less)
console.log(x <= 3);        // false

console.log("\n=== STRING COMPARISON ===");

let str1 = "Apple";
let str2 = "Banana";
let str3 = "apple";

console.log(str1 < str2);   // true (A comes before B alphabetically)
console.log(str1 > str2);   // false
console.log(str1 === str3); // false (case-sensitive)

// GOTCHA: String vs Number comparison
let strNum1 = "20";
let strNum2 = "5";
console.log(strNum1 < strNum2);   // true! ("20" < "5" alphabetically)
console.log(Number(strNum1) < Number(strNum2)); // false (20 < 5 numerically)

console.log("\n=== TYPE COERCION IN COMPARISONS ===");

console.log(2 < 12);        // true
console.log(2 < "12");      // true (string "12" converted to 12)
console.log(2 < "John");    // false ("John" converts to NaN, all comparisons with NaN are false)
console.log(2 > "John");    // false
console.log(2 == "2");      // true (type coerced)
console.log(2 === "2");     // false (strict)

console.log("\n=== PRACTICAL EXAMPLES ===");

// Age verification
let age = 18;
let canVote = age >= 18;
console.log("Can vote:", canVote); // Output: true

// Price comparison
let price = 99.99;
let budget = 100;
console.log("Can afford:", price <= budget); // Output: true

// Grade checking
let score = 75;
let passed = score >= 60;
console.log("Passed:", passed); // Output: true

// User authentication simulation
let username = "admin";
let correctUsername = "admin";
let isValid = username === correctUsername;
console.log("Valid username:", isValid); // Output: true

// Type-safe comparison
let input = "25";
let targetAge = 25;
console.log(input == targetAge);    // true (but misleading)
console.log(input === targetAge);   // false (safe, shows type difference)
console.log(Number(input) === targetAge); // true (explicit conversion)

// Multiple comparisons
let temperature = 25;
let comfortable = temperature >= 20 && temperature <= 28;
console.log("Temperature comfortable:", comfortable); // Output: true