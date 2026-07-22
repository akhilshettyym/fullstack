/**
 * STRINGS: Text data type for storing sequences of characters
 * Creation:
 * - Single quotes: 'text'
 * - Double quotes: "text"
 * - Backticks (template literal): `text ${variable}`
 * 
 * Key: Strings are immutable - each operation creates new string
 */

// ============= CREATING STRINGS =============
console.log("--- CREATING STRINGS ---");

let str1 = "Double quotes";
let str2 = 'Single quotes';
let str3 = `Template literal`;

console.log(str1);
console.log(str2);
console.log(str3);

// All are equivalent
console.log(str1 === str2 ? "Same type" : "Different");

// ============= QUOTES INSIDE STRINGS =============
console.log("\n--- QUOTES INSIDE STRINGS ---");

let quote1 = "He said 'Hello'";
let quote2 = 'She said "Hi"';
let quote3 = `She said "Hello" and I said 'Hi'`;

console.log(quote1);
console.log(quote2);
console.log(quote3);

// Escaping quotes
let escaped1 = "He said \"Hello\"";
let escaped2 = 'It\'s a beautiful day';
let escaped3 = "Path: C:\\Users\\John";

console.log(escaped1);
console.log(escaped2);
console.log(escaped3);

// ============= STRING LENGTH =============
console.log("\n--- STRING LENGTH ---");

let text = "JavaScript";
console.log("Text:", text);
console.log("Length:", text.length); // 10

// Empty string
let emptyStr = "";
console.log("Empty string length:", emptyStr.length); // 0

// ============= ACCESSING CHARACTERS =============
console.log("\n--- ACCESSING CHARACTERS ---");

let str = "Hello";
console.log("First character:", str[0]); // H
console.log("Last character:", str[str.length - 1]); // o
console.log("Character at index 1:", str[1]); // e

// String methods
console.log("charAt(2):", str.charAt(2)); // l
console.log("charCodeAt(0):", str.charCodeAt(0)); // 72 (ASCII)

// ============= STRING CONCATENATION =============
console.log("\n--- CONCATENATION ---");

let firstName = "John";
let lastName = "Doe";

// Using +
let full1 = firstName + " " + lastName;
console.log("Using +:", full1);

// Using += assignment
let message = "Hello";
message += " ";
message += "World";
console.log("Using +=:", message);

// Using template literals
let full2 = `${firstName} ${lastName}`;
console.log("Using template:", full2);

// ============= TEMPLATE LITERALS =============
console.log("\n--- TEMPLATE LITERALS (Backticks) ---");

let name = "Alice";
let age = 25;
let city = "New York";

let bio = `Name: ${name}
Age: ${age}
City: ${city}`;

console.log(bio);

// Expressions in templates
console.log(`Math: 5 + 3 = ${5 + 3}`);
console.log(`Comparison: 10 > 5 is ${10 > 5}`);

// ============= ESCAPE SEQUENCES =============
console.log("\n--- ESCAPE SEQUENCES ---");

console.log("Newline:\\nSecond line");
console.log("Tab:\tIndented");
console.log("Backslash: \\");
console.log("Backspace example: Hello\\bWorld");
console.log("Single quote: \\'");
console.log("Double quote: \\\"");

// ============= STRING IMMUTABILITY =============
console.log("\n--- STRING IMMUTABILITY ---");

let original = "Hello";
console.log("Original:", original);

// Strings are immutable - methods create new strings
let upper = original.toUpperCase();
console.log("Original unchanged:", original);
console.log("New uppercase string:", upper);

// ============= STRING METHODS (BASIC) =============
console.log("\n--- COMMON STRING METHODS ---");

// let str2 = "  JavaScript Programming  ";

console.log("toUpperCase():", str2.toUpperCase());
console.log("toLowerCase():", str2.toLowerCase());
console.log("trim():", `"${str2.trim()}"`); // Remove whitespace
console.log("length:", str2.length);

// ============= MULTILINE STRINGS =============
console.log("\n--- MULTILINE STRINGS ---");

// Template literals support multiline
let poem = `
  Roses are red,
  Violets are blue,
  Strings in JavaScript,
  Make coding easy too.
`;
console.log(poem);

// String concatenation approach (old way)
let multiLine = "Line 1\n" +
  "Line 2\n" +
  "Line 3";
console.log(multiLine);

// ============= STRING COERCION =============
console.log("\n--- STRING COERCION ---");

console.log("Number + String:", 5 + "5"); // "55" (coerced to string)
console.log("String + Number:", "5" + 5); // "55"
console.log("String * Number:", "5" * 5); // 25 (coerced to number)
console.log("String - Number:", "10" - 3); // 7 (coerced to number)

// Converting to string
let num = 42;
let str4 = String(num);
console.log("String(42):", str4, typeof str4);

let str5 = num.toString();
console.log("toString():", str5, typeof str5);

console.log("\n✓ Strings are immutable");
console.log("✓ Use template literals for readability");
console.log("✓ Backticks support multiline and interpolation");
console.log("✓ Escape sequences for special characters");