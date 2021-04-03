// Number Of Occurrences

// https://www.codewars.com/kata/52829c5fe08baf7edc00122b

// Write a function that returns the number of occurrences of an element in an array.

// Examples
// var arr = [0, 1, 2, 2, 3];
// arr.numberOfOccurrences(0) === 1;
// arr.numberOfOccurrences(4) === 0;
// arr.numberOfOccurrences(2) === 2;
// arr.numberOfOccurrences("a") === 0;

Array.prototype.numberOfOccurrences = function (num) {
  return this.filter((val) => val === num).length;
};

// Best practice and clever solution:

// Array.prototype.numberOfOccurrences = function(search) {
//   return this.filter( function(num){ return search === num } ).length;
// }
