// Simple Fun #253: Cool String

// https://www.codewars.com/kata/590fd3220f05b4f1ad00007c

// Task
// Let's call a string cool if it is formed only by Latin letters and no two lowercase and no two uppercase letters are in adjacent positions. Given a string, check if it is cool.

// Input/Output
// [input] string s

// A string that contains uppercase letters, lowercase letters numbers and spaces.

// 1 ≤ s.length ≤ 20.

// [output] a boolean value

// true if s is cool, false otherwise.

// Example
// For s = "aQwFdA", the output should be true

// For s = "aBC", the output should be false;

// For s = "AaA", the output should be true;

// For s = "q q", the output should be false.

function coolString(s) {
  return !(/[A-Z]{2}/.test(s) || /[a-z]{2}/.test(s) || /[^A-Za-z]/.test(s));
}

// Best practice and clever solution:

// function coolString(s) {
//   return !/[a-z]{2,}|[A-Z]{2,}|[^a-zA-Z]/.test(s)
// }
