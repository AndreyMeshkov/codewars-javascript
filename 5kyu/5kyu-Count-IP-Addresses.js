// Count IP Addresses

// https://www.codewars.com/kata/526989a41034285187000de4

// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// Examples
// ipsBetween("10.0.0.0", "10.0.0.50")  ===   50
// ipsBetween("10.0.0.0", "10.0.1.0")   ===  256
// ipsBetween("20.0.0.10", "20.0.1.0")  ===  246

function ipsBetween(start, end) {
  const startSum = start
    .split(".")
    .reduce(
      (acc, cur, ind, arr) =>
        acc + parseInt(cur) * 256 ** (arr.length - ind - 1),
      0
    );
  const endSum = end
    .split(".")
    .reduce(
      (acc, cur, ind, arr) =>
        acc + parseInt(cur) * 256 ** (arr.length - ind - 1),
      0
    );
  return endSum - startSum;
}

// Best practice and clever solution:

// function ipsBetween(start, end) {
//   start = start.split('.');

//   return end.split('.').reduce(function(sum, x, i) {
//     return (sum << 8) + Number(x) - Number(start[i])
//   }, 0);
// }
