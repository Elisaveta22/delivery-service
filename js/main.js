const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');

buttonAuth.addEventListener('click', () => {
  modalAuth.style.display = 'flex';
});

closeAuth.addEventListener('click', () => {
  modalAuth.style.display = 'none';
});
