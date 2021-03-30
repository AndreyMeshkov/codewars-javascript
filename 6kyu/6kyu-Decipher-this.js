// Decipher this!

// https://www.codewars.com/kata/581e014b55f2c52bb00000f8

// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

function decipherThis(str) {
  const arrStr = str.split(" ");
  const arrNum = arrStr.map((val) => parseInt(val));
  for (let i = 0; i < arrNum.length; i++) {
    let numberLength = arrNum[i].toString().length;
    let stringPart = arrStr[i].slice(numberLength);
    if (stringPart.length > 1) {
      stringPart =
        stringPart[stringPart.length - 1] +
        stringPart.slice(1, -1) +
        stringPart[0];
    }
    let numberPart = String.fromCharCode(arrNum[i]);
    arrStr[i] = numberPart + stringPart;
  }
  return arrStr.join(" ");
}

// Best practice and clever solution:

// function decipherThis(str) {
//   return str.split(" ")
//     .map(w =>
//       w.replace(/^\d+/, c => String.fromCharCode(c))
//        .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
//     )
//     .join(" ")
// }