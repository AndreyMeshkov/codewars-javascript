// All Star Code Challenge #22

// https://www.codewars.com/kata/5865cff66b5699883f0001aa

// This Kata is intended as a small challenge for my students

// All Star Code Challenge #22

// Create a function hat takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.

// Any remaining seconds left over are ignored.

// Note:
// The string output needs to be in the specific form - "X hour(s) and X minute(s)"

// For example:

// 3600 --> "1 hour(s) and 0 minute(s)"
// 3601 --> "1 hour(s) and 0 minute(s)"
// 3500 --> "0 hour(s) and 58 minute(s)"
// 23500 --> "89 hour(s) and 51 minute(s)"

function toTime(seconds) {
  return `${Math.floor(seconds / 3600)} hour(s) and ${Math.floor(
    (seconds - Math.floor(seconds / 3600) * 3600) / 60
  )} minute(s)`;
}

// Best practice and clever solution:

// function toTime(time) {
//   var h = Math.floor(time / 3600);
//   var m = Math.floor(time % 3600 / 60);
//   return h + " hour(s) and " + m + " minute(s)";
// }
