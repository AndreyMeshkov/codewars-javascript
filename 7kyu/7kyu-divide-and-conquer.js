// Divide and Conquer

// https://www.codewars.com/kata/57eaec5608fed543d6000021

// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

function divCon(x) {
  let result = 0;
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "string") {
      result -= x[i];
    } else {
      result += x[i];
    }
  }
  return result;
}

// Best practice:

// function divCon(x){
//   return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
// }

// Clever solution:

// const divCon=x=>x.reduce((a,b)=>a+(0+b==b?b:-+b),0)
