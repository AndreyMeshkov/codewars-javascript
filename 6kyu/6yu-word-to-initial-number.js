// Word to initial number

// https://www.codewars.com/kata/5bb148b840196d1be50000b1

// Intro:
// I was doing a coding challenge. It was one of those multi-step challenges. I don't know if my approach was good or bad, but in one of these steps I was writing a function to convert word to numbers. I did it.. eventually, but... I didn't like how it was written. So I thought why not create kata and check how other people do it :) So:

// Task:
// Your task is to write the word to number converter. Digits in the number should match letters in the word. Plus generated number should be the smallest possible number you can get.

// Words will contain of maximum 10 distinct letters, but word can be any length, even longer than 10 characters long.
// Number can NOT start with 0
// Same letters share the same digit regardless of case
// For empty string return 0
// Examples:
// "A" -> 1 - OK

// "ABA" -> 353 - WRONG ( number is OK, but it's not the smallest number )

// "ABA" -> 333 - WRONG ( different letters map to same digits )

// "ABA" -> 357 - WRONG ( same letters map to different digits )"

function convert(s) {
  if (s.length === 1) return 1;
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (arr.indexOf(s[i].toLowerCase()) === -1) {
      arr.push(s[i].toLowerCase());
    }
  }
  arr = [arr[1], arr[0], ...arr.slice(2)];
  let string = "";
  for (let i = 0; i < s.length; i++) {
    string += arr.indexOf(s[i].toLowerCase());
  }
  return +string;
}

// Best Practices and clever solution:

// function convert(s) {
//     const _s = s.toLowerCase();

//     if (s.trim().length === 0) return 0;

//     const seen = [...new Set(_s)].reduce((acc, letter, i) => {
//         let digit = [1, 0, 2, 3, 4, 5, 6, 7, 8, 9][i];
//         acc.set(letter, digit);
//         return acc;
//     }, new Map());

//     return Number(_s.replace(/./g, (match) => seen.get(match)));
// }
