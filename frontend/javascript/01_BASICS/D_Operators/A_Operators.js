// ============================================
// JAVASCRIPT OPERATORS OVERVIEW
// ============================================

// THEORY: Operators perform operations on operands
// - Operand: A value being operated on (5 in "5 + 3")
// - Operator: The operation performed (+)
// - Result: The outcome of the operation (8)

// THEORY: Seven main operator types:
// 1. Arithmetic: +, -, *, /, %, **
// 2. Assignment: =, +=, -=, *=, etc.
// 3. Comparison: ==, ===, !=, !==, >, <, >=, <=
// 4. Logical: &&, ||, !
// 5. Bitwise: &, |, ^, ~, <<, >>, >>>
// 6. String: + (concatenation)
// 7. Ternary: ? : (conditional)

// THEORY: Operator Precedence (PEMDAS in math)
// - Exponentiation (**) highest
// - Multiplication (*), Division (/), Modulus (%) 
// - Addition (+), Subtraction (-)
// - Comparison operators
// - Logical operators (&&, ||)
// - Assignment operators lowest

// ============================================
// WORKING EXAMPLES
// ============================================

// ARITHMETIC OPERATORS
console.log("=== ARITHMETIC OPERATORS ===");
let a = 10;
let b = 3;

console.log(a + b);   // Addition: 13
console.log(a - b);   // Subtraction: 7
console.log(a * b);   // Multiplication: 30
console.log(a / b);   // Division: 3.333...
console.log(a % b);   // Modulus (remainder): 1
console.log(a ** b);  // Exponentiation: 1000 (10^3)

// ASSIGNMENT OPERATORS
console.log("\n=== ASSIGNMENT OPERATORS ===");
let x = 5;
console.log("x =", x); // Output: 5

x += 3;  // x = x + 3
console.log("x += 3 →", x); // Output: 8

x -= 2;  // x = x - 2
console.log("x -= 2 →", x); // Output: 6

x *= 2;  // x = x * 2
console.log("x *= 2 →", x); // Output: 12

x /= 4;  // x = x / 4
console.log("x /= 4 →", x); // Output: 3

// STRING CONCATENATION (+ operator)
console.log("\n=== STRING CONCATENATION ===");
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: John Doe

// String concatenation with +=
let message = "Hello";
message += " ";
message += "World";
console.log(message); // Output: Hello World

// COMPARISON OPERATORS (return boolean)
console.log("\n=== COMPARISON OPERATORS ===");
let num = 5;
console.log(num > 3);   // true
console.log(num < 3);   // false
console.log(num >= 5);  // true
console.log(num <= 5);  // true
console.log(num == 5);  // true
console.log(num === "5"); // false (different types)

// LOGICAL OPERATORS
console.log("\n=== LOGICAL OPERATORS ===");
let condition1 = true;
let condition2 = false;

console.log(condition1 && condition2); // false (AND: both must be true)
console.log(condition1 || condition2); // true (OR: at least one true)
console.log(!condition1); // false (NOT: negation)

// OPERATOR PRECEDENCE
console.log("\n=== OPERATOR PRECEDENCE ===");
console.log(2 + 3 * 4); // Output: 14 (multiply first: 3*4=12, then 2+12=14)
console.log((2 + 3) * 4); // Output: 20 (parentheses first: 2+3=5, then 5*4=20)
console.log(100 + 50 * 3); // Output: 250 (multiply first: 50*3=150, then 100+150=250)

// Mixed operations
console.log("\n=== MIXED OPERATIONS ===");
let result1 = 10 + 5 * 2;  // 20 (multiplication first)
let result2 = (10 + 5) * 2; // 30 (parentheses first)
console.log("10 + 5 * 2 =", result1); // Output: 20
console.log("(10 + 5) * 2 =", result2); // Output: 30

// Increment and Decrement
console.log("\n=== INCREMENT / DECREMENT ===");
let count = 5;
console.log(count++); // Output: 5 (post-increment, returns old value)
console.log(count);   // Output: 6

console.log(++count); // Output: 7 (pre-increment, returns new value)
console.log(count);   // Output: 7

count--;
console.log(count); // Output: 6