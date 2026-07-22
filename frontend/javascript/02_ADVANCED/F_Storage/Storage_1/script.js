/*
Local Storage, Session Storage and Cookies
- localStorage API : setItem, getItem, removeItem, clear.
- sessionStorage API : setItem, getItem, removeItem, clear.\
- Storing/retrieving strings vs JSON.
- Basic cookies structure (manual key = value; path=/format)

- Local Storage - Storing data in the browser that persists even after the browser is closed.
- Session Storage - Storing data in the browsewr that is cleared when the page session ends.
- Cookies - Small pieces of data stored in the browser, often used for session management, personalization, and tracking.
Used for less data or light data only.
*/

// localStorage.setItem('name', 'Akhil Shetty');

// let val = localStorage.getItem('name');

// localStorage.setItem('name', 'Shetty Akhil');

// localStorage.clear();
// localStorage.removeItem('name');

// sessionStorage.setItem('sessionName', 'Akhil Shetty Session');

// -------------------------------------------------------------------
// Session Storage : ~ 5mb
// sessionStorage.setItem('name', 'Akhil')

// -------------------------------------------------------------------
// Cookies : ~ 4kb
// Whatever data is stored in cookies that data on reload automatically will go to the server.

// document.cookie = "akhil@gmail.com"


// When we store data in local storage we store it as string.
// But while we use it we have to parse it and get it to its natural form.
localStorage.setItem("friends", JSON.stringify(["Akash", "Shashank", "Akhil"]));
let test = JSON.parse(localStorage.getItem("friends"))