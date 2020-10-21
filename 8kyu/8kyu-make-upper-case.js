// MakeUpperCase

// https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7

// Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
  return str.toUpperCase();
}

// Best Practices: 

// const makeUpperCase = str => str.toUpperCase();

// Clever solution:

// function makeUpperCase(str) {
//   return str.replace(/[a-z]/g,s=>String.fromCharCode(s.charCodeAt(0)-32))
// }