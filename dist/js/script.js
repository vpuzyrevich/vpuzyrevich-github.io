const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');


hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percents = document.querySelectorAll('.skills__progress-item-percent'),
    lines = document.querySelectorAll('.block-orange');

percents.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});