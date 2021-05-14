// Enumerable Magic #3 - Does My List Include This?

// https://www.codewars.com/kata/545991b4cbae2a5fda000158

// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

function include(arr, item) {
  return arr.includes(item);
}

// Best practice:

// function include(arr, item){
//   return arr.includes(item);
// }

// Clever solution:

// function include(arr, item) {
//   return arr.indexOf(item) !== -1;
// }
