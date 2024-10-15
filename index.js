const isNumber = require("is-number");

function isNotNumber(value) {
  return !isNumber(value);
}

module.exports = isNotNumber;
