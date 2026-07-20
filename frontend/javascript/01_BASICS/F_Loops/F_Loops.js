// ============================================
// ADVANCED LOOPS & LOOP CHALLENGES
// ============================================

// THEORY: Different loop types serve different purposes
// - for: Known number of iterations
// - while: Unknown iterations, condition-based
// - do...while: Guaranteed at least one run
// - for...of: Iterate over values (ES6)
// - for...in: Iterate over keys/properties
// - forEach: Array method (functional approach)

// THEORY: Break and continue control flow
// - break: Stop loop immediately
// - continue: Skip to next iteration
// - Essential for optimization and filtering

// ============================================
// WORKING EXAMPLES
// ============================================

console.log("=== PRINT NUMBERS 1 TO 10 ===");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("\n=== PRINT NUMBERS 10 TO 1 ===");
let a = 10;
while (a >= 1) {
  console.log(a);
  a--;
}

console.log("\n=== PRINT EVEN NUMBERS 1-20 ===");
for (let b = 1; b <= 20; b++) {
  if (b % 2 === 0) {
    console.log(b);
  }
}

console.log("\n=== PRINT ODD NUMBERS 1-15 ===");
let c = 1;
while (c <= 15) {
  if (c % 2 !== 0) {
    console.log(c);
  }
  c++;
}

console.log("\n=== MULTIPLICATION TABLE OF 5 ===");
for (let d = 1; d <= 10; d++) {
  let mul = 5 * d;
  console.log(`5 × ${d} = ${mul}`);
}

console.log("\n=== SUM OF 1-100 ===");
let sum = 0;
let e = 1;
while (e <= 100) {
  sum += e;
  e++;
}
console.log("Sum:", sum);  // Output: 5050

console.log("\n=== NUMBERS DIVISIBLE BY 3 (1-50) ===");
for (let g = 1; g <= 50; g++) {
  if (g % 3 === 0) {
    console.log(g);
  }
}

console.log("\n=== DIVISIBLE BY BOTH 3 AND 5 (1-100) ===");
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);  // Output: 15, 30, 45, 60, 75, 90
  }
}

console.log("\n=== STOP AT FIRST MULTIPLE OF 7 (1-100) ===");
for (let i = 1; i <= 100; i++) {
  console.log(i);
  if (i % 7 === 0) {
    console.log("Stopped at:", i);  // Output: Stopped at: 7
    break;
  }
}

console.log("\n=== SKIP MULTIPLES OF 3 (1-20) ===");
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) continue;
  console.log(i);  // Skips 3, 6, 9, 12, 15, 18
}

console.log("\n=== FIRST 5 ODD NUMBERS ===");
let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
    count++;
  }
  if (count === 5) break;  // Output: 1, 3, 5, 7, 9
}

console.log("\n=== NESTED LOOP - TIMES TABLE ===");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} × ${j} = ${i * j}`);
  }
}

console.log("\n=== NESTED LOOP - PATTERN ===");
for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);  // Pyramid: *, **, ***, ****, *****
}

console.log("\n=== FACTORIAL OF 5 ===");
let factorial = 1;
for (let i = 1; i <= 5; i++) {
  factorial *= i;
}
console.log("5! =", factorial);  // Output: 120

console.log("\n=== FIND AVERAGE ===");
const scores = [85, 90, 78, 92, 88];
let total = 0;
for (let i = 0; i < scores.length; i++) {
  total += scores[i];
}
let average = total / scores.length;
console.log("Average:", average);  // Output: 86.6

console.log("\n=== FIND MAX VALUE ===");
const values = [15, 42, 8, 99, 23, 55];
let max = values[0];
for (let i = 1; i < values.length; i++) {
  if (values[i] > max) {
    max = values[i];
  }
}
console.log("Max:", max);  // Output: 99

console.log("\n=== COUNT OCCURRENCES ===");
const items = ['a', 'b', 'a', 'c', 'a', 'b'];
let countA = 0;
for (let i = 0; i < items.length; i++) {
  if (items[i] === 'a') {
    countA++;
  }
}
console.log("Count of 'a':", countA);  // Output: 3