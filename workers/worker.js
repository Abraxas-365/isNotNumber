const { workerData, parentPort } = require("worker_threads");

function workerTask(start, end, value) {
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
    if (n >= 100) {
      result += hundreds[Math.floor(n / 100)];
      n %= 100;
    }
    if (n >= 20) {
      result += (result ? " " : "") + tens[Math.floor(n / 10)];
      n %= 10;
    } else if (n >= 11) {
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
      n = Math.floor(n / 1000);
      groupCount++;
    }

    return result.join(" ").trim();
  }

  const normalizedValue = value.toLowerCase().trim();

  for (let i = start; i <= end; i++) {
    if (largeNumberToSpanish(i) === normalizedValue) {
      return "falso";
    }
  }
  return "verdadero";
}

const { start, end, value } = workerData;
const result = workerTask(start, end, value);
parentPort.postMessage(result);
