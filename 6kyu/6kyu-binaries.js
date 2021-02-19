// Binaries;

// https://www.codewars.com/kata/5d98b6b38b0f6c001a461198

// Let us take a string composed of decimal digits: "10111213". We want to code this string as a string of 0 and 1 and after that be able to decode it.

// To code we decompose the given string in its decimal digits (in the above example: 1 0 1 1 1 2 1 3) and we will code each digit.

// Coding process to code a number n expressed in base 10:
// For each digit d of n

// a) Let k be the number of bits of d

// b) Write k-1 times the digit 0 followed by the digit 1

// c) Write digit d as a binary string, with the rightmost bit being the least significant

// d) Concat the result of b) and c) to get the coding of d

// At last concatenate all the results got for the digits of n.

// An example
// So we code 0 as 10, 1 as 11, 2 as 0110, 3 as 0111 ... etc...

// With the given process, the initial string "10111213" becomes: "11101111110110110111" resulting of concatenation of 11 10 11 11 11 0110 11 0111.

// Task:
// Given strng a string of digits representing a decimal number the function code(strng) should return the coding of strng as explained above.

// Given a string strng resulting from the previous coding, decode it to get the corresponding decimal string.

// Examples:
// code("77338855") --> "001111001111011101110001100000011000001101001101"
// code("77338")  --> "0011110011110111011100011000"
// code("0011121314") --> "1010111111011011011111001100"

// decode("001111001111011101110001100000011000001101001101") -> "77338855"
// decode("0011110011110111011100011000") -> "77338"
// decode("1010111111011011011111001100") -> "0011121314"
// Notes
// SHELL: The only tested function is decode.
// Please could you ask before translating : some translations are already written.

function code(strng) {
  const arr = strng.split(""),
    result = "";
  for (let i = 0; i < arr.length; i++) {
    let num = Number(arr[i]).toString(2);
    num = "0".repeat(num.length - 1) + "1" + num;
    result += num;
  }
  return result;
}

function decode(str) {
  const arr = [],
    result = "";
  for (let i = 0; i < 10; i++) {
    arr.push(code(String(i)));
  }
  while (str.length !== 0) {
    for (let i = 0; i < 10; i++) {
      if (str.startsWith(arr[i])) {
        result += String(i);
        str = str.slice(arr[i].length);
        break;
      }
    }
  }
  return result;
}

// Best practice:

// function code(strng) {
//     return strng.split('').map(function (n) { 
//       var str = '1' + Number(n).toString(2);
//       while (n>>=1 != 0) str = '0' + str;
//       return str;
//     }).join('');
    
// }
// function decode(str) {
//     var regex, matches, strng;
//     regex = /0*1/g;
//     strng = '';
//     while (matches = regex.exec(str)) {
//       strng += parseInt(str.substr(regex.lastIndex, matches[0].length), 2);
//       regex.lastIndex += matches[0].length;
//     }
//     return strng;
// }

// Clever solution:

// const ENC = ['10','11','0110','0111','001100','001101','001110','001111','00011000','00011001']

// function code(strng) {
//   return [...strng].map(c => ENC[c]).join('')
// }
// function decode(str) {
//     pattern = new RegExp(ENC.join('|'), 'g')
//     return str.replace(pattern, m => ENC.indexOf(m))
// }
