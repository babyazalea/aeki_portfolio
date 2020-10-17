const scheduleBtn = document.querySelector(".schedule__menu");

const comingSoon = () => {
    alert("준비 중입니다")
};

if (scheduleBtn) {
    scheduleBtn.addEventListener("click", comingSoon)
}