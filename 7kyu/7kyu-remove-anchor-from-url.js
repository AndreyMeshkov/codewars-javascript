// Remove anchor from URL

// https://www.codewars.com/kata/51f2b4448cadf20ed0000386

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// // returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')

// // returns 'www.codewars.com?page=1'
// removeUrlAnchor('www.codewars.com?page=1')

function removeUrlAnchor(url) {
  return url.indexOf("#") > -1 ? url.slice(url.indexOf("#")) : url;
}

// Best practice:

// function removeUrlAnchor(url){
//   return url.split('#')[0];
// }
