/*
JavaScript Number Properties
Number Properties
Number.EPSILON
Number.MAX_VALUE
Number.MIN_VALUE
Number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER
Number.POSITIVE_INFINITY
Number.NEGATIVE_INFINITY
Number.NaN
See Also:
Numbers Tutorial
Number Methods
Number Reference
JavaScript EPSILON
Number.EPSILON is the difference between the smallest floating point number greater than 1 and 1.

Example
let x = Number.EPSILON;
Note
Number.EPSILON is an ES6 feature.

It does not work in Internet Explorer.

JavaScript MAX_VALUE
Number.MAX_VALUE is a constant representing the largest possible number in JavaScript.

Example
let x = Number.MAX_VALUE;
Number Properties Cannot be Used on Variables
Number properties belong to the JavaScript Number Object.

These properties can only be accessed as Number.MAX_VALUE.

Using x.MAX_VALUE, where x is a variable or a value, will return undefined:

Example
let x = 6;
x.MAX_VALUE
JavaScript MIN_VALUE
Number.MIN_VALUE is a constant representing the lowest possible number in JavaScript.

Example
let x = Number.MIN_VALUE;
Minimum and Maximum Safe Integers
ES6 added max and min properties to the Number object:

Number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER
JavaScript MIN_SAFE_INTEGER
Number.MIN_SAFE_INTEGER represents the minimum safe integer in JavaScript.

Number.MIN_SAFE_INTEGER is -(253 - 1).

Example
let x = Number.MIN_SAFE_INTEGER;
JavaScript MAX_SAFE_INTEGER
Number.MAX_SAFE_INTEGER represents the maximum safe integer in JavaScript.

Number.MAX_SAFE_INTEGER is (253 - 1).

Example
let x = Number.MAX_SAFE_INTEGER;
ADVERTISEMENT

REMOVE ADS

JavaScript POSITIVE_INFINITY
Example
let x = Number.POSITIVE_INFINITY;
POSITIVE_INFINITY is returned on overflow:

let x = 1 / 0;
JavaScript NEGATIVE_INFINITY
Example
let x = Number.NEGATIVE_INFINITY;
NEGATIVE_INFINITY is returned on overflow:

let x = -1 / 0;
JavaScript NaN - Not a Number
NaN is a JavaScript reserved word for a number that is not a legal number.

Examples
let x = Number.NaN;
Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

let x = 100 / "Apple";

Safe integers are all integers from -(253 - 1) to +(253 - 1).
This is safe: 9007199254740991. This is not safe: 9007199254740992.
*/