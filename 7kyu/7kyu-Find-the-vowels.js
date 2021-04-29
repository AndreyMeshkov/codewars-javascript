// Find the vowels

// https://www.codewars.com/kata/5680781b6b7c2be860000036

// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

function vowelIndices(word) {
  const vowels = "aoeiuy";
  const arr = [];
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) {
      arr.push(i + 1);
    }
  }
  return arr;
}

// Best practice:

// function vowelIndices(word) {
//   var arr = [];
//   for(var i = 0; i < word.length; i++) {
//     if(/[aeioyu]/i.test(word[i])) {
//       arr.push(i+1);
//     }
//   }
//   return arr;
// }

// Clever solution:

// function vowelIndices(word,a=[]){
//   return (word.replace(/[aeiouy]/gi,(m,i)=>(a.push(i+1),m)),a)
// }
