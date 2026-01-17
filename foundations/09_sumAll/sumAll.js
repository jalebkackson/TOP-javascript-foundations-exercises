const sumAll = function(start, end) {
    let sum = 0;
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
        return "ERROR"
    }
    if(start < end) {
      for(let i = start; i <= end; i++) {
        sum += i
    }  
    } else if (start > end) {
        for (let i = end; i <= start; i++) {
            sum += i
        }
    } else if (start === end) {
        sum = start;
    }
    console.log(sum)
    return sum
};
sumAll(4,5)

sumAll(8, 27)
// Do not edit below this line
module.exports = sumAll;
