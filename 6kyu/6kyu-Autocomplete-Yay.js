// Autocomplete! Yay!

// https://www.codewars.com/kata/5389864ec72ce03383000484

// It's time to create an autocomplete function! Yay!

// The autocomplete function will take in an input string and a dictionary array and return the values from the dictionary that start with the input string. If there are more than 5 matches, restrict your output to the first 5 results. If there are no matches, return an empty array.

// Example:

// autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']
// For this kata, the dictionary will always be a valid array of strings. Please return all results in the order given in the dictionary, even if they're not always alphabetical. The search should NOT be case sensitive, but the case of the word should be preserved when it's returned.

// For example, "Apple" and "airport" would both return for an input of 'a'. However, they should return as "Apple" and "airport" in their original cases.

// Important note:

// Any input that is NOT a letter should be treated as if it is not there. For example, an input of "$%^" should be treated as "" and an input of "ab*&1cd" should be treated as "abcd".

// (Thanks to wthit56 for the suggestion!)

function autocomplete(input, dictionary) {
  input = input.replace(/[^a-zA-Z]/gi, "");
  return dictionary
    .filter(
      (val) => val.slice(0, input.length).toLowerCase() === input.toLowerCase()
    )
    .slice(0, 5);
}

// Best practice and clever solution:

// function autocomplete(input, dictionary){
//   var r = new RegExp('^' + input.replace(/[^a-z]/gi,''), 'i');
//   return dictionary.filter(function(w){ return r.test(w); }).slice(0, 5);
// }
