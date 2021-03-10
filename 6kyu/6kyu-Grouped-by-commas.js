// Grouped by commas

// https://www.codewars.com/kata/5274e122fc75c0943d000148

// Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

// Assume: 0 <= n < 2147483647

// Examples
//        1  ->           "1"
//       10  ->          "10"
//      100  ->         "100"
//     1000  ->       "1,000"
//    10000  ->      "10,000"
//   100000  ->     "100,000"
//  1000000  ->   "1,000,000"
// 35235235  ->  "35,235,235"

function groupByCommas(n) {
  const str = n.toString();
  const num = str.length % 3;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if ((i + 1) % 3 === num && str.length > 3 && i !== str.length - 1) {
      result += `${str[i]},`;
    } else {
      result += str[i];
    }
  }
  return result;
}

// Best practice and clever solution:

// function groupByCommas(n) {
//   return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }
