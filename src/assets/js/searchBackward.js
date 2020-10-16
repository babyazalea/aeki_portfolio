const header = document.querySelector("header");
const mnpBackward = document.querySelector(".mnp__backward__button");
const installationBackward = document.querySelector(
  ".installation__backward__button"
);
const prevUrlCheck = document.referrer.indexOf("search");
const arrow = `<i class="fas fa-arrow-circle-left"></i>`;

const backward = () => {
  window.history.back();
};

const backwardBtn = document.createElement("button");
backwardBtn.innerHTML = arrow;
backwardBtn.addEventListener("click", backward);

const mnpBtn = document.createElement("a");
mnpBtn.setAttribute("href", "/mnp");
mnpBtn.innerHTML = arrow;

const installationBtn = document.createElement("a");
installationBtn.setAttribute("href", "/installation");
installationBtn.innerHTML = arrow;

const init = () => {
  if (mnpBackward && prevUrlCheck !== -1) {
    mnpBackward.prepend(backwardBtn);
  } else if (mnpBackward && prevUrlCheck === -1) {
    mnpBackward.prepend(mnpBtn);
  } else if (installationBackward && prevUrlCheck !== -1) {
    installationBackward.prepend(backwardBtn);
  } else if (installationBackward && prevUrlCheck === -1) {
    installationBackward.prepend(installationBtn);
  }
};

window.addEventListener("load", init);
