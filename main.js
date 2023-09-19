const menuEmail = document.querySelector('.navbar-email');
const burgerMenuIcon = document.querySelector('.menu');
const menushoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const deskTopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenuIcon.addEventListener('click', toggleMobilepMenu);
menushoppingCartIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    deskTopMenu.classList.toggle('inactive');
}

function toggleMobilepMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
    
}
