// Concatenated Sum

// https://www.codewars.com/kata/concatenated-sum

// The number 198 has the property that 198 = 11 + 99 + 88, i.e., if each of its digits is concatenated twice and then summed, the result will be the original number. It turns out that 198 is the only number with this property. However, the property can be generalized so that each digit is concatenated n times and then summed.

// eg:-

// original number =2997 , n=3
// 2997 = 222+999+999+777 and here each digit is concatenated three times.

// original number=-2997 , n=3

// -2997 = -222-999-999-777 and here each digit is concatenated three times.

// Write afunction named check_concatenated_sum that tests if a number has this generalized property.

/*
function :-checkConcatenatedSum
inputs:- integers representing orginal number and number of times each digit should be repeated
output:- true of concatenated sum gives orginal number else false


*/

function checkConcatenatedSum(number, times) {
  if (number < 0) {
    number *= -1;
  }
  const str = number.toString();
  result = 0;
  for (let i = 0; i < str.length; i++) {
    result += parseInt(str[i].repeat(times));
  }
  return number === result;
}

// Best practice and clever solution:

// function checkConcatenatedSum(sum, n){
//   var abs = Math.abs(sum);
//   return abs === [...abs+""].reduce((s, d) => +d.repeat(n) + s, 0);
// }
