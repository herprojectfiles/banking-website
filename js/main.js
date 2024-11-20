// main.js

$(document).ready(() => {
    // Fade-in effect for the body content
    $('body').hide().fadeIn(1000);

    // Smooth scroll for navbar links
    $('.navbar a').on('click', function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate(
                { scrollTop: $(hash).offset().top },
                800
            );
        }
    });
});
