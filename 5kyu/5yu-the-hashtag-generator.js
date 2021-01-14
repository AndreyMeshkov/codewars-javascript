// The Hashtag Generator

// https://www.codewars.com/kata/52449b062fb80683ec000024

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
  if (!str.trim()) return false;
  let result =
    "#" +
    str
      .trim()
      .split(" ")
      .filter((val) => val)
      .map((val) => val[0].toUpperCase() + val.slice(1))
      .join("");
  if (result.length > 140) {
    return false;
  } else {
    return result;
  }
}

// Best practice and clever solution:

// function generateHashtag (str) {
//   return str.length > 140 || str === '' ? false :
//     '#' + str.split(' ').map(capitalize).join('');
// }

// function capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
