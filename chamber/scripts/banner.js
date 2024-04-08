document.addEventListener('DOMContentLoaded', function() {
    // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const today = new Date().getDay();

    // Check if it's Monday, Tuesday, or Wednesday (days 1, 2, or 3)
    if (today >= 1 && today <= 3) {
        // Show the banner
        document.getElementById('banner').classList.remove('hidden');
    }

    // Add event listener to close the banner
    document.getElementById('closeBanner').addEventListener('click', function() {
        document.getElementById('banner').classList.add('hidden');
    });
});
