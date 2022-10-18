const readMoreExpand = document.querySelector(".content__read-next");
const textMd = document.querySelector(".content__about-text--md");
const textLg = document.querySelector(".content__about-text--lg");
const textXl = document.querySelector(".content__about-text--xl");

export function expandReadMore() {
  readMoreExpand.addEventListener("click", () => {
    textMd.style.display = "inline";
    textLg.style.display = "inline";
    textXl.style.display = "inline-block";
    readMoreExpand.style.display = "none";
  });
}
