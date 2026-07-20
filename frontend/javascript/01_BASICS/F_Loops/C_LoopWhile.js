// ============================================
// WHILE & DO...WHILE LOOPS
// ============================================

// THEORY: While loop repeats while condition is true
// - Syntax: while (condition) { code }
// - Checks condition BEFORE each iteration
// - If condition false from start, code never runs
// - Useful when number of iterations unknown

// THEORY: Do...While loop
// - Syntax: do { code } while (condition)
// - Checks condition AFTER running code
// - Runs code AT LEAST ONCE (even if condition false)
// - Useful for menus, prompts, validation

// THEORY: Key difference:
// - while: Pre-test (check first, then execute)
// - do...while: Post-test (execute first, then check)

// ============================================
// WORKING EXAMPLES
// ============================================

console.log("=== BASIC WHILE LOOP ===");

let i = 0;
while (i < 5) {
  console.log("i =", i); // 0, 1, 2, 3, 4
  i++;
}

console.log("\n=== WHILE WITH CONDITION ===");

let counter = 10;
while (counter > 0) {
  console.log("Countdown:", counter);
  counter--;
}
// Output: Countdown: 10, 9, 8...2, 1

console.log("\n=== WHILE WITH ARRAY ===");

const items = ["apple", "banana", "cherry"];
let index = 0;
while (index < items.length) {
  console.log(items[index]);
  index++;
}
// Output: apple, banana, cherry

console.log("\n=== DO...WHILE LOOP ===");

let x = 0;
do {
  console.log("Do-while x =", x);
  x++;
} while (x < 3);
// Output: Do-while x = 0, 1, 2

console.log("\n=== DO...WHILE RUNS ONCE EVEN IF FALSE ===");

let y = 10;
do {
  console.log("This runs even though y > 5:", y);
} while (y < 5); // Condition false, but code runs once
// Output: This runs even though y > 5: 10

console.log("\n=== WHILE VS DO...WHILE DIFFERENCE ===");

// While: condition checked first
let a = 10;
while (a < 5) {
  console.log("While never runs");
}

// Do...while: code runs first
let b = 10;
do {
  console.log("Do-while runs at least once: b =", b); // Output: b = 10
} while (b < 5);

console.log("\n=== PRACTICAL: USER INPUT SIMULATION ===");

function getUserInput() {
  // Simulate user input validation
  let password = "";
  let attempts = 0;

  while (password !== "secret" && attempts < 3) {
    password = "wrong";  // Simulating wrong input
    attempts++;
    console.log("Attempt", attempts, "- Wrong password");
  }

  if (password === "secret") {
    console.log("Login successful!");
  } else {
    console.log("Too many attempts");
  }
}
getUserInput();

console.log("\n=== PRACTICAL: SEARCHING IN ARRAY ===");

const numbers = [5, 15, 23, 42, 8];
let searchValue = 23;
let found = false;
let j = 0;

while (j < numbers.length && !found) {
  if (numbers[j] === searchValue) {
    console.log("Found", searchValue, "at index", j);
    found = true;
  }
  j++;
}

console.log("\n=== PRACTICAL: MENU LOOP (DO...WHILE) ===");

function showMenu() {
  let choice;
  let validChoice = false;

  do {
    choice = 2;  // Simulating user choice

    switch (choice) {
      case 1:
        console.log("You selected: Create");
        validChoice = true;
        break;
      case 2:
        console.log("You selected: Read");
        validChoice = true;
        break;
      case 3:
        console.log("You selected: Exit");
        validChoice = true;
        break;
      default:
        console.log("Invalid choice, try again");
    }
  } while (!validChoice);
}
showMenu();

console.log("\n=== PRACTICAL: STRING BUILDING ===");

let result = "";
let char = "A";
let count = 0;

while (count < 5) {
  result += char;
  count++;
}
console.log("Built string:", result); // Output: AAAAA

console.log("\n=== COMPARING FOR AND WHILE ===");

// For loop: known iterations
for (let i = 0; i < 3; i++) {
  console.log("For loop:", i);
}

// While loop: unknown iterations (condition-based)
let k = 0;
while (k < 3) {
  console.log("While loop:", k);
  k++;
}