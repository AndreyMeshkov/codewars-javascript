// Classic Hello World

// https://www.codewars.com/kata/57036f007fd72e3b77000023/train/javascript

// You are given a method called main, make it print Hello World! and don't return anything

// Note that for some languages, the function main is the entry point of the program.

// Here's how it will be tested:

//     Solution.main("parameter1","parameter2");
// Hints:

// Check your references
// Think about the scope of your method
// For prolog you can use write but there are better ways

// Print "Hello World!" to the screen
class Solution {
  static main() {
    console.log("Hello World!");
  }
}

// Best practice:

// class Solution{
//   static main() {
//     console.log("Hello World!");
//   }
// }

// Clever solution:

// Solution = {};
// Solution.main = () => { console.log('Hello World!'); };
