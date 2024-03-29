// Thinkful - String Drills: Repeater

// https://www.codewars.com/kata/585a1a227cb58d8d740001c3

// Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

// Example:
// Repeater.repeat("a", 5)
// should return

// "aaaaa"

function repeater(string, n) {
  return string.repeat(n);
}

// Best practice and clever solution:

// const repeater = (string, n) => {
//   return string.repeat(n);
// }
