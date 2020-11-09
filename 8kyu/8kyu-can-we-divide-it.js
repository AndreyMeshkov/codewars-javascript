// Can we divide it?

// https://www.codewars.com/kata/5a2b703dc5e2845c0900005a/train/javascript

// Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.

// A few cases:

// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true

// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true

function isDivideBy(number, a, b) {
  return number % a === 0 && number % b === 0;
}

// Best Practices:

// const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;

// Clever solution:

// function isDivideBy(number, a, b) {
//   return [a, b].every(i => number % i === 0)
// }
