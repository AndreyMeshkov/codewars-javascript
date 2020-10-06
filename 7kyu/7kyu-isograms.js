// Isograms

// https://www.codewars.com/kata/54ba84be607a92aa900000f1

// An isogram is a word that has no repeating letters, consecutive or non - consecutive.Implement a function that determines whether a string that contains only letters is an isogram.Assume the empty string is an isogram.Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isIsogram(str) {
	const newStr = str.toLowerCase();
	let result = true;
	for (let i = 0; i < newStr.length; i++) {
		if (newStr.indexOf(newStr[i]) !== i) {
			return false;
		}
	}
	return result;
}

// Best Practices and clever solution:

// function isIsogram(str) {
// 	return !/(\w).*\1/i.test(str)
// }