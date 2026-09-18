document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('waitlist-form').addEventListener('submit', event => {
  event.preventDefault();
  const email = document.getElementById('email');
  document.getElementById('form-message').textContent = `Thank you — we will be in touch at ${email.value}.`;
  event.currentTarget.reset();
});
