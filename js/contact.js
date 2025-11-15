<<<<<<< HEAD
// Email Js
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactSubject = document.getElementById('contact-subject'),
    contactMessage = document.getElementById('contact-message'),
    message = document.getElementById('message');

const sendEmail = (e) => {
    e.preventDefault();

    if (contactName.value === '' || contactEmail.value === "" || contactSubject.value === '' || contactMessage.value === '') {
        message.textContent = 'Write all the input fields';
        message.classList.remove('color-first');
        message.classList.add('color-red');

        setTimeout(() => {
            message.textContent = '';
        }, 3000);
    } else {
        emailjs.sendForm('nagillashyamkumar7@gmail', 'template_31hmo1h', '#contact-form', 'TOUCJzQj8RrwYXK5N').then(
            () => {
                message.textContent = 'Message sent ✔';
                message.classList.add('color-first');

                setTimeout(() => {
                    message.textContent = '';
                }, 5000);
            },
            (error) => {
                alert('OOPs! SOMETHING WENT WRONG...', error);
            },
        );

        contactName.value = '';
        contactEmail.value = '';
        contactSubject.value = '';
        contactMessage.value = '';
    }
};

=======
// Email Js
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactSubject = document.getElementById('contact-subject'),
    contactMessage = document.getElementById('contact-message'),
    message = document.getElementById('message');

const sendEmail = (e) => {
    e.preventDefault();

    if (contactName.value === '' || contactEmail.value === "" || contactSubject.value === '' || contactMessage.value === '') {
        message.textContent = 'Write all the input fields';
        message.classList.remove('color-first');
        message.classList.add('color-red');

        setTimeout(() => {
            message.textContent = '';
        }, 3000);
    } else {
        emailjs.sendForm('nagillashyamkumar7@gmail', 'template_31hmo1h', '#contact-form', 'TOUCJzQj8RrwYXK5N').then(
            () => {
                message.textContent = 'Message sent ✔';
                message.classList.add('color-first');

                setTimeout(() => {
                    message.textContent = '';
                }, 5000);
            },
            (error) => {
                alert('OOPs! SOMETHING WENT WRONG...', error);
            },
        );

        contactName.value = '';
        contactEmail.value = '';
        contactSubject.value = '';
        contactMessage.value = '';
    }
};

>>>>>>> add0a58a771d686bc84128f4cc2e8ede8255aa73
contactForm.addEventListener('submit', sendEmail)