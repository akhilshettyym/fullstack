// ARRAYS
let marks = [10, 20, 30, 40, 50];   // Creation
marks[0];                           // Accessing
marks[3] = 35;                      // Modifying

// Array methods: 
// - push, pop, shift, unshift, splice, slice, reverse, sort, map, filter, reduce, find, some, every.

let arr = [1, 2, 3, 4, 5];

arr.push(6);
console.log("Pushed :", arr);

arr.pop();
console.log("Popped :", arr);

arr.shift();
console.log("Shift :", arr);

arr.unshift(0);
console.log("Unshift :", arr);

arr.splice(2, 1);
console.log("Splicing :", arr);     // Removed from index 2 and removed 1 val

let newArr = arr.slice(0, 3);
console.log("Slicing :", newArr);       // Main array won't be changed, Another array will be created

arr.reverse();
console.log("Reverse :", arr);

let array = [11, 62, 3, 4, 25];
array.sort(function (a, b) {
    return a - b;                 // a-b is for ascending order, b-a is for descending order.
});
console.log("Sort :", array);

// forEach, map, reduce, filter
let myArray = [10, 20, 30, 40, 50];

myArray.forEach(function (val) {
    console.log("forEach", val + 5);
})

// map is used when we have to create a new array on basis of older one.
// When map is seen create a blank array.
let newMyArray = myArray.map(function (val) {
    if (val > 10) return console.log(val);
})

// Filter
let newFilArray = myArray.filter(function (val) {
    if (val > 4) return true;
})

// Reduce
let test = [1, 2, 3, 4, 5, 6];
let ans = test.reduce(function (accumulator, val) {
    return accumulator + val;
}, 0);

// Find
test.find(function (val) {
    return val === 1;
})

// Some
let ar = [10, 30, 35, 90];
let any = ar.some(function (val) {
    return val > 85;
})

// Every
let eve = ar.every(function (val) {
    return val > 5;
})

// Destructuring and Spread Operator
// - Destructuring :
let arra = [1, 2, 3, 4, 5]
let [a, b, , c] = arr;          // Skips 3 if , , this is done. 

// - Spread Operator :
let arr2 = [...arr];