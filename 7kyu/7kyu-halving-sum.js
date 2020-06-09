// Halving Sum

// Task
// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.

// Example

function halvingSum(n) {
  let sum = n;
  while (n > 1) {
    n = n / 2;
    sum += Math.floor(n);
  }
  return sum;
}
