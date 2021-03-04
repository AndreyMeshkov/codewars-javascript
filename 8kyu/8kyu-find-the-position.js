// Find the position!

// https://www.codewars.com/kata/5808e2006b65bff35500008f

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// This kata is meant for beginners. Rank and upvote to bring it out of beta

function position(letter) {
  return `Position of alphabet: ${letter.charCodeAt() - 96}`;
}

// Best practice:

// function position(letter){
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
// }

// Clever solution:

// position = l => `Position of alphabet: ${l.charCodeAt() - 96}`;
