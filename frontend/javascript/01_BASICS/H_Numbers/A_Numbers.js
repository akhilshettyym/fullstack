// CONCEPT: Number Basics - Creating and working with numeric values

// CREATING NUMBERS
const integer = 42;
const decimal = 3.14;
const negative = -100;
const zero = 0;

// SCIENTIFIC NOTATION
const large = 1.23e5;      // 123000
const small = 1.23e-5;     // 0.0000123

// NUMBER PROPERTIES
console.log(Number.MAX_VALUE);    // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);    // 5e-324
console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);  // -9007199254740991

// SPECIAL NUMBERS
const infinity = Infinity;
const negInfinity = -Infinity;
const notANumber = NaN;

// PRECISION ISSUES
console.log(0.1 + 0.2);           // 0.30000000000000004 (common pitfall)
const result = (0.1 * 10 + 0.2 * 10) / 10;  // Fix: multiply, add, divide
console.log(result);               // 0.3

// OPERATIONS
console.log(10 + 5);               // 15
console.log(10 - 5);               // 5
console.log(10 * 5);               // 50
console.log(10 / 5);               // 2
console.log(10 % 3);               // 1 (modulo)
console.log(2 ** 3);               // 8 (exponentiation)

// INFINITY AND NaN
console.log(1 / 0);                // Infinity
console.log(-1 / 0);               // -Infinity
console.log(0 / 0);                // NaN
console.log("text" * 2);           // NaN
console.log(Math.sqrt(-1));        // NaN

// CONVERTING STRINGS TO NUMBERS
console.log(Number("123"));        // 123
console.log(Number("123.45"));     // 123.45
console.log(Number("123abc"));     // NaN
console.log(parseInt("123"));      // 123
console.log(parseInt("123.45"));   // 123
console.log(parseFloat("123.45")); // 123.45
console.log(+"100");               // 100 (unary plus operator)