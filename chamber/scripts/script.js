const button = document.querySelector('#menu');
const nav = document.querySelector('nav');

button.addEventListener('click', () => {
    nav.classList.toggle('open');
    button.classList.toggle('open')
})

