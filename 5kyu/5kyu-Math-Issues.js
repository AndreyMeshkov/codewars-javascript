// Math Issues

// https://www.codewars.com/kata/5267faf57526ea542e0007fb

// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()

Math.round = function (number) {
  return number % 1 >= 0.5
    ? number + (1 - (number % 1))
    : number - (number % 1);
};

Math.ceil = function (number) {
  return number % 1 ? number + (1 - (number % 1)) : number;
};

Math.floor = function (number) {
  return number - (number % 1);
};

// Best practice:

// Math.round = function(number) {
//   return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number) ;
// };

// Math.ceil = function(number) {
//   return (parseInt(number) === number) ? number : parseInt(number) + 1;
// };

// Math.floor = function(number) {
//   return parseInt(number);
// };

// Clever solution:

// Math.round = function(number) {
//   return Math.floor(number + 0.5);
// };

// Math.ceil = function(number) {
//   return (number | 0) + (number % 1 !== 0 ? 1 : 0);
// };

// Math.floor = function(number) {
//   return number | 0;
// };
