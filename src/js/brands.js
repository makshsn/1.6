const brandsExpand = document.querySelector(".brands__show-more");
const swiperContainer = document.getElementById("swiper-container");

export function expandBrands() {
  let brandsExpanded = false;
  brandsExpand.addEventListener("click", () => {
    if (brandsExpanded === false) {
      brandsExpand.classList.toggle("show-more--active");
      swiperContainer.classList.toggle("swiper-expanded");
      brandsExpand.textContent = "Скрыть";
      brandsExpanded = true;
    } else {
      brandsExpand.classList.toggle("show-more--active");
      swiperContainer.classList.toggle("swiper-expanded");
      brandsExpand.textContent = "Показать все";
      brandsExpanded = false;
    }
  });
}
