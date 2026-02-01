const fibonacci = function (num) {
  let fib;
  let prev1 = 1;
  let prev2 = 0;
  if (num < 0) {
    return "OOPS";
  } else if (num === 0 || num === "0") {
    fib = 0;
    return fib;
  }
  for (let i = 1; i <= num; i++) {
    fib = prev1 + prev2;
    prev1 = prev2;
    prev2 = fib;
  }
  return fib;
};

fibonacci(10);

// Do not edit below this line
module.exports = fibonacci;
