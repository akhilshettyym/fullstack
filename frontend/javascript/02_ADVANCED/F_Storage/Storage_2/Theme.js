// let test2 = window.matchMedia('(prefers-color-scheme: dark)') 
// console.log(test2);

function darkLight() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    }
}
// darkLight();

if (localStorage.getItem("theme")) {
    document.body.classList.add(localStorage.getItem("theme"));
} else {
    darkLight();
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", () => {
    if (!localStorage.getItem("theme")) {
        darkLight();
    }
});

let toggle = document.querySelector("button");
console.log(toggle);

toggle.addEventListener("click", () => {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        document.body.classList.add("light");

        localStorage.setItem("theme", "light");
    } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
})

// document.body.classList.add(localStorage.getItem("theme"));