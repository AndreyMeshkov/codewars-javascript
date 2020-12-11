// Grasshopper - Function syntax debugging

// https://www.codewars.com/kata/56dae9dc54c0acd29d00109a/train/javascript

// Grasshopper - Function syntax debugging
// A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.

function main(verb, noun) {
  return `${verb}${noun}`;
}

// Best practices:

// function main (verb, noun) {
//   return verb + noun
// }

// Clever solution:

// const main = String.prototype.concat.bind('');

