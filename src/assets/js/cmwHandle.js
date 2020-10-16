const cmwHandle = () => {
  const cmwCheckBox = document.querySelector(".cmw__check");

  const cmwChecked = () => {
    const cmwRow = document.getElementsByClassName("cmw__row");
    const cmwInput = document.getElementsByClassName("cmw__input");

    if (cmwCheckBox.checked) {
      cmwCheckBox.value = "checked";
    } else {
      cmwCheckBox.value = "uncheck";
    }

    for (let i = 0; i < cmwRow.length; i++) {
      cmwRow[i].classList.toggle("disabled");
    }
    for (let i = 0; i < cmwInput.length; i++) {
      cmwInput[i].toggleAttribute("disabled");
    }
  };

  if (cmwCheckBox) {
    cmwCheckBox.addEventListener("change", cmwChecked);
  } else {
  }
};

cmwHandle();
