/*01. Difference between function declaration and expression in terms of hoisting
- Function declarations are hoisted and function expressions are not hoisted.

02. Convert to arrow function - 
function mul(a, b){
    return a * b;
}
- const mul = (a, b) => {
    return a * b;    
}*/

//03. Use REST parameter to accept any number of scores and return the total
function tot(...scores) {
    let total = 0;
    scores.forEach(function (val) {
        total = total + val;
    })
    return total;
}
// console.log(tot(89, 90, 78, 65, 99, 85));

//04. Fix with early return
function checkAge(age) {
    if (age < 18) return "Too young";
    else return "Allowed";
}
// console.log(checkAge(10));

//05. Use of IIFE.
let test = (function () {
    let score = 0;
    return {
        getScore: function () {
            console.log(score);
        },
        setScore: function () {
            score = val;
        },
    }
})();

//01. Write a BMI calculator
function bmi(weight, height) {
    return weight / (height * height);
}
console.log(Math(bmi(60, 1.8).toFixed(2)));

//02. Reusable discount calculator (HOF)
function discountCalculator(discount) {
    return function (price) {
        return price - price * (discount / 100);
    }
}
let ten = discountCalculator(10);
let twenty = discountCalculator(20);
console.log(ten(1000));
console.log(twenty(1000));


// Closures
function counter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
};

let c = counter();
console.log(c());