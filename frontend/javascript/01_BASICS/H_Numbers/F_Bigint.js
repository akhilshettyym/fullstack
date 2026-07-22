/*
JavaScript BigInt
What is JavaScript BigInt?
BigInt is a JavaScript data type for handling and storing big integer values.

BigInt allows you to work with integers larger than the limit of Numbers.

BigInt can represent an integer of any size, limited only by available memory.

JavaScript Accuracy
JavaScript Numbers are only accurate up to 15 digits:

Example
// 15 digits:
let x = 999999999999999;

// 16 digits:
let y = 9999999999999999;
Numbers are 64-bits Floating Point
All JavaScript Numbers are stored in a 64-bit floating-point format (IEEE 754 standard).

With this standard, large numbers cannot be exactly represented, but will be rounded.

JavaScript can only safely represent integers up to 253-1 (9007199254740991).

JavaScript can only safely represent integers down to -253-1 (-9007199254740991).

Examples
// MAX = 9007199254740991
let x = Number.MAX_SAFE_INTEGER;

// MIN = -9007199254740991
let y = Number.MIN_SAFE_INTEGER;
Integers bigger than Number.MAX_SAFE_INTEGER will lose precision:

// Max (accurate)
let x = 9007199254740991;

// Max + 10 (inaccurate)
let y = x + 10;
Integers less than than Number.MIN_SAFE_INTEGER will lose precision:

// Min (accurate)
let x = -9007199254740991;

// Min - 10 (inaccurate)
let y = x - 10;
Note
There is no such thing as a JavaScript Integer.

All JavaScript Numbers are 64-bit floating point.

How to Create a BigInt
You can create a BigInt in two ways:

Using an integer literal with an n suffix
Using the BigInt() constructor with a string
Examples
// Using an integer literal with an n suffix:
let x = 999999999999999n;

// Using the BigInt() constructor with a string:
let y = BigInt("999999999999999");
let x = 12345678901234567890n;
let y = BigInt("12345678901234567890")
You can also create a BigInt using the Bigint() constructor with a Number.

Warning !! Numbers are only accurate up to 15 digits.

Examples
let x = BigInt(9999999999999999);
BigInt is a JavaScript Datatype
The JavaScript typeof a BigInt is "bigint":

Example
let x = BigInt(999999999999999);

let type = typeof x;
BigInt is the second numeric data type in JavaScript (after Number).

With BigInt the total number of supported data types in JavaScript is 8:

1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

Arithmetic Operators
BigInt supports standard JavaScript arithmetic operators.

(+, -, ++, --, *, /, %, **)

Example
Multiplication:

let x = 9007199254740995n;
let y = 9007199254740995n;

let z = x * y;
Mixing BigInt and Numbers
Arithmetic between a BigInt and a Number is not allowed (will result in a TypeError).

Explicit conversion must be done first.

Example
You cannot mix BigInt and Number directly:

let x = 10n;
let y = 5;

let z = x + y; // ❌ TypeError
To fix that, explicitly convert one:

let x = 10n;
let y = 5;

let z = Number(x) + y;
BigInt / Number Conversions
BigInt to Number: Use the Number() constructor.

Number to BigInt: Use the BigInt() constructor.

Example
// Create a BigInt
let largeNumber = BigInt("12345678901234567890");

// Conversions
let num = Number(largeNumber);
Note
Large BigInts might result in Infinity or loss of precision when converted to number.

BigInt Decimals
A BigInt can not have decimals.

let x = 1.5n; // ❌ TypeError
BigInt Division Example
let x = 5n;
let y = x / 2;
// ❌ Error: Cannot mix BigInt and other types, use explicit conversion.
let x = 5n;
let y = Number(x) / 2;
Note
Attempting to convert a number with a fractional part to a BigInt will throw an error.

Comparison Operators
Bigint supports standard JavaScript comparison operators.

(<, > ==, ===, !==, <=, >=)

BigInts can also be compared with Numbers using standard comparison operators.

Example
Comparisons work normally:

// true
let x = (10n > 5n);

// false (different types)
let y = (10n === 10);

// true (loose equality)
let z = (10n == 10);
Note
Strict equality (===) between a BigInt and a Number will always be false due to different types.

Bitwise Operators
BigInt supports bitwise operations, but only with other BigInts (not Numbers):

& (AND)
| (OR)
^ (XOR)
~ (NOT)
Example
let a = 5n; // 0101
let b = 3n; // 0011

let x = (a & b); // 1n (0001)
let y = (a | b); // 7n (0111)
let z = (a ^ b); // 6n (0110)
let n = (~a);    // -6n
Bitwise Shift Operators
BigInt only supports two shift operators:

<< (left shift)
>> (signed right shift)
Example
let big = 10n; // binary: 1010

let x = (big << 2n); // 40n (101000)
let y = (big >> 1n); // 5n (0101)
Impotant Rules:

Both operands must be BigInt
Shift amounts must be non-negative
Right shift keeps the sign bit for negative values
Note
Unsigned right shift (>>>) is not allowed with BigInts.

BigInt Hex, Octal and Binary
BigInt can also be written in hexadecimal, octal, or binary notation:

Like numbers, bigint literals support several bases:

Normal: 256n
Octal: 0o400n
Hexadecimal: 0x100n
Binary: 0b100000000n
Examples
let num = 256n;
let oct = 0o400n;
let hex = 0x100n;
let bin = 0b100000000n;
let hex = 0x20000000000003n;
let oct = 0o400000000000000003n;
let bin = 0b100000000000000000000000000000000000000000000000000011n;
Precision Curiosity
Maximum safe integer in JavaScript is 9007199254740991.

Rounding can compromise program security:

MAX_SAFE_INTEGER Examples
9007199254740992 === 9007199254740993; // is true !!!
9007199254740992n === 9007199254740993n; // is false !!!
Summary
BigInt allows arbitrary-precision integers

BigInt numbers can be as large (or small) as your memory allows.

BigInt are used for very large integers (cryptography, IDs, timestamps, etc).

BigInt is not suitable for decimals - only integers.

Math functions (like Math.sqrt()) do not work with BigInts.

JSON.stringify() cannot handle BigInts - throws an error.
 */