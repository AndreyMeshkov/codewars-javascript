// Simple multiplication

// https://www.codewars.com/kata/583710ccaa6717322c000105

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  return number % 2 ? number * 9 : number * 8;
}

// Best practices and clever solution:

// function simpleMultiplication(n) {
//     return n * (n % 2 ? 9 : 8);
// }