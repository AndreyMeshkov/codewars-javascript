// Validate my Password

// https://www.codewars.com/kata/validate-my-password

// I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

// Passwords must abide by the following requirements:

// More than 3 characters but less than 20.

// Must contain only alphanumeric characters.

// Must contain letters and number

function validPass(password) {
  return /^(?=.*?[0-9])(?=.*?[a-z])[a-zA-Z0-9]{4,19}$/.test(password)
    ? "VALID"
    : "INVALID";
}

// Best practice and clever solution:

// function validPass(password){
//     return /(?=.+[a-z])(?=.+\d)^[a-z\d]{3,20}$/i.test(password) ? 'VALID' : 'INVALID';
//   }
