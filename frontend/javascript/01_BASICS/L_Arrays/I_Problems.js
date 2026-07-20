//01. Create an array with 3 fruits and print the second fruit.
let fruits = ["Apple", "Banana", "Grapes"];
let ans = fruits[1];
// console.log(ans);

//02. Add Mango at the end and Pineapple at the beginning of this array.
// fruits.push("Mango");
// fruits.unshift("Pineapple");
// console.log(fruits);

//03. Replace "Grapes" with "Kiwi" in the array above.
fruits.pop();
fruits.push("Kiwi");
// console.log(fruits);

//04. Insert "Red" and "Blue" at index 1 in this array :
let colors = ["Green", "Yellow"];
colors.splice(1, 0, "Red", "Blue");
// console.log(colors);

//05. Extract only the middle 3 elements from this array.
let items = [1, 2, 3, 4, 5];
let newItems = items.slice(1, 4);
// console.log(newItems);

//06. Sort the array alphabetically and then reverse it.
let names = ["Zara", "Akhil", "MIra", "Bhavya"];
names.sort();
// console.log(names);
names.reverse();
// console.log(names);
names.sort().reverse();     // Can also be written like this.

//07. Use map to square each number
let arr = [1, 2, 3, 4];
let newArr = arr.map(function (val) {
    return val * val;
})
// console.log(newArr);

//08. Use filter to keep numbers greater than 10
let great = [5, 12, 8, 20, 4];
let newGrt = great.filter((val) => {
    return val > 10;
})
// console.log(newGrt);

//09. Use reduce to find the sum of the array
let array = [10, 20, 30];
let newArray = array.reduce((acc, val) => {
    return acc + val;
}, 0);
// console.log(newArray);

//10. Use find to get the first number less than 10.
let first = [12, 15, 3, 8, 30];
let newFirst = first.find((val) => {
    return val < 10;
});
// console.log(newFirst);

//11. Use some to check if any student has scored below 35.
let stud = [45, 60, 28, 90];
let newStud = stud.some((val) => {
    return val < 35;
})
// console.log(newStud);

//12. Use every to check if all numbers are even.
let num = [2, 4, 6, 8, 10];
let newNum = num.every((val) => {
    return val % 2 == 0;
})
// console.log(newNum);

//13. Destructure the array to get firstName and lastName
let fullName = ["Akhil", "Shetty"];
let [firstName, lastName] = fullName;

//14. Merge two arrays using spread operator.
let a = [1, 2];
let b = [3, 4];
let c = [...a, ...b];
// console.log(c);

//15. Add "India" to the start of the array
let country = ["USA", "UK"];
let countries = ["India", ...country];
console.log(countries);