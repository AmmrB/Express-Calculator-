/**
 * Build a frequency counter object from an array
 * @param {Array} arr any array
 */
const createFrequencyCounter = arr => arr.reduce((acc, next) => {
  acc[next] = (acc[next] || 0) + 1;
  return acc;
}, {});

/**
 * Find the most common element in the array
 * @param {Array} arr any array
 */
const findMode = arr => {
  let freqCounter = createFrequencyCounter(arr);

  return Object.keys(freqCounter).reduce((a, b) => freqCounter[a] > freqCounter[b] ? +a : +b);
}

/**
 * Attempt to convert an array of strings to an array of numbers
 * @param {Array} numsAsStrings array of strings
 * @returns {Array|Error} an array or an error object
 */
const convertAndValidateNumsArray = numsAsStrings => {
  let result = numsAsStrings.map((num, i) => {
    let valToNumber = Number(num);

    if (Number.isNaN(valToNumber)) {
      throw new Error(`The value '${num}' at index ${i} is not a valid number.`);
    }

    return valToNumber;
  });

  return result;
}