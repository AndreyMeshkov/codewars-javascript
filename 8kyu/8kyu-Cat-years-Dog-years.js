// Cat years, Dog years

// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b

// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var humanYearsCatYearsDogYears = function (humanYears) {
  if (humanYears === 1) {
    return [humanYears, 15, 15];
  } else if (humanYears === 2) {
    return [humanYears, 24, 24];
  } else {
    return [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
  }
};

// Best practice:

// var humanYearsCatYearsDogYears = function(y) {
//   if (y == 1) return [1, 15, 15]
//   if (y == 2) return [2, 24, 24]
//   return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
// }

// Clever solution:

// const humanYearsCatYearsDogYears = humanYears => [
//   humanYears,
//   ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
//   ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
// ];
