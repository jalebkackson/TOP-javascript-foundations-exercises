const convertToCelsius = function(tempF) {
  let celcius = Number(((tempF - 32) * 5/9).toFixed(1))
  return celcius
};

const convertToFahrenheit = function(tempC) {
  let farenheit = Number(((tempC * 9/5) + 32).toFixed(1))
  return farenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
