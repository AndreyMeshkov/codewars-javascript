// Find Nearest square number

// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba

// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

// Goodluck :)

function nearestSq(n) {
  return Math.round(Math.sqrt(n)) ** 2;
}

// Best practice:

// const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);

// Clever solution:

// function nearestSq(n){
//   return Math.round(n**0.5)**2
// }
