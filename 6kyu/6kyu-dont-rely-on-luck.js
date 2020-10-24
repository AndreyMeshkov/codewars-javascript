// Don't rely on luck.

// https://www.codewars.com/kata/5268af3872b786f006000228

// The test fixture I use for this kata is pre-populated.

// It will compare your guess to a random number generated using:

// Math.floor(Math.random() * 100 + 1)
// You can pass by relying on luck or skill but try not to rely on luck.

// "The power to define the situation is the ultimate power." - Jerry Rubin

// Good luck!

var guess = 101;
Math.random = () => 1;

// Best Practices:

// Math.random = function(n){return 0;}
// var guess = 1;

// Clever solution:

// var guess = 10
// Math.floor = function(v) { return guess; }