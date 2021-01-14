// Multiplication table

// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function (size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(new Array(size).fill(1));
  }
  return arr.map((val, ind) =>
    val.map((el, index) => el * (index + 1) * (ind + 1))
  );
};

// Best practice:

// multiplicationTable = function(size) {
//   var result = [];

//   for (var i = 0; i < size; i++) {
//     result[i] = [];
//     for(var j = 0; j < size; j++) {
//       result[i][j] = (i + 1) * (j + 1);
//     }
//   }

//   return result
// }

// Clever solution:
// multiplicationTable = function(size) {

//   return Array.apply(null, new Array(size)).map(function(val, i) {
//     return Array.apply(null, new Array(size)).map(function(val, j) {
//       return (i+1) * (j+1);
//     });
//   });
// }
