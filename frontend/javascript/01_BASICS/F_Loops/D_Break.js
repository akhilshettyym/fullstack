// ============================================
// BREAK STATEMENT
// ============================================

// THEORY: break exits loop or switch immediately
// - Stops current iteration and loop
// - Control jumps to statement after loop/switch
// - Used in: for, while, do...while, switch

// THEORY: Labeled break (advanced)
// - break label: exits labeled block
// - Used in nested loops to break outer loop
// - Rarely needed in modern code

// THEORY: Best practices:
// - Use break to exit on specific condition
// - Often paired with if statement
// - Make condition clear and meaningful

// ============================================
// WORKING EXAMPLES
// ============================================

console.log("=== BREAK IN FOR LOOP ===");

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("Breaking at i =", i);
    break;  // Exit loop immediately
  }
  console.log("i =", i);  // 0, 1, 2, 3, 4
}

console.log("\n=== BREAK IN WHILE LOOP ===");

let i = 0;
while (true) {
  if (i === 3) {
    console.log("Breaking out of while");
    break;
  }
  console.log("While i =", i);  // 0, 1, 2
  i++;
}

console.log("\n=== BREAK IN SWITCH ===");

let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;  // Exit switch
  case 2:
    console.log("Tuesday");  // Output: Tuesday
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Other day");
}

console.log("\n=== SEARCH AND BREAK ===");

const fruits = ["apple", "banana", "cherry", "date"];
let searchFor = "cherry";
let found = false;

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === searchFor) {
    console.log("Found", searchFor, "at index", i);
    found = true;
    break;  // No need to continue searching
  }
}

console.log("\n=== BREAK IN NESTED LOOPS ===");

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      console.log("Breaking inner loop at i=" + i + ", j=" + j);
      break;  // Only breaks inner loop
    }
    console.log("i=" + i + ", j=" + j);
  }
}

console.log("\n=== LABELED BREAK (ADVANCED) ===");

outerLoop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      console.log("Breaking outer loop");
      break outerLoop;  // Breaks out of outer loop
    }
    console.log("i=" + i + ", j=" + j);
  }
}

console.log("\n=== PRACTICAL: FINDING FIRST MULTIPLE ===");

console.log("Finding first multiple of 7 between 1-100:");
for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) {
    console.log("First multiple: ", i);  // Output: 7
    break;
  }
}

console.log("\n=== PRACTICAL: USER VALIDATION ===");

function findUser(userId) {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" }
  ];

  for (let i = 0; i < users.length; i++) {
    if (users[i].id === userId) {
      console.log("User found:", users[i].name);
      return;  // Alternative to break
    }
  }
  console.log("User not found");
}

findUser(2);  // Output: User found: Bob
findUser(99);  // Output: User not found

console.log("\n=== WITHOUT BREAK (INEFFICIENT) ===");

let sum = 0;
for (let i = 0; i < 100; i++) {
  sum += i;
  // Without break, loops continues even after finding value
  if (i === 10) {
    console.log("Sum up to 10:", sum);
    // Missing break - continues looping!
  }
}