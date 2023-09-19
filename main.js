const menuEmail = document.querySelector('.navbar-email');
const deskTopMenu = document.querySelector('.desktop-menu');
const burgerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenuIcon.addEventListener('click', toggleMobilepMenu);

function toggleDesktopMenu() {
    console.log('Click');
    deskTopMenu.classList.toggle('inactive');
}

function toggleMobilepMenu() {
    console.log('Click');
    mobileMenu.classList.toggle('inactive');
}
