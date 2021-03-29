// Sort Arrays (Ignoring Case)

// https://www.codewars.com/kata/51f41fe7e8f176e70d0002b9

// Sort the given strings in alphabetical order, case insensitive. For example:

// ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
// ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]

// input: names - unsorted strings
// output: case-agnostic sort
sortme = function (names) {
  const arr = [...names.map((val) => val.toUpperCase()).sort()];
  for (let i = 0; i < names.length; i++) {
    arr[arr.indexOf(names[i].toUpperCase())] = names[i];
  }
  return arr;
};

// Best practice and clever solution:

// // input: names - unsorted strings
// // output: case-agnostic sort
// sortme = function( names ){
//   return names.sort(function(first, second) {
//     return first.toLowerCase().localeCompare(second.toLowerCase())
//   })
// }
