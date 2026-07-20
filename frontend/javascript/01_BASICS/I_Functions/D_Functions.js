/*
* What is a function :
- A function is a block of reusable code designed to perform a specific task. It encapsulates a set of instructions that can be executed on demand, rather than running immediately when the script loads. 
*/

// Function Declaration
function dance() {
    console.log("Am a function");
    console.log("Am a function");
    console.log("Am a function");
    console.log("Am a function");
    console.log("Am a function");
}
// dance();

// Function Expression
let func = function () {
    console.log("Am a function Expression");
    console.log("Am a function Expression");
    console.log("Am a function Expression");
    console.log("Am a function Expression");
    console.log("Am a function Expression");
}
// func();

// Arrow Function
let fnc = () => {
    console.log("Am an arrow function");
    console.log("Am an arrow function");
    console.log("Am an arrow function");
    console.log("Am an arrow function");
    console.log("Am an arrow function");
}
// fnc();


// Parameters and arguements
function naach(naacho) {
    console.log(`${naacho} naach rha hai`);
}
naach("Ghoda");
// naach("Bhais");
// naach("Hiran");

// DEFAULT, REST and SPREAD PARAMETERS :
// Default - Arguements are not passed but parameters are given, when logged shows undefined.
// When v1 + v2 is done ie undefined + undefined = NaN
// Here in parameters we can have a default values or parameters so that even if the function won't get 
// any arguements the default values will be considered.
function add(v1 = 0, v2 = 0) {
    console.log(v1, v2);
}
add();

// REST -
// If we have many arguements then we will have to declare that many parameters, instead
// Use REST so that we can include every arguement
function abcd(a, b, c, ...val) {
    console.log(a, b, c, val);
}
abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// NOTE : When we use ... in parameters place then it is REST.
// If we use it wrt arrays and objects then it is spread operator.

// RETURN VALUES and EARLY RETURNS :
// - Return is always done inside a function.
function bcd() {
    return 123;
}
let val = bcd();
console.log(val);

// FIRST-CLASS FUNCTIONS(assign to variables, pass as arguements, return from other functions)
// - First-class functions :  functions can be treated as value
function xyz(val) {
    val();
}
xyz(function () {
    console.log("Hola");
});

// Higher-order functions : 
// - Accept one or more functions as arguments (callback functions).
// - Return a function as their result.
// HOF is a function which returns a function or accepts a function
function abcde() {

}
abcde(function () {

})
// OR
function abcde() {
    return function () {

    }
}
abcde()(); // second bracket is to run the second function inside


// PURE VS IMPURE FUNCTIONS : Deterministic vs Non-deterministic Functions.
// - Deterministic: Given the same input arguments, it will always return the exact same output. 
// Its result does not depend on any external state or hidden information that could change over time.
// - Non-deterministic: It may return different outputs for the same input arguments, 
// because its result depends on external state or factors that can change.

// CLOSURES and LEXICAL SCOPING
// Closures - A function which returns  another function, and the function which is returned will always use variable of parent function.
function funct() {
    let a = 12;
    return function () {
        console.log(a);
    }
}

// Lexical scoping also known as static scoping - 
// dictates how variables and functions are accessible based on their PHYSICAL LOCATION within the 
// source code at the time of definition, not at the time of execution.
function lex() {
    let a = 10;
    function cal() {
        let b = 20;
        function lexi() {
            let c = 30;
        }
    }
}


// IIFE(Immediately Invoked Function Expression) : Iffy
// - function that is defined and executed immediately after its creation.
// This pattern is primarily used to create a private scope for variables, preventing them from polluting the global scope and avoiding naming conflicts.
(function () {

})();


// Hoisting differences between declaration and expression.
test();
function test() {
    console.log("HEHEHEHE")
}