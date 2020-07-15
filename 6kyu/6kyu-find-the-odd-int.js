// Find the odd int

// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
	A = A.sort();
	for (let i = 0; i < A.length; i += 2) {
		if (A[i] !== A[i + 1]) {
			return A[i];
		}
	}
	return 0;
}