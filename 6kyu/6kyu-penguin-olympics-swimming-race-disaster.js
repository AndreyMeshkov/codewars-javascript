// Penguin Olympics: Swimming Race Disaster

// https://www.codewars.com/kata/6022c97dac16b0001c0e7ccc

// Penguin Olympics: Swimming Race Disaster
// The situation...

// The fastest penguins in the world have just swum for the ultimate prize in professional penguin swimming.
// The cameras that were capturing the race stopped recording half way through.
// The athletes, and the fans are in disarray waiting for the results.
// The challenge...

// Given the last recorded frame of the race, and an array of penguin athletes, work out the gold, silver and bronze medal positions.

// The rules...

// Assume all penguins swim at the same speed.
// Waves (~) take twice as long to swim through as smooth water (-).
// Penguins (p or P) are racing from left to right.
// There can be any number of lanes, and the race can be any length.
// All Lanes in a single race will be the same length.
// Penguin names are in the same order as the lanes.
// Return a string in this format: "GOLD: <name-1>, SILVER: <name-2>, BRONZE: <name-3>"
// There will always be an equal amount of penguins and lanes.
// There will always be a top three (no draws).
// Examples...

// Snapshot:
// |----p---~---------|
// |----p---~~--------|
// |----p---~~~-------|

// Penguins:
// ["Derek", "Francis", "Bob"]

// Expected Output:
// "GOLD: Derek, SILVER: Francis, BRONZE: Bob"
// Snapshot:
// |-~~------------~--P-------|
// |~~--~P------------~-------|
// |--------~-P---------------|
// |--------~-P----~~~--------|

// Penguins:
// ["Joline", "Abigail", "Jane", "Gerry"]

// Expected Output:
// "GOLD: Joline, SILVER: Jane, BRONZE: Gerry"

function calculateWinners(snapshot, penguins) {
  let arr = snapshot
    .toLowerCase()
    .split("|")
    .filter((val) => val.trim().length);
  arr = arr.map((val) =>
    val
      .replace(/-/g, 1)
      .replace(/~/g, 2)
      .slice(val.indexOf("p") + 1)
      .split("")
      .reduce((acc, cur) => +acc + +cur, 0)
  );
  const sortedArr = [...arr].sort((a, b) => a - b);
  return `GOLD: ${penguins[arr.indexOf(sortedArr[0])]}, SILVER: ${
    penguins[arr.indexOf(sortedArr[1])]
  }, BRONZE: ${penguins[arr.indexOf(sortedArr[2])]}`;
}

// Best practice:

// const _      = require('lodash');
// const timer  = lane    => [...lane].reduce((s,c)=>s+1+(c=='~'),0)
// const format = (a,b,c) => `GOLD: ${ a }, SILVER: ${ b }, BRONZE: ${ c }`;

// function calculateWinners(snapshot, penguins) {
//   return format(..._.zip(penguins, snapshot.match(/(?<=p|P)[^|]*/g).map(timer))
//                     .sort((a,b)=>a[1]-b[1])
//                     .map(([p,])=>p)
//                     .slice(0,3) );
// };

// Clever solution:

// calculateWinners=(Q,S)=>`GOLD: ${Q=Q.replace(/~/g,'--').match(/P-*/ig).map((V,F)=>[V.length,S[F]]).sort((Q,S)=>Q[0]-S[0]),Q[0][1]}, SILVER: ${Q[1][1]}, BRONZE: `+Q[2][1]
