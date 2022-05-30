const burgerIcon = document.querySelector(".burger-icon");
const menu = document.querySelector(".menu");
const toggleMenu = document.getElementById("toggle-menu");

burgerIcon.addEventListener("click", function () {
  menu.classList.toggle("menu-open");
  if (menu.classList.contains("menu-open")) {
    menu.addEventListener("click", function () {
      menu.classList.remove("menu-open");
      toggleMenu.checked = false;
    });
  }
});
