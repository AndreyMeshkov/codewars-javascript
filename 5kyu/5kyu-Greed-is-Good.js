// Greed is Good

// https://www.codewars.com/kata/5270d0d18625160ada0000e4

// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

function score(dice) {
  const obj = {};
  dice.forEach((element) => {
    obj[element] ? obj[element]++ : (obj[element] = 1);
  });
  let result = 0;
  if (obj[1] > 2) {
    result += 1000;
    obj[1] -= 3;
  } else if (obj[5] > 2) {
    result += 500;
    obj[5] -= 3;
  } else if (obj[6] > 2) {
    result += 600;
  } else {
    for (let i = 2; i < 5; i++) {
      if (obj[i] > 2) {
        result += i * 100;
      }
    }
  }
  if (obj[1] > 0) {
    result += 100 * obj[1];
  }
  if (obj[5] > 0) {
    result += 50 * obj[5];
  }
  return result;
}

// Best practice and clever solution:

// function score( dice ) {
//   var dc = [0,0,0,0,0,0];
//   var tdr = [1000,200,300,400,500,600];
//   var sdr = [100,0,0,0,50,0];
//   dice.forEach(function(x){ dc[x-1]++; });
//   return dc.reduce(function(s,x,i){ 
//     return s + (x >= 3? tdr[i] : 0) + sdr[i]*(x % 3);
//   },0);
// }
