const pw1 = document.querySelector("#password1");
const pw2 = document.querySelector("#password2");
const message = document.querySelector("#passworderror");

pw2.addEventListener("blur", checkPasswordMatch);

function checkPasswordMatch() {
    if (pw1.value !== pw2.value) {
        message.textContent = "❗Passwords DO NOT MATCH!";
        message.classList.add("visible"); // Add "visible" class to show the message
        pw1.value = "";
        pw2.value = "";
        pw1.focus();
    } else {
        message.textContent = ""; // Reset the message content
        message.classList.remove("visible"); // Remove "visible" class to hide the message
    }
}

// For Page Rating
const rangevalue = document.getElementById("currentRating");
const range = document.getElementById("pageRating");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}
