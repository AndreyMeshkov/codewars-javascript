// Is there a vowel in there?

// https://www.codewars.com/kata/57cff961eca260b71900008f

// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a) {
  const vowels = ["a", "e", "i", "o", "u"];
  const vowelsCode = vowels.map((val) => val.charCodeAt());
  return a.map((val) =>
    vowelsCode.includes(val) ? String.fromCharCode(val) : val
  );
}

// Best practice:

// function isVow(a){
//   for (var i=0, l=a.length; i<l; ++i)
//   {
//     var char = String.fromCharCode(a[i])
//     if ('aeiou'.indexOf(char) !== -1)
//     a[i] = char;
//   }

//   return a;
// }

// Clever solution:

// const isVow = a => a.map(x=>'aeiou'.includes(y=String.fromCharCode(x)) ? y : x)
