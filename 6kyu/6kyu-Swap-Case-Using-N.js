// Swap Case Using N

// https://www.codewars.com/kata/5f3afc40b24f090028233490

// Your job is to change the given string s using a non-negative integer n.

// Each bit in n will specify whether or not to swap the case for each alphabetic character in s: if the bit is 1, swap the case; if its 0, leave it as is. When you finish with the last bit of n, start again with the first bit.

// You should skip the checking of bits when a non-alphabetic character is encountered, but they should be preserved in their original positions.

// Examples
// swap("Hello world!", 11)  -->  "heLLO wORLd!"
// ...because 11 is 1011 in binary, so the 1st, 3rd, 4th, 5th, 7th, 8th and 9th alphabetical characters have to be swapped:

// H e l l o   w o r l d !
// 1 0 1 1 1 x 0 1 1 1 0 x
// ^   ^ ^ ^    ^ ^ ^
// More examples
// swap("gOOd MOrniNg", 7864)  -->  "GooD MorNIng"
// swap("", 11345)  -->  ""
// swap("the lord of the rings", 0)  -->  "the lord of the rings"

function swap(s, n) {
  const num = n.toString(2);
  let result = "";
  let count = -1;
  for (let i = 0; i < s.length; i++) {
    if (/[a-z]/i.test(s[i])) {
      count++;
      if (num[count % num.length] === "1") {
        if (/[a-z]/.test(s[i])) {
          result += s[i].toUpperCase();
        } else {
          result += s[i].toLowerCase();
        }
      } else {
        result += s[i];
      }
    } else {
      result += s[i];
    }
  }
  return result;
}

// Best practice:

// function swapcase(str){
//   return /[a-z]/.test(str) ? str.toUpperCase() : str.toLowerCase()
// }

// function swap(s, n){
//   n = n.toString(2)
//   n = n.padEnd((s.match(/[a-z]/ig) || []).length, n).split``
//   return [...s].map(x => /[a-z]/i.test(x) ? (n.shift() == "1" ? swapcase(x) : x) : x).join``
// }

// Clever solution:

// function swapcase(str){
//   return /[a-z]/.test(str) ? str.toUpperCase() : str.toLowerCase()
// }

// function swap(s, n){
//   n = n.toString(2)
//   n = n.padEnd((s.match(/[a-z]/ig) || []).length, n).split``
//   return [...s].map(x => /[a-z]/i.test(x) ? (n.shift() == "1" ? swapcase(x) : x) : x).join``
// }
