// Break camelCase

// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

// Complete the solution so that the function will break up camel casing, using a space between words.

// 	Example
// solution("camelCasing") == "camel Casing"

function solution(string) {
	let result = '';
	for (let i = 0; i < string.length; i++){
		string[i] === string[i].toUpperCase() ? result += ` ${string[i]}` : result += string[i];
	}
	return result;
}

// Best Practices and clever solution:

// function solution(string) {
// 	return (string.replace(/([A-Z])/g, ' $1'));
// }