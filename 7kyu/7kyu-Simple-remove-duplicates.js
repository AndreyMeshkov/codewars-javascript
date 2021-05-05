// Simple remove duplicates

// https://www.codewars.com/kata/5ba38ba180824a86850000f7

// In this Kata, you will remove the left-most duplicates from a list of integers and return the result.

// // Remove the 3's at indices 0 and 3
// // followed by removing a 4 at index 1
// solve([3, 4, 4, 3, 6, 3]); // => [4, 6, 3]
// More examples can be found in the test cases.

// Good luck!

function solve(arr) {
  const result = [];
  arr.forEach((element, ind, array) => {
    if (ind === array.lastIndexOf(element)) {
      result.push(element);
    }
  });
  return result;
}

// Best practice and clever solution:

// function solve(arr){
//   return arr.filter((val,i) => arr.lastIndexOf(val) == i);
// }
