// No oddities here

// https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce

// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

// function noOdds( values )

function noOdds(values) {
  return values.filter((val) => val % 2 === 0);
}

// Best practice and clever solution:

// function noOdds( values ){
//   function isEven(number){
//   return number%2 == 0;
//   }
  
//   return values.filter(isEven);
// }
