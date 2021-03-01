// Guess the Sequence

// https://www.codewars.com/kata/5b45e4b3f41dd36bf9000090

// You have read the title: you must guess a sequence. It will have something to do with the number given.

// Example
// x = 16
// result = [1, 10, 11, 12, 13, 14, 15, 16, 2, 3, 4, 5, 6, 7, 8, 9]
// Good luck!

function sequence(x) {
  let arr = [];
  for (let i = 1; i <= x; i++) {
    arr.push(i);
  }
  return arr.sort();
}

// Best practice:

// const sequence = ($) => Array.from({length: $}, (_,i)=> i+1).sort();

// Clever solution:

// function sequence(x) {
//     let array = [];
//     for (let i = 1; i <= x; i++) array.push(i);
//     return array.sort();
// }
