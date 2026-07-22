/* Forms and Form Validations.
- Reading values from input, textarea, select.
- Prevent default submission.
- Inline and JS-based validation.
- Showing error messages conditionally.
- Pattern attribute vs custom regex.

Difference between value and textContent
Form submission vs buttojn click.

Inline val - Writing required in a tag say input tag shows up the error.
*/

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const form = document.querySelector("form");
const hideName = document.querySelector("#hideName");
const hideEmail = document.querySelector("#hideEmail");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    if (nameInput.value.trim().length <= 2) {
        hideName.style.display = "block";
        isValid = false;
    } else {
        hideName.style.display = "none";
    }

    if (emailRegex.test(emailInput.value.trim())) {
        hideEmail.style.display = "none";
    } else {
        hideEmail.style.display = "block";
        isValid = false;
    }

    if (isValid) {
        console.log("Form is valid! Submit data:", {
            name: nameInput.value,
            email: emailInput.value
        });
    }
});