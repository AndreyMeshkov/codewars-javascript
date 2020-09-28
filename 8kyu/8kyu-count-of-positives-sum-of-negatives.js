// Count of positives / sum of negatives

// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

// 	Example
// For input[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
	if (!input || input.length < 1) return [];
	return [input.filter(val => val > 0).length, input.filter(val => val < 0).reduce((acc, cur) => acc + cur, 0)];
}

// Best Practices:

// function countPositivesSumNegatives(input) {
// 	if (input == null || input.length == 0)
// 		return [];

// 	var positive = 0;
// 	var negative = 0;

// 	for (var i = 0, l = input.length; i < l; ++i) {
// 		if (input[i] > 0)
// 			++positive;
// 		else
// 			negative += input[i];
// 	}

// 	return [positive, negative];
// }

// Clever solution:

// function countPositivesSumNegatives(input) {
// 	return input && input.length ? input.reduce(function (p, c, i, s) {
// 		c <= 0 ? p[1] += c : p[0] += 1;
// 		return p;
// 	}, [0, 0]) : [];
// }