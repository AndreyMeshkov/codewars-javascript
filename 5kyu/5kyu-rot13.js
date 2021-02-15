// Rot13

// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13.If there are numbers or special characters included in the string, they should be returned as they are.Only letters from the latin / english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
	let result = '';
	for (let i = 0; i < message.length; i++) {
		if (message.charCodeAt(i) > 90 && message[i].match(/[A-Za-z]/)) {
			if (message.charCodeAt(i) > 109) {
				result += String.fromCharCode(message.charCodeAt(i) - 13);
			} else {
				result += String.fromCharCode(message.charCodeAt(i) + 13);
			}
		} else if (message[i].match(/[A-Za-z]/)) {
			if (message.charCodeAt(i) > 79) {
				result += String.fromCharCode(message.charCodeAt(i) - 13);
			} else {
				result += String.fromCharCode(message.charCodeAt(i) + 13);
			}
		} else {
			result += message[i];
		}
	}
	return result;
}

// Best Practices and clever solution:

// function rot13(message) {
// 	var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
// 	var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
// 	return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
// }