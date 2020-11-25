// Transform To Prime

// https://www.codewars.com/kata/5a946d9fba1bb5135100007c

// Task :
// Given a List [] of n integers , find minimum number to be inserted in a list, so that sum of all elements of list should equal the closest prime number .

// Notes
// List size is at least 2 .

// List's numbers will only positives (n > 0) .

// Repetition of numbers in the list could occur .

// The newer list's sum should equal the closest prime number .

// Input >> Output Examples
// 1- minimumNumber ({3,1,2}) ==> return (1)
// Explanation:
// Since , the sum of the list's elements equal to (6) , the minimum number to be inserted to transform the sum to prime number is (1) , which will make *the sum of the List** equal the closest prime number (7)* .
// 2-  minimumNumber ({2,12,8,4,6}) ==> return (5)
// Explanation:
// Since , the sum of the list's elements equal to (32) , the minimum number to be inserted to transform the sum to prime number is (5) , which will make *the sum of the List** equal the closest prime number (37)* .
// 3- minimumNumber ({50,39,49,6,17,28}) ==> return (2)
// Explanation:
// Since , the sum of the list's elements equal to (189) , the minimum number to be inserted to transform the sum to prime number is (2) , which will make *the sum of the List** equal the closest prime number (191)* .

function minimumNumber(numbers) {
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  let num = sum;
  if (num % 2 === 0) {
    num++;
  }
  for (let i = 3; i < num; i += 2) {
    if (num % i === 0) {
      num += 2;
      i = 1;
    }
  }
  return num - sum;
}

// Best practices:

// function minimumNumber(numbers){
//   let sum = numbers.reduce((a,b) => a + b)
//   for(let i = sum; ; i++) {
//     if(prime(i)) return i - sum
//   }
//   function prime(a) {
//     if(a < 2) return false
//     if(a % 2 === 0) return a === 2
//     for(let i = 3; i * i < a; i += 2) {
//       if(a % i === 0) return false
//     }
//     return true
//   }
// }

// Clever solution:

// const minimumNumber = n => nearestPrime(n.reduce((a,b)=>a+b)) - n.reduce((a,b)=>a+b);
// const nearestPrime = n => isPrime(n) ? n : nearestPrime(n+1);
// const isPrime = n => Array(Math.ceil(Math.sqrt(n))-2).fill(0).map((x,i)=>i+2).every(x=>!!(n%x))
