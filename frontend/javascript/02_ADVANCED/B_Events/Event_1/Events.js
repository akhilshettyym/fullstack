/*
* Events and Event Handling :
- Event binding : addEventListener, removeEventListener.
- Common events : click, input, change, submit, mouseover, keyup.
- Event object : target, type, preventDefault.
- Event bubbling and capturing.
- Event delegation.

Events are actions or occurrences that happen in the browser, often triggered by user interactions or browser actions. Examples include:
- User actions: Clicking a button, typing in a text field, moving the mouse, submitting a form.
- Browser actions: A page finishing loading, an image failing to load, a video starting to play.

- Event handlers are functions or blocks of code that are executed in response to a specific event.
They "handle" the event by defining what should happen when that event occurs.

* Imagine a light switch -
- The event is you flipping the light switch.
- The event handler is the electrical wiring and the light bulb turning on in response to you flipping the switch.
In JavaScript, you "listen" for an event on an HTML element and then "attach" an event handler to it. When the event happens,
the attached handler function automatically runs.
*/
let h4 = document.querySelector("h4");
h4.addEventListener("click", function () {
    h4.style.color = "pink";
});

let p = document.querySelector("p");
p.addEventListener("dblclick", () => {
    p.style.color = "green";
});

p.removeEventListener("dblclick", () => {
    console.log("Removed");
});


function dblClick() {
    p.style.color = "brown";
}

p.addEventListener("dblclick", dblClick);
p.removeEventListener("dblclick", dblClick);

let input = document.querySelector("input");
input.addEventListener("input", (dets) => {
    // console.log("Typed", dets.data);
    if (dets.data !== null) {
        console.log("Typed", dets.data);
    }
});

// Change event runs when input or textarea undrgoes a change
let sel = document.querySelector("select");
let device = document.querySelector("#deviceSelection");
sel.addEventListener("change", (dets) => {
    // console.log(dets);
    // console.log(dets.target.value);
    deviceSelection.textContent = `You chose ${dets?.target?.value}`
});

let h2 = document.querySelector("h2");
let type = document.querySelector("#type");
window.addEventListener("keydown", (dets) => {
    console.log(dets)
    console.log(dets.key)
    if (dets.key === " ") {
        type.textContent = "Space"
    } else {
        type.textContent = dets.key
    }
})

// Upload file
let btn = document.querySelector("#btn");
let file = document.querySelector("#file");

btn.addEventListener("click", () => {
    file.click();
});

file.addEventListener("change", (ele) => {
    console.log(ele?.target?.files[0]?.name);
    btn.textContent = ele?.target?.files[0]?.name;
})

