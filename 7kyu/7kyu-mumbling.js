// Mumbling
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

// This time no story, no theory.The examples below show you how to write function accum:

// 	Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	const arr = s.split('');
	return arr.map((val, ind) => val.toUpperCase() + val.repeat(ind).toLowerCase()).join('-');
}

// Best Practices:

// function accum(s) {
// 	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }

// Clever Solution:

// function accum(s) {
// 	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }