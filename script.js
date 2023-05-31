const menuHamburguer = document.querySelector ('.menu-hamburguer');

const menu = document.querySelector ('.menu');

const header = document.querySelector ('.header');

menuHamburguer.addEventListener('click', () => {
    menu.classList.toggle('active');
    header.classList.toggle('active-header');
});

