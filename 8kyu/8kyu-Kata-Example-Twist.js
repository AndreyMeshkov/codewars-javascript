// Kata Example Twist

// https://www.codewars.com/kata/525c1a07bb6dda6944000031

// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

// Add the value "codewars" to the array websites/Websites 1,000 times.

// var websites = []

// add the value "codewars" to the websites array 1,000 times
var websites = [];
websites.length = 1000;
websites.fill("codewars");

// Best practice and clever solution:

// var websites = [];
// while (websites.length < 1000) websites.push("codewars")
