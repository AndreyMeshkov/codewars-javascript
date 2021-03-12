// Cat and Mouse - 2D Version

// https://www.codewars.com/kata/57f8842367c96a89dc00018e/train/javascript

// You will be given a string (map) featuring a cat "C" and a mouse "m". The rest of the string will be made up of dots (".") The cat can move the given number of moves up, down, left or right, but not diagonally.

// You need to find out if the cat can catch the mouse from it's current position and return "Caught!" or "Escaped!" respectively.

// Finally, if one of two animals are not present, return "boring without two animals".

// Examples
// moves = 5

// map =
// ..C......
// .........
// ....m....

// returns "Caught!" because the cat can catch the mouse in 4 moves
// moves = 5

// map =
// .C.......
// .........
// ......m..

// returns "Escaped!" because the cat cannot catch the mouse in  5 moves

function catMouse(map, moves) {
  if (!map.includes("C") || !map.includes("m")) {
    return "boring without two animals";
  }
  const arr = map.split("\n");
  let coordinatesOfCat = [];
  let coordinatesOfMouse = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("C")) {
      coordinatesOfCat = [i, arr[i].indexOf("C")];
    }
    if (arr[i].includes("m")) {
      coordinatesOfMouse = [i, arr[i].indexOf("m")];
    }
  }
  const distance =
    Math.abs(coordinatesOfCat[0] - coordinatesOfMouse[0]) +
    Math.abs(coordinatesOfCat[1] - coordinatesOfMouse[1]);
  if (distance <= moves) {
    return "Caught!";
  } else {
    return "Escaped!";
  }
}

// Best practice and clever solution:

// function catMouse(map,moves){
//   //coding and coding...
//   const indexOfC = map.indexOf('C')
//   const indexOfm = map.indexOf('m')
// if (!~indexOfC || !~indexOfm) {
// return 'boring without two animals'
// }
// const stepLength = map.indexOf(`
// `) + 1
// const step = Math.abs(indexOfC % stepLength - indexOfm % stepLength) + Math.abs(parseInt(indexOfC / stepLength) - parseInt(indexOfm / stepLength))
// return step > moves ? 'Escaped!' : 'Caught!'
// }
