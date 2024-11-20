// contact.js

$(document).ready(() => {
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();

        // Clear feedback message
        $('#form-feedback').text('').removeClass('success error');

        // Get form values
        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const subject = $('#subject').val().trim();
        const message = $('#message').val().trim();

        // Simple validation
        if (!name || !email || !subject || !message) {
            $('#form-feedback').text('All fields are required.').addClass('error');
            return;
        }

        // Email validation (basic regex)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            $('#form-feedback').text('Please enter a valid email address.').addClass('error');
            return;
        }

        // If validation passes
        $('#form-feedback').text('Your message has been sent successfully!').addClass('success');

        // Optionally reset form
        $('#contact-form')[0].reset();
    });
});
