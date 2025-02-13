document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true' || false;
        button.setAttribute('aria-expanded', !expanded);
        const answer = document.getElementById(button.getAttribute('aria-controls'));
        answer.setAttribute('aria-hidden', expanded);
    });
});