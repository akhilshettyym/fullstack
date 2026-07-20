/* TEMPLATE LITERALS: String interpolation with backticks */
// Syntax: `text ${variable} more text`
// Support: multiline strings, expressions, nested templates

// ============= BASIC TEMPLATE LITERALS =============
console.log("=== BASIC TEMPLATE LITERALS ===");

let name = "Alice";
let age = 25;

// Without template literal (concatenation)
console.log("String concat: " + name + " is " + age + " years old");

// With template literal (cleaner)
console.log(`Template literal: ${name} is ${age} years old`);

// ============= VARIABLE INTERPOLATION =============
console.log("\n=== VARIABLE INTERPOLATION ===");

let firstName = "John";
let lastName = "Doe";
let city = "New York";

let bio = `Name: ${firstName} ${lastName}
City: ${city}
Bio: ${firstName} is from ${city}`;

console.log(bio);

// ============= MULTILINE STRINGS =============
console.log("\n=== MULTILINE STRINGS ===");

// With template literals (easy)
let poem = `
Roses are red,
Violets are blue,
Strings in JavaScript,
Make coding easy too.
`;
console.log(poem);

// Without template literals (messy)
let oldPoem = "Roses are red,\n" +
  "Violets are blue,\n" +
  "Old way of strings,\n" +
  "Is not so nice.";
console.log(oldPoem);

// ============= EXPRESSIONS IN TEMPLATES =============
console.log("\n=== EXPRESSIONS IN TEMPLATES ===");

let a = 5;
let b = 10;

// Math expressions
console.log(`${a} + ${b} = ${a + b}`);           // 5 + 10 = 15
console.log(`${a} * ${b} = ${a * b}`);           // 5 * 10 = 50
console.log(`${a} > ${b} is ${a > b}`);          // 5 > 10 is false

// Function calls
function double(n) {
  return n * 2;
}
console.log(`Double of ${a} is ${double(a)}`);   // Double of 5 is 10

// ============= CONDITIONAL IN TEMPLATES =============
console.log("\n=== TERNARY IN TEMPLATES ===");

let score = 75;
let result = `Your score is ${score}. ${score >= 50 ? "PASS" : "FAIL"}`;
console.log(result); // Your score is 75. PASS

let hour = 14;
let greeting = `Good ${hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening"}!`;
console.log(greeting); // Good afternoon!

// ============= OBJECT & ARRAY IN TEMPLATES =============
console.log("\n=== OBJECTS & ARRAYS ===");

let user = { name: "Bob", role: "admin" };
console.log(`User ${user.name} is ${user.role}`);

let numbers = [1, 2, 3];
console.log(`Numbers: ${numbers}`);           // Numbers: 1,2,3
console.log(`First number: ${numbers[0]}`);   // First number: 1

// ============= NESTED TEMPLATES =============
console.log("\n=== NESTED TEMPLATES ===");

let product = "Laptop";
let price = 999;
let quantity = 2;

let order = `
Product: ${product}
Price: $${price}
Quantity: ${quantity}
Total: $${price * quantity}
Status: ${quantity > 5 ? "Bulk order - 10% discount" : "Regular order"}
`;
console.log(order);

// ============= HTML GENERATION =============
console.log("\n=== HTML GENERATION ===");

let items = ["Apple", "Banana", "Cherry"];
let html = `
<ul>
  ${items.map(item => `<li>${item}</li>`).join('\n  ')}
</ul>
`;
console.log(html);

// ============= FORMAT PRICES =============
console.log("\n=== FORMATTING PRICES ===");

let productPrice = 19.99;
let discountPercent = 10;

let priceDisplay = `
Product Price: $${productPrice}
Discount: ${discountPercent}%
Discount Amount: $${(productPrice * discountPercent / 100).toFixed(2)}
Final Price: $${(productPrice * (1 - discountPercent / 100)).toFixed(2)}
`;
console.log(priceDisplay);

// ============= DYNAMIC SQL STRINGS =============
console.log("\n=== DYNAMIC STRINGS ===");

let username = "john_doe";
let email = "john@example.com";

let query = `INSERT INTO users (username, email) VALUES ('${username}', '${email}')`;
console.log("Query:", query);

// ============= COMPARISON WITH + OPERATOR =============
console.log("\n=== COMPARISON ===");

let str1 = "Hello";
let str2 = "World";

// Using + (concatenation)
let concat = str1 + " " + str2 + "!";
console.log("With +:", concat); // Hello World!

// Using template literal
let template = `${str1} ${str2}!`;
console.log("With template:", template); // Hello World!

// ============= SPECIAL CHARACTERS =============
console.log("\n=== SPECIAL CHARACTERS ===");

// Backtick in template
let backtick = `He said \`backtick\``;
console.log(backtick);

// Escape characters still work
let escaped = `Line 1\nLine 2\tTabbed`;
console.log(escaped);

// ============= PRACTICAL EXAMPLES =============
console.log("\n=== PRACTICAL EXAMPLES ===");

// Example 1: User greeting
let user2 = { firstName: "Sarah", age: 28 };
console.log(`Welcome back, ${user2.firstName}! (Age: ${user2.age})`);

// Example 2: Error messages
let errorCode = 404;
let errorMsg = `Error ${errorCode}: Page not found`;
console.log(errorMsg);

// Example 3: Summary generation
let stats = { views: 1000, likes: 50, comments: 10 };
let summary = `Post Statistics: ${stats.views} views, ${stats.likes} likes, ${stats.comments} comments`;
console.log(summary);

console.log("\n=== KEY TAKEAWAYS ===");
console.log("✓ Use backticks (`) for template literals");
console.log("✓ ${} for variable/expression interpolation");
console.log("✓ Supports multiline strings naturally");
console.log("✓ Any expression works inside ${}");
console.log("✓ Much cleaner than string concatenation");