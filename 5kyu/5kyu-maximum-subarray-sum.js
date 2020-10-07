// Maximum subarray sum

// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum.Note that the empty list or array is also a valid sublist / subarray.

var maxSequence = function (arr) {
	let max = 0
	let result = 0;
	for (let i = 0; i < arr.length; i++) {
		max = Math.max(0, max + arr[i]);
		result = Math.max(max, result);
	}
	return result;
}

// Best Practices and clever solution:

// var maxSequence = function (arr) {
// 	var min = 0, ans = 0, i, sum = 0;
// 	for (i = 0; i < arr.length; ++i) {
// 		sum += arr[i];
// 		min = Math.min(sum, min);
// 		ans = Math.max(ans, sum - min);
// 	}
// 	return ans;
// }