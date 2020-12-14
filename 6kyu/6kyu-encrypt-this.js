// Encrypt this!

// https://www.codewars.com/kata/5848565e273af816fb000449

// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter needs to be converted to its ASCII code.
// The second letter needs to be switched with the last letter
// Keepin' it simple: There are no special characters in input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

var encryptThis = function (text) {
  return text
    .split(" ")
    .map((val) => {
      return val.length === 1
        ? val.charCodeAt(0)
        : val.length === 2
        ? val.charCodeAt(0) + val[1]
        : val.length === 3
        ? val.charCodeAt(0) + val[val.length - 1] + val[1]
        : val.charCodeAt(0) + val[val.length - 1] + val.slice(2, -1) + val[1];
    })
    .join(" ");
};

// Best practice and clever solution:

// const encryptThis = text => text
//   .split(' ')
//   .map(word => word
//   .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
//   .replace(/^\w/, word.charCodeAt(0)))
//   .join(' ');
