// ============================================
// TEMPORAL DEAD ZONE & HOISTING
// ============================================

// THEORY: Temporal Dead Zone (TDZ)
// - The period between entering a block and reaching variable declaration
// - During TDZ, you cannot access the variable (ReferenceError)
// - Applies to let and const (not to var)

// THEORY: Hoisting
// - JavaScript moves variable declarations to top of their scope
// - This is not actual code movement, but how JS interprets it
// - var: hoisted with value 'undefined'
// - let/const: hoisted but NOT initialized (TDZ)

// THEORY: Execution phases
// 1. Creation phase: Variable declarations are allocated memory
// 2. Execution phase: Values are assigned

// ============================================
// WORKING EXAMPLES
// ============================================

// TDZ with let - causes error
function tdtExample1() {
  // console.log(x);  // ✗ ERROR: Cannot access 'x' before initialization (TDZ!)
  let x = 20;
  console.log(x); // Output: 20 (now accessible)
}
tdtExample1();

// TDZ with const - causes error
function tdtExample2() {
  // console.log(y);  // ✗ ERROR: Cannot access 'y' before initialization (TDZ!)
  const y = 30;
  console.log(y); // Output: 30 (now accessible)
}
tdtExample2();

// var hoisting - no TDZ (hoisted with undefined)
function varHoisting() {
  console.log(myVar); // Output: undefined (hoisted, but not initialized)
  var myVar = 50;
  console.log(myVar); // Output: 50
}
varHoisting();

// How JavaScript interprets var (mentally rewrite it like this):
function varHoistingExplained() {
  var myVar; // Hoisted declaration (value = undefined)

  console.log(myVar); // Output: undefined
  myVar = 50; // Initialization stays here
  console.log(myVar); // Output: 50
}
varHoistingExplained();

// Hoisting behavior comparison
console.log("\n=== VAR HOISTING ===");
console.log("var x =", typeof varX); // Output: undefined (hoisted as undefined)
var varX = 10;

console.log("\n=== LET HOISTING (TDZ) ===");
// console.log("let y =", typeof letY);  // ✗ ERROR (TDZ)
let letY = 20;
console.log("let y =", letY); // Output: 20

console.log("\n=== CONST HOISTING (TDZ) ===");
// console.log("const z =", constZ);  // ✗ ERROR (TDZ)
const constZ = 30;
console.log("const z =", constZ); // Output: 30

// Practical TDZ example
function practicalTDZ() {
  // TDZ starts here
  if (true) {
    console.log(value); // ✗ ERROR if uncommented (TDZ region)
    let value = 42;     // TDZ ends here
    console.log(value); // Output: 42
  }
}
// practicalTDZ();  // Uncomment to see error

// var doesn't have TDZ - no block scope
function varNoTDZ() {
  if (true) {
    console.log(legacy); // Output: undefined (no TDZ)
    var legacy = "old style";
  }
  console.log(legacy); // Output: old style (leaks from block!)
}
varNoTDZ();

// Hoisting across functions
function hoistingScope() {
  if (true) {
    console.log(x); // ✗ ERROR (TDZ for let)
    let x = 100;
  }
}
// hoistingScope();  // Uncomment to see error

// Summary table visualization
console.log("\n=== HOISTING BEHAVIOR ===");
console.log("var    → Hoisted with 'undefined'");
console.log("let    → Hoisted but NOT initialized (TDZ)");
console.log("const  → Hoisted but NOT initialized (TDZ)");