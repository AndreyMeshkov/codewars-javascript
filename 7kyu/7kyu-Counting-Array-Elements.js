// Counting Array Elements

// https://www.codewars.com/kata/counting-array-elements

// Write a function that takes an array and counts the number of each unique element present.

// count(['james', 'james', 'john'])
// #=> { 'james': 2, 'john': 1}

function count(array) {
  const obj = new Object();
  array.forEach((val) => {
    obj[val] ? obj[val]++ : (obj[val] = 1);
  });
  return obj;
}

// Best practice and clever solution:

// function count(array){
//     return array.reduce(function (stack, value) {
//       return stack[value] ? stack[value]++ : stack[value] = 1, stack;
//     }, {});
//   }
