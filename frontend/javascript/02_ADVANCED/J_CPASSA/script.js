/*
Synchronous JavaScript : 
Synchronous (or "blocking") code runs in a strict, linear sequence. Each operation must finish before the next one starts. 
Execution: Code runs line by line in the order it appears.
Blocking: Long-running tasks, like complex calculations or file reading, will cause the entire application to freeze until they are complete, leading to a poor user experience.

Asynchronous JavaScript :
Asynchronous (or "non-blocking") code allows the program to initiate a potentially long-running task (such as a network request) and immediately continue with the rest of its execution. The application remains responsive, and the result of the long task is handled later using a callback, a Promise, or async/await syntax. 
Execution: Tasks can run concurrently; the order of completion isn't strictly sequential.
Non-Blocking: The main thread isn't blocked, so the user interface remains interactive.
Complexity: It can be more complex to manage the flow of control and handle errors. 

Callback : 
A callback function in JS is a function that is passed as an argument to another function to be executed (or called back) at later time by that receiving function.

Callback Hell : PYRAMID OF DOOM
A situation where multiple nested callback functions make the code difficult to read, maintain, and debug. 
This typically occurs when handling a sequence of dependent asynchronous operations. 
*/

function runAfterAwhile(val) {
    setTimeout(() => {
        console.log(val);
    }, Math.floor(Math.random() * 10) * 1000);
}

runAfterAwhile(function () {
    console.log("Hey");
});


// Callback Hell
function getProfile(username, cb) {
    console.log("Fetching data ...");
    setTimeout(() => {
        console.log(`Profile fetched of ${username}`);
        cb({ _id: 121212, username, age: 26, email: "shetty@gmail.com" });
    }, 2000);
}
function getPost(id, cb) {
    console.log("Fetching all posts ...");
    setTimeout(() => {
        cb({ _id: id, posts: ["Hey", "Hello", "Hola"] })
    }, 3000);
}
function getSavedPosts(id, cb) {
    console.log("Fetching Saved posts ...")
    setTimeout(() => {
        cb({ _id: id, saved: [1, 2, 4, 5, 6] });
    }, 4000)
}

getProfile("Akhil", function (profileData) {
    console.log(profileData);
    getPost(profileData._id, function (posts) {
        console.log(posts);
        getSavedPosts(profileData._id, function (saved) {
            console.log(saved);
        })
    })
});


// Promises : 
// A Promise in JavaScript is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It serves as a placeholder for a value that is not available yet but will be at some point in the future, allowing you to handle asynchronous code in a more organized and readable manner than traditional callbacks (avoiding "callback hell").

let prom = new Promise(function (res, rej) {
    setTimeout(() => {
        // res("Akhil");
        let rand = Math.floor(Math.random() * 10);
        if (rand > 5) {
            res(rand);
        } else {
            rej(rand);
        }
    }, 3000);
});

prom
    .then(function (val) {
        console.log(`Resolved with ${val}`);
    })
    .catch(function (val) {
        console.log(`Rejected with ${val}`);
    })


// Async :
let pr = new Promise(function (res, rej) {
    setTimeout(() => {
        // res("Akhil");
        let rand = Math.floor(Math.random() * 10);
        if (rand > 5) {
            res(rand);
        } else {
            rej(rand);
        }
    }, 3000);
});

async function abcd() {
    try {
        let val = await pr;
        console.log(val);
    }
    catch (err) {
        console.error(err);
    }
}
abcd();