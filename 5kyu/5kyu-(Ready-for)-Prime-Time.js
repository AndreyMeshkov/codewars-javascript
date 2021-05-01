// (Ready for) Prime Time

// https://www.codewars.com/kata/521ef596c106a935c0000519

// We need prime numbers and we need them now!

// Write a method that takes a maximum bound and returns all primes up to and including the maximum bound.

// For example,

// 11 => [2, 3, 5, 7, 11]

function prime(num) {
  const arr = num > 1 ? [2] : [];
  for (let i = 3; i <= num; i += 2) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }
  return arr;
}

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

// Best practice and clever solution:

// function prime(num) {
//   var primes = [];
//   loop: for (var i = 2; i <= num; i++) {
//     for (var j = 0; j <= primes.length; j++)
//       if (i % primes[j] === 0) continue loop;
//     primes.push(i);
//   }
//   return primes;
// }