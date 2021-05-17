// Throwing Darts

// https://www.codewars.com/kata/525dfedb5b62f6954d000006

// You've just recently been hired to calculate scores for a Dart Board game!

// Scoring specifications:

// 0 points - radius above 10
// 5 points - radius between 5 and 10 inclusive
// 10 points - radius less than 5
// If all radii are less than 5, award 100 BONUS POINTS!

// Write a function that accepts an array of radii (can be integers and/or floats), and returns a total score using the above specification.

// An empty array should return 0.

// Examples:
// scoreThrows( [1, 5, 11] )    =>  15
// scoreThrows( [15, 20, 30] )  =>  0
// scoreThrows( [1, 2, 3, 4] )  =>  140

function scoreThrows(radii) {
  console.log(radii);
  let result = 0;
  radii.forEach((element) => {
    if (element < 5) {
      result += 10;
    } else if (element <= 10) {
      result += 5;
    }
  });
  if (result / radii.length === 10) {
    result += 100;
  }
  return result;
}

// Best practice:

// function scoreThrows(radiuses){

//   if (radiuses.length <= 0) { return 0 }

//   var score = 0
//   var award = true
//   for(var i = 0; i < radiuses.length; i++) {
//     if      (radiuses[i] < 5)   { score += 10 }
//     else if (radiuses[i] <= 10) { score += 5; award = false }
//     else                        { award = false }
//   }

//   if (award) { score += 100 }

//   return score;
// }

// Clever solution:

// function scoreThrows(rr, s){
//   return (s=rr.map(function(r){ return r<5? 10: r<=10? 5 : 0 }).reduce(function(s,v){ return s+v},0)), s&&s==10*rr.length? s+100:s;
// }
