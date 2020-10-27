// Unlucky Days

// https://www.codewars.com/kata/56eb0be52caf798c630013c0

// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year as an integer.

// Output: Number of Black Fridays in the year as an integer.

// Examples:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1
// Note: In Ruby years will start from 1593.

function unluckyDays(year) {
  let result = 0;
  for (let i = 0; i < 12; i++) {
    let date13 = new Date(year, i, 13);
    if (date13.getDay() === 5) {
      result++;
    }
  }
  return result;
}

// Best Practices:

// function unluckyDays(year){
//   let unlucky = 0;
//   for (var i = 0; i < 12; i++) {
//     if(new Date(year, i, 13).getDay() === 5){
//       unlucky++;
//     }
//   }
//   return unlucky;
// }

// Clever solution:

// function unluckyDays(year){
//   return Array.from({ length: 12 }).filter((_, i) => new Date(year, i, 13).getDay() === 5).length
// }
