// Is Integer Array?

// https://www.codewars.com/kata/52a112d9488f506ae7000b95

// Write a function with the signature shown below:

// function isIntArray(arr) {
//   return true
// }
// returns true / True if every element in an array is an integer or a float with no decimals.
// returns true / True if array is empty.
// returns false / False for every other input.

function isIntArray(arr) {
  return arr
    ? arr.filter((val) => Number.isInteger(val)).length === arr.length
    : false;
}

// Best practice and clever solution:

// function isIntArray(arr) {
//   return Array.isArray(arr) && arr.every(function (x) { return Math.floor(x) === x });
// }
