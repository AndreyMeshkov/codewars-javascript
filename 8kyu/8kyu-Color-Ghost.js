// Color Ghost

// https://www.codewars.com/kata/53f1015fa9fe02cbda00111a

// Color Ghost
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

class Ghost {
  constructor() {
    this.colors = ["white", "yellow", "purple", "red"];
  }

  get color() {
    const num = Math.floor(Math.random() * this.colors.length);
    return this.colors[num];
  }
}

// Best practice and clever solution:

// var Ghost = function() {
//   this.color = ["white","yellow","purple","red"][Math.floor(Math.random() * 4)];
// };
