const hamburger = document.getElementById('hamburger-menu');
const navbarMenu = document.getElementById('navbar-menu');

hamburger.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});