// Sum of all the multiples of 3 or 5

// https://www.codewars.com/kata/57f36495c0bb25ecf50000e7

// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

function findSum(n) {
  let result = 0;
  for (let i = 3; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }
  return result;
}

// Best practice:

// function findSum(n) {
//   let result = 0;
//   for (let i = 0; i <= n; i += 1) {
//     if (i % 3 === 0 || i % 5 === 0) result += i;
//   }
//   return result;
// }

// Clever solution:

// const sumMultiples = (m, n) => {
//   let x = n / m | 0;
//   return m * x * (x + 1) / 2;
// };

// const findSum = n =>
//   sumMultiples(3, n) + sumMultiples(5, n) - sumMultiples(15, n);
