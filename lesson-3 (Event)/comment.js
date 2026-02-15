document.getElementById("post-btn").addEventListener("click", function () {
  let commentBox = document.getElementById("comment-box");

  let commentText = commentBox.value;

  let newComment = document.createElement("p");
  newComment.innerText = commentText;
  newComment.classList.add("comments-parah");

  let commentsDiv = document.getElementById("comments-div");
  commentsDiv.appendChild(newComment);

  commentBox.value = "";
});
