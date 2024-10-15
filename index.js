"use strict";
const isNumber = require("is-number");
function isNotNumber(value) {
  return ~isNumber(value) & 1;
}

function isNotNumberSpanish(value) {
  switch (value.toLowerCase()) {
    case "uno":
    case "dos":
    case "tres":
    case "cuatro":
    case "cinco":
    case "seis":
    case "siete":
    case "ocho":
    case "nueve":
    case "diez":
    case "once":
    case "doce":
    case "trece":
    case "catorce":
    case "quince":
    case "dieciséis":
    case "diecisiete":
    case "dieciocho":
    case "diecinueve":
    case "veinte":
    case "veintiuno":
    case "veintidós":
    case "veintitrés":
    case "veinticuatro":
    case "veinticinco":
    case "veintiséis":
    case "veintisiete":
    case "veintiocho":
    case "veintinueve":
    case "treinta":
    case "treinta y uno":
    case "treinta y dos":
    case "treinta y tres":
    case "treinta y cuatro":
    case "treinta y cinco":
    case "treinta y seis":
    case "treinta y siete":
    case "treinta y ocho":
    case "treinta y nueve":
    case "cuarenta":
    case "cuarenta y uno":
    case "cuarenta y dos":
    case "cuarenta y tres":
    case "cuarenta y cuatro":
    case "cuarenta y cinco":
    case "cuarenta y seis":
    case "cuarenta y siete":
    case "cuarenta y ocho":
    case "cuarenta y nueve":
    case "cincuenta":
    case "cincuenta y uno":
    case "cincuenta y dos":
    case "cincuenta y tres":
    case "cincuenta y cuatro":
    case "cincuenta y cinco":
    case "cincuenta y seis":
    case "cincuenta y siete":
    case "cincuenta y ocho":
    case "cincuenta y nueve":
    case "sesenta":
    case "sesenta y uno":
    case "sesenta y dos":
    case "sesenta y tres":
    case "sesenta y cuatro":
    case "sesenta y cinco":
    case "sesenta y seis":
    case "sesenta y siete":
    case "sesenta y ocho":
    case "sesenta y nueve":
    case "setenta":
    case "setenta y uno":
    case "setenta y dos":
    case "setenta y tres":
    case "setenta y cuatro":
    case "setenta y cinco":
    case "setenta y seis":
    case "setenta y siete":
    case "setenta y ocho":
    case "setenta y nueve":
    case "ochenta":
    case "ochenta y uno":
    case "ochenta y dos":
    case "ochenta y tres":
    case "ochenta y cuatro":
    case "ochenta y cinco":
    case "ochenta y seis":
    case "ochenta y siete":
    case "ochenta y ocho":
    case "ochenta y nueve":
    case "noventa":
    case "noventa y uno":
    case "noventa y dos":
    case "noventa y tres":
    case "noventa y cuatro":
    case "noventa y cinco":
    case "noventa y seis":
    case "noventa y siete":
    case "noventa y ocho":
    case "noventa y nueve":
    case "cien":
      return "falso";
    default:
      return "verdadero";
  }
}

module.exports = { isNotNumber, isNotNumberSpanish };
