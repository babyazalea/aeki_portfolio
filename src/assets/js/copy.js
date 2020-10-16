import clipboard from "clipboard";

const copyBtn = document.querySelector("#copy");

if (copyBtn) {
  new clipboard(copyBtn);
}
