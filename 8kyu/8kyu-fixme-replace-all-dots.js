// FIXME: Replace all dots

// https://www.codewars.com/kata/596c6eb85b0f515834000049

// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.

var replaceDots = function (str) {
  return str.replace(/\./g, "-");
};

// Best practice:

//   var replaceDots = function (str) {
//   return str.replace(/\./g, "-");
// };

// Clever solution:

// var replaceDots = function(str) {
// // added the \ to escape special characters
// // added the g so that replace is run for all occurences in the string
//   return str.replace(/\./g, '-');
// }
