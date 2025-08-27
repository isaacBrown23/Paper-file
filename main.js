const form = document.querySelector('.contact__form');
const errorMessage = form.querySelector('.contact__form-error');

form.addEventListener('submit', (e) => {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function showError(text) {
    e.preventDefault();
    errorMessage.classList.add('contact__form-error-show');
    errorMessage.textContent = text;
  }

  function hideError() {
    errorMessage.classList.remove('contact__form-error-show');
    errorMessage.textContent = '';
  }

  if (!isValidEmail(data.text)) {
    showError('Email field is invalid.');
  } else if (!data.message || data.message.trim() === '') {
    showError('Message field is empty.');
  } else {
    hideError();
  }
});
