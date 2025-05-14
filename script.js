function toggleMenu() {
    const menu = document.querySelector('.menu_links');    
    
    if (menu.style.display === 'block') {
        // If the menu is visible, hide it
        menu.style.display = 'none';
    } else {
        // If the menu is hidden, show it
        menu.style.display = 'block';
    }

}
function changetocross(){
    const menu_icon = document.querySelector("#menu_icon");
    if (menu_icon.src.includes("icons8-hamburger.svg")) {
        menu_icon.src = "assets/cross-15.svg";
    } else {
        menu_icon.src = "assets/icons8-hamburger.svg";
    }
}
