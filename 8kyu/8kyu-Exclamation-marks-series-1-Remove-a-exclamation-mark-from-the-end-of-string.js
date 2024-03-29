// Exclamation marks series #1: Remove a exclamation mark from the end of string

// https://www.codewars.com/kata/57fae964d80daa229d000126

// Description:
// Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"
// Note
// Please don't post issue about difficulty or duplicate.

function remove(s) {
  if (s[s.length - 1] === "!") {
    return s.slice(0, -1);
  } else {
    return s;
  }
}

// Best practice and clever solution:

// const remove = s => s.replace(/!$/, '');
