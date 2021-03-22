// +1 Array

// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9

// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]

function upArray(arr) {
  if (
    arr.length === 0 ||
    arr.filter((val) => val < 0 || val % 1 !== 0 || val > 9).length > 0
  ) {
    return null;
  }
  if (parseInt(arr.join("")) >= Number.MAX_SAFE_INTEGER) {
    const arr1 = arr.slice(0, Math.ceil(arr.length / 2));
    const arr2 = arr.slice(Math.ceil(arr.length / 2));
    return [...arr1, ...upArray(arr2)];
  } else {
    return (parseInt(arr.join("")) + 1)
      .toString()
      .split("")
      .map((val) => parseInt(val));
  }
}

// Best practice:

// function upArray(arr) {

//     if ((typeof arr === 'undefined') || (arr === null) || (arr.length === 0)) {
//         return null;
//     }

//     for (var i = 0; i < arr.length; i++) {
//         if ((arr[i] < 0) || (typeof arr[i] !== 'number') || (arr[i] > 9)) {
//             return null;
//         }
//     }
//     // if its 9 and more than one digit we have to check all previous digits
//     // whether they are also a 9
//     for (var j = arr.length - 1; j > -1; j--) {

//         if (arr[j] !== 9) {
//             arr[j] = arr[j] + 1;
//             break;
//         } else {
//             arr[j] = 0;
//         }

//         if (j === 0) {
//             arr.unshift(1);
//         }
//     }

//     return arr;
// }

// Clever solution:

// const BigNumber = require('bignumber.js');

// const upArray = arr =>
//   arr.length === 0 || arr.filter(x => x < 0 || x > 9).length > 0
//     ? null
//     : (new BigNumber(arr.join('')).plus(1))
//         .toPrecision()
//         .split('')
//         .map(Number);
