let allFruitsName = document.getElementsByTagName("li");

console.log(allFruitsName);

for (let list of allFruitsName) {
  console.log(list.innerText);
}

let student = {
  name: "Mehrab Hosen",
  id: 124332,
  study: function (subject) {
    return `The Subject is: ${subject}`;
  },
};

console.log(student.study("ICT"));
