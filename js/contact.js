const form = document.querySelector("#contact_form");
const names = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const successMessage = document.querySelector(".thankyou-message");

function validateForm(event) {
    event.preventDefault();

    if (checkLength(names.value, 5) && validateEmail(email.value) && checkLength(subject.value, 15) && checkLength(message.value, 25)) {
        nameError.style.display = "none";
        emailError.style.display = "none"; 
        subjectError.style.display = "none";
        messageError.style.display = "none";

        successMessage.innerHTML = "Thank you!";

    } else {
        nameError.style.display = "block";
        emailError.style.display = "block";
        subjectError.style.display = "block";
        messageError.style.display = "block";
    }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}
