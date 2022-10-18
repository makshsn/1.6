const langItems = document.querySelectorAll(".info__languages-item");

export function langItemsStyleChange() {
  langItems.forEach((item) => {
    item.addEventListener("click", () => {
      let activeClass = document.querySelector(".info__languages-item--active");
      activeClass.className = activeClass.className.replace(
        " info__languages-item--active",
        ""
      );
      item.className += " info__languages-item--active";
    });
  });
}
