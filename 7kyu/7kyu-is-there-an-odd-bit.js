// Is There an Odd Bit?

// Return 1 when ANY odd bit of x equals 1; 0 otherwise.

// x is unsigned.

// (Assume "0 index", aka the least significant bit is considered position 0)

// Assume x is 32 bits.

// Example:

// any_odd(2) will return 1 because at least one odd bit is 1 (0010).

// any_odd(170) will return 1 because all of the odd bits are 1 (10101010).

// any_odd(5) will return 0 because none of the odd bits are 1 (0101).

function anyOdd(x) {
  const str = String(x.toString(2)).split("").reverse();
  let result = 0;
  for (let i = 1; i < str.length; i = i + 2) {
    if (str[i] == 1) {
      result = 1;
    }
  }
  return result;
}
