const backwardBtn = document.querySelector("#backward");

const backward = () => {
  history.back();
};

if (backwardBtn) {
  backwardBtn.addEventListener("click", backward);
}
