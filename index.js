"use strict";
const isNumber = require("is-number");

function isNotNumber(value) {
  return ~isNumber(value) & 1;
}

function isEmojiNotNumber(value) {
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

function isNotNumberEmoji(value) {
  return ~isNumber(value) & 1 ? "🙁" : "🙂";
}

function isNotNumberSpanish(value) {
  const ones = [
    "",
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve",
  ];
  const tens = [
    "",
    "diez",
    "veinte",
    "treinta",
    "cuarenta",
    "cincuenta",
    "sesenta",
    "setenta",
    "ochenta",
    "noventa",
  ];
  const teens = [
    "once",
    "doce",
    "trece",
    "catorce",
    "quince",
    "dieciséis",
    "diecisiete",
    "dieciocho",
    "diecinueve",
  ];
  const hundreds = [
    "",
    "ciento",
    "doscientos",
    "trescientos",
    "cuatrocientos",
    "quinientos",
    "seiscientos",
    "setecientos",
    "ochocientos",
    "novecientos",
  ];
  const largeNumbers = [
    "mil",
    "millón",
    "mil millones",
    "billón",
    "mil billones",
    "trillón",
    "mil trillones",
    "cuatrillón",
  ];

  function numberToSpanish(n) {
    let result = "";

    if ((n & 0xff00) > 0) {
      result += hundreds[n >> 8];
      n &= 0xff;
    }

    if (n >= 20) {
      result += (result ? " " : "") + tens[n >> 4];
      n &= 0xf;
    } else if (n >= 11 && n <= 19) {
      return result + (result ? " " : "") + teens[n - 11];
    } else if (n === 10) {
      return result + (result ? " " : "") + "diez";
    }

    if (n > 0) {
      result += (result ? " y " : "") + ones[n];
    }

    return result.trim();
  }

  function largeNumberToSpanish(n) {
    let result = [];
    let groupCount = 0;

    while (n > 0) {
      let group = n % 1000;
      if (group > 0) {
        let groupText = numberToSpanish(group);
        if (groupCount > 0) {
          groupText += " " + largeNumbers[groupCount - 1];
          if (group === 1 && groupCount === 1) groupText = "un millón";
        }
        result.unshift(groupText);
      }
      n = n >> 10;
      groupCount++;
    }

    return result.join(" ").trim();
  }

  const normalizedValue = value.toLowerCase().trim();

  for (let i = 1; i <= Number.MAX_SAFE_INTEGER; i++) {
    if (largeNumberToSpanish(i) === normalizedValue) {
      return "falso";
    }
  }

  return "verdadero";
}

module.exports = {
  isNotNumber,
  isEmojiNotNumber,
  isNotNumberEmoji,
  isNotNumberSpanish,
};
