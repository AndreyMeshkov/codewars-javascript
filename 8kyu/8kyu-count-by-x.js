// Count by

// https://www.codewars.com/kata/5513795bd3fafb56c200049e

// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
  const arr = [];
  for (let i = x; i <= n * x; i += x) {
    arr.push(i);
  }
  return arr;
}

// Best Practices:

// function countBy(x, n) {
//   var z = [];
//   for (i = 1; i <= n; i++) {
//       z.push(x * i);
//   }
//   return z;
// }

// Clever solution:

// const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)

