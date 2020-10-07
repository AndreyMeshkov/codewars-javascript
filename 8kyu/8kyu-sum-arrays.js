// Sum Arrays

// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript

// Sum Array
// Write a method sum(sum_array in python, sumarray in julia, SumArray in C#) that takes an array of numbers and returns the sum of the numbers.These may be integers or decimals for Ruby and any instance of Num for Haskell.The numbers can also be negative.If the array does not contain any numbers then you should return 0.

// Examples
// numbers = [1, 5.2, 4, 0, -1]
// puts sum(numbers)
// 9.2
// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.

// Sum Numbers
function sum(numbers) {
	"use strict";
	return numbers.reduce((acc, cur) => acc + cur, 0);
};

// Best Practices and clever solution:

// sum = function (numbers) {
// 	"use strict";
// 	return numbers.reduce(function (t, n) {
// 		return t + n;
// 	}, 0);
// };