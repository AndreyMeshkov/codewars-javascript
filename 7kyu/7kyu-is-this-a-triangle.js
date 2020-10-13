// Is this a triangle ?

// 	https ://www.codewars.com/kata/56606694ec01347ce800001b

// 	Implement a method that accepts 3 integer values a, b, c.The method should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c) {
	return a < b + c && b < a + c && c < a + b;
}

// Best Practices:

// function isTriangle(a, b, c) {
// 	return a + b > c && a + c > b && c + b > a;
// }

// Clever solution:

// function isTriangle(a, b, c) {
// 	[a, b, c] = [a, b, c].sort((x, y) => x - y);

// 	return a + b > c;
// }