// Is it a palindrome?

// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

// Write function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  return x.toLowerCase() === x.split("").reverse().join("").toLowerCase();
}

// Best practice and clever solution:

// const isPalindrome = (x) => {
//   return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
// }
