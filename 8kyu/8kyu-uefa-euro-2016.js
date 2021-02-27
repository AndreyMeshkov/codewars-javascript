// UEFA EURO 2016

// https://www.codewars.com/kata/57613fb1033d766171000d60

// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

const uefaEuro2016 = (names, score) => {
  if (score[0] > score[1]) {
    return `At match ${names[0]} - ${names[1]}, ${names[0]} won!`;
  } else if (score[1] > score[0]) {
    return `At match ${names[0]} - ${names[1]}, ${names[1]} won!`;
  } else {
    return `At match ${names[0]} - ${names[1]}, teams played draw.`;
  }
};

// Best practice:

// function uefaEuro2016(commands, scores){
//   // your code...
//   if (scores[0] == scores[1])
//     return `At match ${commands[0]} - ${commands[1]}, commands played draw.`;
//   if (scores[0] < scores[1])
//     return `At match ${commands[0]} - ${commands[1]}, ${commands[1]} won!`;
//   return `At match ${commands[0]} - ${commands[1]}, ${commands[0]} won!`;
// }

// Clever solution:

// const uefaEuro2016 = (c, s) => `At match ${c[0]} - ${c[1]}, ${s[0] == s[1] ? "commands played draw." : (s[0] > s[1] ? c[0] : c[1]) + ' won!'}`;
