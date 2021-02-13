// Multiplication Tables

// https://www.codewars.com/kata/5432fd1c913a65b28f000342

// Create a function that accepts dimensions, of Rows x Columns, as parameters in order to create a multiplication table sized according to the given dimensions. **The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.

// Example:

// multiplication_table(3,3)

// 1 2 3
// 2 4 6
// 3 6 9

// -->[[1,2,3],[2,4,6],[3,6,9]]

// Each value on the table should be equal to the value of multiplying the number in its first row times the number in its first column.

function multiplicationTable(row, col) {
  let arr = new Array(row).fill();
  arr = arr.map((val) => (val = new Array(col).fill()));
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      arr[i][j] = (i + 1) * (j + 1);
    }
  }
  return arr;
}

// Best practice:

// function multiplicationTable(row,col){
//   out = []
//   for (var i = 1; i <= row; i++)
//   {
//     temp = []
//     // console.log(temp)
//     for (var j = 1; j <= col; j++)
//     {
//       temp.push(i*j)
//     }
//     out.push(temp)
//   }
//   return out
// }

// Clever solution:

// const multiplicationTable = (row, col) => Array(...Array(row)).map((_, i) => Array(...Array(col)).map((_, j) => (i + 1) * (j + 1)));
