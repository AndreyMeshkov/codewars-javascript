// Valid Parentheses

// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid.The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              => true
// ")(()))"          => false
// "("               => false
// "(())((()())())"  => true
// Constraints
// 0 <= input.length <= 100

function validParentheses(parens) {
	const arr = parens.split('');
	for (let i = 0; i < arr.length; i++) {
		if (arr[i + 1] === ')' && arr[i] === '(') {
			arr.splice(i, 2);
			i -= 2;
		}
	}
	return !arr.length;
}

// Best Practices:

// function validParentheses(parens) {
// 	var n = 0;
// 	for (var i = 0; i < parens.length; i++) {
// 		if (parens[i] == '(') n++;
// 		if (parens[i] == ')') n--;
// 		if (n < 0) return false;
// 	}

// 	return n == 0;
// }