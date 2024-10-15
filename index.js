"use strict";
const isNumber = require("is-number");

function isNotNumber(value) {
  return ~isNumber(value) & 1;
}

function isNotNumberEmoji(value) {
  if (typeof value !== "string" || value.length !== 1) {
    return true; // If it's not a single-character string, it's definitely not a number emoji
  }

  const codePoint = value.codePointAt(0);

  // Check for circled numbers (1-20)
  if (codePoint >= 0x2460 && codePoint <= 0x2473) {
    return false;
  }

  // Check for negative circled numbers (1-20)
  if (codePoint >= 0x24eb && codePoint <= 0x24fe) {
    return false;
  }

  // Check for filled circled numbers (1-10)
  if (codePoint >= 0x2776 && codePoint <= 0x277f) {
    return false;
  }

  // Check for keycap numbers (0-9)
  if (codePoint >= 0x30 && codePoint <= 0x39) {
    return !(value + "\uFE0F\u20E3" === value.normalize("NFC"));
  }

  return true; // If it doesn't match any number emoji pattern, it's not a number emoji
}

module.exports = {
  isNotNumber,
  isNotNumberEmoji,
};
