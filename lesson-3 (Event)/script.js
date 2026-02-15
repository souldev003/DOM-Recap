// lesson 1

function changeColor() {
  document.body.style.backgroundColor = "red";
}

function reset() {
  document.body.style.backgroundColor = "white";
}

const blueBtn = document.getElementById("makeBlue");

function blueColorConverter(btn) {
  document.body.style.backgroundColor = "blue";
}

blueBtn.onclick = blueColorConverter;

// lesson 2

document
  .getElementById("makeMeGreen")
  .addEventListener("mouseover", function makeGreen() {
    document.body.style.backgroundColor = "green";
  });
