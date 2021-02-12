// Extract the domain name from a URL

// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url) {
  if (url.includes("www.")) {
    url = url.slice(url.indexOf(".") + 1, url.lastIndexOf("."));
    if (url.includes(".")) {
      url = url.slice(0, url.indexOf("."));
    }
  } else if (url.includes("//")) {
    url = url.slice(url.indexOf("/") + 2, url.indexOf("."));
  } else {
    url = url.slice(0, url.indexOf("."));
  }
  return url;
}

// Best practice and clever solution:

// function domainName(url){
//   url = url.replace("https://", '');
//   url = url.replace("http://", '');
//   url = url.replace("www.", '');
//   return url.split('.')[0];
// };
