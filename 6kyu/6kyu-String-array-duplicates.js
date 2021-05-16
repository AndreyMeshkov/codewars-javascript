// String array duplicates

// https://www.codewars.com/kata/59f08f89a5e129c543000069

// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

function dup(s) {
  return s.map((val) => removeDublicateChars(val));
  function removeDublicateChars(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== str[i + 1]) {
        res += str[i];
      }
    }
    return res;
  }
}

// Best practice and clever solution:

// function dup(s) {
//   return s.map(x => x.replace(/(.)\1+/g,'$1'))
// };
