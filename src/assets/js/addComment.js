import axios from "axios";
import date from "date-format";

const commentNumber = document.getElementById("commentNumber");
const commentForm = document.getElementById("commentForm");
const commentList = document.getElementById("commentList");
const userName = document.getElementById("userName").innerText;

const increaseNumber = () => {
  commentNumber.innerText = parseInt(commentNumber.innerText) + 1;
};

const addComment = (comment) => {
  const li = document.createElement("li");
  const userNameSpan = document.createElement("span");
  const commentSpan = document.createElement("span");
  const dateSpan = document.createElement("span");
  userNameSpan.innerText = userName;
  commentSpan.innerText = comment;
  dateSpan.innerText = date("yy-MM-dd", new Date());
  li.append(userNameSpan);
  li.append(commentSpan);
  li.append(dateSpan);
  commentList.prepend(li);
  increaseNumber();
};

const sendComment = async (comment) => {
  const id = window.location.href.split("/")[4];
  const response = await axios({
    url: `/api/${id}/comment`,
    method: "POST",
    data: {
      comment,
    },
  });
  if (response.status === 200) {
    addComment(comment);
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const commentInput = commentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

if (commentForm) {
  commentForm.addEventListener("submit", handleSubmit);
}
