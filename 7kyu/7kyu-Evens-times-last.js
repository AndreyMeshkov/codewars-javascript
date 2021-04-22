// Evens times last

// https://www.codewars.com/kata/5a1a9e5032b8b98477000004/train/javascript

// Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

// If the sequence is empty, you should return 0.

function evenLast(numbers) {
  if (!numbers.length) {
    return 0;
  }
  return (
    numbers.reduce((acc, cur, ind) => acc + cur * ((ind + 1) % 2), 0) *
    numbers[numbers.length - 1]
  );
}

// Best practice and clever solution:

// const evenLast = n => n.reduce((p, c, i) => i % 2 ? p : p + c, 0) * n[n.length - 1] || 0
