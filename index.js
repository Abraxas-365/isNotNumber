"use strict";
const isNumber = require("is-number");
const { Worker } = require("worker_threads");
const path = require("path");

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
  return ~isNumber(value) & 1 ? "🙂" : "🙁";
}

/**
 * schrodingerNumber - A function that embodies the uncertainty principle in programming.
 * Could be `true` or `false` at the same time.
 * 
 * @param {*} value - An unknown input, which is very important for the outcome.
 * @returns {boolean} - Returns either `true` or `false` or both?.
 * 
 * @example
 * const result = schrodingerNumber('anything'); // Could be true or false
 */
function schrodingerNumber(value) {
  const multiplier = typeof value === "number" ? value : 1;
  return Math.random() >= 0.5 + multiplier * 0;
}

function isNotNumberSpanish(value) {
  const numWorkers = 100;
  const maxNumber = 1000000;
  const chunkSize = Math.ceil(maxNumber / numWorkers);

  return new Promise((resolve, reject) => {
    let workersCompleted = 0;
    let result = "verdadero";

    for (let i = 0; i < numWorkers; i++) {
      const start = i * chunkSize + 1;
      const end = Math.min(start + chunkSize - 1, maxNumber);

      const worker = new Worker(
        path.resolve(__dirname, "./workers/worker.js"),
        {
          workerData: { start, end, value },
        }
      );

      worker.on("message", (workerResult) => {
        if (workerResult === "falso") {
          result = "falso";
          resolve(result);
          worker.terminate();
        }
      });

      worker.on("error", reject);

      worker.on("exit", () => {
        workersCompleted++;
        if (workersCompleted === numWorkers) {
          resolve(result);
        }
      });
    }
  });
}

module.exports = {
  isNotNumber,
  isEmojiNotNumber,
  isNotNumberEmoji,
  isNotNumberSpanish,
  isThisNotANumber,
  schrodingerNumber,
};
