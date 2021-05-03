// Basic Math (Add or Subtract)

// https://www.codewars.com/kata/5809b62808ad92e31b000031

// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

// Examples
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"

function calculate(str) {
  const numbers = str.split(/plus|minus/);
  const operations = str.split(/\d+/);
  operations[0] = "plus";
  let result = 0;
  for (let i = 0; i < operations.length - 1; i++) {
    if (operations[i] === "plus") {
      result += Number(numbers[i]);
    } else {
      result -= Number(numbers[i]);
    }
  }
  return result.toString();
}

// Best practice and clever solution:

// function calculate(str) {

//   return eval(str.replace(/plus/gi, '+').replace(/minus/gi, '-')).toString();
// }
