import axios from "axios";

const commentNumber = document.getElementById("commentNumber");
const numberTale = document.getElementById("numberTale");
const deleteBtn = document.getElementsByClassName("delete__comment__button");

const decreaseNumber = () => {
  if (parseInt(commentNumber.innerText) === 2) {
    commentNumber.innerText = parseInt(commentNumber.innerText) - 1;
    numberTale.innerText = "comment";
  } else {
    commentNumber.innerText = parseInt(commentNumber.innerText) - 1;
  }
};

const sendDelete = async (event) => {
  const itemId = window.location.href.split("/")[4];
  const commentId = event.target.parentElement.parentElement.id;
  const response = await axios({
    url: `/api/${itemId}/comment/${commentId}/delete`,
    method: "DELETE",
  });
  if (response.status === 200) {
    deleteComment(event);
  }
};

const deleteComment = (event) => {
  const targetComment = event.target.parentElement.parentElement;
  targetComment.remove();
  decreaseNumber();
};

for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", sendDelete);
}
