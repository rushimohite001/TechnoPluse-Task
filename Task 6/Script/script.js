document.addEventListener('DOMContentLoaded', () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/;

    const signupForm = document.getElementById('signup-form');
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const terms = document.getElementById('terms').checked;

        if (name && emailRegex.test(email) && passwordRegex.test(password) && terms) {
            console.log('Signup Form Data:', { name, email, password });
            alert('Signup successful!');
            
            // Clear input fields
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
            document.getElementById('terms').checked = false;
        } else {
            alert('Please fill out all fields correctly. Password must be at least 6 characters long and include a special character.');
        }
    });

    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (emailRegex.test(email) && passwordRegex.test(password)) {
            console.log('Login Form Data:', { email, password });
            alert('Login successful!'); 
            
            // Clear input fields
            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
        } else {
            alert('Please fill out all fields correctly.');
        }
    });

});