// Ordered Count of Characters

// Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

var orderedCount = function (text) {
  let arr = text.split("");
  let newArr = [];
  while (arr.length > 0) {
    let filterArr = arr.filter((val) => val === arr[0]);
    newArr.push([arr[0], filterArr.length]);
    arr = arr.filter((val) => val !== arr[0]);
  }
  return newArr;
};
