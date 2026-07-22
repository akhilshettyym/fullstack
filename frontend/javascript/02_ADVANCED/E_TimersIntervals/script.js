/* Timers and Intervals :
- setTimeout, clearTimeout.
- setInterval, clearInterval.
- Real use : delaying UI actions, auto-refresh.
- setInterval vs setTimeout recursion.
*/

// let tm = setTimeout(function() {    
//     console.log("Hello brotha, Am a timer");
// }, 5000);

// clearTimeout(tm);

// setInterval(function() {
//     console.log("Jack of all")
// }, 5000)

let count = 0;
let counter = 0;
let progress = document.querySelector(".progress-bar");
let progressNum = document.querySelector("#progressNum");
let fileIcon = document.querySelector(".file-icon");
let status = document.querySelector(".status");

console.log(fileIcon.innerText)

setTimeout(() => {
    setInterval(() => {
        if (count <= 99) {
            count++;
            progress.style.width = `${count}%`
            progressNum.innerText = `${count}%`
            if (count == 100) {
                fileIcon.innerText = "Downloaded"
                status.innerText = "Successfully Downloaded"
            }
        }
    }, 30)
}, 5000)

setInterval(() => {
    if (counter < 5) {
        counter++;
        console.log(counter)
        fileIcon.innerText = `Download starts in ${counter}`
    }
    if (counter == 4.99) {
        fileIcon.innerText = "Downloading..."
        status.innerText = "Processing with status code 200 OK"
    }
}, 1000);