document.addEventListener("DOMContentLoaded", function() {
    // milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
    const msToDays = 1000 * 60 * 60 * 24;

    // today's date
    const theDateToday = new Date();

    // Get the last visit date from localStorage
    var lastVisit = localStorage.getItem("lastVisit");

    // Get the current date
    var currentDate = new Date();
    var currentDateWithoutTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()); // Current date without time

    // Check if it's the user's first visit or if the current date is different from the last visit date
    if (!lastVisit || currentDateWithoutTime.toISOString() !== new Date(lastVisit).toISOString()) {
        // Store the current visit date in localStorage
        localStorage.setItem("lastVisit", currentDateWithoutTime.toISOString());

        // Display "Welcome!" message
        document.querySelector(".visits").textContent = "Welcome! Let us know if you have any questions.";
    } else {
        // Calculate the time difference between visits
        var lastVisitDate = new Date(lastVisit);
        var timeDifference = currentDateWithoutTime - lastVisitDate;
        var daysDifference = Math.floor(timeDifference / msToDays);

        // Display message based on the time difference
        if (daysDifference === 0) {
            document.querySelector(".visits").textContent = "Back so soon! Awesome!";
        } else {
            var message = "You last visited " + daysDifference + (daysDifference === 1 ? " day" : " days") + " ago.";
            document.querySelector(".visits").textContent = message;
        }
    }
});
