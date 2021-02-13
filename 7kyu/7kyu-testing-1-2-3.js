// Testing 1-2-3

// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples:

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

var number = function (array) {
  return array.map((val, ind) => `${ind + 1}: ${val}`);
};

// Best practice:

// var number = function(array) {
//   return array.map(function (line, index) {
//     return (index + 1) + ": " + line;
//   });
// }

// Clever solution:

// let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)