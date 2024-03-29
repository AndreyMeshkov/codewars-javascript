// Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?

// https://www.codewars.com/kata/58381907f8ac48ae070000de

// You will be given an array of objects representing data about developers who have signed up to attend the next web development meetup that you are organising. Three programming languages will be represented: Python, Ruby and JavaScript.

// Your task is to return either:

// true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
// false otherwise.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
//   { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
//   { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
// ];
// your function should return false as the number of JavaScript developers (3) is 3 times higher than the number of Python developers (1). It can't be more than 2 times higher to be regarded as language-diverse.

// Notes:

// The strings representing all three programming languages will always be formatted in the same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.
// The input array will always be valid and formatted as in the example above.
// Each of the 3 programming languages will always be represented.

// This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex. Other approaches to solving the katas are of course possible.

function isLanguageDiverse(list) {
  const numJsDev = list.filter((val) => val.language === "JavaScript").length;
  const numPythonDev = list.filter((val) => val.language === "Python").length;
  const numRubyDev = list.filter((val) => val.language === "Ruby").length;
  const arr = [numJsDev, numPythonDev, numRubyDev].sort((a, b) => a - b);
  return arr[0] * 2 >= arr[2];
}

// Best practice:

// function isLanguageDiverse(list) {
//   var counts = {}
//   ,     min = Number.MAX_VALUE
//   ,     max = 0;

//   for (var dev of list)
//     counts[dev.language] = (counts[dev.language] || 0) + 1;

//   for (var lang in counts) {
//     min = Math.min(counts[lang], min);
//     max = Math.max(counts[lang], max);
//   }

//   return max <= 2 * min;
// }

// Clever solution:

// const isLanguageDiverse = list => {
//   list = [list.filter(a=>a.language==='Python').length,list.filter(a=>a.language==='Ruby').length,list.filter(a=>a.language==='JavaScript').length]
//   return Math.max.apply(null,list)/Math.min.apply(null,list) <= 2
// }
