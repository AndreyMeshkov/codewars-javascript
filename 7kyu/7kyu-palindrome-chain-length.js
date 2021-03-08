// Palindrome chain length

// https://www.codewars.com/kata/525f039017c7cd0e1a000a26

// Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not.

// Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

// If the input number is already a palindrome, the number of steps is 0.

// All inputs are guaranteed to have a final palindrome which does not overflow MAX_SAFE_INTEGER.

// Example
// For example, start with 87:

//   87 +   78 =  165     - step 1, not a palindrome
//  165 +  561 =  726     - step 2, not a palindrome
//  726 +  627 = 1353     - step 3, not a palindrome
// 1353 + 3531 = 4884     - step 4, palindrome!
// 4884 is a palindrome and we needed 4 steps to obtain it, so answer for 87 is 4.

// Additional info
// Some interesting information on the problem can be found in this Wikipedia article on Lychrel numbers.

var palindromeChainLength = function (n) {
  let result = 0;
  while (!isPalindrom(n)) {
    n += Number(n.toString().split("").reverse().join(""));
    result++;
  }
  return result;
};

function isPalindrom(str) {
  return str.toString() === str.toString().split("").reverse().join("");
}

// Best practice:

// var palindromeChainLength = function(n) {
//   var steps = 0;
//   while(!isPalindromic(n)) {
//     steps++;
//     n+=reverseNum(n);
//   }
//   return steps;
// };

// function isPalindromic(n) {
//   if (n < 0) throw 'isPalindromic only works for positive numbers.';
//   if (Math.floor(n / 10) === 0) return true; // Single digit numbers are palindromic.
//   if (n % 10 === 0) return false; // n > 0, without leading 0s cannot be palindromic if ending in 0.
//   return reverseNum(n) === n;
// }

// function reverseNum(n) {
//   var r = 0;
//   while (n) {
//     r *= 10;
//     r += n % 10;
//     n = Math.floor(n / 10);
//   }
//   return r;
// }

// Clever solution:

// var palindromeChainLength  = function(n) {
//   var x = parseInt( (""+n).split('').reverse().join('') );
//   if(n != x){
//     return 1 + palindromeChainLength (n + x);
//   }
//   return 0;
// };
