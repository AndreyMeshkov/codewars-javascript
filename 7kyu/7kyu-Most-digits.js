// Most digits

// https://www.codewars.com/kata/58daa7617332e59593000006

// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array) {
  const arr = array.map((val) => val.toString().length);
  const maxLength = Math.max(...arr);
  const ind = arr.indexOf(maxLength);
  return array[ind];
}

// Best practice and clever solution:

// const findLongest = l => l
//   .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);
