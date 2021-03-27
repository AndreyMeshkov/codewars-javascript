// Grasshopper - Terminal game combat function

// https://www.codewars.com/kata/586c1cf4b98de0399300001d/train/javascript

function combat(health, damage) {
  return health - damage < 0 ? 0 : health - damage;
}

// Best practice:

// function combat(health, damage) {
//   return health < damage ? 0 : health - damage
// }

// Clever solution:

// const combat = (health, damage) => Math.max(0, health - damage);
