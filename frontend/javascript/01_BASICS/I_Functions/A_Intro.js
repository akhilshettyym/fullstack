/*
JavaScript Functions
What are Functions?
Functions are fundamental building blocks in all programming.

Functions are reusable block of code designed to perform a particular task.

Functions are executed when they are "called" or "invoked".

Example
Function to compute the product of two numbers:

function myFunction(p1, p2) {
  return p1 * p2;
}
JavaScript Function Syntax
function name( p1, p2, ... ) {
  // code to be executed
}
Functions are defined with the function keyword:

followed by the function name
followed by parentheses ( )
followed by brackets { }
The function name follows the naming rules for variables.

Optional parameters are listed inside parentheses: ( p1, p2, ... )

Code to be executed is listed inside curly brackets: { }

Functions can return an optional value back to the caller.

Why Functions?
Functions enable better code organization and efficiency.

With functions you can reuse code.

You can write code that can be used many times.

You can use the same code with different arguments, to produce different results.

Function Invocation ()
The code inside the function will execute when "something" invokes (calls) the function:

When it is invoked (called) from JavaScript code
When an event occurs (a user clicks a button)
Automatically (self invoked)
The () operator invokes a the function.

Example
toCelsius() invokes the toCelsius funnction:

// Convert Fahrenheit to Celsius:
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

// Call the toCelcius() function
let value = toCelsius(77);
Accessing a function with incorrect parameters can return an incorrect answer:

Example
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius();
Accessing a function without (), returns the function itself and not the result:

Example
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius;
Note
In the examples above:

toCelsius refers to the function object.

toCelsius() refers to the function result.

ADVERTISEMENT

REMOVE ADS

Arrow Functions
Arrow functions were introduced in ES6.

Arrow functions allow us to write shorter function syntax:

Before Arrow:
Function to compute the product of a and b

let myFunction = function(a, b) {return a * b}

With Arrow
let myFunction = (a, b) => a * b;

Learn More:
JavaScript Arrow Functions

Local Variables
Variables declared within a JavaScript function, become LOCAL to the function.

Local variables can only be accessed from within the function.

Example
// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName
Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

Local variables are created when a function starts, and deleted when the function is completed.

Parameters vs. Arguments
In JavaScript, function parameters and arguments are distinct concepts:

Parameters are the names listed in the function definition.

Parameters are the names of the values that will be passed.

Example
"name" and "age" are parameters:

function greet(name, age) {
  return `Hello $name! You are ${age} years old.`;
}
Arguments are the values passed to the function when it is invoked or called.

Arguments are the values received by the function.

Example
"John" and 21 are arguments:

greet("John", 21);
Functions Used as Variables
Functions can be used as variables, in all types of formulas, assignments, and calculations.

Example
Instead of using a variable to store the return value of a function:

let x = toCelsius(77);
let text = "The temperature is " + x + " Celsius";
You can use the function directly, as a variable value:

let text = "The temperature is " + toCelsius(77) + " Celsius";
*/