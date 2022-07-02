const burgerMenuBtn = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-container');
const items = document.querySelectorAll('.nav-item');

const toggleMenuHandler = (e) => {
    burgerMenuBtn.classList.toggle('burger-menu_active');
    navMenu.classList.toggle('nav-container_active');
}
burgerMenuBtn.addEventListener('click', toggleMenuHandler)

items.forEach( item => {
    item.addEventListener('click', toggleMenuHandler)
});