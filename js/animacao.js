function toggleMenu() {
    var content = document.getElementById("content");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function changeIcon(icon) {
    icon.classList.toggle("bx-menu");
    icon.classList.toggle("bx-x");
}

// Chama a função changeIcon dentro de toggleMenu para alternar o ícone também
function toggleMenu() {
    var content = document.getElementById("content");
    var icon = document.getElementById("toggleButton");
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        changeIcon(icon);
    } else {
        content.style.display = "none";
        changeIcon(icon);
    }
}
