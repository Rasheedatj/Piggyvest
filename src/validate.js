// login form validation
const loginBtn = document.querySelector('.event-btn');
const input = document.querySelectorAll(' .form-control');
const errorBox = document.querySelector('.error');
const close = document.querySelector('.close');

const errorMessage = (e) => {
  input.forEach((form) => {
    if (form.value.length < 1) {
      e.preventDefault();
      errorBox.style.display = 'flex';
    }
  });
};

loginBtn.addEventListener('click', errorMessage);

// remove error message
close.addEventListener('click', () => {
  errorBox.style.display = 'none';
});

// setTimeout(
//   () => loginBtn.removeEventListener('click', errorMessage),
//   5000
// );
