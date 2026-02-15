// Lesson 1
document
  .getElementById("changeTittle")
  .addEventListener("click", function changeH1() {
    document.getElementById("heading-text").innerText = "Hello!";
  });

// Lesson 2

document
  .getElementById("logInBtn")
  .addEventListener("click", function changeText() {
    document.getElementById("user-text").innerText = "Thanks for clicked";
  });

// Lesson 3

document
  .getElementById("input-btn")
  .addEventListener("click", function updateText() {
    const inputValueText = document.getElementById("input-text");
    inputWrittenText = inputValueText.value;

    let textNeedToUpgrade = document.getElementById("input-heading");
    textNeedToUpgrade.innerText = inputWrittenText;
  });
