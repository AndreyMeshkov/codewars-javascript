// Switcheroo;

// https://www.codewars.com/kata/57f759bb664021a30300007d

// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x) {
  return x.replace(/a/g, "t").replace(/b/g, "a").replace(/t/g, "b");
}

// Best practice clever solution:

// const switcheroo=x=>x.replace(/[ab]/g,x=>x=="a"?"b":"a")
