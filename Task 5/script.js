// Get the modal elements
const generalFormModal = document.getElementById('generalFormModal');
const contactFormModal = document.getElementById('contactFormModal');

// Get the button elements
const openGeneralFormBtn = document.getElementById('openGeneralForm');
const openContactFormBtn = document.getElementById('openContactForm');

// Get the <span> elements that close the modals
const closeGeneralFormBtn = document.getElementById('closeGeneralForm');
const closeContactFormBtn = document.getElementById('closeContactForm');

// When the user clicks the button, open the respective modal
openGeneralFormBtn.onclick = function() {
    generalFormModal.style.display = 'flex';
}

openContactFormBtn.onclick = function() {
    contactFormModal.style.display = 'flex';
}

// When the user clicks on <span> (x), close the modal
closeGeneralFormBtn.onclick = function() {
    generalFormModal.style.display = 'none';
}

closeContactFormBtn.onclick = function() {
    contactFormModal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == generalFormModal) {
        generalFormModal.style.display = 'none';
    }
    if (event.target == contactFormModal) {
        contactFormModal.style.display = 'none';
    }
}

document.getElementById('generalForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateGeneralForm();
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateContactForm();
});

function validateGeneralForm() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    if (username === '' || email === '' || password === '') {
        alert('All fields are required.');
        return false;
    }
    
    if (!validateEmail(email)) {
        alert('Invalid email format.');
        return false;
    }

    alert('General form submitted successfully.');
    return true;
}

function validateContactForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('contactEmail').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    
    if (name === '' || email === '' || subject === '' || message === '') {
        alert('All fields are required.');
        return false;
    }
    
    if (!validateEmail(email)) {
        alert('Invalid email format.');
        return false;
    }

    alert('Contact form submitted successfully.');
    return true;
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}
