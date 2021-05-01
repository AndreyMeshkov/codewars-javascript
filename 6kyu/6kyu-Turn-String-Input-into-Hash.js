// Turn String Input into Hash

// https://www.codewars.com/kata/52180ce6f626d55cf8000071

// Please write a function that will take a string as input and return a hash. The string will be formatted as such. The key will always be a symbol and the value will always be an integer.

// "a=1, b=2, c=3, d=4"
// This string should return a hash that looks like

// { 'a': 1, 'b': 2, 'c': 3, 'd': 4}

function strToHash(str) {
  if (str.length > 0) {
    const arr = str.split(", ").map((val) => val.split("="));
    const result = {};
    arr.forEach((element) => {
      result[element[0]] = Number(element[1]);
    });
    return result;
  } else {
    return {};
  }
}

// Best practice:

// function strToHash(str){
//   let result = {}

//   if (str.length) {
//     let items = str.split(", ")
//     items.forEach(item => {
//       const [key, val] = item.split("=")
//       result[key] = +val
//     })
//   }

//   return result
// }

// Clever solution:

// function strToHash(str) {

//   let match
//   ,   regex = /(\S+)=(-?\d+)/g
//   ,    hash = {};

//   while (match = regex.exec(str))
//     hash[match[1]] = parseInt(match[2]);

//   return hash;

// }
