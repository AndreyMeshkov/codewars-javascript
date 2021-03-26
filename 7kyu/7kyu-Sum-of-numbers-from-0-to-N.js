// Sum of numbers from 0 to N

// https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763

// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:
// Input:

// > 6
// Output:

// 0+1+2+3+4+5+6 = 21

// Input:

// > -15
// Output:

// -15<0

// Input:

// > 0
// Output:

// 0=0

var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    if (count === 0) {
      return "0=0";
    } else if (count < 0) {
      return `${count}<0`;
    } else {
      let str = "";
      let result = 0;
      for (let i = 0; i <= count; i++) {
        str += i + "+";
        result += i;
      }
      if (str.length > 5) {
        str = str.slice(0, -1) + ` = ${result}`;
      }
      return str;
    }
  };

  return SequenceSum;
})();

// Best practice:

// var SequenceSum = (function() {
//   function SequenceSum() {}

//   SequenceSum.showSequence = function(count) {
//     var sum = 0;
//     var str = "";
//     if (count === 0) {
//       return "0=0";
//     } else if (count < 0) {
//       return count + "<0";
//     } else {
//       for (var i = 0; i < count; i++) {
//         sum += i;
//         str += i + "+";
//       };
//     sum += count;
//     str += count + " = " + sum;
//     return str;
//     };
//   };

//   return SequenceSum;

// })();

// Clever solution:

// class SequenceSum {
//   static showSequence(n) {
//     return n < 0
//       ? `${n}<0`
//       : `${Array.from({length: n+1}, (v, k) => k).join('+')}${n?' = ':'='}${n*(n+1)/2}`;
//   }
// }