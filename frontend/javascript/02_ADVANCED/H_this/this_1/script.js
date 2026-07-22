/*
The "this" Keyword in JavaScript:

Overview:
- The "this" keyword in JavaScript is a reference to the object that is currently executing the code.
- It's value is determined dynamically by how a function is called, not where it is defined.
- This makes "this" context-dependent and can change based on the invocation method.
- Key contexts: global scope, functions, methods, event handlers, classes, arrow functions, and manual binding.

Key Rules:
- In global scope: "this" refers to the global object (window in browsers, global in Node.js).
- In a regular function (non-arrow): "this" defaults to the global object if not called as a method or bound.
- In a method (function as object property): "this" refers to the object owning the method.
- In arrow functions: "this" is lexically bound (inherits from the surrounding scope, no own "this").
- In event handlers: "this" refers to the DOM element that triggered the event.
- In classes: "this" refers to the instance of the class (a new object when using "new").
- Manual binding: Use call(), apply(), or bind() to explicitly set "this" and pass arguments.

Why Arrow Functions "Lose" this for Methods:
- Arrow functions do not have their own "this" binding. They capture "this" from the lexical (enclosing) scope at definition time.
- If used as a method in an object, "this" will refer to the outer scope (often global/window), not the object.
- This is why regular functions are preferred for methods if you need object-specific "this".
- However, arrow functions are great for callbacks where you want to preserve the outer "this".

This Inside Event Listeners:
- When a regular function is used as an event handler, "this" points to the element that received the event.
- If using an arrow function as the handler, "this" will be the lexical scope (often global/window), not the element.
- To preserve element context in arrow functions, use event.target instead.

Manual Binding: call(), apply(), bind()
- These methods allow controlling "this" explicitly.
- call(thisArg, arg1, arg2, ...): Invokes immediately, passes args individually.
- apply(thisArg, [argsArray]): Invokes immediately, passes args as an array.
- bind(thisArg, arg1, arg2, ...): Returns a new function with bound "this" and partial args (currying), doesn't invoke immediately.

*/

// 1. "this" in Global Scope
// In the global context (outside any function), "this" refers to the global object.
// In browsers, this is the "window" object, which is the top-level container for browser functionality and global variables.
console.log('Global Scope:');
console.log(this);  // Output: Window (in browser)

// 2. "this" in a Regular Function
// When a function is called standalone (not as a method), "this" defaults to the global object (window in browsers).
// This is because the function is implicitly called by the global object.
console.log('\nRegular Function:');
function shetty() {
    console.log(this);  // Output: Window
}
shetty();

// 3. "this" in a Method (Regular Function)
// A method is a function stored as a property of an object.
// When called as obj.method(), "this" refers to the object (obj).
// This allows accessing other properties of the object via "this".
console.log('\nMethod with Regular Function:');
let obj = {
    name: "Akhil",
    sayName: function () {
        console.log(this);       // Output: { name: 'Akhil', sayName: [Function: sayName] }
        console.log(this.name);  // Output: Akhil
    }
};
obj.sayName();

// 4. "this" in a Method (Arrow Function)
// Arrow functions do not bind their own "this"; they inherit from the lexical scope.
// Here, since the arrow function is defined in the global scope, "this" is window.
// This is why arrow functions are not ideal for methods if you need object "this".
console.log('\nMethod with Arrow Function:');
let objArrow = {
    name: "Akhil",
    sayName: () => {
        console.log(this);       // Output: Window (lexical this from global scope)
        console.log(this.name);  // Output: undefined (no "name" on window)
    }
};
objArrow.sayName();

// 5. Nested Functions Inside Methods
// Demonstrates how "this" behaves in nested functions.
// - Regular nested function: Loses object "this", defaults to global.
// - Arrow nested function: Inherits lexical "this" from the method (object).
console.log('\nNested Functions Inside Method:');
let objNested = {
    name: "Akhil",
    sayName: function () {
        console.log('Outer method this:', this);  // Output: Object

        // Regular nested function
        function innerRegular() {
            console.log('Inner regular this:', this);  // Output: Window (loses context)
        }
        innerRegular();

        // Arrow nested function
        const innerArrow = () => {
            console.log('Inner arrow this:', this);  // Output: Object (lexical from outer)
        };
        innerArrow();
    }
};
objNested.sayName();

// 6. "this" in Event Handlers
// In event listeners, "this" refers to the DOM element that triggered the event.
// Note: This assumes an <h1> element exists in the DOM. Click it to see the log.
// If using arrow function: "this" would be global, use event.target instead.
console.log('\nEvent Handler:');
// Uncomment and run in a browser with an <h1> element
// document.querySelector("h1").addEventListener("click", function () {
//     console.log(this);  // Output: <h1> element (the DOM node)
// });

// Arrow function in event handler example (commented out)
// document.querySelector("h1").addEventListener("click", () => {
//     console.log(this);  // Output: Window (lexical this)
// });

// 7. "this" in Classes
// In a class constructor or methods, "this" refers to the new instance object.
// Classes are blueprints; "new" creates a blank object and sets "this" to it.
console.log('\nClass:');
class Abcd {
    constructor() {
        console.log('Constructor this:', this);  // Output: Abcd {} (blank instance object)
        console.log("Hehehe");                  // Additional log from example
    }
}
new Abcd();  // Instantiate to run constructor

// 8. Manual Binding: call(), apply(), bind()
// These methods set "this" explicitly and can pass arguments.
// Example: Binding a function to an object.
console.log('\nManual Binding:');
let object = {
    name: "Akhil",
};

function abcde(greeting) {
    console.log(this);               // With binding: Object
    console.log(greeting, this.name);  // With args
}

// Standalone call (defaults to global)
abcde('Hello');  // Output: Window, Hello undefined

// Using call(): Invoke immediately, set "this" to object, pass args individually
abcde.call(object, 'Hello via call');  // Output: Object, Hello via call Akhil

// Using apply(): Similar to call, but args as array
abcde.apply(object, ['Hello via apply']);  // Output: Object, Hello via apply Akhil

// Using bind(): Returns a new bound function, doesn't invoke immediately
const boundAbcde = abcde.bind(object, 'Hello via bind');
boundAbcde();  // Output: Object, Hello via bind Akhil

/*
Additional Notes:
- In strict mode ('use strict';), standalone functions set "this" to undefined instead of global.
- Arrow functions are useful in callbacks (e.g., setTimeout, array methods) to preserve outer "this".
- Common pitfall: Losing "this" in callbacks; solutions: arrow functions, bind(), or var self = this.
*/

let objects = {
    name: 'Shetty',
    age: 22,
    gender: 'M'
};
function abc(a, b, c) {
    console.log(this.name);
    console.log(this.age);
}
abc.call(objects);

abcd.call(objects, 1, 2, 3);

abc.apply(objects, [1, 2, 3]);

let bindFunc = abc.bind(objects, 1, 2, 3);
bindFunc();