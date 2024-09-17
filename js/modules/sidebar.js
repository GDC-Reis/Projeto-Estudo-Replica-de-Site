export default function sidebar() {

    const menu = document.querySelector('.img-menu-hamburger');
    const sidebar = document.querySelector('.js-sidebar');
    const closeButton = document.querySelector('.js-close-menu')

    function showCloseSidebar(){
        menu.classList.toggle('close');
        sidebar.classList.toggle('active');
    };

    menu.addEventListener('click', showCloseSidebar);
    closeButton.addEventListener('click', showCloseSidebar);
};

