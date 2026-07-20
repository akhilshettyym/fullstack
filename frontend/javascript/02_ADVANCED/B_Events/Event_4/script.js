let inp = document.querySelector("input");
let span = document.querySelector("span");

inp.addEventListener("input", () => {
    let left = 20 - inp.value.length;
    span.textContent = left;
    if (left < 0) {
        span.style.color = "red";
    } else {
        span.style.color = "white";
    }
})