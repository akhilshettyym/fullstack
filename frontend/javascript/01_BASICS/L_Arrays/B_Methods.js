// CONCEPT: Array Methods - Built-in functions to manipulate arrays

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const numbers = [1, 2, 3, 4, 5];

// LENGTH
console.log(fruits.length);            // 4

// CONVERT TO STRING
console.log(fruits.toString());        // "Banana,Orange,Apple,Mango"
console.log(fruits.join(" - "));       // "Banana - Orange - Apple - Mango"

// ACCESS ELEMENTS
console.log(fruits.at(0));             // "Banana" - ES2022
console.log(fruits.at(-1));            // "Mango" - last element
console.log(fruits[0]);                // "Banana" - traditional

// ADDING/REMOVING FROM END
console.log(fruits.push("Kiwi"));      // 5 - returns new length
console.log(fruits);                   // [..., "Kiwi"]

let removed = fruits.pop();            // "Kiwi"
console.log(removed);                  // "Kiwi"
console.log(fruits);                   // back to original 4

// ADDING/REMOVING FROM START
console.log(fruits.unshift("Lemon"));  // 5 - returns new length
console.log(fruits);                   // ["Lemon", "Banana", ...]

removed = fruits.shift();              // "Lemon"
console.log(fruits);                   // back to original 4

// SLICING (Non-destructive)
const slice1 = fruits.slice(1, 3);     // ["Orange", "Apple"]
const slice2 = fruits.slice(2);        // ["Apple", "Mango"]
const slice3 = fruits.slice(-2);       // ["Apple", "Mango"] - last 2

// SPLICING (Destructive - modifies original)
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, "X", "Y");            // Remove 1 at index 2, insert X and Y
console.log(arr);                      // [1, 2, "X", "Y", 4, 5]

// CONCATENATING
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = arr1.concat(arr2);    // [1, 2, 3, 4, 5, 6]

// REVERSING
const reversed = [1, 2, 3];
reversed.reverse();                    // MODIFIES original: [3, 2, 1]

// SORTING
const unsorted = [3, 1, 4, 1, 5, 9];
unsorted.sort();                       // MODIFIES original
// Default sorts as strings! [1, 1, 3, 4, 5, 9]

// NUMERIC SORT (need comparator)
const nums = [40, 100, 1, 5, 25];
nums.sort((a, b) => a - b);            // [1, 5, 25, 40, 100]

// FINDING ELEMENTS
const arr3 = [10, 20, 30, 40, 50];
console.log(arr3.includes(30));        // true
console.log(arr3.indexOf(30));         // 2
console.log(arr3.indexOf(99));         // -1 - not found
console.log(arr3.find(x => x > 25));   // 30 - first match
console.log(arr3.findIndex(x => x > 25)); // 2

// FLATTENING ARRAYS
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.flat();            // [1, 2, 3, 4, 5, 6]

const deepNested = [1, [2, [3, 4]]];
console.log(deepNested.flat());        // [1, 2, [3, 4]]
console.log(deepNested.flat(2));       // [1, 2, 3, 4] - flatten 2 levels

// TESTING ALL/SOME ELEMENTS
console.log([1, 2, 3, 4, 5].every(x => x > 0));  // true
console.log([1, 2, 3, 4, 5].some(x => x > 4));   // true