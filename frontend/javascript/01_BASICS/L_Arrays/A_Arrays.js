// CONCEPT: Arrays - Ordered collections of values (can be different types)

// CREATING ARRAYS - Array literal (preferred)
const fruits = ["Apple", "Banana", "Orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "text", true, null];

// EMPTY ARRAY + ADDING ELEMENTS
const colors = [];
colors[0] = "Red";
colors[1] = "Green";
colors[2] = "Blue";

// USING new Array() - Not recommended
const arr1 = new Array(1, 2, 3);       // [1, 2, 3]
const arr2 = new Array(3);             // [empty × 3] - Creates 3 empty slots!

// ACCESSING ELEMENTS - Indexed from 0
console.log(fruits[0]);                // "Apple"
console.log(fruits[1]);                // "Banana"
console.log(fruits[fruits.length - 1]); // "Orange" - last element

// MODIFYING ELEMENTS
fruits[0] = "Apricot";
console.log(fruits);                   // ["Apricot", "Banana", "Orange"]

// ARRAY LENGTH
console.log(fruits.length);            // 3

// ADDING ELEMENTS
fruits[fruits.length] = "Mango";       // Add at end
console.log(fruits);                   // ["Apricot", "Banana", "Orange", "Mango"]

// ARRAY.isArray() - Check if variable is an array
console.log(Array.isArray(fruits));    // true
console.log(Array.isArray("text"));    // false

// instanceof operator - Another way to check
console.log(fruits instanceof Array);  // true

// LOOPING THROUGH ARRAYS
console.log("Using for loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("Using forEach:");
fruits.forEach(function (fruit) {
  console.log(fruit);
});

// NESTED ARRAYS
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[0][0]);             // 1
console.log(matrix[1][2]);             // 6
console.log(matrix[2][1]);             // 8

// MIXED TYPES IN ARRAY
const misc = [
  42,
  "text",
  true,
  null,
  undefined,
  { name: "John" },
  function () { return "function"; }
];

console.log(misc[5].name);             // "John"
console.log(misc[6]());                // "function"

// DESTRUCTURING (ES6)
const [first, second, ...rest] = fruits;
console.log(first);                    // "Apricot"
console.log(second);                   // "Banana"
console.log(rest);                     // ["Orange", "Mango"]

// SPREAD OPERATOR
const arr3 = [...fruits];              // Copy array
const combined = [1, 2, ...fruits];    // Combine arrays
console.log(combined);                 // [1, 2, "Apricot", "Banana", ...]