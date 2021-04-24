// Bin to Decimal

// https://www.codewars.com/kata/57a5c31ce298a7e6b7000334

// Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin) {
  return parseInt(bin, 2);
}

// Best practice:

// function binToDec(bin){
//   return parseInt(bin,2);
// }

// Clever solution:

// const binToDec = bin => parseInt(bin, 2);

// const binToDec = bin => [...bin].reduce((dec, bit) => dec << 1 | bit, 0);
