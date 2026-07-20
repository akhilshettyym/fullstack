// ============================================
// JAVASCRIPT STATEMENTS
// ============================================

// THEORY: A statement is an instruction to the browser
// - Programs consist of multiple statements executed sequentially
// - Each statement performs a specific action

// THEORY: Semicolons (;) separate statements
// - Technically optional due to automatic semicolon insertion
// - Best practice: Always use them for clarity and consistency

// THEORY: JavaScript ignores extra whitespace
// - Multiple spaces don't affect execution
// - Use spaces for readability: let x = y + z; (good)
// - NOT: let x=y+z; (works but less readable)

// THEORY: Code blocks {} group statements together
// - Used in functions, loops, conditionals
// - Statements in a block execute as a unit

// THEORY: JavaScript Keywords start most statements
// - Reserved words with special meanings (cannot use as variable names)
// - Examples: let, const, var, if, for, function, return, try

// ============================================
// WORKING EXAMPLES
// ============================================

// Variable declaration statements
let a, b, c;  // Multiple variable declaration
a = 5;        // Assignment statement
b = 6;        // Another assignment
c = a + b;    // Expression statement
console.log(c); // Output: 11

// Multiple statements on one line (not recommended)
let x = 10; let y = 20; let z = x + y;
console.log(z); // Output: 30

// Statements with good spacing for readability
let person = "John";
let age = 30;
let message = person + " is " + age + " years old";
console.log(message); // Output: John is 30 years old

// Code block example (grouping statements)
{
  let blockVar = 100;
  console.log(blockVar); // Output: 100
}

// Using common JavaScript keywords in statements
let count = 0;
if (count < 5) {      // if keyword
  console.log("Count is less than 5");
}

for (let i = 0; i < 3; i++) {  // for keyword
  console.log("Iteration:", i);
}

function greet(name) {  // function keyword
  return "Hello, " + name;  // return keyword
}
console.log(greet("Alice"));  // Output: Hello, Alice