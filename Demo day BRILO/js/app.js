let hamburger = document.querySelector('.hamburger');
let mobile_menu = document.querySelector('.nav-list');
let mobile_menu_item = document.querySelectorAll('.nav-list li a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

mobile_menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});