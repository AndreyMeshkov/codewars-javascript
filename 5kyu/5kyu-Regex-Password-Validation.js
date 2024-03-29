// Regex Password Validation

// https://www.codewars.com/kata/52e1476c8147a7547a000811

// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

function validate(password) {
  return /^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
}

// Best practice:

// function validate(password) {
//   return  /^[A-Za-z0-9]{6,}$/.test(password) &&
//           /[A-Z]+/           .test(password) &&
//           /[a-z]+/           .test(password) &&
//           /[0-9]+/           .test(password) ;
// }

// Clever solution:

// function validate(password) {
//   return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
// }

