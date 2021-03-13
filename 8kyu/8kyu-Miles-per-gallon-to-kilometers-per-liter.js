// Miles per gallon to kilometers per liter

// https://www.codewars.com/kata/557b5e0bddf29d861400005d

// Sometimes, I want to quickly be able to convert miles per imperial gallon into kilometers per liter.

// Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

// Make sure to round off the result to two decimal points. If the answer ends with a 0, it should be rounded off without the 0. So instead of 5.50, we should get 5.5.

// Some useful associations relevant to this kata: 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres

// function converter(mpg) {
//   return parseFloat((mpg / (4.54609188 / 1.609344)).toFixed(2));
// }

// Best practice:

// var LITRES_PER_GALLON = 4.54609188;
// var KILOMETERS_PER_MILE = 1.609344;
// function converter (mpg) {
//   return Math.round(100 * mpg * KILOMETERS_PER_MILE / LITRES_PER_GALLON) / 100;
// }

// Clever solution:

// function converter (mpg) {
//   return +(mpg * .354006043538).toFixed(2)
// }
