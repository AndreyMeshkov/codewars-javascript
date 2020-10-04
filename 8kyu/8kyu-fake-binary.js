// Fake Binary

// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.Return the resulting string.

function fakeBin(x) {
	return x.split('').map(val => Number(val) >= 5 ? '1' : '0').join('');
}

// Best Practices:

// function fakeBin(x) {
// 	return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }

// Clever solution:

// function fakeBin(x) {
// 	return x.replace(/\d/g, d => d < 5 ? 0 : 1);
// }