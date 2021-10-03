const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.nav_bar_menu')

menu.addEventListener('click', function (){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})