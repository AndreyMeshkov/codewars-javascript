// Checking Groups

// https://www.codewars.com/kata/54b80308488cb6cd31000161

// In English and programming, groups can be made using symbols such as () and {} that change meaning. However, these groups must be closed in the correct order to maintain correct syntax.

// Your job in this kata will be to make a program that checks a string for correct grouping. For instance, the following groups are done correctly:

// ({})
// [[]()]
// [{()}]
// The next are done incorrectly:

// {(})
// ([]
// [])
// A correct string cannot close groups in the wrong order, open a group but fail to close it, or close a group before it is opened.

// Your function will take an input string that may contain any of the symbols (), {} or [] to create groups.

// It should return True if the string is empty or otherwise grouped correctly, or False if it is grouped incorrectly.

function groupCheck(s) {
  let str = s;
  while (str.includes("{}") || str.includes("[]") || str.includes("()")) {
    str = str.replace(/\{\}|\[\]|\(\)/, "");
  }
  return str.length === 0;
}

// Best practice and clever solution:

//  function groupCheck(s){
//    var r = /\{\}|\[\]|\(\)/;
//    while(r.test(s))
//      s = s.replace(r, '');
//    return !s.length;
//  }
