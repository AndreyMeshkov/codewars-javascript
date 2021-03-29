// Sorted? yes? no? how?

// https://www.codewars.com/kata/580a4734d6df748060000045

// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
  let obj = {
    descending: 0,
    ascending: 0,
  };
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] >= array[i + 1]) {
      obj.descending++;
    } else if (array[i] < array[i + 1]) {
      obj.ascending++;
    }
  }
  const str = obj.descending > obj.ascending ? "descending" : "ascending";
  return Math.max(obj.descending, obj.ascending) + 1 === array.length
    ? `yes, ${str}`
    : "no";
}

// Best practice and clever solution:

// function isSortedAndHow(arr) {
//   return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
//          arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
// }
