/*
JavaScript Arrow Functions
Arrow Functions were introduced in ES6.

Arrow Functions allow a shorter syntax for function expressions.

You ca skip the function keyword, the return keyword, and the curly brackets:

let myFunction = (a, b) => a * b;
Before Arrow:
Function to compute the product of a and b

let myFunction = function(a, b) {return a * b}

With Arrow
let myFunction = (a, b) => a * b;

Before Arrow:
let hello = function() {
  return "Hello World!";
}

With Arrow Function:
let hello = () => {
  return "Hello World!";
}

If the function has only one statement that returns a value, you can remove the brackets and the return keyword:

Arrow Functions Return Value by Default:
let hello = () => "Hello World!";

Note
This works only if the function has only one statement.

Arrow Function Parameters
If you have parameters, you pass them inside the parentheses:

Example
let hello = (val) => "Hello " + val;

If you have only one parameter, you can skip the parentheses as well:

Example
let hello = val => "Hello " + val;

Note
Arrow functions must be defined before they are used.

You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:

Example
// This will not work
let myFunction = (x, y) => { x * y } ;

// This will not work
let myFunction = (x, y) => return x * y ;

// Only this will work
let myFunction = (x, y) => { return x * y };
*/