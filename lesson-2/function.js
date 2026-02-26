const divideEverything = (numb1, numb2) => {
  const newNumb = numb1 / numb2;
  const anotherNumb = newNumb * numb1;
  return anotherNumb;
};

const numbersOfArray = [1, 2, 4, 5, 99, 34, 78, 51216546546];
const maxNumber = Math.max(...numbersOfArray);

const maxValue = (array) => {
  let maxValue = 0;
  for (const number of array) {
    if (number > maxValue) {
      maxValue = number;
    }
  }

  return maxValue;
};

// const arr1 = [1, 2, 3, 4];
// const arr2 = arr1;
// arr2.push(5);

// console.log(arr1, arr2);

const arr1 = [1, 2, 3, 4];
const arr2 = [...arr1];
arr2.push(5);

// console.log(arr1, arr2);

const number = 22;

function numbChecker(number) {
  if (number % 2 === 0) {
    return `This ${number} is Even`;
  } else {
    return `This ${number} is Odd.`;
  }
}

// console.log(numbChecker(number));

const numbers = [3, 7, 2, 9, 12, 5];

const biggestNumber = Math.max(...numbers);

// console.log(biggestNumber);

for (let i = 1; i <= 10; i++) {
  let a = i;
  if (a % 2 === 0) {
    // console.log(a);
    a += i;
  }
}

// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], create a new array that contains only the odd numbers.

const numberOfArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = [];

for (let num of numberOfArray) {
  if (num % 2 !== 0) {
    oddNumbers.push(num);
  }
}

console.log(oddNumbers);
