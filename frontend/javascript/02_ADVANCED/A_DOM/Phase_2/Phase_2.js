/*
01. What is DOM ? How does it represent the HTML structure ?
- Document Object Model. A programming interface for HTML or XML documents that represents the page's structure as a 
tree of objects, making it possible for scripts like JavaScript to dynamically access, change, or remove content, structure, and style.
- It represents HTML structure as a tree and everything is a node.

02. Name the types of nodes in the DOM tree.
- Element nodes, Text nodes, Comment nodes.

03. What's the difference between an element node and a text node ?
- An element node represents an HTML or XML element, which is defined by its opening and closing tags. Examples include <div>, <span>, <p>, <h1>, etc.
- A text node represents the actual textual content within an HTML or XML element. It does not have tags or attributes.

04. Whats the difference between getElementById and querySelector ?
- getElementById(id): This method specifically targets elements based on their unique id attribute. It requires the exact ID string as an argument.
- querySelector(selector): This method is more versatile, accepting any valid CSS selector string as an argument. This allows selection by ID, class, tag name, attributes, or any combination of CSS selectors.

05. What does getElementsByClassName return ?
- The getElementsByClassName() method in JavaScript returns a live HTMLCollection of all descendant elements that have the specified class name or names.
*/

// T1 : Select the heading of page by ID and change its text to Welcome
let heading = document.querySelector("#heading");
heading.textContent = "Welcome";

// T2 : Select all <li> elements and print their text using a loop
let li = document.querySelectorAll("li");
li.forEach(function (val) {
    console.log(val.textContent);
})

/*
06. What's the difference between innerText, innerContent and innerHTML ?
- innerContent is not a standard DOM property. The common properties used in JavaScript for manipulating element content are innerHTML, innerText, and textContent, which have key differences in how they handle HTML markup, visibility, and performance. 
- innerHTML: This is used when you need to read or write the full HTML structure within an element. 
When setting it, the browser parses the string as HTML and creates the corresponding DOM elements. 
This can be a security risk if the content is from an untrusted source, as it is susceptible to Cross-Site Scripting (XSS) attacks.
- innerText: This property returns only the "human-readable" text, much like what a user would see if they highlighted the text and copied it. 
It is aware of CSS styles; for example, it will not return the text of elements hidden with display: none. 
Because it accounts for rendered layout and styles, accessing it can be less performant than textContent.
- textContent: This is the recommended property for working with plain text when performance and security are concerns. 
It returns the raw text from the source code, preserving white space and line breaks, and including text from
hidden elements and <script>/<style> tags. It's faster because it doesn't involve the HTML parser or CSS engine to calculate the layout. 

07. When to use textContent instead of innerText
- You need the raw text content of an element, including hidden elements and <script>/<style> tags: textContent returns all text content within an element, regardless of its visibility or styling. This includes text within elements hidden by CSS (display: none) and the content of <script> and <style> elements.
*/

// T3 : Select a paragraph and replace its content with : <b>Updated</b> by javaScript
let paragraph = document.querySelector("p");
paragraph.innerHTML = "<b>Updated</b> by javaScript"

// T4 : How do you get the src of an image using javaScript ?
let img = document.querySelector("img");
console.log("getAttribute : ", img.getAttribute("src"));

// T5 : How to change set the src
img.setAttribute("src", "https://www.github.com")
console.log("setAttribute : ", img.getAttribute("src"));

// T6 : Change the href
let a = document.querySelector("a");
a.href = "https://www.github.com";

let title = document.querySelector("div");
title.setAttribute("title", "Hola");

let btn = document.querySelector("button");
btn.removeAttribute("disabled");

/*
08. What does createElement() do? What's returned ?
- createElement() is used to dynamically create an HTML element in the DOM.
- The document.createElement() method returns a reference to the newly created HTML element as an HTMLElement instance.
- This returned element is a standalone object in memory and is not yet part of the document's visual structure until 
it is appended to an existing element in the DOM using methods like appendChild() or insertBefore().
*/

// T7 : Add a highlight class to every even item in a list.
let liChild = document.querySelectorAll("ul li:nth-child(2n)");
liChild.forEach(function (val) {
    val.classList.add("highlight");
})


// T8 : Set the font size of all <p> elements to 18px using .style
let p = document.querySelectorAll("p");
p.forEach((val) => {
    val.style.fontSize = "18px";
})