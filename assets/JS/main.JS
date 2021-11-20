const despliege = document.querySelector(".despliege")
const navmenu = document.querySelector(".nav__menu")

despliege.addEventListener("click", () => {
    navmenu.classList.toggle(".menu__visible")
})