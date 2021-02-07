// Thinking & Testing: A * B?

// https://www.codewars.com/kata/5a90c9ecb171012b47000077

// No Story

// No Description

// Only by Thinking and Testing

// Look at the result of testcase, guess the code!

function testIt(a, b) {
  return (
    a
      .toString()
      .split("")
      .reduce((acc, cur) => acc + +cur, 0) *
    b
      .toString()
      .split("")
      .reduce((acc, cur) => acc + +cur, 0)
  );
}

// Best practice and clevr solution:

// function testIt(a,b){
//   return sum(a)*sum(b);
// }
// const sum = s => ('' + s).split('').reduce((a,n) => a + +n, 0)
