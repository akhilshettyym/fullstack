// ============================================
// JAVASCRIPT COMMENTS
// ============================================

// THEORY: Comments are ignored by JavaScript engine
// - Used to explain code and make it more readable
// - Helpful for future reference and team collaboration
// - Can be used to temporarily disable code (comment out)

// THEORY: Two types of comments:
// 1. Single-line comments: // (everything after // on that line is ignored)
// 2. Multi-line comments: /* */ (everything between /* and */ is ignored)

// THEORY: Best practices:
// - Explain WHY, not WHAT (code should be self-explanatory)
// - Keep comments concise and accurate
// - Update comments when code changes
// - Don't over-comment obvious code

// ============================================
// WORKING EXAMPLES
// ============================================

// Single-line comment example
let firstName = "John";  // Store first name
let lastName = "Doe";    // Store last name

// Multiple single-line comments explaining logic
// Calculate total price after tax
let subtotal = 100;
let taxRate = 0.08;      // 8% tax
let totalPrice = subtotal * (1 + taxRate);
console.log("Total: $" + totalPrice); // Output: Total: $108

/* 
  Multi-line comment block:
  This demonstrates how to write longer explanations
  spanning multiple lines when needed
*/

// Commenting out code for testing
let result = 10 + 5;
console.log(result);  // Output: 15

// let disabledCode = 20 + 15;  // This code is disabled (commented out)

/*
  Block comment to disable multiple lines:
  let x = 100;
  let y = 200;
  console.log(x + y);
*/

// Real-world example: Function with explanatory comments
function calculateDiscount(price, discountPercent) {
  // Convert percentage to decimal
  let discountAmount = price * (discountPercent / 100);

  // Calculate final price after discount
  let finalPrice = price - discountAmount;

  return finalPrice;  // Return discounted price
}

console.log(calculateDiscount(100, 20)); // Output: 80

// TODO comment - common convention for marking future work
// TODO: Add error handling for negative prices