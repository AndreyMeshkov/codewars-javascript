// Pascal's Triangle #2

// https://www.codewars.com/kata/52945ce49bb38560fe0001d9/train/javascript

// Here you will create the classic Pascal's triangle. Your function will be passed the depth of the triangle and you code has to return the corresponding pascal triangle up to that depth.

// The triangle should be returned as a nested array. For example:

// pascal(5) // should return [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]
// To build the triangle, start with a single 1 at the top, for each number in the next row you just take the two numbers above it and add them together (except for the edges, which are all 1), e.g.:

//               [1]
//             [1   1]
//           [1   2   1]
//         [1   3   3   1]

function pascal(depth) {
  const result = [[1], [1, 1]];
  if (depth === 1) {
    return [[1]];
  } else if (depth === 2) {
    return result;
  }
  while (depth > 2) {
    const arr = [];
    for (let i = 0; i < result[result.length - 1].length - 1; i++) {
      arr.push(result[result.length - 1][i] + result[result.length - 1][i + 1]);
    }
    arr.push(1);
    arr.unshift(1);
    result.push(arr);
    depth--;
  }
  return result;
}

// Best practice:

// function pascal(depth) {
//   var result = []
//   for (var i = 1; i <= depth; ++i) {
//     var row = []
//     for (var j = 0; j < i; ++j) {
//       row.push(j == 0 || j == i - 1 ? 1 : result[i-2][j-1] + result[i-2][j])
//     }
//     result.push(row)
//   }
//   return result
// }

// Clever solution:

// function pascal(depth) {
//   var x = depth == 1 ? [] : pascal(depth-1);
//   return x.push(Array.apply(null, { length: depth }).map(function(o, i) {
//     return i == 0 || i == depth-1 ? 1 : x[depth-2][i-1] + x[depth-2][i];
//   })), x;
// }
