function changeIcon(icon) {
    const menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('show');

    if (menuItems.classList.contains('show')) {
        icon.classList.remove('bx-menu');
        icon.classList.add('bx-x');
    } else {
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
    }
}