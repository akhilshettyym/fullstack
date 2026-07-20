/*
Performance Optimization :
# Debouncing -
- Debouncing in JavaScript is a programming technique that limits how often a function can be executed. 
- It ensures that a function is only called after a specified amount of time has passed since the last time it was triggered, effectively waiting for a period of inactivity.
# How it Works :
- The core concept is to use setTimeout() and clearTimeout() to manage a timer. 
- An event (like a keystroke) triggers the debounced function.
- Any existing timer is cleared using clearTimeout(), canceling the previously scheduled execution.
- A new timer is set using setTimeout(), scheduling the function to run after a specified delay (e.g., 500ms).
- If another event occurs before the delay expires, the timer is reset again.
- The function only executes if the delay period elapses without any new events. 

# Throttling :
- Throttling in JavaScript is a technique used to limit how often a function can be executed within a specific period of time, regardless of how many times the event that triggers it occurs. It ensures that the function runs at a maximum, controlled rate. 
# How It Works :
- When a throttled function is first called, it executes immediately (or after a very short initial delay, depending on implementation). For a specified "cooldown" or "wait" period after that initial call, any subsequent calls to the function are ignored. Once the time interval has passed, the function is available to run again. 
- Think of it like a security guard at a concert: even if many people rush the gate, the guard only lets one person through every five seconds. 
# Common Use Cases :
- Throttling is essential for optimizing performance with high-frequency events that can fire dozens or hundreds of times per second, preventing the browser from becoming overwhelmed and the UI from becoming laggy. 
- Scroll events : Limiting logic for infinite scrolling or lazy loading images to run only at set intervals while the user scrolls.
- Window resize events : Recalculating element positions or redrawing the UI at a consistent rate as the window size changes.
- Mouse movement tracking : Efficiently tracking mouse position for performance-sensitive tasks like drag-and-drop or drawing tools.
- API rate limiting : Preventing excessive API requests to a server by limiting how often a button click can trigger a network call. 
*/


function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, delay);
    }
}

function throttle(func, delay) {
    let timer = 0;
    return function (...args) {
        let now = Date.now();
        if (now - timer >= delay) {
            timer = now;
            func(...args);
        }
    }
}
document.querySelector("input").addEventListener("input", throttle(function () {
    console.log("Throttling");
}, 2000));

document.querySelector("input").addEventListener("input", debounce(function () {
    console.log("Debouncing");
}, 1500));