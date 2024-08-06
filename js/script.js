const buttonMenu = document.querySelector('.js-menu img');
const sidebar = document.querySelector('.js-sidebar');
const closeMenu = document.querySelector('.js-close-menu')



function toggleMenu() {
    buttonMenu.classList.add('hidden');
    sidebar.classList.add('active');
}

function close(){
    buttonMenu.classList.remove('hidden');
    sidebar.classList.remove('active');
}

buttonMenu.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', close);