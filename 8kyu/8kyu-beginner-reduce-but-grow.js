// Beginner - Reduce but Grow

// https://www.codewars.com/kata/57f780909f7e8e3183000078

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x) {
  return x.reduce((acc, val) => acc * val, 1);
}

// Best Practices:

// const grow=x=> x.reduce((a,b) => a*b);

// Clever solution:

// const grow=x=>eval(x.join("*"))