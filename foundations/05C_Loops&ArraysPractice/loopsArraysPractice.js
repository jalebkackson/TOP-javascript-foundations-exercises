// sumOfTripledEvens(array) function, aka,
// find all even nums in an array,
// triple them,
// then add up that sum
let arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
];
let arr2 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50,
];

const sumOfTripledEvens = (arr) => {
  return arr
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((total, curItem) => total + curItem);
};

console.log(sumOfTripledEvens(arr));

// Change dashed words to camelCase
function camelize(str) {
  const splitDashes = str
    .split("-")
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      } else {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
    })
    .join("");

  console.log(splitDashes);
}

camelize("test-THIS-SHIT");

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements
// with values higher or equal to a and lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.

const filterRange = (arr, a, b) => {
  const filter = arr.filter((num) => num >= a && num <= b);
  console.log(filter);
};

filterRange(arr, 4, 8);

// Write a function filterRangeInPlace(arr, a, b) that gets an
// array arr and removes from it all values except those that are between a and b.
// The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.

// get vals between a and b, delete values before a, delete values after b
const arr3 = [42, 7, 89, 13, 65, 2, 97, 28, 54, 11, 76, 34, 90, 5, 61];
const filterRangeInPlace = (array, a, b) => {
  array.sort((c, d) => c - d);
  const start = array.findIndex((num) => num >= a);
  const end = array.findLastIndex((num) => num <= b);
  array.splice(0, start);
  array.splice(end - start + 1);
};
filterRangeInPlace(arr3, 3, 46);
console.log(arr3);

// MDNs Solution
// function filterRangeInPlace(arr, a, b) {

//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];

//     // remove if outside of the interval
//     if (val < a || val > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }

// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4);

// SORT IN DECREASING ORDER
arr2.sort((a, b) => b - a);
console.log(arr2);

// COPY AND SORT ARRAY
let arr4 = ["HTML", "JavaScript", "CSS"];

let sorted = [...arr4].sort((a, b) => a - b);
console.log(arr4, sorted);

// Shuffle an array
// for each item in an array, assign it a new random index from 0 to array.length
// THIS ONE WAS HARD EVEN WITH CHATGPT GUIDING ME (without giving the answers)
const shuffleArray = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const getRandomInt = Math.floor(Math.random() * i + 1);
    const randomA = array[getRandomInt];
    const randomB = array[i];
    array[i] = randomA;
    array[getRandomInt] = randomB;
  }
};

console.log(arr2);

// FILTER UNIQUE ARRAY MEMBERS
// Let arr be an array.
// Create a function unique(arr) that should return an array
// with unique items of arr.
// aka;
// return every item in the array but only once,
// like if theres 15 "rabbit", 3 "turtles", and 1 "mushroom"
// the function will return; "rabbit", "turtles", "mushroom"
let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

const unique = (array) => {
  const uniqueStrings = [];

  for (let i = 0; i < array.length; i++) {
    if (!uniqueStrings.includes(array[i])) {
      console.log(array[i]);
      uniqueStrings.push(array[i]);
    }
  }
  console.log(uniqueStrings);
};
unique(strings);
