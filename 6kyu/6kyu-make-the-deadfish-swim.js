// Make the Deadfish swim

// https://www.codewars.com/kata/51e0007c1f9378fa810002a9

// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

function parse(data) {
  const result = [];
  let num = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "i") {
      num++;
    } else if (data[i] === "d") {
      num--;
    } else if (data[i] === "s") {
      num = num ** 2;
    } else if (data[i] === "o") {
      result.push(num);
    }
  }
  return result;
}

// Best Practices and clever solution:

// function parse(data) {
//   let res = [];

//   data.split('').reduce((cur, s) => {
//     if (s === 'i') cur++;
//     if (s === 'd') cur--;
//     if (s === 's') cur = Math.pow(cur, 2);
//     if (s === 'o') res.push(cur);

//     return cur;
//   }, 0);

//   return res;
// }
