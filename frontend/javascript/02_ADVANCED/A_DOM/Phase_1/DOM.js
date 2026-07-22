/*
- DOM Tree structure: node, element, text, comment
- Selecting elements: getElementById, getElementsByClassName, querySelector, querySelectorAll.
- Text/content access: innerText, textContent, innerHTML.
- Attribute manipulation: createElement, appendChild, removeChild, prepend style
updates via .style and classList (add, remove, toggle).
*/

let thisIsAnID = document.getElementById("thisIsAnID");
// console.log("thisIsAnID", thisIsAnID);
// console.dir("abcd", abcd);   // Opening format

let thisIsAClass = document.getElementsByClassName("thisIsAClass");
// console.log("thisIsAClass", thisIsAClass);

// This selects the first query, if there are multiple of em.
let thisIsAQuerySelector = document.querySelector("h3");
// console.log("thisIsAQuerySelector", thisIsAQuerySelector); // If we add a statement we cannot use .dir
// console.dir(thisIsAQuerySelector);

let thisIsAQuerySelectorAll = document.querySelectorAll("h3");
// console.log(thisIsAQuerySelectorAll);
// console.dir(thisIsAQuerySelectorAll);


let h2 = document.querySelector("h2");
h2.textContent = "Hello, How are you ?"
h2.innerText = "Hello, How are you ?, Am good"
h2.innerHTML = "<i>Hello, How are you ?, Am great</>"
console.dir(h2);

let a = document.querySelector("a");
// a.href = "https://www.google.com"; // possible
a.setAttribute("href", "https://www.google.com");
console.dir(a);

let img = document.querySelector("img");
img.setAttribute("alt", "Broken Image")

console.log("getAttribute", img.getAttribute("src"))

let srcRem = img.removeAttribute("src");
console.log("removeAttribute", srcRem);


// Dynamic DOM manipulation : createElement, appendChild, removeChild, prepend
// create first then append or prepend

let h1 = document.createElement("h1");
h1.textContent = "Hello brother";
// document.querySelector("body").append(h1)    // This is also possible
document.body.append(h1);       // After script
// document.body.prepend(h1);       // Before script

// Changing css thru js
h1.style.color = "red"
h1.style.backgroundColor = "gray"
h1.style.fontFamily = "Helvetica"

/*
h1.classList.add("hulu");

h1.classList.remove("hulu");

h1.classList.toggle("hulu"); // If present removes, if not adds.
*/