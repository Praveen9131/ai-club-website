document.getElementById('forgot-password-link').addEventListener('click', function(event) {
  event.preventDefault();

  // Get the entered email
  var email = document.getElementById('email').value;

  // TODO: Send a password reset request to the server using AJAX or fetch API

  // Display a message indicating that the password reset email has been sent
  alert('Password reset email has been sent to ' + email);
});
