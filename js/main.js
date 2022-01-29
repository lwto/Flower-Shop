const navBar = document.querySelector('.navbar');
const toggle = document.querySelector('.nav-toggle');
const navLink = document.querySelectorAll('.nav_link');


if (toggle) {
    //we add the show-menu class to the div tag with the nav_menu class
    toggle.addEventListener('click', () => {
        navBar.classList.toggle('show-menu');
    })
}

function linkAction() {
    navBar.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));