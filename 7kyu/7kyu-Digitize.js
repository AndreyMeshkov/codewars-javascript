// Digitize

// https://www.codewars.com/kata/5417423f9e2e6c2f040002ae

// Given a non-negative integer, return an array / a list of the individual digits in order.

// Examples:

// 123 => [1,2,3]

// 1 => [1]

// 8675309 => [8,6,7,5,3,0,9]

function digitize(n) {
  return n
    .toString()
    .split("")
    .map((val) => parseInt(val));
}

// Best practice and clever solution:

// function digitize(n) {
//   return n
//     .toString()
//     .split("")
//     .map((val) => parseInt(val));
// }
