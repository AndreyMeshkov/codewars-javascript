// Area of a Square

// https://www.codewars.com/kata/5748838ce2fab90b86001b1a

// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

function squareArea(A) {
  return Number((((2 * A) / Math.PI) ** 2).toFixed(2));
}

// Best practice:

// function squareArea(A){
//   var circum = 4 * A;
//   var radius = circum / (2 * Math.PI);
//   var area = Math.pow(radius, 2);
//   return Math.round(area*100)/100
// }

// Clever solution:

// squareArea = A => +Math.pow((2 * A / 3.1416), 2).toFixed(2);
