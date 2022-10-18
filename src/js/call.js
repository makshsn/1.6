const blurSecond = document.querySelector(".blur-second");
const openCallBtn = document.querySelectorAll(".action-buttons__call");
const closeCallBtn = document.querySelector(".call__close-btn");
const call = document.querySelector(".call");

export function openCloseCall() {
  for (let i = 0; i < openCallBtn.length; i++) {
    let btn = openCallBtn[i];
    btn.addEventListener("click", () => {
      call.classList.add("call--opened");
      blurSecond.classList.add("blur-second--active");
      document.body.style.overflow = "hidden";
    });
  }

  closeCallBtn.addEventListener("click", () => {
    call.classList.remove("call--opened");
    blurSecond.classList.remove("blur-second--active");
    document.body.style.overflow = "";
  });

  blurSecond.addEventListener("click", () => {
    call.classList.remove("call--opened");
    blurSecond.classList.remove("blur-second--active");
    document.body.style.overflow = "";
  });
}
