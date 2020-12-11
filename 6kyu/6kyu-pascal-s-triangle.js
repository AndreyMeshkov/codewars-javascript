// Pascal's Triangle

// https://www.codewars.com/kata/5226eb40316b56c8d500030f

// In mathematics, Pascal's triangle is a triangular array of the binomial coefficients expressed with formula

// (nk)=n!k!(n−k)!\lparen {n \atop k} \rparen = \frac {n!} {k!(n-k)!}(
// k
// n
// ​
//  )=
// k!(n−k)!
// n!
// ​

// where n denotes a row of the triangle, and k is a position of a term in the row.

// You can read Wikipedia article on Pascal's Triangle for more information.

// Task
// Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.

// Example:
// n = 1: [1]
// n = 2: [1,  1, 1]
// n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]
// Note
// Beware of overflow. Requested terms of a triangle are guaranteed to fit into the returned type, but depending on seleced method of calculations, intermediate values can be larger.

function pascalsTriangle(n) {
  if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1, 1, 1];
  } else {
    let prevLine = [1, 1];
    let result = [1, 1, 1];
    for (let i = 3; i <= n; i++) {
      let newLine = [];
      for (j = 0; j < prevLine.length - 1; j++) {
        newLine.push(prevLine[j] + prevLine[j + 1]);
      }
      prevLine = [1, ...newLine, 1];
      result = [...result, ...prevLine];
    }
    return result;
  }
}

// Best practice:

// function pascalsTriangle(n) {
//   var pascal = [];
//   var idx = 0;

//   for ( var i = 0; i < n; i++ ) {
//     idx = pascal.length - i;
//     for ( var j = 0; j < i+1; j++ ) {
//       if ( j === 0 || j === i ) {
//         pascal.push(1);
//       } else {
//         pascal.push( pascal[ idx+j ] + pascal[ idx+j-1 ] );
//       }
//     }
//   }

//   return pascal;
// }

// Clever solution:

// function pascalsTriangle(n) {
//   if (n === 1) {
//     return [1];
//   }
//   var prev = pascalsTriangle(n - 1), len = prev.length;
//   prev.push(1);
//   for (var i = len - n + 1; i < len - 1; i ++) {
//     prev.push(prev[i] + prev[i + 1]);
//   }
//   prev.push(1);
//   return prev;
// }
