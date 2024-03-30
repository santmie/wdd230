const positionInput = document.getElementById("position");

positionInput.addEventListener("input", function() {
    const inputValue = this.value;
    const pattern = /^[A-Za-z -]{7,}$/;

    if (inputValue && !pattern.test(inputValue)) {
        this.setCustomValidity("Title or Position must have at least seven (7) alpha characters, hyphens, and spaces.");
    } else {
        this.setCustomValidity("");
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const now = new Date();
    const loadTimestamp = now.toISOString();

    document.getElementById("timeStamp").value = loadTimestamp;
});



