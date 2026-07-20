// ============================================
// JAVASCRIPT DATA TYPES - ADVANCED
// ============================================

// THEORY: Primitive vs Reference Types
// - PRIMITIVES: String, Number, Boolean, Undefined, Null, Symbol, BigInt
//   → Copied by value (changes to copy don't affect original)
// - REFERENCES: Object, Array, Function
//   → Copied by reference (changes affect both original and copy)

// THEORY: Null vs Undefined
// - undefined: Automatic default when variable not initialized
// - null: Intentional absence of value (explicitly assigned)

// THEORY: Symbol - Unique identifier
// - Each Symbol is unique, even if created with same description
// - Used for object keys to avoid property name conflicts
// - Advanced topic, rarely used in beginner code

// THEORY: MAX_SAFE_INTEGER limit
// - JavaScript numbers safely handle up to 2^53 - 1 (9,007,199,254,740,991)
// - Beyond this, use BigInt for precision

// THEORY: Dynamic Typing
// - JavaScript allows variables to change types at runtime
// - More flexible but can cause unexpected behavior if not careful

// THEORY: Type Coercion
// - JavaScript automatically converts types in operations
// - "5" + 5 becomes "55" (string concatenation)
// - "5" - 5 becomes 0 (numeric subtraction)

// THEORY: Truthy vs Falsy
// - Falsy values: 0, "", null, undefined, NaN, false
// - Truthy values: Everything else
// - Important in if statements and logical operations

// ============================================
// WORKING EXAMPLES
// ============================================

// Primitive vs Reference demonstration
let primitiveA = 10;
let primitiveB = primitiveA;
primitiveB = 20;
console.log("Primitive A:", primitiveA, "B:", primitiveB); // A: 10, B: 20 (independent)

let refA = { value: 10 };
let refB = refA;
refB.value = 20;
console.log("Ref A value:", refA.value, "B value:", refB.value); // Both: 20 (same object)

// undefined vs null
let notAssigned;
console.log(notAssigned); // Output: undefined (automatic)

let empty = null;
console.log(empty); // Output: null (intentional)

// Symbol - unique identifiers
const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(sym1 === sym2); // Output: false (each symbol is unique)

// Using Symbol as object key
const person = {
  name: "John",
  [sym1]: "unique-id-123"
};
console.log(person.name); // Output: John
console.log(person[sym1]); // Output: unique-id-123

// MAX_SAFE_INTEGER example
console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1); // Output: 9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2); // Output: 9007199254740992 (precision lost!)

// Using BigInt for large numbers
let bigNumber = BigInt(Number.MAX_SAFE_INTEGER) + 1n;
console.log(bigNumber); // Output: 9007199254740992n (precise)
console.log(typeof bigNumber); // Output: bigint

// Type coercion examples
console.log("10" + 5); // Output: "105" (string concatenation)
console.log("10" - 5); // Output: 5 (numeric conversion)
console.log("10" * "2"); // Output: 20 (numeric conversion)
console.log(true + 1); // Output: 2 (true → 1)
console.log(false + 1); // Output: 1 (false → 0)
console.log(null + 1); // Output: 1 (null → 0)
console.log(undefined + 1); // Output: NaN

// Truthy and Falsy values
const falsyValues = [0, "", null, undefined, NaN, false];
const truthyValues = [1, "hello", [], {}, true];

falsyValues.forEach((val, i) => {
  if (val) console.log(i, "is truthy");
  else console.log(i, "is falsy");
});

// Using falsy/truthy in practice
function checkValue(val) {
  if (val) {
    console.log("Value is truthy");
  } else {
    console.log("Value is falsy");
  }
}

checkValue(0);        // Output: Value is falsy
checkValue(1);        // Output: Value is truthy
checkValue("");       // Output: Value is falsy
checkValue("hello");  // Output: Value is truthy

// Why typeof NaN is "number"
console.log(typeof NaN); // Output: number (it's a failed number operation)
console.log(typeof undefined); // Output: undefined
console.log(typeof null); // Output: object (JavaScript quirk!)

// Dynamic typing example
let variable = 42;
console.log(typeof variable); // Output: number

variable = "now a string";
console.log(typeof variable); // Output: string

variable = true;
console.log(typeof variable); // Output: boolean

variable = { prop: "value" };
console.log(typeof variable); // Output: object