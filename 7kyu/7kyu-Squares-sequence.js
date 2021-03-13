// Squares sequence

// https://www.codewars.com/kata/squares-sequence

// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

// Examples
// 2, 5  -->  [2, 4, 16, 256, 65536]
// 3, 3  -->  [3, 9, 81]

function squares(x, n) {
  if (n < 1) {
    return [];
  }
  const arr = [x];
  for (let i = 1; i < n; i++) {
    arr.push(arr[arr.length - 1] ** 2);
  }
  return arr;
}

// Best practice:

// function squares(x, n) {
//   var ret = [];
//   for(var i=0; i<n; i++){
//     ret.push(x);
//     x*= x;
//   }
//   return ret;
// }

// Clever solution:

// function squares(x, n) {
//   return Array.from({length: n}, (v, k) => Math.pow(x, Math.pow(2, k)))
// }
