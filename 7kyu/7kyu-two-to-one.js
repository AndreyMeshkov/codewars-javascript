// Two to One

// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  return (s1 + s2).split('').sort().filter((val, ind, arr) => val !== arr[ind +1]).join('');
}

// Best Practices and clever solution:

// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')