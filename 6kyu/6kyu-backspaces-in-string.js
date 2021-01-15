// Backspaces in string;

// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3

// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      if (i === 0) {
        s = s.slice(1);
        i--;
      } else {
        s = s.slice(0, i - 1) + s.slice(i + 1);
        if (i > 0) {
          i -= 2;
        }
      }
    }
  }
  return s;
}

// Best practice:

// function clean_string(s) {
//   const result = []
//   for (const c of s) {
//     if (c === "#") {
//       result.pop()
//     } else {
//       result.push(c)
//     }
//   }
//   return result.join("")
// }

// Clever solution:

// clean_string = s => s.split('').reduce((r, e) => e == '#' ? r.slice(0, -1) : r + e, '');
