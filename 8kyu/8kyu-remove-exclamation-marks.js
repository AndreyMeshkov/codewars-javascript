// Remove exclamation marks

// https://www.codewars.com/kata/57a0885cbb9944e24c00008e

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s
    .split("")
    .filter((val) => val !== "!")
    .join("");
}

// Best practice:

// function removeExclamationMarks(s) {
//   return s.replace(/!/gi, '');
// }

// Clever solution:

// function removeExclamationMarks(s) {
//   return s.split('!').join('');
// }
