// CONCEPT: Array Search Methods - Finding elements in arrays

const numbers = [10, 20, 30, 40, 50, 30];
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 75 }
];

// indexOf() - First occurrence of element
console.log(numbers.indexOf(30));      // 2
console.log(numbers.indexOf(99));      // -1 - not found
console.log(numbers.indexOf(30, 3));   // 5 - search from index 3

// lastIndexOf() - Last occurrence
console.log(numbers.lastIndexOf(30));  // 5 (last time 30 appears)
console.log(numbers.lastIndexOf(99));  // -1

// includes() - Check if element exists (returns boolean)
console.log(numbers.includes(20));     // true
console.log(numbers.includes(99));     // false
console.log(numbers.includes(20, 2));  // false - search from index 2

// find() - Get first element matching condition
const firstLarge = numbers.find(n => n > 25);
console.log(firstLarge);               // 30

const expensive = products.find(p => p.price > 100);
console.log(expensive);                // { id: 1, name: "Laptop", price: 1000 }

// findIndex() - Get index of first match
const index = numbers.findIndex(n => n > 25);
console.log(index);                    // 2

const productIndex = products.findIndex(p => p.name === "Mouse");
console.log(productIndex);             // 1

// findLast() - Get last element matching condition (ES2023)
// console.log(numbers.findLast(n => n > 25)); // 50

// filter() - Get ALL elements matching condition
const large = numbers.filter(n => n > 25);
console.log(large);                    // [30, 40, 50, 30]

const affordable = products.filter(p => p.price < 100);
console.log(affordable);               // [Mouse, Keyboard]

// some() - Check if ANY element matches condition
console.log(numbers.some(n => n > 40)); // true
console.log(numbers.some(n => n > 100)); // false
console.log(products.some(p => p.price > 500)); // true

// every() - Check if ALL elements match condition
console.log(numbers.every(n => n > 0));   // true
console.log(numbers.every(n => n > 25));  // false
console.log(products.every(p => p.price > 0)); // true

// COMPLEX SEARCH EXAMPLES
const users = [
  { id: 1, name: "Alice", age: 25, active: true },
  { id: 2, name: "Bob", age: 30, active: false },
  { id: 3, name: "Charlie", age: 28, active: true }
];

// Find active user with age > 25
const activeOld = users.find(u => u.active && u.age > 25);
console.log(activeOld);                // { id: 3, name: "Charlie", ... }

// Get all inactive users
const inactive = users.filter(u => !u.active);
console.log(inactive);                 // [Bob]

// Check if any user over 30
console.log(users.some(u => u.age > 30)); // false

// Check if all users active
console.log(users.every(u => u.active)); // false

// COMBINING SEARCHES
const searchTerm = "alice";
const result = users.find(u => u.name.toLowerCase().includes(searchTerm.toLowerCase()));
console.log(result);                   // { id: 1, name: "Alice", ... }