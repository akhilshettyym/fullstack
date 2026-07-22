// ============================================
// SWITCH STATEMENT
// ============================================

// THEORY: Switch executes different blocks based on different conditions
// - More readable than multiple if...else if statements
// - Evaluates expression once, compares against multiple cases
// - Uses strict comparison (===) for case matching
// - break keyword exits switch, avoiding fallthrough

// THEORY: Syntax:
// switch(expression) {
//   case value1: code; break;
//   case value2: code; break;
//   default: code;
// }

// THEORY: Key points:
// - break is crucial (prevents fallthrough to next case)
// - default is optional (executes if no match)
// - switch uses strict equality (===)
// - Multiple cases can share same code block

// ============================================
// WORKING EXAMPLES
// ============================================

console.log("=== BASIC SWITCH ===");

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday"); // Output: Wednesday
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Weekend");
}

console.log("\n=== SWITCH WITH DEFAULT ===");

let fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("Yellow fruit");
    break;
  case "orange":
    console.log("Orange fruit");
    break;
  default:
    console.log("Unknown fruit"); // Output: Unknown fruit
}

console.log("\n=== SWITCH FALLTHROUGH (WITHOUT BREAK) ===");

let grade = "B";

switch (grade) {
  case "A":
  case "B":
    console.log("Good job!"); // Output: Good job! (both A and B)
    break;
  case "C":
    console.log("Average");
    break;
  case "F":
    console.log("Failed");
    break;
  default:
    console.log("Invalid grade");
}

console.log("\n=== SHARING CODE BLOCKS ===");

let month = 12;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Winter"); // Output: Winter
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Autumn");
    break;
  default:
    console.log("Invalid month");
}

console.log("\n=== SWITCH WITH STRINGS ===");

let color = "red";

switch (color) {
  case "red":
    console.log("Stop"); // Output: Stop
    break;
  case "yellow":
    console.log("Wait");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Unknown color");
}

console.log("\n=== SWITCH STRICT COMPARISON ===");

let value = "5";

switch (value) {
  case 5:
    console.log("Number 5");
    break;
  case "5":
    console.log("String '5'"); // Output: String '5' (uses strict ===)
    break;
  default:
    console.log("Something else");
}

console.log("\n=== SWITCH WITH EXPRESSIONS ===");

let score = 85;

switch (true) {
  case score >= 90:
    console.log("Grade: A");
    break;
  case score >= 80:
    console.log("Grade: B"); // Output: Grade: B
    break;
  case score >= 70:
    console.log("Grade: C");
    break;
  default:
    console.log("Grade: F");
}

console.log("\n=== REAL-WORLD: ANIMAL SOUNDS ===");

let animal = "dog";

switch (animal) {
  case "dog":
    console.log("Woof!"); // Output: Woof!
    break;
  case "cat":
    console.log("Meow!");
    break;
  case "cow":
    console.log("Moo!");
    break;
  case "duck":
    console.log("Quack!");
    break;
  default:
    console.log("Unknown sound");
}

console.log("\n=== REAL-WORLD: HTTP STATUS ===");

let statusCode = 200;

switch (statusCode) {
  case 200:
  case 201:
    console.log("Success"); // Output: Success
    break;
  case 400:
  case 404:
    console.log("Client error");
    break;
  case 500:
    console.log("Server error");
    break;
  default:
    console.log("Unknown status");
}