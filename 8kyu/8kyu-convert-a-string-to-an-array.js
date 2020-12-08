// Convert a string to an array

// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d

// Write a function to split a string and convert it into an array of words. For example:

// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string) {
  return string.split(" ");
}

// Best practice:

// function stringToArray(string){
//   return string.split(' ');
// }

// Clever solution:

// function stringToArray(string){
//     var result = [];
//     var traverse = function foo(string){
//         for(var i=0;i<string.length;i++){
//             var chr = string.charAt(i);
//             if(chr === " "){
//                 result.push(string.slice(0,i));
//                 foo(string.slice(i+1));
//                 return;
//             }
//         }
//         result.push(string);
//     };
//     traverse(string);
//     return result;
// }
