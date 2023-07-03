// JavaScript code for form validation and handling form submissions

// Login form validation
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Validate email and password
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (password === '') {
    alert('Please enter your password.');
    return;
  }

  // Submit the form
  this.submit();
});

// Registration form validation
const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Validate company name, email, and password
  const company = document.getElementById('company').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (company === '') {
    alert('Please enter your company name.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (password === '') {
    alert('Please enter a password.');
    return;
  }

  // Submit the form
  this.submit();
});

// Email validation helper function
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
