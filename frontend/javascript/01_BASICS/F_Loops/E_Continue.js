// ============================================
// CONTINUE STATEMENT
// ============================================

// THEORY: continue skips current iteration
// - Jumps to next iteration immediately
// - Remaining code in loop body is skipped
// - Used in: for, while, do...while

// THEORY: continue vs break
// - break: Exits loop completely
// - continue: Skips current, continues with next

// THEORY: Labeled continue (advanced)
// - continue label: jumps to next iteration of labeled loop
// - Rarely used; simpler approaches usually better

// THEORY: Best practices:
// - Use for filtering (skip unwanted iterations)
// - Paired with if statement usually
// - Keep logic simple and readable

// ============================================
// WORKING EXAMPLES
// ============================================

console.log("=== SKIP SPECIFIC VALUES ===");

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;  // Skip when i equals 2
  }
  console.log("i =", i);  // Output: 0, 1, 3, 4
}

console.log("\n=== SKIP EVEN NUMBERS ===");

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;  // Skip even numbers
  }
  console.log("Odd:", i);  // Output: 1, 3, 5, 7, 9
}

console.log("\n=== CONTINUE IN WHILE LOOP ===");

let i = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;  // Skip to next iteration
  }
  console.log("While i =", i);  // Output: 1, 2, 4, 5
}

console.log("\n=== CONTINUE IN DO...WHILE ===");

let j = 0;
do {
  j++;
  if (j === 3) {
    console.log("Skipping 3");
    continue;
  }
  console.log("Do-while j =", j);
} while (j < 5);

console.log("\n=== FILTERING IN ARRAYS ===");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Numbers not divisible by 3:");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0) {
    continue;  // Skip multiples of 3
  }
  console.log(numbers[i]);  // 1, 2, 4, 5, 7, 8, 10
}

console.log("\n=== CONTINUE WITH NESTED LOOPS ===");

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      continue;  // Skips to next j, not outer i
    }
    console.log("i=" + i + ", j=" + j);
  }
}

console.log("\n=== LABELED CONTINUE (ADVANCED) ===");

outer: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      console.log("Continuing outer loop");
      continue outer;  // Skip to next i iteration
    }
    console.log("i=" + i + ", j=" + j);
  }
}

console.log("\n=== PRACTICAL: SKIP INVALID DATA ===");

const data = [5, -2, 8, 0, 12, -4, 3];

console.log("Processing positive numbers only:");
for (let i = 0; i < data.length; i++) {
  if (data[i] <= 0) {
    continue;  // Skip non-positive numbers
  }
  console.log("Value:", data[i]);  // 5, 8, 12, 3
}

console.log("\n=== PRACTICAL: PRINT FIRST 5 ODD NUMBERS ===");

let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    continue;  // Skip even numbers
  }
  console.log("Odd #" + (count + 1) + ":", i);
  count++;
  if (count === 5) break;  // Stop after 5 odd numbers
}

console.log("\n=== CONTINUE VS BREAK ===");

console.log("With continue (skips):");
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);  // Output: 1, 2, 4, 5
}

console.log("With break (stops):");
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);  // Output: 1, 2
}