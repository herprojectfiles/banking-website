// faq.js

$(document).ready(() => {
    // Initially hide all answers
    $('.faq-item p').hide();

    // Toggle answer visibility on question click
    $('.faq-item h2').on('click', function () {
        $(this).next('p').slideToggle(300);
        $(this).toggleClass('active');
        const expanded = $(this).attr('aria-expanded') === 'true';
        $(this).attr('aria-expanded', !expanded);
    });
});
