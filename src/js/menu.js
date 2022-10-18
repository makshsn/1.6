const openMenuBtn = document.querySelector(".header__burger");
const closeMenuBtn = document.querySelector(".header__close-btn");
const menu = document.querySelector(".menu");
const blur = document.querySelector(".blur");

export function openCloseMenu() {
  openMenuBtn.addEventListener("click", () => {
    menu.classList.add("menu--opened");
    blur.classList.add("blur--active");
    document.body.style.overflow = "hidden";
  });

  closeMenuBtn.addEventListener("click", () => {
    menu.classList.remove("menu--opened");
    blur.classList.remove("blur--active");
    document.body.style.overflow = "";
  });

  blur.addEventListener("click", () => {
    menu.classList.remove("menu--opened");
    blur.classList.remove("blur--active");
    document.body.style.overflow = "";
  });
}
