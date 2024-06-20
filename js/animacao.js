// script.js
function changeIcon(icon) {
            const menuItems = document.querySelector('#menu-items');
            menuItems.classList.toggle('show');
            
            if (menuItems.classList.contains('show')) {
                icon.classList.remove('bx-menu');
                icon.classList.add('bx-x');
            } else {
                icon.classList.remove('bx-x');
                icon.classList.add('bx-menu');
            }
        };

const toggleButton = document.querySelector('.items');
toggleButton.addEventListener('click', () => {
    // Verifica o estado atual do display e alterna entre 'none' e 'block'
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
});
