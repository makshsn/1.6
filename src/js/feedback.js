const openFeedbackBtn = document.querySelectorAll(".action-buttons__chat");
const closeFeedbackBtn = document.querySelector(".feedback__close-btn");
const feedback = document.querySelector(".feedback");
const blurSecond = document.querySelector(".blur-second");

export function openCloseFeedback() {
  for (let i = 0; i < openFeedbackBtn.length; i++) {
    let btn = openFeedbackBtn[i];
    btn.addEventListener("click", () => {
      feedback.classList.add("feedback--opened");
      blurSecond.classList.add("blur-second--active");
      document.body.style.overflow = "hidden";
    });
  }

  closeFeedbackBtn.addEventListener("click", () => {
    feedback.classList.remove("feedback--opened");
    blurSecond.classList.remove("blur-second--active");
    document.body.style.overflow = "";
  });

  blurSecond.addEventListener("click", () => {
    feedback.classList.remove("feedback--opened");
    blurSecond.classList.remove("blur-second--active");
    document.body.style.overflow = "";
  });
}
