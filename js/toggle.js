document.addEventListener('DOMContentLoaded', function () {
    var navMenu = document.getElementById('navMenu');
    var menuIcon = document.querySelector('.menu-icon');


    function toggleMenu() {
        navMenu.classList.toggle('show');
    }


    function closeMenuOutsideClick(event) {
        if (!navMenu.contains(event.target) && !menuIcon.contains(event.target)) {
            navMenu.classList.remove('show');
            document.removeEventListener('click', closeMenuOutsideClick);
        }
    }


    menuIcon.addEventListener('click', function (event) {
        event.stopPropagation();
        toggleMenu();

        if (navMenu.classList.contains('show')) {
            document.addEventListener('click', closeMenuOutsideClick);
        } else {
            document.removeEventListener('click', closeMenuOutsideClick);
        }
    });


    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('show');
        }
    });
});
