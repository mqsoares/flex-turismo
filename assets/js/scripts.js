const showMenu = document.querySelectorAll('.open');
const closeMenu = document.querySelectorAll('.close');
const nav = document.querySelector('nav.menu');

for (const element of showMenu) {
    element.addEventListener('click', function() {
        nav.classList.add('active');
    })
};
for (const element of closeMenu) {
    element.addEventListener('click', function() {
        nav.classList.remove('active');
    })
};