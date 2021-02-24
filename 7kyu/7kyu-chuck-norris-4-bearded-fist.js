// Chuck Norris IV - Bearded Fist

// https://www.codewars.com/kata/57066708cb7293901a0013a1

// It has long been rumoured that behind Chuck's beard is not a chin, but another fist!

// When shaving, Chuck accidentally punched himself in the face. He is the only man that could take that punch without dying, but that doesn't mean it didn't sting! Chuck can't remember a thing - he needs your help!!

// Hidden within the provided array of arrays are numbers that represent the letters of the words for some of Chuck's favourite things! Your job is to translate them, and return the words so that Chuck can get back to the business of punching and kicking things.

function fistBeard(arr) {
  let result = "";
  arr.map((val) => (result += String.fromCharCode(...val)));
  return result;
}

// Best practice and clever solution:

// const fistBeard = arr => String.fromCharCode(...[].concat(...arr));
