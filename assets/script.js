function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("overlay");
    
    if (sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    } else {
        sidebar.classList.add("active");
        overlay.classList.add("active");
    }
}

// Disable Right Click & Inspect
document.addEventListener("contextmenu", event => event.preventDefault());

document.addEventListener("keydown", event => {
    if (event.ctrlKey && (event.key === 'u' || event.key === 's' || event.key === 'i' || event.key === 'j' || event.key === 'c') || event.key === 'F12') {
        event.preventDefault();
    }
});
