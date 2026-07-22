let ul = document.querySelector("ul");

// for(let i=0; i<=10; i++){
//     const li = document.createElement("li");
//     li.textContent = i;
//     ul.appendChild(li);
// }

const space = document.createDocumentFragment();
for (let i = 0; i <= 10; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    space.appendChild(li);
}

ul.appendChild(space);