const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input');
const messageArea = form.querySelector('textarea');

form.addEventListener('input', event => {
  formData.email = emailInput.value;
  formData.message = messageArea.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

const storageForm = localStorage.getItem('feedback-form-state');

if (storageForm) {
  formData.email = JSON.parse(storageForm).email;
  formData.message = JSON.parse(storageForm).message;
  emailInput.value = JSON.parse(storageForm).email;
  messageArea.value = JSON.parse(storageForm).message;
}

form.addEventListener('submit', event => {
  if (!formData.email || !formData.message) {
    alert('Fill all fields please');
  } else {
    event.preventDefault();
    console.log(formData);
    localStorage.clear();
    formData.email = '';
    formData.message = '';
    emailInput.value = '';
    messageArea.value = '';
  }
});
