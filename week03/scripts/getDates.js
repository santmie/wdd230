// getDates.js

document.addEventListener("DOMContentLoaded", function () {
    // Get the current year
    var currentYear = new Date().getFullYear();

    // Update the content of the year span
    document.getElementById("year").textContent = currentYear + " Crisanta N. Advincula, Philippines";

    // Get the last modification date
    var lastModifiedDate = document.lastModified;

    // Update the content of the lastModified paragraph
    document.getElementById("lastModified").textContent = "Last Modification: " + lastModifiedDate;
});
