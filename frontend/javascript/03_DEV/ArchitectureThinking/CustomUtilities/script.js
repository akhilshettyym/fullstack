/*
The map() function in JavaScript is an array method that creates a new array populated with the results of calling a provided 
callback function on every element in the original array. A key characteristic is that it does not modify the original array. 
*/

const arr = [1, 2, 3, 4, 5];

function myMap(arr, callback) {
    let newarr = [];
    for(let i = 0; i < arr.length; i++){
        newarr.push(callback(arr[i], i, arr));
    }
    return newarr;
}
let ans = myMap([1, 2, 3, 4, 5], (num) => {
    return num + 2;
});
console.log(ans);