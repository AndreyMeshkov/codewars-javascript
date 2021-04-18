// Character with longest consecutive repetition

// https://www.codewars.com/kata/586d6cefbcc21eed7a001155

// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]
// Happy coding! :)

function longestRepetition(s) {
  let letter = "";
  let count = 0;
  for (let i = 0; i < s.length; null) {
    let start = i;
    while (i < s.length && s[i] === s[start]) {
      i++;
      if (i - start > count) {
        letter = s[start];
        count = i - start;
      }
    }
  }
  return [letter, count];
}

// Best practice:

// function longestRepetition(s) {
//   let count = 0;
//   let prevLetter = '';

//   return s.toLowerCase().split('').reduce((acc, curr) => {
//     if(curr === prevLetter){
//       count++;
//     }
//     else{
//       count = 1;
//     }

//     if(count > acc[1]){
//       acc[1] = count;
//       acc[0] = curr;
//     }

//     prevLetter = curr;
//     return acc;
//   }, ['', 0]);
// }

// Clever solution:

// const longestRepetition = s => s ?
//   s.match(/(.)\1*/g)
//     .map((s, i) => [s[0], s.length, i])
//     .sort((a, b) => (b[1] - a[1]) || (a[2] - b[2]))[0]
//     .splice(0, 2) :
//   ['', 0];
