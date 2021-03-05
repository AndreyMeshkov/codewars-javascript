// Highest Rank Number in an Array

// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004

// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr) {
  const obj = {};
  arr.forEach((val) => (obj[val] = obj[val] ? obj[val] + 1 : 1));
  let num = 0;
  let result = 0;
  for (prop in obj) {
    if (obj[prop] > num) {
      num = obj[prop];
      result = prop;
    } else if (obj[prop] === num) {
      if (prop > result) {
        num = obj[prop];
        result = prop;
      }
    }
  }
  return +result;
}

// Best practice:

// function highestRank(arr){
//   var obj = {};
//   arr.forEach(function(elem){
//      if(obj[elem] === undefined)
//        obj[elem] = 0;
//      obj[elem]++;
//   });
//   var keys = Object.keys(obj), highest = 0, key;
//   keys.forEach(function(elem){
//      if(obj[elem] >= highest)
//      {
//         highest = obj[elem];
//         key = elem;
//      }
//   })
//   return parseInt(key);
// }

// function highestRank(arr){
//   return arr.sort((a,b)=>arr.filter(i=>i===b).length - arr.filter(i=>i===a).length)[0];
// }
