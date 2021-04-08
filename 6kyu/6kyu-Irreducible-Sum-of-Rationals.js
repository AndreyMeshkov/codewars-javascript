// Irreducible Sum of Rationals

// https://www.codewars.com/kata/5517fcb0236c8826940003c9

// You will have a list of rationals in the form

// lst = [ [numer_1, denom_1] , ... , [numer_n, denom_n] ]
// or

// lst = [ (numer_1, denom_1) , ... , (numer_n, denom_n) ]
// where all numbers are positive integers. You have to produce their sum N / D in an irreducible form: this means that N and D have only 1 as a common divisor.

// Return the result in the form:

// [N, D] in Ruby, Crystal, Python, Clojure, JS, CS, PHP, Julia, Pascal
// Just "N D" in Haskell, PureScript
// "[N, D]" in Java, CSharp, TS, Scala, PowerShell, Kotlin
// "N/D" in Go, Nim
// {N, D} in C, C++, Elixir, Lua
// Some((N, D)) in Rust
// Some "N D" in F#, Ocaml
// c(N, D) in R
// (N, D) in Swift
// '(N D) in Racket
// If the result is an integer (D evenly divides N) return:

// an integer in Ruby, Crystal, Elixir, Clojure, Python, JS, CS, PHP, R, Julia
// Just "n" (Haskell, PureScript)
// "n" Java, CSharp, TS, Scala, PowerShell, Go, Nim, Kotlin
// {n, 1} in C, C++, Lua
// Some((n, 1)) in Rust
// Some "n" in F#, Ocaml,
// (n, 1) in Swift
// n in Racket
// (n, 1) in Pascal
// If the input list is empty, return

// nil/None/null/Nothing
// {0, 1} in C, C++, Lua
// "0" in Scala, PowerShell, Go, Nim
// O in Racket
// "" in Kotlin
// [0, 1] in C++
// Example:
// [ [1, 2], [1, 3], [1, 4] ]  -->  [13, 12]
// 1/2  +  1/3  +  1/4     =      13/12
// Note
// See sample tests for more examples and form of results.

const gcd = (a, b) => (b ? gcd(b, a % b) : a);

function sumFracts(l) {
  if (l.length == 0) {
    return null;
  }
  let a = 0,
    b = 1;
  for (let i = 0; i < l.length; i++) {
    b *= l[i][1];
  }
  for (let i = 0; i < l.length; i++) {
    a += (b / l[i][1]) * l[i][0];
  }
  if (a % b == 0) {
    return a / b;
  }
  for (let i = 2; i <= Math.min(a, b) / 2; i++) {
    if (a % i == 0 && b % i == 0) {
      a /= i;
      b /= i;
    }
  }
  return [a, b];
}

// Best practice and clever solution:

// const gcd = (a, b) => b ? gcd(b, a % b) : a;

// const sumFracts = l => {
//   if (!l.length) return null;

//   var [n, d] = l.reduce(([a, x], [b, y]) => [a*y + b*x, x*y]);
//   var g = gcd(n, d);

//   return g === d ? n / d : [n / g, d / g];
// }


