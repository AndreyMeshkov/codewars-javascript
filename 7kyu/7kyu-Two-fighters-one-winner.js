// Two fighters, one winner.

// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b

// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Example:
// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }

function declareWinner(fighter1, fighter2, firstAttacker) {
  const atack1 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
  const atack2 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
  if (atack1 === atack2) {
    return firstAttacker;
  } else if (atack1 < atack2) {
    return fighter1.name;
  } else {
    return fighter2.name;
  }
}

// Best practice and clever solution:

// function declareWinner(fighter1, fighter2, firstAttacker) {
//     var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
//     var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
//     if(fac1 < fac2) {
//       return fighter2.name;
//     } else if(fac2 < fac1) {
//       return fighter1.name;
//     } else {
//       return firstAttacker;
//     }
//   }
