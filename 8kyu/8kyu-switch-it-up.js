// Switch it Up!

// https://www.codewars.com/kata/5808dcb8f0ed42ae34000031

// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

function switchItUp(number) {
  return number === 0
    ? "Zero"
    : number === 1
    ? "One"
    : number === 2
    ? "Two"
    : number === 3
    ? "Three"
    : number === 4
    ? "Four"
    : number === 5
    ? "Five"
    : number === 6
    ? "Six"
    : number === 7
    ? "Seven"
    : number === 8
    ? "Eight"
    : number === 9
    ? "Nine"
    : number;
}

// Best practice and clever solution:

// switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]
