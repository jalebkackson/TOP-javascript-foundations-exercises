const palindromes = function (str) {
  const formattedString = str
    .split("")
    .filter((char) => /[a-zA-Z0-9]/.test(char));
  const forwardString = formattedString.join("").toLowerCase();
  const reverseString = formattedString.reverse().join("").toLowerCase();

  console.log(forwardString, reverseString);
  console.log(reverseString, forwardString);
  if (reverseString === forwardString) {
    return true;
  } else {
    return false;
  }
};
palindromes("rac3e3car");
// Do not edit below this line
module.exports = palindromes;
