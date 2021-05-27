// Sum of Multiples

// https://www.codewars.com/kata/57241e0f440cd279b5000829

// Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

function sumMul(n, m) {
  if (n > m || n === 0) {
    return "INVALID";
  }
  let res = 0;
  for (let i = n; i <= m; i += n) {
    res += i;
  }
  return res;
}

// Best practice:

// function sumMul(n,m){
//   if (n >= m) return "INVALID";

// var sum = 0;
//   for (var i = n; i < m; i+=n) {
//     sum += i;
//   }
//   return sum;
// }

// Clever solution:

// const sumMul = (n, m) => ~~(m/n) * (m+n - m%n) / 2 || 'INVALID';
