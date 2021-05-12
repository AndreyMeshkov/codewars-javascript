// Enumerable Magic #4 - True for None?

// https://www.codewars.com/kata/545993ee52756d98ca0010e1

// Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.

// Ruby: If you need help, here is a reference:

// http://www.rubycuts.com/enum-none

function none(arr, fun) {
  return arr.filter(fun).length === 0;
}

// Best practice and clever solution:

// function none(arr, fun){
//   return !arr.some(fun);
// }
