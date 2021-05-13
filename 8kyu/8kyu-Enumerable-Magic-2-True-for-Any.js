// Enumerable Magic #2 - True for Any?

// https://www.codewars.com/kata/54598e89cbae2ac001001135

// Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.

// Ruby: If you get stuck, you can read up here:

function any(arr, fun) {
  return arr.filter(fun).length !== 0;
}

// Best practice and clever solution:

// function any(arr, fun){
//   return arr.some(fun)
// }
