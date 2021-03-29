// Power of two

// https://www.codewars.com/kata/534d0a229345375d520006a0

// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

// Examples
// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false
// Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.

function isPowerOfTwo(n) {
  if(n === 0) {
    return false;
  }
  while (n % 2 === 0) {
    n /= 2;
  }
  return n === 1;
}

// Best practice:

// function isPowerOfTwo(n){
//   return Number.isInteger(Math.log2(n));
  
// }

// Clever solution:

// function isPowerOfTwo(x){
//   return (
//   x == 1 || x == 2 || x == 4 || x == 8 || x == 16 || x == 32 ||
//   x == 64 || x == 128 || x == 256 || x == 512 || x == 1024 ||
//   x == 2048 || x == 4096 || x == 8192 || x == 16384 ||
//   x == 32768 || x == 65536 || x == 131072 || x == 262144 ||
//   x == 524288 || x == 1048576 || x == 2097152 ||
//   x == 4194304 || x == 8388608 || x == 16777216 ||
//   x == 33554432 || x == 67108864 || x == 134217728 ||
//   x == 268435456 || x == 536870912 || x == 1073741824 ||
//   x == 2147483648);
// }
