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

document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.querySelector('.carousel-inner');
    const images = carouselInner.querySelectorAll('img');
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        const offset = -currentIndex * 200; // Altura da imagem
        carouselInner.style.transform = `translateY(${offset}px)`;
    }, 2000); // Muda a imagem a cada 2 segundos
});
