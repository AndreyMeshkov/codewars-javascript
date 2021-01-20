// Super Duper Easy

// https://www.codewars.com/kata/55a5bfaa756cfede78000026

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x) {
  if (typeof x !== "number") return "Error";
  return x * 50 + 6;
}

// Best practice:

// const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;

// Clever solution:

// function problem(x){
//   return x===+x?50*x+6:'Error'
// }
