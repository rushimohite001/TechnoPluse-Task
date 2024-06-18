document.addEventListener('DOMContentLoaded', function () {
    
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            let message = '';
            if (!validateUsername(username)) {
                message += 'Invalid username.\n';
            }
            if (!validatePassword(password)) {
                message += 'Invalid password. Password must be at least 6 characters long.\n';
            }

            if (message === '') {
                alert('Login details are correct!');
                
            } else {
                alert(message);
            }
        });
    }

    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            let message = '';
            if (!validateUsername(username)) {
                message += 'Invalid username.\n';
            }
            if (!validateEmail(email)) {
                message += 'Invalid email address.\n';
            }
            if (!validatePassword(password)) {
                message += 'Invalid password. Password must be at least 6 characters long.\n';
            }
            if (!validateConfirmPassword(password, confirmPassword)) {
                message += 'Passwords do not match.\n';
            }

            if (message === '') {
                alert('Signup details are correct!');
               
            } else {
                alert(message);
            }
        });
    }
});

function validateUsername(username) {
    return username.trim() !== '';
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

function validateConfirmPassword(password, confirmPassword) {
    return password === confirmPassword;
}
