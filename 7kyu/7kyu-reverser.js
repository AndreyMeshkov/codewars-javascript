// Reverser

// https://www.codewars.com/kata/58069e4cf3c13ef3a6000168

// Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.

function reverse(n) {
  let result = 0;
  while (n > 0) {
    result = result * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return result;
}

// Best Practices and clever solution:

// function reverse(n){
//   let rev = 0;
//   while (n) {
//       rev = rev * 10 + n % 10;
//       n = Math.floor(n/10);
//   }
//   return rev;
// }
