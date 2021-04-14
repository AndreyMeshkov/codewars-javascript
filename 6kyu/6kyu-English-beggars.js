// English beggars

// https://www.codewars.com/kata/59590976838112bfea0000fa

// Born a misinterpretation of this kata, your task here is pretty simple: given an array of values and an amount of beggars, you are supposed to return an array with the sum of what each beggar brings home, assuming they all take regular turns, from the first to the last.

// For example: [1,2,3,4,5] for 2 beggars will return a result of [9,6], as the first one takes [1,3,5], the second collects [2,4].

// The same array with 3 beggars would have in turn have produced a better out come for the second beggar: [5,7,3], as they will respectively take [1,4], [2,5] and [3].

// Also note that not all beggars have to take the same amount of "offers", meaning that the length of the array is not necessarily a multiple of n; length can be even shorter, in which case the last beggars will of course take nothing (0).

// Note: in case you don't get why this kata is about English beggars, then you are not familiar on how religiously queues are taken in the kingdom ;)

// Note 2: do not modify the input array.

function beggars(values, n) {
  if (n === 0) {
    return [];
  }
  let arr = [];
  for (let i = 0; i < values.length; i++) {
    if (arr[i % n]) {
      arr[i % n] += values[i];
    } else {
      arr.push(values[i]);
    }
  }
  if (n > values.length) {
    arr = [...arr, ...new Array(n - values.length).fill(0)];
  }
  return arr;
}

// Best practice:

// function beggars(values, n){
//   var outputValues = [];
//   for (var i = 0; i < n; i++) {
//     var sum = 0;
//     for (var j = i; j < values.length; j += n) {
//       sum += values[j];
//     }
//     outputValues.push(sum);
//   }
//   return outputValues;
// }

// Clever solution:

// function beggars(values, n){
//   var out = Array.from("0".repeat(n)).map(Number)
//   for(var i=0;i<values.length;i++){
//     out[i%n] += values[i]
//   }
//   return out
// }
