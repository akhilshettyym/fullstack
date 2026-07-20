// ============================================
// JAVASCRIPT SYNTAX FUNDAMENTALS
// ============================================

// THEORY: Syntax defines rules for constructing programs
// - Every program must follow structural rules to work properly
// - JavaScript reads code from top to bottom, left to right

// THEORY: JavaScript has two main value types:
// 1. Literals - Fixed/constant values (numbers, strings, etc.)
// 2. Variables - Named containers storing changeable values

// THEORY: Variable Declaration Rules:
// - Use let, const, or var keywords
// - Variable names are case-sensitive
// - Must start with letter, underscore (_), or dollar sign ($)
// - Cannot be reserved keywords

// THEORY: JavaScript Keywords are case-sensitive
// - 'let' is a keyword, but 'Let' or 'LET' are not

// THEORY: Lower Camel Case Naming Convention:
// - JavaScript prefers camelCase: firstName, lastName, myVariable
// - Avoid hyphens (reserved for subtraction):  first-name
// - Underscores work but uncommon: first_name

// THEORY: Expressions combine values, variables, and operators
// - They compute to a single value
// - Can be used anywhere a value is expected

// ============================================
// WORKING EXAMPLES
// ============================================

// Declaring and computing values
let x = 5;
let y = 6;
let z = x + y;
console.log("Sum of", x, "and", y, "is", z); // Output: 11

// Using different quote types for strings
let firstName = "John";
let lastName = 'Doe';
console.log(firstName + " " + lastName); // Output: John Doe

// Camel case naming examples
let myVariableName = 100;
let anotherExampleValue = 50;
console.log(myVariableName + anotherExampleValue); // Output: 150

// Expression examples
console.log((5 + 6) * 10); // Output: 110
console.log((100 + 50) / 3); // Output: 50

// String concatenation expression
let greeting = "Hello" + " " + "World";
console.log(greeting); // Output: Hello World

// Literals (fixed values)
console.log(42); // Number literal
console.log("JavaScript"); // String literal
console.log(true); // Boolean literal