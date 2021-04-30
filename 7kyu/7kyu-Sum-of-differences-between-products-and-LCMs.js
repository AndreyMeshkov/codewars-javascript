// Sum of differences between products and LCMs

// https://www.codewars.com/kata/56e56756404bb1c950000992

// In this kata you need to create a function that takes a 2D array/list of non-negative integer pairs and returns the sum of all the "saving" that you can have getting the LCM of each couple of number compared to their simple product.

// For example, if you are given:

// [[15,18], [4,5], [12,60]]
// Their product would be:

// [270, 20, 720]
// While their respective LCM would be:

// [90, 20, 60]
// Thus the result should be:

// (270-90)+(20-20)+(720-60)==840
// This is a kata that I made, among other things, to let some of my trainees familiarize with the euclidean algorithm, a really neat tool to have on your belt ;)

function gcd(x, y) {
  return x === 0 ? y : gcd(y % x, x);
}
function lcm(x, y) {
  return x * y === 0 ? 0 : (x * y) / gcd(x, y);
}

function sumDifferencesBetweenProductsAndLCMs(pairs) {
  return pairs
    .map((val) => val[0] * val[1] - lcm(val[0], val[1]))
    .reduce((acc, cur) => acc + cur, 0);
}

// Best practice and clever solution:

// function sumDifferencesBetweenProductsAndLCMs(pairs){
//   const gcd = (x,y) => x == 0 ? y : gcd(y % x, x)
//   const lcm = (x,y) => x * y == 0 ? 0 : x * y / gcd(x,y)
//   return pairs.map(c => c[0] * c[1] - lcm(c[0],c[1])).reduce((a,c) => a + c, 0);
// }
