// Kebabize;

// https://www.codewars.com/kata/57f8ff867a28db569e000c4a

// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:

// the returned string should only contain lowercase letters

function kebabize(str) {
  let result = "";
  for (i = 0; i < str.length; i++) {
    if (/[a-zA-Z]/.test(str[i])) {
      if (str[i] === str[i].toUpperCase()) {
        if (result.length === 0) {
          result += str[i].toLowerCase();
        } else {
          result += "-" + str[i].toLowerCase();
        }
      } else {
        result += str[i];
      }
    }
  }
  return result;
}

// Best practice and clever solution:

// function kebabize(str) {
//   return str.replace(/[^a-z]/ig, '').
//          replace(/^[A-Z]/, c => c.toLowerCase()).
//          replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
// }