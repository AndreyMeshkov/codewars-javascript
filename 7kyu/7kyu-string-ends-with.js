// String ends with?

// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
  return str.slice(str.length - ending.length) === ending;
}

// Best Practices:

// function solution(str, ending) {
//   return str.slice(str.length - ending.length) === ending;
// }

// Clever solution:

// function solution(str, ending){
//   return new RegExp(ending+"$", "i").test(str);
// }
