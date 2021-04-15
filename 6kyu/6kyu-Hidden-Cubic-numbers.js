// Hidden "Cubic" numbers

// https://www.codewars.com/kata/55031bba8cba40ada90011c4

// We search non-negative integer numbers, with at most 3 digits, such as the sum of the cubes of their digits is the number itself; we will call them "cubic" numbers.

// 153 is such a "cubic" number : 1^3 + 5^3 + 3^3 = 153
// These "cubic" numbers of at most 3 digits are easy to find, even by hand, so they are "hidden" with other numbers and characters in a string.

// The task is to find, or not, the "cubic" numbers in the string and then to make the sum of these "cubic" numbers found in the string, if any, and to return a string such as:

// "number1 number2 (and so on if necessary) sumOfCubicNumbers Lucky"
// if "cubic" numbers number1, number2, ... were found.

// The numbers in the output are to be in the order in which they are encountered in the input string.

// If no cubic numbers are found return the string: `"Unlucky"``.

// Examples:
//  - s = "aqdf&0#1xyz!22[153(777.777"
//    the groups of at most 3 digits are 0 and 1 (one digit), 22 (two digits), 153, 777, 777 (3 digits)
//    Only 0, 1, 153 are cubic and their sum is 154
//    Return: "0 1 153 154 Lucky"

// - s = "QK29a45[&erui9026315"
//   the groups are 29, 45, 902, 631, 5. None is cubic.
//   Return: "Unlucky"
// Notes
// In the string "001234" where 3 digits or more follow each other the first group to examine is "001" and the following is "234". If a packet of at most three digits has been taken, whether or not "cubic", it's over for that packet.

// When a continuous string of digits exceeds 3, the string is split into groups of 3 from the left. The last grouping could have 3, 2 or 1 digits.

// e.g "24172410" becomes 3 strings comprising "241", "724" and "10"

// e.g "0785" becomes 2 strings comprising "078" and "5".

function isSumOfCubes(s) {
  const arr = s.split(/\D/).filter((val) => val);
  const num = [];
  for (let i = 0; i < arr.length; i++) {
    while (arr[i].length > 3) {
      num.push(arr[i].slice(0, 3));
      arr[i] = arr[i].slice(3);
    }
    num.push(arr[i]);
  }
  const numLength = num.length;
  const cubes = num
    .filter(
      (val) =>
        parseInt(val) === val.split("").reduce((acc, cur) => acc + cur ** 3, 0)
    )
    .map((val) => parseInt(val));
  if (numLength === 0 || cubes.length === 0) {
    return "Unlucky";
  }
  return `${cubes.join(" ")} ${cubes.reduce(
    (acc, cur) => acc + parseInt(cur),
    0
  )} Lucky`;
}

// Best practice:

// function isSumOfCubes(s){
//   let s1 = s.match(/\d\d\d|\d\d|\d/g);
//    s1 = s1.filter(function(a){
//     if (a.split('').reduce((ac,n)=>ac+n*n*n,0) == Number(a)){
//       return a
//     }
//   })
//    return s1.length != 0 ? `${s1.map(a=> a ==='000' ? '0' : a).join(' ')} ${s1.reduce((a,c) => a + Number(c), 0)} Lucky` : "Unlucky"
// }

// Clever solution:

// function isSumOfCubes(s) {
//   console.log(s);
//     let m = s.match(/\d{1,3}/g) || [];
//     m = m.map(Number).filter(n => lucky[n]);
//     if(!m.length) return 'Unlucky';
//     let sum = m.reduce((s, n) => s + n);
//     return `${m.join(' ')} ${sum} Lucky`;
//   }

//   let lucky = {
//     0: true,
//     1: true,
//     153: true,
//     370: true,
//     371: true,
//     407: true
//   }
