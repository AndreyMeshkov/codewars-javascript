// Twice as old

// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}

// Best practice and clever solution:

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//     return Math.abs(dadYearsOld - 2 * sonYearsOld);
//   }
