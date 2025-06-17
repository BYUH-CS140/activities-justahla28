function validateForm() {
  const phoneInput = document.getElementById('phone').value.trim();
  const phoneRegex = /^(\+?\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/;

  if (!phoneRegex.test(phoneInput)) {
    alert('Please enter a valid phone number format.');
    return false;
  }

  document.getElementById('formResponse').textContent = 'Form submitted successfully!';
  return false; // For testing purposes; change to true to actually submit
}
