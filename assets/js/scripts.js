const showMenu = document.querySelectorAll('.toggle');
const nav = document.querySelector('nav.menu');

for (const element of showMenu) {
    element.addEventListener('click', function(){
        nav.classList.toggle('active');
    })
}