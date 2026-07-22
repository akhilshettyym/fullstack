// ============================================
// LOGICAL & SPECIAL OPERATORS
// ============================================

// THEORY: Logical Operators combine conditions
// - && (AND): Both conditions must be true
// - || (OR): At least one condition must be true
// - ! (NOT): Reverses/inverts a boolean value

// THEORY: Unary Operators work on single operands
// - + : Converts to number (unary plus)
// - - : Negates/converts to negative number (unary minus)
// - ! : Logical NOT
// - typeof : Returns data type
// - ++ : Increment
// - -- : Decrement

// THEORY: instanceof Operator
// - Checks if object is instance of a constructor
// - Returns boolean: true or false
// - let arr = []; arr instanceof Array // true

// THEORY: Operator precedence (in order):
// 1. Unary operators (!, typeof, +, -)
// 2. Exponentiation (**)
// 3. Multiplicative (*, /, %)
// 4. Additive (+, -)
// 5. Relational (<, >, <=, >=)
// 6. Equality (==, ===, !=, !==)
// 7. Logical AND (&&)
// 8. Logical OR (||)
// 9. Ternary (?:)
// 10. Assignment (=, +=, etc.)

// ============================================
// WORKING EXAMPLES
// ============================================

console.log("=== LOGICAL AND (&&) ===");
// Both conditions must be true

let age = 20;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("Can drive"); // Output: Can drive
}

let x = 5;
let y = 10;
console.log(x > 0 && y > 0); // true (both true)
console.log(x > 0 && y < 0); // false (second is false)
console.log(x < 0 && y > 0); // false (first is false)

console.log("\n=== LOGICAL OR (||) ===");
// At least one condition must be true

let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("Day off!"); // Output: Day off!
}

console.log(x > 0 || y < 0); // true (first is true)
console.log(x < 0 || y < 0); // false (both false)
console.log(x > 0 || y > 0); // true (both true)

console.log("\n=== LOGICAL NOT (!) ===");
// Reverses boolean value

let isRaining = false;
if (!isRaining) {
  console.log("No rain, go outside!"); // Output: No rain, go outside!
}

console.log(!true);  // false
console.log(!false); // true
console.log(!(5 > 3)); // false (5 > 3 is true, ! makes it false)

console.log("\n=== DOUBLE NOT (!!) ===");
// Converts to boolean

let value = "hello";
console.log(!!value); // true (non-empty string is truthy)

let emptyStr = "";
console.log(!!emptyStr); // false (empty string is falsy)

console.log(!!0);  // false
console.log(!!5);  // true
console.log(!!null); // false

console.log("\n=== UNARY PLUS (+) ===");
// Converts to number

console.log(+"5"); // Output: 5 (number)
console.log(+"3.14"); // Output: 3.14
console.log(+"hello"); // Output: NaN

console.log("\n=== UNARY MINUS (-) ===");
// Negates number

let num = 5;
console.log(-num); // Output: -5 (doesn't change num)
console.log(-(-num)); // Output: 5 (double negative)

console.log("\n=== TYPEOF OPERATOR ===");

console.log(typeof 42); // Output: number
console.log(typeof "hello"); // Output: string
console.log(typeof true); // Output: boolean
console.log(typeof undefined); // Output: undefined
console.log(typeof Symbol()); // Output: symbol
console.log(typeof {}); // Output: object
console.log(typeof []); // Output: object
console.log(typeof function () { }); // Output: function

console.log("\n=== INSTANCEOF OPERATOR ===");

let arr = [1, 2, 3];
let obj = { name: "John" };
let str = "hello";

console.log(arr instanceof Array); // true
console.log(obj instanceof Object); // true
console.log(str instanceof String); // false (primitive, not object)
console.log(new String("hello") instanceof String); // true (object wrapper)

console.log("\n=== COMBINED LOGICAL OPERATORS ===");

// AND has higher precedence than OR
console.log(true || false && false); // true (AND first: false && false = false, then true || false = true)
console.log((true || false) && false); // false (with parentheses)

// Complex condition
let canBuyAlcohol = age >= 18 && hasLicense;
console.log("Can buy alcohol:", canBuyAlcohol); // Output: Can buy alcohol: true

let canEnter = age >= 13 || hasLicense;
console.log("Can enter:", canEnter); // Output: Can enter: true

console.log("\n=== PRACTICAL EXAMPLES ===");

// Form validation
let username = "john123";
let password = "pass123";
let isValid = username.length > 0 && password.length > 0;
console.log("Form valid:", isValid); // Output: Form valid: true

// User permissions
let isAdmin = false;
let isOwner = true;
let canDelete = isAdmin || isOwner;
console.log("Can delete:", canDelete); // Output: Can delete: true

// Grade validation
let score = 85;
let isPassed = score >= 60;
let isExcellent = score >= 90;
console.log("Passed:", isPassed); // Output: Passed: true
console.log("Excellent:", isExcellent); // Output: Excellent: false