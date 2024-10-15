"use strict";
const isNumber = require("is-number");
function isNotNumber(value) {
  return ~isNumber(value) & 1;
}
module.exports = isNotNumber;
