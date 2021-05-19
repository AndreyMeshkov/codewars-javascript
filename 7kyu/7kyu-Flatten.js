// Flatten

// https://www.codewars.com/kata/5250a89b1625e5decd000413

// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

var flatten = function (array) {
  const res = [];
  array.forEach((element) =>
    Array.isArray(element)
      ? element.forEach((val) => res.push(val))
      : res.push(element)
  );
  return res;
};

// Best practice and clever solution:

// var flatten = function (lol){
//   return [].concat.apply([],lol);
// }
