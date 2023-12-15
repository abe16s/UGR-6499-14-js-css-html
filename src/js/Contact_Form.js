const contactForm = document.getElementsByClassName('contact-form')[0];
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    fetch('https://formspree.io/f/mleyqqag', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementsByClassName("contact-form__message")[0].style.display = "block";
        document.getElementsByClassName("contact-form__message")[1].style.display = "none";

        contactForm.reset();
        })
    .catch(error => {
        document.getElementsByClassName("contact-form__message")[1].style.display = "block";
        document.getElementsByClassName("contact-form__message")[0].style.display = "none";
        });
});
