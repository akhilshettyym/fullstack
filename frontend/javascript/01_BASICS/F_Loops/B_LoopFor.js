// ============================================
// FOR LOOP - DETAILED
// ============================================

// THEORY: For loop repeats code block a known number of times
// - Syntax: for (init; condition; update) { code }
// - init: Initialize counter (executed once)
// - condition: Test before each iteration
// - update: Change counter after each iteration

// THEORY: Loop execution order:
// 1. Initialize counter (let i = 0)
// 2. Check condition (i < 5)
// 3. Execute code block
// 4. Update counter (i++)
// 5. Repeat steps 2-4

// THEORY: Loop scope with let vs var
// - let: Block-scoped (i only exists in loop)
// - var: Function-scoped (i leaks out)
// - Always use let for loop variables

// ============================================
// WORKING EXAMPLES
// ============================================

console.log("=== BASIC FOR LOOP ===");

for (let i = 0; i < 5; i++) {
  console.log("Number:", i);
}
// Output: Number: 0, 1, 2, 3, 4

console.log("\n=== FOR LOOP WITH ARRAY ===");

const cars = ["BMW", "Volvo", "Saab", "Ford"];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
// Output: BMW, Volvo, Saab, Ford

console.log("\n=== LOOP EXPRESSIONS EXPLAINED ===");

// Expression 1: Initialize
// Expression 2: Condition
// Expression 3: Update
for (let i = 1; i <= 3; i++) {
  console.log("i =", i); // i = 1, 2, 3
}

console.log("\n=== LOOP SCOPE - LET vs VAR ===");

// With let (recommended)
for (let x = 0; x < 3; x++) {
  // x only exists here
}
// console.log(x);  // ✗ ERROR: x is not defined

// With var (old way - avoid)
for (var y = 0; y < 3; y++) {
  // y exists here
}
console.log("After loop, y =", y); // Output: After loop, y = 3 (leaked!)

console.log("\n=== SKIPPING LOOP EXPRESSIONS ===");

// Can skip expression 1 (initialize before)
let start = 0;
for (; start < 3; start++) {
  console.log("Skipped init:", start); // 0, 1, 2
}

// Can skip expression 3 (update inside)
for (let i = 0; i < 3;) {
  console.log("Skipped update:", i);
  i++;
}

console.log("\n=== COUNTING BACKWARDS ===");

for (let i = 5; i > 0; i--) {
  console.log("Countdown:", i); // 5, 4, 3, 2, 1
}

console.log("\n=== INCREMENTING BY DIFFERENT AMOUNTS ===");

for (let i = 0; i <= 10; i += 2) {
  console.log("Even numbers:", i); // 0, 2, 4, 6, 8, 10
}

for (let i = 10; i >= 0; i -= 3) {
  console.log("Decreasing by 3:", i); // 10, 7, 4, 1
}

console.log("\n=== NESTED LOOPS ===");

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}

console.log("\n=== MULTIPLICATION TABLE ===");

for (let i = 1; i <= 5; i++) {
  console.log(`5 × ${i} = ${5 * i}`);
}

console.log("\n=== PRACTICAL: COLLECTING DATA ===");

let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log("Sum of 1-5:", sum); // Output: 15

console.log("\n=== PRACTICAL: FINDING VALUES ===");

const numbers = [10, 25, 8, 42, 15];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 20) {
    console.log("Found:", numbers[i]); // Output: Found: 25, 42
  }
}