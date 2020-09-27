// CamelCase Method

// https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript

// Write simple.camelCase method(camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings.All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)

String.prototype.camelCase = function () {
	return this.length > 0 ? this.trim().split(' ').map(val => val[0].toUpperCase() + val.slice(1)).join('') : '';
}

// Best Practices:

// String.prototype.camelCase = function () {
// 	return this.split(' ').map(function (word) {
// 		return word.charAt(0).toUpperCase() + word.slice(1);
// 	}).join('');
// }

// Clever solution:

// String.prototype.camelCase = function () {
// 	return this.trim().replace(/(?:^|\s+)(\w)/g, (_, c) => c.toUpperCase())
// }