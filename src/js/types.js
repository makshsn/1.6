const typesExpand = document.querySelector(".types__show-more");
const swiperContainer2 = document.getElementById("swiper-container2");

export function expandTypes() {
  let typesExpanded = false;
  typesExpand.addEventListener("click", () => {
    if (typesExpanded === false) {
      typesExpand.classList.toggle("show-more--active");
      swiperContainer2.classList.toggle("swiper-expanded");
      typesExpand.textContent = "Скрыть";
      typesExpanded = true;
    } else {
      typesExpand.classList.toggle("show-more--active");
      swiperContainer2.classList.toggle("swiper-expanded");
      typesExpand.textContent = "Показать все";
      typesExpanded = false;
    }
  });
}
