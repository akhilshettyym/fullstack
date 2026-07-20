// ============================================
// JAVASCRIPT DATA TYPES
// ============================================

// THEORY: JavaScript has 8 primitive data types:
// 1. String - Text enclosed in quotes
// 2. Number - Integer or decimal values
// 3. BigInt - Very large integers (beyond Number range)
// 4. Boolean - true or false
// 5. Undefined - Variable declared but not assigned
// 6. Null - Intentional absence of value
// 7. Symbol - Unique identifier (advanced, rarely used)
// 8. Object - Collection of key-value pairs (arrays, objects, etc.)

// THEORY: Primitive vs Reference types:
// - Primitive types: String, Number, Boolean, Undefined, Null, Symbol, BigInt
// - Reference types: Object, Array, Function (stored as objects)

// THEORY: typeof operator checks data type
// - Returns string with type name
// - Helpful for debugging and type checking

// ============================================
// WORKING EXAMPLES
// ============================================

// STRING type - text data
let message = "Hello World";
let name = 'John Doe';
let quote = `Template string: "Hello" + 'World'`;
console.log(typeof message);  // Output: string

// NUMBER type - integers and decimals
let age = 30;
let height = 5.9;
let temperature = -10;
let pi = 3.14159;
console.log(typeof age); // Output: number
console.log(100 / 0); // Output: Infinity (special number value)
console.log(0 / 0);   // Output: NaN (Not a Number)

// BIGINT type - extremely large numbers
let largeNumber = 1234567890123456789012345n;  // Note: 'n' suffix
let anotherBigInt = BigInt(9007199254740991);
console.log(typeof largeNumber); // Output: bigint

// BOOLEAN type - true or false only
let isActive = true;
let isDeleted = false;
let isValid = 1 === 1;  // true
console.log(typeof isActive); // Output: boolean

// UNDEFINED type - variable declared but not assigned
let notAssigned;
console.log(notAssigned);  // Output: undefined
console.log(typeof notAssigned); // Output: undefined

// NULL type - intentional absence of value
let emptyValue = null;
console.log(emptyValue); // Output: null
console.log(typeof emptyValue); // Output: object (quirk of JavaScript!)

// SYMBOL type - unique identifier
const symbol1 = Symbol();
const symbol2 = Symbol();
console.log(typeof symbol1); // Output: symbol
console.log(symbol1 === symbol2); // Output: false (each Symbol is unique)

// OBJECT type - collections (arrays, objects, etc.)
let person = { name: "John", age: 30 };
let numbers = [1, 2, 3, 4, 5];
let today = new Date();
let pattern = /hello/i;  // Regular expression
console.log(typeof person);   // Output: object
console.log(typeof numbers);  // Output: object (arrays are objects!)
console.log(typeof today);    // Output: object

// typeof operator examples
console.log(typeof 42);              // Output: number
console.log(typeof "hello");         // Output: string
console.log(typeof true);            // Output: boolean
console.log(typeof undefined);       // Output: undefined
console.log(typeof Symbol());        // Output: symbol
console.log(typeof {});              // Output: object
console.log(typeof []);              // Output: object
console.log(typeof function () { });    // Output: function

// Type coercion examples (JavaScript converts types)
console.log("5" + 3);        // Output: "53" (string concatenation)
console.log("5" - 3);        // Output: 2 (numeric conversion)
console.log("5" * "2");      // Output: 10 (numeric conversion)
console.log(true + 1);       // Output: 2 (true becomes 1)
console.log(false + 1);      // Output: 1 (false becomes 0)

// Checking multiple types
function checkType(value) {
  if (typeof value === "string") console.log("It's text");
  else if (typeof value === "number") console.log("It's a number");
  else if (typeof value === "boolean") console.log("It's true/false");
  else if (value === null) console.log("It's null");
  else if (typeof value === "object") console.log("It's an object/array");
}

checkType("hello");    // Output: It's text
checkType(42);         // Output: It's a number
checkType(true);       // Output: It's true/false
checkType(null);       // Output: It's null
checkType({ x: 1 });   // Output: It's an object/array