// Unary function chainer

// https://www.codewars.com/kata/54ca3e777120b56cb6000710

// Your task is to write a higher order function for chaining together a list of unary functions. In other words, it should return a function that does a left fold on the given functions.

// chained([a,b,c,d])(input)
// Should yield the same result as

// d(c(b(a(input))))

function chained(functions) {
  return (input) => functions.reduce((result, fn) => fn(result), input);
}

// Best practice and clever solution:

// function chained(functions) {
//     return function(input){
//       return functions.reduce(function(input, fn){ return fn(input) }, input);
//     }
//   }
