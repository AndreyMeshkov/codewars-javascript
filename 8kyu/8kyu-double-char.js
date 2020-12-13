// Double Char

// https://www.codewars.com/kata/56b1f01c247c01db92000076

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "
// Good Luck!

function doubleChar(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i] + str[i];
  }
  return result;
}

// Best practice:

// const doubleChar = (str) => str.split("").map(c => c + c).join("");

// Clever solution:

// function doubleChar(str) {
//   return str.replace(/(.)/g, "$1$1")
// }
