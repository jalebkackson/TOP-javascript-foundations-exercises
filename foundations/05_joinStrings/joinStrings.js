/*
 First name: Carlos
 Last name: Stevenson
 This year: 1965
 Birth year: 1947

 The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."
*/

// Add your code right below, good luck!
const [firstName, lastName, birthYear, thisYear, fullName, age] = [
  "Carlos",
  "Stevenson",
  1947,
  1965,
  "Carlos Stevenson",
  18,
];

const greeting =
  "Hello! My name is " +
  firstName +
  " " +
  lastName +
  " and I am " +
  (thisYear - birthYear) +
  " years old.";
console.log(greeting);

// Do not change this
module.exports = {
  firstName: typeof firstName === "undefined" ? undefined : firstName,
  lastName: typeof lastName === "undefined" ? undefined : lastName,
  thisYear: typeof thisYear === "undefined" ? undefined : thisYear,
  birthYear: typeof birthYear === "undefined" ? undefined : birthYear,
  greeting: typeof greeting === "undefined" ? undefined : greeting,
  fullName: typeof fullName === "undefined" ? undefined : fullName,
  age: typeof age === "undefined" ? undefined : age,
};

// This is practice from the function basics Module of OdinProject
// Must comment out exports^ for the following to run
const add7 = (num) => {
  return num + 7;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

const lastLetter = (word) => {
  return word[word.length - 1];
};

console.log("add7: " + add7(17));
console.log("multiply: " + multiply(10, 40));
console.log("capitalize: " + capitalize("jeHORGGANMorGAAN"));
console.log("lastLEtter: " + lastLetter("You're Gay"));
