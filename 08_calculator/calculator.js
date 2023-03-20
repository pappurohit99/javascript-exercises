// @ts-check

const add = function (/** @type {number} */ a, /** @type {number} */ b) {
  return a + b;
};

const subtract = function (/** @type {number} */ a, /** @type {number} */ b) {
  return a - b;
};

/**
 * Cumulative sum of array
 * @param {number[]} arr 
 * @returns {number}
 */
const sum = function (arr) {
  return arr.reduce((prev, curr) => prev + curr, 0);
};

const multiply = function (/** @type {number[]} */ arr) {
  return arr.reduce((prev, curr) => prev * curr, 1);
};

const power = function (/** @type {number} */ base, /** @type {number} */ exp) {
  return Math.pow(base, exp);
};

const factorial = function (number) {
  if (number < 2) {
    return 1;
  }
  return factorial(number - 1) * number;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
