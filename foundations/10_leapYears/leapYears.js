const leapYears = function(num) {
if (num % 100 === 0 && num % 400 !== 0) {
    return false
}
if (num % 4 === 0) {
    return true
} else {
    return false
}
};
console.log(leapYears(402))
// Do not edit below this line
module.exports = leapYears;

