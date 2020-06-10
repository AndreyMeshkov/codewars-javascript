// Largest pair sum in array

// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] --> 42 (i.e. sum of 23 and 19)
// [99, 2, 2, 23, 19]  --> 122 (i.e. sum of 99 and 23)
// Input sequence contains minimum two elements and every element is an integer.

function largestPairSum(numbers) {
  numbers.sort(function (a, b) {
    return b - a;
  });
  return numbers[0] + numbers[1];
}
