// Returning Strings

// https://www.codewars.com/kata/55a70521798b14d4750000a4

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// SQL: return results in a column named greeting

// [Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name){
  return `Hello, ${name} how are you doing today?`;
}

// Best Practices:

// function greet(name){
//   return `Hello, ${name} how are you doing today?`;
// }

// Clever solution:

// function greet(name) {
//   return `\x48\x65\x6c\x6c\x6f\x2c\x20${name}\x20\x68\x6f\x77\x20\x61\x72\x65\x20\x79\x6f\x75\x20\x64\x6f\x69\x6e\x67\x20\x74\x6f\x64\x61\x79\x3f`
// }
