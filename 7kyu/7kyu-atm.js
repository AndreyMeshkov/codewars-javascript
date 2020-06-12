// ATM

// There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.

// You are given money in nominal value of n with 1<=n<=1500.

// Try to find minimal number of notes that must be used to repay in dollars, or output -1 if it is impossible.

// Good Luck!!!

function solve(n) {
  let result = 0;

  result += Math.floor(n / 500);
  n = n - Math.floor(n / 500) * 500;
  if (n % 500 !== 0) {
    result += Math.floor(n / 200);
    n = n - Math.floor(n / 200) * 200;
    if (n % 200 !== 0) {
      result += Math.floor(n / 100);
      n = n - Math.floor(n / 100) * 100;
      if (n % 100 !== 0) {
        result += Math.floor(n / 50);
        n = n - Math.floor(n / 50) * 50;
        if (n % 50 !== 0) {
          result += Math.floor(n / 20);
          n = n - Math.floor(n / 20) * 20;
          if (n % 20 !== 0) {
            result += Math.floor(n / 10);
            n = n - Math.floor(n / 10) * 10;
            if (n !== 0) {
              result = -1;
            }
          }
        }
      }
    }
  }
  return result;
}
