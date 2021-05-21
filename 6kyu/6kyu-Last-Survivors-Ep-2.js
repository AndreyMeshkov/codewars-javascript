// Last Survivors Ep.2

// https://www.codewars.com/kata/60a1aac7d5a5fc0046c89651

// Substitute two equal letters by the next letter of the alphabet (two letters convert to one):

// "aa" => "b", "bb" => "c", .. "zz" => "a".
// The equal letters do not have to be adjacent.
// Repeat this operation until there are no possible substitutions left.
// Return a string.

// Example:

// let str = "zzzab"
//     str = "azab"
//     str = "bzb"
//     str = "cz"
// return "cz"
// Notes
// The order of letters in the result is not important.
// The letters "zz" transform into "a".
// There will only be lowercase letters.
// If you like this kata, check out another one: Last Survivor Ep.3

function lastSurvivors(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const arr = str.split("");
  while (arr.length > new Set([...arr]).size) {
    for (let i = 0; i < arr.length; i++) {
      if (i !== arr.lastIndexOf(arr[i])) {
        arr.splice(arr.lastIndexOf(arr[i]), 1);
        arr[i] = alphabet[(alphabet.indexOf(arr[i]) + 1) % 26];
        i--;
      }
    }
  }
  return arr.join("");
}

// Best practice:

// function lastSurvivors(string) {
//   const cnt = Array(26).fill(0);

//   for (let i = 0; i < string.length; i++)
//     cnt[string.charCodeAt(i) - 97]++;

//   for (let flag = true; flag;) {
//     flag = false;
//     for (let i = 0; i < 26; i++)
//       if (cnt[i] > 1) {
//         cnt[(i + 1) % 26] += cnt[i] >> 1;
//         cnt[i] &= 1;
//         flag = i == 25;
//       }
//   }
//   let result = "";
//   for (let i = 0; i < 26; i++) if (cnt[i])
//     result += String.fromCharCode(i + 97);
//   return result;
// }

// Clever solution:

// function lastSurvivors(str) {
//   let ch=v=>String.fromCharCode(v.charCodeAt(0)+1).replace("{","a");
//   let r = /([a-z])(.*?)\1/;
//   while (r.test(str)) str=str.replace(r,(a,b,c)=>ch(b)+c);
//   return str;
// }
