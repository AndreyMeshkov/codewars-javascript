// Substituting Variables Into Strings: Padded Numbers

// https://www.codewars.com/kata/51c89385ee245d7ddf000001

// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"

function solution(value) {
  const str = value.toString().padStart(5, "0");
  return `Value is ${str}`;
}

// Best practice and clever solution:

// function solution(value){
//   return "Value is " + ("00000" + value).slice(-5);
// }
