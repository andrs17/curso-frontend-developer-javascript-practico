const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('#productDetail');

const menuHamIcom = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDestoktMenu);
menuHamIcom.addEventListener('click', toggleMovileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDestoktMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMovileMenu(){
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMovileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if(!isMovileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');

}

