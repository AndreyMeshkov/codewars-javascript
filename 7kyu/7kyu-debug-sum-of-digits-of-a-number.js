// Debug Sum of Digits of a Number

// Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

// Example
// 123  => 6
// 223  => 7
// 1337 => 15

// function getSumOfDigits(integer) {
//   var sum = null;
//   var digits =  Math.floor(integer).toString();
//   for(var ix = 1; ix < digits.length; ix = sum + 1) {
//     sum =+ digits[ix + 1]);
//   }
//   return sum;
// }

function getSumOfDigits(integer) {
	var sum = null;
	var digits = Math.floor(integer).toString();
	for (var ix = 0; ix < digits.length; ix++) {
		sum += +digits[ix];
	}
	return sum;
}
