// String incrementer

// https://www.codewars.com/kata/54a91a4883a7de5d7800009c

// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(strng) {
  const arr = strng.split(/\d/);
  let numbers = strng.slice(arr[0].length);
  const zero = [];
  if (/\D/.test(strng[strng.length - 1])) {
    return strng + 1;
  } else if (/[0-8]/.test(strng[strng.length - 1])) {
    return (
      strng.slice(0, -1) + (parseInt(strng[strng.length - 1]) + 1).toString()
    );
  } else {
    while (numbers[0] === "0") {
      zero.push("0");
      numbers = numbers.slice(1);
    }
    if (numbers[0] === "9" && zero.length > 0) {
      zero.pop(zero.length - 1);
    }
    numbers = (parseInt(numbers) + 1).toString();
    return arr[0] + zero.join("") + numbers;
  }
}

//   Best practice:

//   function incrementString(input) {
//     if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
//     return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
//       var up = parseInt(p2) + 1;
//       return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
//     });
//   }

//   Clever solution:

//   function incrementString(input) {
//     return input.replace(/([0-8]?)(9*)$/, function(s, d, ns) {
//         return +d + 1 + ns.replace(/9/g, '0');
//       });
//   }
