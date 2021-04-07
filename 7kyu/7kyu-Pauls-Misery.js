// Paul's Misery

// https://www.codewars.com/kata/57ee31c5e77282c24d000024

// Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!

// Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

// kata = 5
// Petes kata = 10
// life = 0
// eating = 1
// The Misery Score is the total points gained from the array. Once you have the total, return as follows:

// < 40 = 'Super happy!'
// < 70 >= 40 = 'Happy!'
// < 100 >= 70 = 'Sad!'
// > 100 = 'Miserable!'

function paul(x) {
  let result = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "kata") {
      result += 5;
    } else if (x[i] === "Petes kata") {
      result += 10;
    } else if (x[i] === "eating") {
      result++;
    }
  }
  if (result > 100) {
    return "Miserable!";
  } else if (result >= 70) {
    return "Sad!";
  } else if (result >= 40) {
    return "Happy!";
  } else {
    return "Super happy!";
  }
}

// Best practice:

// function paul(arr){
//   const dic = {kata: 5, 'Petes kata': 10, life: 0, eating: 1}
//   const num = arr.reduce( (a, i)=> +a + dic[i], 0)
//   return num < 40 ? 'Super happy!' : num < 70 ? 'Happy!' : num < 100 ? 'Sad!' : 'Miserable!'
// }

// Clever solution:

// function paul(activities) {
//   const VALUES = {'Petes kata': 10, 'kata': 5, 'eating': 1, 'life': 0};
//   const score = activities.reduce((s, a) => s + VALUES[a], 0);
//   switch (true) {
//     case score < 40: return 'Super happy!';
//     case score < 70: return 'Happy!';
//     case score < 100: return 'Sad!';
//     default: return 'Miserable!';
//   }
// }
