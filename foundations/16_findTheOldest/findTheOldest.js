// return the oldest person full object
const currentYear = new Date().getFullYear();
// get age helper function
const getAge = (obj) => {
  return obj.yearOfDeath
    ? obj.yearOfDeath - obj.yearOfBirth
    : currentYear - obj.yearOfBirth;
};
const findTheOldest = function (array) {
  const oldest = array.reduce((acc, person) => {
    if (getAge(person) > getAge(acc)) return person;
    return acc;
  }, array[0]);
  console.log(oldest);
  return oldest;
};
// Do not edit below this line
module.exports = findTheOldest;
