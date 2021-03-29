// Primes in numbers

// https://www.codewars.com/kata/54d512e62a5e54c96200019e

// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// where a ** b means a to the power of b

// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

function primeFactors(n) {
  const obj = {};
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      obj[i] ? obj[i]++ : (obj[i] = 1);
      n = n / i;
    }
  }
  let result = "";
  for (prop in obj) {
    if (obj[prop] > 1) {
      result += `(${prop}**${obj[prop]})`;
    } else {
      result += `(${prop})`;
    }
  }
  return result;
}

// Best practice and clever solution:

// function primeFactors(n){
//   for (var i=2, res="", f; i <= n; i++) {
//     f=0;
//     while (n%i == 0) { f++; n/=i }
//     res += f ? "(" + ( f>1 ? i+"**"+f  : i ) +")" : ""
//   }
//   return res || "("+n+")"
// }
