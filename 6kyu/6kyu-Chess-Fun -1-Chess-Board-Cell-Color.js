// Chess Fun #1: Chess Board Cell Color

// https://www.codewars.com/kata/5894134c8afa3618c9000146

// Task
// Given two cells on the standard chess board, determine whether they have the same color or not.

// Example
// For cell1 = "A1" and cell2 = "C3", the output should be true.

// For cell1 = "A1" and cell2 = "H3", the output should be false.

// Input/Output
// [input] string cell1

// [input] string cell2

// [output] a boolean value

// true if both cells have the same color, false otherwise.

function chessBoardCellColor(cell1, cell2) {
  const sum =
    Math.abs(cell1.charCodeAt(0) - cell2.charCodeAt(0)) +
    Math.abs(parseInt(cell1[1]) - parseInt(cell2[1]));
  return sum % 2 === 0;
}

// Best practice and clever solution:

// function chessBoardCellColor(cell1, cell2) {
//   return squareColor(cell1) == squareColor(cell2);
// }

// function squareColor(name) {
//   return name.charCodeAt(0) + name.charCodeAt(1) & 1;
// }
