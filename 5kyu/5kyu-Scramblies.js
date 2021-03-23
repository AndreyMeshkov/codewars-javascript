// Scramblies

// https://www.codewars.com/kata/55c04b4cc56a697bb0000048

// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// function scramble(str1, str2) {
//   for (let i = 0; i < str2.length; i++) {
//     if (str1.includes(str2[i])) {
//       str1 =
//         str1.slice(0, str1.indexOf(str2[i])) +
//         str1.slice(str1.indexOf(str2[i]) + 1);
//       console.log(str1);
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

function scramble(str1, str2) {
  const obj1 = {};
  const obj2 = {};
  str1.split("").forEach((val) => (obj1[val] ? obj1[val]++ : (obj1[val] = 1)));
  str2.split("").forEach((val) => (obj2[val] ? obj2[val]++ : (obj2[val] = 1)));
  for (prop in obj2) {
    if (obj2[prop] > obj1[prop] || !obj1[prop]) {
      return false;
    }
  }
  return true;
}

// Best practice and clever solution:

// function scramble(str1, str2) {
//     let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
//     return str2.split("").every((character) => --occurences[character] >= 0);
//   }
