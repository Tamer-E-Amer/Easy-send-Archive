// Navbar click toggle
let menu = document.querySelector("#menu-bars");
let navBar = document.querySelector(".nav-bar");
menu.onclick = () => {
    navBar.classList.toggle("active");
};