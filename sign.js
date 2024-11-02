
document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var messageDiv = document.getElementById('message');

    if (email && password) {
        // Hide the form
        document.getElementById('signInForm').style.display = 'none';

        // Show success message
        messageDiv.textContent = 'Sign in successful! You are logged in.';
        messageDiv.style.color = 'green';
    } else {
        messageDiv.textContent = 'Please enter both email and password.';
        messageDiv.style.color = 'red';
    }
});
