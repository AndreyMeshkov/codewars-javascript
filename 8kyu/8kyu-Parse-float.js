// Parse float

// https://www.codewars.com/kata/57a386117cb1f31890000039

// Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

function parseF(s) {
  return isNaN(parseFloat(s)) ? null : parseFloat(s);
}

// Best practice and clever solution:

// function parseF(s) {
//   return isNaN(parseFloat(s)) ? null : parseFloat(s);
// }
