const navLinks = document.querySelectorAll(".nav__link");

export function linkStyleChange() {
  navLinks.forEach((item) => {
    item.addEventListener("click", () => {
      let activeClass = document.querySelector(".nav__link--active");
      activeClass.className = activeClass.className.replace(
        " nav__link--active",
        ""
      );
      item.className += " nav__link--active";
    });
  });
}
