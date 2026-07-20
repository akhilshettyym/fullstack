// ============================================
// JAVASCRIPT LET KEYWORD
// ============================================

// THEORY: let was introduced in ES6 (2015)
// - Block-scoped (only accessible within { } block)
// - Cannot be redeclared in same scope
// - Must be declared before use (Temporal Dead Zone)
// - Preferred over var in modern JavaScript

// THEORY: Block Scope means:
// - Variable only exists within its { } block
// - Different blocks can have same variable name (separate instances)
// - Prevents accidental variable conflicts

// THEORY: Comparison with var:
// - var: function-scoped (can leak outside blocks)
// - let: block-scoped (stays within block)
// - let is safer and more predictable

// ============================================
// WORKING EXAMPLES
// ============================================

// Block scope demonstration
let globalLet = "global";

{
  let blockLet = "inside block";
  console.log(globalLet);  // Output: global (accessible)
  console.log(blockLet);   // Output: inside block (accessible within block)
}

// console.log(blockLet);  // ✗ ERROR: blockLet is not defined (outside block)
console.log(globalLet);   // Output: global (still accessible)

// Same variable name in different blocks
let value = 1;
console.log(value); // Output: 1

{
  let value = 2;  // Different variable, same name
  console.log(value); // Output: 2
}

console.log(value); // Output: 1 (original unchanged)

// let in loops - block scope advantage
for (let i = 0; i < 3; i++) {
  console.log("Loop iteration:", i);
}
// console.log(i);  // ✗ ERROR: i is not defined (outside loop block)

// Comparing with var (old way - shows the problem)
for (var j = 0; j < 3; j++) {
  console.log("Var loop iteration:", j);
}
console.log("After loop, j =", j); // Output: After loop, j = 3 (leaked outside!)

// Cannot redeclare with let in same scope
let name = "John";
// let name = "Jane";  // ✗ ERROR: Identifier 'name' has already been declared

// But CAN reassign
let age = 25;
age = 26;  // ✓ Reassignment is allowed
console.log(age); // Output: 26

// let in different scopes (allowed)
let x = 1;
{
  let x = 2;  // ✓ Different scope
  console.log("Inside block:", x); // Output: Inside block: 2
}
{
  let x = 3;  // ✓ Different scope again
  console.log("In another block:", x); // Output: In another block: 3
}
console.log("Outside blocks:", x); // Output: Outside blocks: 1

// Temporal Dead Zone - let hoisting behavior
// console.log(hoistedVar);  // ✗ ERROR: Cannot access 'hoistedVar' before initialization
let hoistedVar = "now accessible";
console.log(hoistedVar); // Output: now accessible

// Real-world example: Safe loop variable usage
const users = ["Alice", "Bob", "Charlie"];
for (let i = 0; i < users.length; i++) {
  console.log(users[i]);  // Outputs: Alice, Bob, Charlie
}
// i is safely contained within loop block