// Playing with Sets : Intersection

// https://www.codewars.com/kata/playing-with-sets-intersection

// Set objects are new JavaScript built-in objects defined since ECMAScript 2015

// A Set lets you store unique values of any type. It comes with some useful methods like .add, .clear, .has . . . BUT some "Set operations" are missing, like . . .

// Intersection

// A new set can be constructed by determining which members two sets have "in common". The intersection of A and B, denoted by A ∩ B, is the set of all things that are members of both A and B. If A ∩ B = ∅, then A and B are said to be disjoint.

// Examples:
//   {1, 2} ∩ {1, 2} = {1, 2}.
//   {1, 2} ∩ {2, 3} = {2}.
// Task
// Create function inter getting 2 sets as arguments and returning a new Set as result of intersection of these 2 sets.

// Examples:
// A = new Set([1,2]);
// B = new Set([2,3]);

// C = inter(A,B) // -> {2}

// " May the Code be with you ! "

function inter(s1, s2) {
  const arr1 = Array.from(s1);
  const arr2 = Array.from(s2);
  const result = new Set();
  if (arr1.length !== 2 || arr2.length !== 2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i])) {
        result.add(arr1[i]);
      }
    }
    return result;
  }
  const minPoint = Math.max(arr1[0], arr2[0]);
  const maxPoint = Math.min(arr1[1], arr2[1]);
  result.add(minPoint);
  result.add(maxPoint);
  return result;
}

// Best practice and clever solution:

// function inter(s1, s2){
//   return new Set( [...s1].filter( e => s2.has(e) ) )
// }
