const fact = require("../factorial/index.js");

const ratioNumbers = require("../ratio/index.js");

const ratioAndFactorial = (num1, num2, num3) => {
  return { ratio: ratioNumbers(num1, num2), factorial: fact(num3) };
};
module.exports = ratioAndFactorial;
