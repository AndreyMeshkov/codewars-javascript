// Is the date today

// https://www.codewars.com/kata/563c13853b07a8f17c000022

// Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

// Make sure that your function does not return a false positive by just checking just the day.

function isToday(date) {
  const today = new Date();
  return (
    today.getDate() === date.getDate() &&
    today.getMonth() === date.getMonth() &&
    today.getFullYear() === date.getFullYear()
  );
}

// Best practice and clever solution:

// function isToday(date) {
//   return new Date().toDateString() === date.toDateString();
// }
