// Factorial

// https://www.codewars.com/kata/57a049e253ba33ac5e000212

// Yor task is to write function factorial

// https://en.wikipedia.org/wiki/Factorial

function factorial(n) {
  let sum = 1;
  while (n > 0) {
    sum = sum * n;
    n = n - 1;
  }
  return sum;
}

// Best practice and clever solution:

// const factorial = n => n ? factorial(n - 1) * n : 1;
