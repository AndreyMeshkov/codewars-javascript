// If you can read this...

// https://www.codewars.com/kata/586538146b56991861000293

// The idea for this kata came from 9gag today:

// The lyrics to "Never gonna give you up" by Rick Astley encoded in the NATO phonetic alphabet

// Task
// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

// Input:

// If, you can read?

// Output:

// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

// Note:

// The set of used punctuation is .!?.
// Punctuation should be kept in your return string, but spaces should not.
// Xray should not have a dash within.
// Every word and punctuation mark should be seperated by a space ' '.
// There should be no trailing whitespace

function to_nato(words) {
  const obj = {
    A: "Alfa",
    B: "Bravo",
    C: "Charlie",
    D: "Delta",
    E: "Echo",
    F: "Foxtrot",
    G: "Golf",
    H: "Hotel",
    I: "India",
    J: "Juliett",
    K: "Kilo",
    L: "Lima",
    M: "Mike",
    N: "November",
    O: "Oscar",
    P: "Papa",
    Q: "Quebec",
    R: "Romeo",
    S: "Sierra",
    T: "Tango",
    U: "Uniform",
    V: "Victor",
    W: "Whiskey",
    X: "Xray",
    Y: "Yankee",
    Z: "Zulu",
  };
  words = words.replace(/\s/g, "").toUpperCase();
  result = "";
  for (let i = 0; i < words.length; i++) {
    result += obj[words[i]] ? obj[words[i]] + " " : words[i] + " ";
  }
  return result.trim();
}

// Best practice and clever solution:

// let table = {
//   'A': 'Alfa',
//   'B': 'Bravo',
//   'C': 'Charlie',
//   'D': 'Delta',
//   'E': 'Echo',
//   'F': 'Foxtrot',
//   'G': 'Golf',
//   'H': 'Hotel',
//   'I': 'India',
//   'J': 'Juliett',
//   'K': 'Kilo',
//   'L': 'Lima',
//   'M': 'Mike',
//   'N': 'November',
//   'O': 'Oscar',
//   'P': 'Papa',
//   'Q': 'Quebec',
//   'R': 'Romeo',
//   'S': 'Sierra',
//   'T': 'Tango',
//   'U': 'Uniform',
//   'V': 'Victor',
//   'W': 'Whiskey',
//   'X': 'Xray',
//   'Y': 'Yankee',
//   'Z': 'Zulu',
// }

// function to_nato(words) {
//   return words.split('').filter(c => c !== ' ').map(c => table[c.toUpperCase()] || c).join(' ');
// }
