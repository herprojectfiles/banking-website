// services.js

$(document).ready(() => {
    // Hide all descriptions initially
    $('.service-item p').hide();

    // Click event to toggle descriptions
    $('.service-item h2').on('click', function () {
        $(this).next('p').slideToggle(300); // Toggle the paragraph
        $(this).toggleClass('expanded'); // Add a visual indicator
    });
});
