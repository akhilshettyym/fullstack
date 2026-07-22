/*
Variable Scope - Global, Block, Functional.
Execution context - Memory Creation and Execution phase.
Lexical scope vs Dynamic scope.
Closure defn and how variables are preserved.
Use cases - Private counters, encapsulation.


SCOPE - 

1. Variable Scope :
Scope determines where in your code a variable can be accessed.
A. Global Scope :
- Variables declared outside any function/block.
- Accessible from anywhere in the program.
- Lives for the entire lifetime of the program.

var x = 10; // global
function foo() {
  console.log(x); // 10
}

* Issues:
- Pollutes global namespace
- Higher chance of accidental overwrites
- Harder to debug in large programs


B. Function (Local) Scope :
- Variables declared inside a function (var, let, const).
- Accessible only inside that function and its inner functions.

function test() {
  var a = 5;
  console.log(a); 
}
console.log(a); // Error: a is not defined


C. Block Scope :
- Introduced with let and const in ES6.
- A block {} creates a separate scope for let and const.

if (true) {
  let x = 20;
}
console.log(x); // Error: x not defined
- var is NOT block-scoped — only function-scoped.



EXECUTION CONTEXT :

- Every time JavaScript executes code, it creates an execution context.
- There are two types:

1. Global Execution Context (GEC)
2. Function Execution Context (FEC)
Each context is created in two phases:

A. Memory Creation Phase (Creation Phase / Hoisting Phase)
JS sets up:
this binding
Creation of variable environment
Setup of scope chain

- Hoisting happens here:
- Function declarations are fully hoisted.
- var variables are hoisted with default value undefined.
- let and const are hoisted but not initialized → temporal dead zone (TDZ).

console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError (TDZ)
let b = 20;

B. Execution Phase
- Code runs line by line.
- Variables assigned actual values.
- Functions executed, new contexts created.
- Each function call → new Function Execution Context.



LEXICAL SCOPE VS DYNAMIC SCOPE :

- Lexical Scope (JavaScript uses this)
- Scope is determined by where the code is written.
- Inner functions have access to variables of outer functions.

Example:
function outer() {
  let a = 10;
  
  function inner() {
    console.log(a); // 10 → lexical scoping
  }
  inner();
}
outer();

The function remembers the environment in which it was defined, not where it is called.


- Dynamic Scope
- Scope determined by where the function is called, not defined.
- JavaScript does NOT use dynamic scope (languages like Bash, Lisp can).
- Illustration of what dynamic scope would do:

var x = 1;
function foo() { console.log(x); }

function bar() {
  var x = 2;
  foo(); // In dynamic scope → would print 2
}
bar();

// In JavaScript (lexical) → prints 1



CLOSURES :

- A closure is created when an inner function “remembers” variables from its outer function even after the outer function has returned.
Definition:
- A closure is a function that retains access to its lexical scope even when executed outside that scope.

Example:
function createCounter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2


Here:
createCounter returned and finished execution.
Yet count persists inside the returned function → closure.

How are variables preserved?
When a function returns, normally its variables would be removed from memory.
But with closures:
JS stores the outer function’s variable environment in memory
As long as the inner function exists, the environment stays alive
It is essentially a lexical environment attached to the function object.


Use Cases of Closures
A. Private Variables / Encapsulation

JavaScript has no true private variables (before ES2020 private fields).
Closures create privacy:

function createSecret() {
  let secret = "password123";

  return {
    getSecret() { return secret; },
    setSecret(newSecret) { secret = newSecret; }
  }
}

const obj = createSecret();
console.log(obj.getSecret()); // "password123"
obj.setSecret("newpass");


secret is inaccessible from outside.

B. Private Counters / Stateful Functions

Used heavily in functional programming.

function counter() {
  let value = 0;
  return () => ++value;
}

const c = counter();
c(); // 1
c(); // 2

C. Event Handlers / DOM callbacks
function setup() {
  let count = 0;

  document.getElementById("btn").onclick = function() {
    count++;
    console.log(count);
  }
}
setup();


The handler retains access to count even after setup() finishes.

D. Module Pattern (Common in JS libraries)
const Module = (function() {
  let data = 42;

  return {
    getData() { return data; }
  };
})();

E. Currying / Partial Functions
function add(a) {
  return function(b) {
    return a + b;
  }
}

const add5 = add(5);
console.log(add5(3)); // 8

F. Memoization
function memoize(fn) {
  const cache = {};

  return function(n) {
    if (cache[n]) return cache[n];
    return cache[n] = fn(n);
  };
}
*/

// Closures -
function counter() {
  let c = 0;
  return function () {
    c++;
    console.log(c);
  }
}
let fun = counter();
fun();
fun();
fun();

let fun2 = counter();
fun2();
fun2();
fun2();
fun2();
fun2();


// Encapsulation
function clickLimiter() {
  let click = 0;
  return function () {
    if (click < 5) {
      click++;
      console.log(`clicked : ${click} times`);
    } else {
      console.error(`Limit exceeded`);
    }
  }
}

let limiter = clickLimiter();
limiter();
limiter();
limiter();
limiter();
limiter();