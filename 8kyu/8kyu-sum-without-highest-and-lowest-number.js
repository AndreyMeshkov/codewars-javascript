// Sum without highest and lowest number

// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

// Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

// Example:

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// If array is empty, null or None, or if only 1 Element exists, return 0.
// Note:In C++ instead null an empty vector is used. In C there is no null. ;-)


// -- There's no null in Haskell, therefore Maybe [Int] is used. Nothing represents null.
// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.

function sumArray(array) {
	if (!array || array.length < 2) {
		return 0;
	}
	return array.sort((a, b) => a - b).slice(1, -1).reduce((acc, val) => acc + val, 0);
}

// Best Practice:

// function sumArray(array) {
// 	if (array == null) {
// 		return 0;
// 	} else if (array.length < 2) {
// 		return 0;
// 	} else {
// 		array = array.sort(function (a, b) { return a - b; });
// 		var total = 0;
// 		for (var i = 1; i < array.length - 1; i++) {
// 			total += array[i];
// 		}
// 		return total;
// 	}
// }

// Clever solution:

// sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0