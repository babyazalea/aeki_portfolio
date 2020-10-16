const scheduleBtn = document.querySelector(".schedule__menu");

const notYetAlert = () => {
  alert("comming soon");
};

if (scheduleBtn) {
  scheduleBtn.addEventListener("click", notYetAlert);
}
