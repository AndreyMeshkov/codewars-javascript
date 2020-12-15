// Unfinished Loop - Bug Fixing #1

// https://www.codewars.com/kata/55c28f7304e3eaebef0000da

// Unfinished Loop - Bug Fixing #1
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

// function createArray(number){
//   var newArray = [];
  
//   for(var counter = 1; counter <= number;){
//     newArray.push(counter);
//   }
  
//   return newArray;
// }

function createArray(number) {
  var newArray = [];

  for (var counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;
}

// Best practice:

// function createArray(number){
//   var newArray = [];
  
//   for(var counter = 1; counter <= number; counter++){
//     newArray.push(counter);
//   }
  
//   return newArray;

// Clever solution:

// const createArray = n => Array(...Array(n)).map((v, i) => i + 1);
