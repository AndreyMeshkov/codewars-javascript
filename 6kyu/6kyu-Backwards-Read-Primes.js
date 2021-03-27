// Backwards Read Primes

// https://www.codewars.com/kata/5539fecef69c483c5a000015

// Backwards Read Primes are primes that when read backwards in base 10 (from right to left) are a different prime. (This rules out primes which are palindromes.)

// Examples:
// 13 17 31 37 71 73 are Backwards Read Primes
// 13 is such because it's prime and read from right to left writes 31 which is prime too. Same for the others.

// Task
// Find all Backwards Read Primes between two positive given numbers (both inclusive), the second one always being greater than or equal to the first one. The resulting array or the resulting string will be ordered following the natural order of the prime numbers.

// Examples (in general form):
// backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967] backwardsPrime(501, 599) => []

// See "Sample Tests" for your language.

// Notes
// Forth Return only the first backwards-read prime between start and end or 0 if you don't find any
// Ruby Don't use Ruby Prime class, it's disabled.

function isPrime(num) {
  if (num % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function backwardsPrime(start, stop) {
  const arr = [];
  for (let i = start; i <= stop; i++) {
    if (isPrime(i)) {
      let num = parseInt(i.toString().split("").reverse().join(""));
      if (isPrime(num) && i !== num) {
        arr.push(i);
      }
    }
  }
  return arr;
}

// Best practice and clever solution:

// function backwardsPrime(start, stop) {
//   var range = [];
//   for(var i = start % 2 == 0 ? start + 1 : start; i <= stop; i += 2) range.push(i);
//   return range.filter(function(v) {return isPrime(v);}).filter(function(v) {
//     var rev = parseInt(v.toString().split('').reverse().join(''));
//     return rev != v && validPrimeCheck(rev);
//   });
// }

// //Uses an ever-expanding Sieve of Eratosthenes to test for primes
// var sieve = [2,3,5,7,11,13,17,19,23,29,31,37];

// function validPrimeCheck(num) {
//   generateSieve(Math.ceil(Math.sqrt(num)));
//   return isPrimeFromSieve(num);
// }

// function generateSieve(max) {
//   var current = sieve[sieve.length - 1] + 2;
//   while (current <= max) {
//     if (isPrimeFromSieve(current)) sieve.push(current);
//     current += 2;
//   }
// }

// function isPrimeFromSieve(num) {
//   var max = Math.ceil(Math.sqrt(num));
//   for (var i = 0; i < sieve.length; i++) {
//     if (num % sieve[i] === 0) return false;
//     else if (max < sieve[i]) return true;
//   }
//   return true;
// }

// function isPrime(num) {
//   if (num < 2 || (num % 2 == 0 && num !== 2)) return false;
//   else {
//     if (sieve.indexOf(num) !== -1) return true;
//     else return validPrimeCheck(num);
//   }
// }
