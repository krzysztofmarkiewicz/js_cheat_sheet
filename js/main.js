const menus = document.querySelectorAll('.menu');
const subMenus = document.querySelectorAll('.subMenu');
const nav = document.querySelector('nav')
const infoNav = nav.getBoundingClientRect()
const heightNav = infoNav.height;



for (const menu of menus) {
    menu.addEventListener('mouseover', function () {
        this.lastElementChild.classList.remove('hideSubMenu');
    });
    menu.addEventListener('mouseout', function () {
        this.lastElementChild.classList.add('hideSubMenu');
    });
    menu.addEventListener('click', function () {
        this.lastElementChild.classList.add('hideSubMenu');
    });
};

for (const subMenu of subMenus) {
    subMenu.addEventListener('click', function () {
        this.classList.add('hideSubMenu');
    });
};

window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - heightNav);
});





//show example
const showExampleButtons = document.querySelectorAll('.showExample');
const examples = document.querySelectorAll('.example');

for (const showExampleButton of showExampleButtons) {
    showExampleButton.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('hide')
    })
}