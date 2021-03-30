// Valid string

// https://www.codewars.com/kata/52f3bb2095d6bfeac2002196

// You are given a sequence of valid words and a string. Test if the string is made up by one or more words from the array.

// Task
// Return true if each character of the string is part of a substring that matches any of the words in the dictionary, false otherwise.

// For example:

// string[] dictionary = ["code", "wars"];

// string s = "codewars"; // true -> match 'code', 'wars'

// string s1 = "codewar"; // false -> match 'code', unmatched 'war'

var validWord = function (dictionary, word) {
  dictionary = dictionary.sort();
  for (let i = 0; i < dictionary.length; i++) {
    word = word.replace(new RegExp(dictionary[i], "g"), "");
  }
  return !word.length;
};

// Best practice and clever solution:

// var validWord = function(dictionary, word) {
//   reg = new RegExp('^(' + dictionary.join('|') + ')+$');
//   return reg.test(word);
// };
