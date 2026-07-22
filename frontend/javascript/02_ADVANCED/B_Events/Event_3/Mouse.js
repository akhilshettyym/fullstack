/*

Whenever a user performs a click or any event is raised . The event flow happens in two phases.
1. Event will move from top level towards bottom level.
2. Event raised element towards parent.

* Event Bubbling : 
Event bubbling in JavaScript is a mechanism where an event, triggered on a specific DOM element, 
propagates upwards through its parent elements in the DOM hierarchy. When an event occurs on an 
element (the target element), the event first triggers any attached event handlers on that element. 
Then, the event "bubbles up" to its immediate parent, triggering any handlers attached to the parent,
and this process continues up the DOM tree until it reaches the document object. 
Example : 
div main
div nav - if nav has the event then this will be triggered if button is clicked.
links
button  - if button has no events, moves upwards insearch of an event

* Event capturing :
Event travles from the root of the document tree down to the target element that initiated the event.

* Phases of Event Propagation: Event propagation has three phases:
- Capturing Phase: The event travels downwards from the root to the target. 
- Target Phase: The event reaches the target element itself.
- Bubbling Phase: The event travels upwards from the target back to the root. 
*/

let abcd = document.querySelector("#abcd");

abcd.addEventListener("mouseover", function () {
    abcd.style.backgroundColor = "green";
})

abcd.addEventListener("mouseout", function () {
    abcd.style.backgroundColor = "antiquewhite";
})

window.addEventListener("mousemove", function (dets) {
    // console.log(dets.clientX, dets.clientY);
    abcd.style.top = dets.clientY + "px";
    abcd.style.left = dets.clientX + "px";
})

let h2 = document.querySelector("h2");
let type = document.querySelector("#type");
window.addEventListener("keyup", (val) => {
    // console.log(val.key);
    if (val.key === " ") {
        type.textContent = "Space"
    } else {
        type.textContent = val.key
    }
});

let ul = document.querySelector("ul");
ul.addEventListener("click", (val) => {
    val.target.classList.toggle("lt");
})