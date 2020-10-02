// Calculate average

// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

// Write function avg which calculates average of numbers in given list.

function find_average(array) {
	return array.reduce((acc, cur) => acc + cur, 0) / array.length;
}

// Best Practices and clever solution:

// function find_average(array) {
// 	var sum = array.reduce((a, b) => a + b, 0);
// 	return sum / array.length;
// }

