// Triangle type

// https://www.codewars.com/kata/53907ac3cd51b69f790006c5

// In this kata, you should calculate type of triangle with three given sides a, b and c (given in any order).

// If all angles are less than 90°, this triangle is acute and function should return 1.

// If one angle is strictly 90°, this triangle is right and function should return 2.

// If one angle more than 90°, this triangle is obtuse and function should return 3.

// If three sides cannot form triangle, or one angle is 180° (which turns triangle into segment) - function should return 0.

// Input parameters are sides of given triangle. All input values are non-negative floating point or integer numbers (or both).

// Acute

// Right

// Obtuse
// Examples:
// triangleType(2, 4, 6); // return 0 (Not triangle)
// triangleType(8, 5, 7); // return 1 (Acute, angles are approx. 82°, 38° and 60°)
// triangleType(3, 4, 5); // return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
// triangleType(7, 12, 8); // return 3 (Obtuse, angles are approx. 34°, 106° and 40°)
// If you stuck, this can help you: http://en.wikipedia.org/wiki/Law_of_cosines. But you can solve this kata even without angle calculation.

// There is very small chance of random test to fail due to round-off error, in such case resubmit your solution.

/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
function triangleType(a, b, c) {
  if (a >= c + b || b >= a + c || c >= a + b) {
    return 0;
  }
  const angleA =
    Math.acos((b ** 2 + c ** 2 - a ** 2) / (2 * b * c)) * (180 / Math.PI);
  const angleB =
    Math.acos((a ** 2 + c ** 2 - b ** 2) / (2 * a * c)) * (180 / Math.PI);
  const angleC =
    Math.acos((b ** 2 + a ** 2 - c ** 2) / (2 * b * a)) * (180 / Math.PI);
  if (angleA === 90 || angleB === 90 || angleC === 90) {
    return 2;
  } else if (angleA > 90 || angleB > 90 || angleC > 90) {
    return 3;
  } else {
    return 1;
  }
}

// Best practice:

// function triangleType(a, b, c){
//   var result = triangleType.ACUTE,
//       sides = [a,b,c].sort(function(a,b){return a-b});

//   a = sides[0], b = sides[1], c = sides[2];

//   if(a <= c - b) {
//     result = triangleType.INVALID;

//   } else if(c*c === a*a + b*b) {
//     result = triangleType.RIGHT;

//   } else if(c*c > a*a + b*b) {
//     result = triangleType.OBTUSE;
//   }

//   return result;
// }

// triangleType.INVALID = 0;
// triangleType.ACUTE = 1;
// triangleType.RIGHT = 2;
// triangleType.OBTUSE = 3;

// Clever solution:

// function triangleType(a, b, c){
//   var max = Math.max(a,b,c);

//   if (a+b+c <= 2*max) return 0;
//   if (2*max*max == a*a+b*b+c*c) return 2;
//   if (2*max*max >  a*a+b*b+c*c) return 3;
//   return 1;
// }
