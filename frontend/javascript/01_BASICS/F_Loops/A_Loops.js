/*
JavaScript Loops 

- Loops can execute a block of code a number of times.
- Loops are handy, if you want to run the same code over and over again, each time with a different value.
- Often this is the case when working with arrays:

- Instead of writing :
text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<br>";

- We can write:
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

* The For Loop :
- The for statement creates a loop with 3 optional expressions:

for (expr1; expr2; expr) {
  // code block to be executed
}
- exp1 is executed one time before the execution of the code block.
- exp2 defines the condition for executing the code block.
- exp3 is executed every time the code block has been executed.

- Example :
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
- exp1 sets a variable before the loop starts (let i = 0).
- exp2 defines the condition for the loop to run (i must be less than 5).
- exp3 increases a value (i++) each time the code block has been executed.

* Loop Scope :
- Example :
let i = 5;
for (i = 0; i < 10; i++) {
  // some code
}
// Here i is 10

- Example :
let i = 5;
for (let i = 0; i < 10; i++) {
  // some code
}
// Here i is 5

- In the first example, let i = 5; is declared outside the loop.
- In the second example, let i = 0;, is declared inside the loop.
- When a variable is declared with let or const inside a loop, it will only be visible within the loop.

* The While Loop :
- The while loop loops through a block of code as long as a specified condition is true.
- Syntax :
while (condition) {
  // code block to be executed
}

- Example :
while (i < 10) {
  text += "The number is " + i;
  i++;
}
   
* Note :
- If you forget to increase the variable used in the condition, the loop will never end.
- This will crash the browser.

* The Do While Loop :
- The do while loop is a variant of the while loop.
- The do while loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
- Syntax :
do {
// code block to be executed
}
while (condition);

* Note : 
- The do while runs at least once, even if the condition is false from the start.
- This is because the code block is executed before the condition is tested:

- Example :
do {
  text += "The number is " + i;
  i++;
}
while (i < 10);
*/