// Numbers to Letters

// https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c

// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

function switcher(x) {
  const alphabet = [
    "z",
    "y",
    "x",
    "w",
    "v",
    "u",
    "t",
    "s",
    "r",
    "q",
    "p",
    "o",
    "n",
    "m",
    "l",
    "k",
    "j",
    "i",
    "h",
    "g",
    "f",
    "e",
    "d",
    "c",
    "b",
    "a",
    "!",
    "?",
    " ",
  ];
  return x.reduce((acc, cur) => acc + alphabet[cur - 1], "");
}

// Best practice:

// const alpha = ' zyxwvutsrqponmlkjihgfedcba!? '
// const switcher = x => x.map(item => alpha[item]).join('')

// Clever solution:

// const switcher=x=>x.reduce((a,b)=>a+" ?!abcdefghijklmnopqrstuvwxyz"[29-b],"")
