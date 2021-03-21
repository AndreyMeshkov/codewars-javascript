// Sum of differences in array

// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e

// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example:

// sumOfDifferences([2, 1, 10])
// Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

function sumOfDifferences(arr) {
  const sortArr = arr.sort((a, b) => b - a);
  let result = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    result += arr[i] - arr[i + 1];
  }
  return result;
}

// Best practice and clever solution:

// function sumOfDifferences(arr) {
//     return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
// }
