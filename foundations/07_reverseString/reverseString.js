const reverseString = function (string) {
  const split = string.split("").reverse().join("");
  return split;
};

reverseString("faggot");
// Do not edit below this line
module.exports = reverseString;
