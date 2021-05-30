// Wilson primes

// https://www.codewars.com/kata/55dc4520094bbaf50e0000cb

// Wilson primes satisfy the following condition. Let P represent a prime number.

// Then ((P-1)! + 1) / (P * P) should give a whole number.

// Your task is to create a function that returns true if the given number is a Wilson prime.

function amIWilson(p) {
  if (isPrime(p)) {
    return Number.isInteger((factorial(p - 1) + 1) / (p * p));
  }
  return false;
}
function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

// Best practice:

// function amIWilson(p) {
//   function fact(x) {
//     return x <= 1 ? 1 : x * fact(x-1);
//   }

//   return (fact(p-1) + 1) / (p*p) % 1 === 0;
// }

// Clever solution:

// const amIWilson = p => [5, 13, 563].indexOf(p) > -1
