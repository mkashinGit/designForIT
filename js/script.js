const navBtn = document.querySelector('.nav-btn');
const navMobile = document.querySelector('.nav-mobile');

navBtn.addEventListener('click', () => {
    navMobile.classList.toggle('nav--open');
});

new WOW().init();
