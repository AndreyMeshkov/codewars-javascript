// Compare within margin

// https://www.codewars.com/kata/56453a12fcee9a6c4700009c

// Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b. a is "close to" b if margin is higher than or equal to the difference between a and b.

// When a is lower than b, return -1.

// When a is higher than b, return 1.

// When a is close to b, return 0.

// If margin is not given, treat it as zero.

// Example: if a = 3, b = 5 and the margin = 3, since a and b are no more than 3 apart, close_compare should return 0. Otherwise, if instead margin = 0, a is lower than b and close_compare should return -1.

// Assume: margin >= 0

// Tip: Some languages have a way to make arguments optional.

function closeCompare(a, b, margin = 0) {
  return Math.abs(a - b) <= margin ? 0 : a - b > 0 ? 1 : a - b < 0 ? -1 : 0;
}

// Best practice and clever solution:

// function closeCompare(a, b, m = 0){
//   return Math.abs(a - b) <= m? 0: Math.sign(a - b);
// }
