// ============================================
// ARITHMETIC OPERATORS - DETAILED
// ============================================

// THEORY: Arithmetic operators perform mathematical operations
// - +  : Addition
// - -  : Subtraction
// - *  : Multiplication
// - /  : Division
// - %  : Modulus (returns remainder)
// - ** : Exponentiation (power)
// - ++ : Increment by 1
// - -- : Decrement by 1

// THEORY: Operator Precedence in order:
// 1. ** (Exponentiation) - highest
// 2. *, /, % (Multiplication, Division, Modulus)
// 3. +, - (Addition, Subtraction) - lowest
// 4. Operations with same precedence go left to right

// ============================================
// WORKING EXAMPLES
// ============================================

console.log("=== ADDITION ===");
let x = 5;
let y = 2;
let z = x + y;
console.log(x, "+", y, "=", z); // Output: 5 + 2 = 7

// SUBTRACTION
console.log("\n=== SUBTRACTION ===");
z = x - y;
console.log(x, "-", y, "=", z); // Output: 5 - 2 = 3

// MULTIPLICATION
console.log("\n=== MULTIPLICATION ===");
z = x * y;
console.log(x, "*", y, "=", z); // Output: 5 * 2 = 10

// DIVISION
console.log("\n=== DIVISION ===");
z = x / y;
console.log(x, "/", y, "=", z); // Output: 5 / 2 = 2.5

// MODULUS (Remainder)
console.log("\n=== MODULUS (REMAINDER) ===");
z = x % y;
console.log(x, "%", y, "=", z); // Output: 5 % 2 = 1
console.log(10 % 3); // Output: 1 (10 ÷ 3 = 3 remainder 1)
console.log(20 % 5); // Output: 0 (20 ÷ 5 = 4 remainder 0)
console.log(17 % 5); // Output: 2 (17 ÷ 5 = 3 remainder 2)

// Common use: Check if number is even or odd
let num = 7;
console.log(num % 2 === 0 ? "even" : "odd"); // Output: odd

// EXPONENTIATION
console.log("\n=== EXPONENTIATION (**) ===");
z = x ** y;
console.log(x, "**", y, "=", z); // Output: 5 ** 2 = 25

console.log(2 ** 3); // Output: 8 (2 × 2 × 2)
console.log(5 ** 2); // Output: 25 (5 × 5)
console.log(10 ** 2); // Output: 100

// Math.pow() also works
console.log(Math.pow(x, y)); // Output: 25

// INCREMENT (++)
console.log("\n=== INCREMENT (++) ===");
let counter = 5;
counter++;  // Increment by 1
console.log("After counter++:", counter); // Output: 6

// Pre-increment vs Post-increment
let preInc = 10;
let result1 = ++preInc;  // Pre-increment: increment first, then return
console.log("++preInc:", result1, "preInc:", preInc); // Output: 11 11

let postInc = 10;
let result2 = postInc++;  // Post-increment: return first, then increment
console.log("postInc++:", result2, "postInc:", postInc); // Output: 10 11

// DECREMENT (--)
console.log("\n=== DECREMENT (--) ===");
let score = 10;
score--;  // Decrement by 1
console.log("After score--:", score); // Output: 9

// Pre-decrement vs Post-decrement
let preDec = 10;
result1 = --preDec;  // Pre-decrement: decrement first, then return
console.log("--preDec:", result1, "preDec:", preDec); // Output: 9 9

let postDec = 10;
result2 = postDec--;  // Post-decrement: return first, then decrement
console.log("postDec--:", result2, "postDec:", postDec); // Output: 10 9

// OPERATOR PRECEDENCE
console.log("\n=== OPERATOR PRECEDENCE ===");
console.log(2 + 3 * 4); // 14 (multiply first: 3*4=12, then 2+12=14)
console.log((2 + 3) * 4); // 20 (add first in parentheses)

console.log(100 + 50 * 3); // 250 (50*3=150, then 100+150=250)
console.log((100 + 50) * 3); // 450

console.log(2 ** 3 * 4); // 32 (2**3=8, then 8*4=32)
console.log(2 ** (3 * 4)); // 4096 (3*4=12, then 2**12=4096)

// LEFT TO RIGHT for same precedence
console.log(100 + 50 - 3); // 147 (left to right: 100+50=150, then 150-3=147)
console.log(100 / 50 * 3); // 6 (left to right: 100/50=2, then 2*3=6)

// Practical examples
console.log("\n=== PRACTICAL EXAMPLES ===");
let subtotal = 100;
let taxRate = 0.08;
let total = subtotal + (subtotal * taxRate);
console.log("Total with tax:", total); // Output: 108

let circleRadius = 5;
let area = Math.PI * circleRadius ** 2;
console.log("Circle area:", area.toFixed(2)); // Output: 78.54