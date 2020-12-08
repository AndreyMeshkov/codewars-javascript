// Reverse polish notation calculator

// https://www.codewars.com/kata/52f78966747862fc9a0009ae

// Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

// For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.

// For your convenience, the input is formatted such that a space is provided between every token.

// Empty expression should evaluate to 0.

// Valid operations are +, -, *, /.

// You may assume that there won't be exceptional situations (like stack underflow or division by zero).

function calc(expr) {
  expr = expr.split(" ");
  let stack = [];
  if (expr === "") {
    return 0;
  }
  for (let i = 0; i < expr.length; i++) {
    if (!isNaN(expr[i]) && isFinite(expr[i])) {
      stack.push(expr[i]);
    } else {
      let a = stack.pop();
      let b = stack.pop();
      if (expr[i] === "+") {
        stack.push(parseInt(a) + parseInt(b));
      } else if (expr[i] === "-") {
        stack.push(parseInt(b) - parseInt(a));
      } else if (expr[i] === "*") {
        stack.push(parseInt(a) * parseInt(b));
      } else if (expr[i] === "/") {
        stack.push(parseInt(b) / parseInt(a));
      } else if (expr[i] === "^") {
        stack.push(Math.pow(parseInt(b), parseInt(a)));
      }
    }
  }
  return +stack[0];
}

// Best practice:

// function calc(expr) {
//   var result = [];
//   var atoms = expr.split(/\s+/);
//   var operators = ['+', '-', '*', '/'];
//   for (var i=0; i<atoms.length; i++) {
//     switch(atoms[i]) {
//       case '+': result.push(result.pop() + result.pop()); break;
//       case '-': result.push(-result.pop() + result.pop()); break;
//       case '*': result.push(result.pop() * result.pop()); break;
//       case '/': result.push(1 /(result.pop() / result.pop())); break;
//       default: result.push(parseFloat(atoms[i]));
//     }
//   }
//   return result.pop() || 0;
// }

// Clever solution:

// var operands = {
//   '+': function (b, a) { return a + b;},
//   '-': function (b, a) { return a - b;},
//   '*': function (b, a) { return a * b;},
//   '/': function (b, a) { return a / b;}
// };

// function calc(expr) {
//   expr = expr || '0';
//   return +expr.split(/\s/g).reduce(function (stack, current) {
//       stack.push(operands[current] ? operands[current](+stack.pop(), +stack.pop()) : current);
//     return stack;
//   }, []).pop();
// }
