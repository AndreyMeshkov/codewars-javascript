// Arabian String

// https://www.codewars.com/kata/525821ce8e7b0d240b002615

// You must create a method that can convert a string from any format into PascalCase. This must support symbols too.

// Don't presume the separators too much or you could be surprised.

// For example: (Input --> Output)

// "example name" --> "ExampleName"
// "your-NaMe-here" --> "YourNameHere"
// "testing ABC" --> "TestingAbc"

function camelize(str) {
  return str
    .split(/[^a-zA-Z0-9]/g)
    .filter((val) => val)
    .map((val) => val[0].toUpperCase() + val.slice(1).toLowerCase())
    .join("");
}

// Best practice and clever solution:

// function camelize(str) {
//   return str.match(/[a-z0-9]+/gi).map(function(s) {
//     return s[0].toUpperCase() + s.substr(1).toLowerCase()
//   }).join('')
// }
