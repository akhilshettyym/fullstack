// CONCEPT: Number Methods - Converting and formatting numbers

const num = 9.656;
const integer = 123;

// CONVERTING TO STRING
console.log(integer.toString());      // "123"
console.log((42).toString());         // "42" - with literals, use parentheses
console.log((255).toString(16));      // "ff" - hexadecimal (base 16)
console.log((8).toString(2));         // "1000" - binary (base 2)
console.log((100).toString(8));       // "144" - octal (base 8)

// FIXED DECIMAL PLACES
console.log(num.toFixed(0));          // "10" - rounds to 0 decimals
console.log(num.toFixed(2));          // "9.66" - 2 decimal places
console.log(num.toFixed(4));          // "9.6560" - 4 decimal places

// EXPONENTIAL NOTATION
console.log(num.toExponential(2));    // "9.66e+0"
console.log((12345).toExponential(2)); // "1.23e+4"
console.log((0.000123).toExponential(2)); // "1.23e-4"

// PRECISION (Total significant digits)
console.log(num.toPrecision(2));      // "9.7" - 2 significant digits
console.log(num.toPrecision(4));      // "9.656"
console.log((1234).toPrecision(2));   // "1.2e+3"

// NUMBER PARSING - Static methods on Number object
console.log(Number.parseInt("100"));         // 100
console.log(Number.parseInt("100.5"));       // 100 - ignores decimals
console.log(Number.parseInt("10 years"));    // 10 - stops at non-numeric
console.log(Number.parseFloat("100.5"));     // 100.5
console.log(Number.parseFloat("10.5 items")); // 10.5

// NUMBER VALIDATION - Static methods
console.log(Number.isInteger(42));       // true
console.log(Number.isInteger(42.5));     // false
console.log(Number.isNaN(NaN));          // true
console.log(Number.isNaN("text"));       // false - strict NaN check
console.log(isNaN("text"));              // true - loose check (converts first)
console.log(Number.isFinite(123));       // true
console.log(Number.isFinite(Infinity));  // false
console.log(Number.isSafeInteger(9007199254740991));  // true
console.log(Number.isSafeInteger(9007199254740992));  // false

// PRACTICAL EXAMPLES - Money formatting
const price = 19.999;
console.log("$" + price.toFixed(2));    // "$20.00"

// Limiting decimals
const calculation = Math.random();
console.log(calculation.toPrecision(3)); // 3 significant digits

// valueOf() - Usually automatic, rarely needed
console.log((42).valueOf());            // 42