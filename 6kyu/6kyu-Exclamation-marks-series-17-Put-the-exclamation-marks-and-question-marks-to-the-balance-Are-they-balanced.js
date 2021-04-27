// Exclamation marks series #17: Put the exclamation marks and question marks to the balance, Are they balanced?

// https://www.codewars.com/kata/57fb44a12b53146fe1000136

// Description:
// Each exclamation mark weight is 2; Each question mark weight is 3. Put two string left and right to the balance, Are they balanced?

// If the left side is more heavy, return "Left"; If the right side is more heavy, return "Right"; If they are balanced, return "Balance".

// Examples
// balance("!!","??") === "Right"
// balance("!??","?!!") === "Left"
// balance("!?!!","?!?") === "Left"
// balance("!!???!????","??!!?!!!!!!!") === "Balance"

function balance(left, right) {
  const leftSum = left
    .replace(/!/g, "2")
    .replace(/\?/g, "3")
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
  const rightSum = right
    .replace(/!/g, "2")
    .replace(/\?/g, "3")
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
  if (leftSum > rightSum) {
    return "Left";
  } else if (rightSum > leftSum) {
    return "Right";
  } else {
    return "Balance";
  }
}

// Best practice and clever solution:

// function balance(left,right){
//   l=[...left].reduce((s,a)=>s+(a=='?'?3:2),0);
//   r=[...right].reduce((s,a)=>s+(a=='?'?3:2),0);
//   return l==r?"Balance":l>r?"Left":"Right"
// }
