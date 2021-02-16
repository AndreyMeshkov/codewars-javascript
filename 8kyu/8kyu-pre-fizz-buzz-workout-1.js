// Pre-FizzBuzz Workout #1

// https://www.codewars.com/kata/569e09850a8e371ab200000b

// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n (inclusive).

// Your job is to write an algorithm that gets you from the input to the output.

function preFizz(n) {
  return new Array(n).fill().map((val, ind) => ind + 1);
}

// Best practice:

// function preFizz(n) {
//   var output = [];
//   for (var i=1; i<=n; i++)
//   {
//     output.push(i);
//   }
//   return output;
// }

// Clever solution:

// let preFizz = n => [...Array(n)].map((x, i) => i+1);
