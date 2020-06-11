// Greet Me

// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function (name) {
  var str = name.toLowerCase();
  var newStr = str[0].toUpperCase() + str.slice(1);
  return "Hello " + newStr + "!";
};
