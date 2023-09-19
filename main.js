const menuEmail = document.querySelector('.navbar-email');
const deskTopMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    console.log('Click');
    deskTopMenu.classList.toggle('inactive');
}

console.log('js fucionando');