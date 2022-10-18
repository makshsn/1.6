const menuItems = document.querySelectorAll(".slide-menu__item");

export function slideMenuStyleChange() {
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      let activeClass = document.querySelector(".slide-menu__item--active");
      activeClass.className = activeClass.className.replace(
        " slide-menu__item--active",
        ""
      );
      item.className += " slide-menu__item--active";
    });
  });
}
