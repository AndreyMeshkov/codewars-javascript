// Char Code Calculation

// https://www.codewars.com/kata/57f75cc397d62fc93d000059

// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

function calc(x) {
  let total1 = 0;
  let total2 = 0;
  for (let i = 0; i < x.length; i++) {
    total1 += x[i].charCodeAt().toString();
  }
  total2 = total1.replace(/7/g, "1");
  return (
    total1.split("").reduce((acc, cur) => acc + parseInt(cur), 0) -
    total2.split("").reduce((acc, cur) => acc + parseInt(cur), 0)
  );
}

// Best practice and clever solution:

// const calc=x=>(x.replace(/./g,x=>x.charCodeAt()).match(/7/g)||[]).length*6
