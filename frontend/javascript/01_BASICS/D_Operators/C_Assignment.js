// ============================================
// ASSIGNMENT OPERATORS
// ============================================

// THEORY: Assignment operators assign values to variables
// - = : Simple assignment
// - += : Add and assign (x += y is x = x + y)
// - -= : Subtract and assign
// - *= : Multiply and assign
// - /= : Divide and assign
// - %= : Modulus and assign
// - ** = : Exponentiation and assign

// THEORY: Logical Assignment Operators (ES2020+)
// - &&= : Assign only if value is truthy
// - ||= : Assign only if value is falsy
// - ??= : Assign only if value is null/undefined

// THEORY: Spread Operator (...)
// - Expands array or iterable elements
// - Useful for unpacking values

// ============================================
// WORKING EXAMPLES
// ============================================

console.log("=== BASIC ASSIGNMENT ===");
let x = 10;
console.log("x = 10; // x:", x);

// COMPOUND ASSIGNMENT OPERATORS
console.log("\n=== COMPOUND ASSIGNMENT (+=, -=, etc.) ===");

// Addition Assignment
let num = 10;
num += 5;  // Same as: num = num + 5
console.log("num += 5 →", num); // Output: 15

// Subtraction Assignment
num = 15;
num -= 5;  // Same as: num = num - 5
console.log("num -= 5 →", num); // Output: 10

// Multiplication Assignment
num = 10;
num *= 5;  // Same as: num = num * 5
console.log("num *= 5 →", num); // Output: 50

// Division Assignment
num = 50;
num /= 5;  // Same as: num = num / 5
console.log("num /= 5 →", num); // Output: 10

// Modulus Assignment
num = 17;
num %= 5;  // Same as: num = num % 5
console.log("num %= 5 →", num); // Output: 2

// Exponentiation Assignment
num = 2;
num **= 3;  // Same as: num = num ** 3
console.log("num **= 3 →", num); // Output: 8

// STRING ASSIGNMENT
console.log("\n=== STRING ASSIGNMENT ===");
let text = "Hello";
console.log(text); // Output: Hello

text += " World";  // Concatenate and assign
console.log("text += ' World' →", text); // Output: Hello World

// LOGICAL AND ASSIGNMENT (&&=)
console.log("\n=== LOGICAL AND ASSIGNMENT (&&=) ===");
// Only assigns if first value is truthy

let val1 = 1;
let result1 = (val1 &&= 10);
console.log("(1 &&= 10) →", result1); // Output: 10

let val2 = 0;
let result2 = (val2 &&= 10);
console.log("(0 &&= 10) →", result2); // Output: 0

let val3 = true;
let result3 = (val3 &&= "assigned");
console.log("(true &&= 'assigned') →", result3); // Output: assigned

// LOGICAL OR ASSIGNMENT (||=)
console.log("\n=== LOGICAL OR ASSIGNMENT (||=) ===");
// Only assigns if first value is falsy

let val4 = 0;
let result4 = (val4 ||= 10);
console.log("(0 ||= 10) →", result4); // Output: 10

let val5 = 5;
let result5 = (val5 ||= 10);
console.log("(5 ||= 10) →", result5); // Output: 5

let val6 = null;
let result6 = (val6 ||= "default");
console.log("(null ||= 'default') →", result6); // Output: default

// NULLISH COALESCING ASSIGNMENT (??=)
console.log("\n=== NULLISH COALESCING ASSIGNMENT (??=) ===");
// Only assigns if first value is null or undefined

let val7;
val7 ??= "default value";
console.log("undefined ??= 'default value' →", val7); // Output: default value

let val8 = 0;
val8 ??= 10;
console.log("0 ??= 10 →", val8); // Output: 0 (0 is not null/undefined)

let val9 = null;
val9 ??= "replaced";
console.log("null ??= 'replaced' →", val9); // Output: replaced

// SPREAD OPERATOR (...)
console.log("\n=== SPREAD OPERATOR (...) ===");

// Spread array elements
let arr = [1, 2, 3];
console.log(Math.max(...arr)); // Output: 3 (spreads to Math.max(1, 2, 3))
console.log(Math.min(...arr)); // Output: 1

// Spread string characters
let text2 = "hello";
let chars = [...text2];
console.log(chars); // Output: [ 'h', 'e', 'l', 'l', 'o' ]

// Copy array using spread
let original = [1, 2, 3];
let copy = [...original];
copy[0] = 99;
console.log("Original:", original); // Output: [1, 2, 3]
console.log("Copy:", copy); // Output: [99, 2, 3]

// PRACTICAL EXAMPLES
console.log("\n=== PRACTICAL EXAMPLES ===");

// Calculate total with compound assignment
let total = 100;
total += 50;  // Add discount subtotal
total -= 10;  // Subtract coupon
total *= 1.08; // Apply tax
console.log("Final total:", total.toFixed(2)); // Output: 151.20

// Use logical assignments for defaults
let config = { timeout: null };
config.timeout ??= 5000; // Set default if null
console.log("Timeout:", config.timeout); // Output: 5000

let userRole = null;
userRole ??= "guest"; // Set default role
console.log("User role:", userRole); // Output: guest