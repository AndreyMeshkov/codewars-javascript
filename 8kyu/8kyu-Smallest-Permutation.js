// Smallest Permutation

// https://www.codewars.com/kata/5fefee21b64cc2000dbfa875

// Given a number, find the permutation with the smallest absolute value (no leading zeros).

// -20 => -20
// -32 => -23
// 0 => 0
// 10 => 10
// 29394 => 23499
// The input will always be an integer.

function minPermutation(n) {
  const isPositive = n >= 0;
  let result = Math.abs(n).toString().split("").sort();
  if (result[0] === "0" && result[result.length - 1] !== "0") {
    let i = 1;
    while (true) {
      if (result[i] !== "0") {
        result[0] = result[i];
        result[i] = "0";
        break;
      }
      i++;
    }
  }
  result = parseInt(result.join(""));
  return isPositive ? result : -result;
}

// Best practice and clever solution:

// function minPermutation(n) {
//   let digits = n.toString().replace("-", "").split("");
//   digits = digits.sort((a,b) => {
//     if (a === b) {
//       return 0;
//     }
//     return a < b ? -1 : 1;
//   });
  
//   const firstNonZeroIndex = digits.findIndex(a => a !== "0");
//   if (firstNonZeroIndex !== 0) {
//     const firstNonZeroValue = digits.splice(firstNonZeroIndex, 1, "0")[0];  
//     digits.splice(0, 1, firstNonZeroValue);
//   }
  
//   const sign = n < 0 ? "-" : "";
//   return parseInt(sign + digits.join(""));
// }