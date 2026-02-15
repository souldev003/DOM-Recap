let foodTittle = document.getElementById("food-tittle");
console.log((foodTittle.innerText = "I love JavaScript"));

let fruit = document.getElementsByClassName("fruit");
console.log(fruit);

let newFruit = document.getElementsByClassName("newFruit");
// newFruit.innerText = "Cherry";
console.log((newFruit.innerText = "Cherry"));

let sweetFruit = document.getElementById("sweet-Fruit");
console.log((sweetFruit.innerText = "Banana"));

let myResult = document.querySelector(".video-games .game-description span");
console.log(myResult.innerText);

const divBox = document.getElementById("box");
divBox.style.backgroundColor = "lightBlue";
divBox.style.padding = "20px";
divBox.style.textAlign = "center";

const divBtn = document.querySelector("#box .color-btn");
divBtn.style.padding = "18px";
divBtn.style.backgroundColor = "greenyellow";
divBtn.style.border = "none";
divBtn.style.borderRadius = "12px";
divBtn.style.fontWeight = "bold";
divBtn.style.fontSize = "18px";

function changeStyle() {
  let box = document.getElementById("box");
  box.style.backgroundColor = "lime";
  box.style.color = "white";
  box.style.borderRadius = "20px";
}
