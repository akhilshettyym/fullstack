/*
Seperation of Concerns :
It is a design principle in software engineering which means breaking donw a system into distinct, independent modules, 
where each modules handles a specific 'concern' or responsibility, minimizing overlap.
The code - DOM and logic should be written seperately...
*/

const btn = document.querySelector("button");
const ul = document.querySelector("ul");

function add(num1, num2){
    return num1 + num2;
}

btn.addEventListener("click", function() {
    const num1 = Math.floor(Math.random()*10);
    const num2 = Math.floor(Math.random()*10);

    let Sum = add(num1 + num2);
    
    let li = document.createElement("li");
    li.textContent = Sum;
    ul.appendChild(li);
})