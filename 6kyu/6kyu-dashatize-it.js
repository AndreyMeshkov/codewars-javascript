// Dashatize it

// https://www.codewars.com/kata/58223370aef9fc03fd000071

// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return an empty value.

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

function dashatize(num) {
  const str = num
    .toString()
    .split("")
    .map((val) => (val % 2 ? `-${val}-` : val))
    .join("");
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "-" || str[i + 1] !== "-") {
      result += str[i];
    }
  }
  if (result[0] === "-") {
    result = result.slice(1);
  }
  if (result[result.length - 1] === "-") {
    result = result.slice(0, -1);
  }
  return result;
}

// Best practice:

// function dashatize(num) {
//   return String(num)
//     .replace(/([13579])/g, "-$1-")
//     .replace(/--+/g, "-")
//     .replace(/(^-|-$)/g, "")
// }

// Clever solution:

// function dashatize(num) {
//   return isNaN(num) ? 'NaN' : num.toString().match(/([13579]|[02468]+)/g).join('-');
// };
