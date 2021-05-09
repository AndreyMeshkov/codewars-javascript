// PatternCraft - Visitor

// https://www.codewars.com/kata/5682e646d5eddc1e21000017

// The Visitor Design Pattern can be used, for example, to determine how an attack deals a different amount of damage to a unit in the StarCraft game.

// The pattern consists of delegating the responsibility to a different class.

// When a unit takes damage it can tell the visitor what to do with itself.

// Your Task
// Complete the code so that when a Tank attacks a Marine it takes 21 damage and when a Tank attacks a Marauder it takes 32 damage.

// The Marine's initial health should be set to 100 and the Marauder's health should be set to 125.

// You have 3 classes:

// Marine: has a health property and accept(visitor) method
// Marauder: has a health property and accept(visitor) method
// TankBullet: the visitor class. Has visitLight(unit) and visitArmored(unit) methods

class Marine {
  constructor() {
    this.health = 100;
  }
  accept(visitor) {
    this.health -= visitor.visitLight();
  }
}

class Marauder {
  constructor() {
    this.health = 125;
  }
  accept(visitor) {
    this.health -= visitor.visitArmored();
  }
}

class TankBullet {
  visitLight(unit) {
    return 21;
  }
  visitArmored(unit) {
    return 32;
  }
}

// Best practice:

// class Marine {
//   constructor() { this.health = 100; }
//   accept(visitor) { visitor.visitLight(this); }
// }
// class Marauder {
//   constructor() { this.health = 125; }
//   accept(visitor) { visitor.visitArmored(this); }
// }
// class TankBullet {
//   visitLight(unit) { unit.health -= 21; }
//   visitArmored(unit) { unit.health -= 32; }
// }

// Clever solution:

// class Character {
//   constructor(health, protection) {
//     this.health = health;
//     this.protection = protection;
//   }
//   accept(visitor) { 
//     visitor[`visit${this.protection}`](this);
//   }
// }

// class Marine extends Character {
//   constructor() {
//     super(100, 'Light');
//   }
// }

// class Marauder extends Character {
//   constructor() {
//     super(125, 'Armored');
//   }
// }

// class TankBullet {
//   visitLight(unit) {
//     unit.health -= 21;
//   }
//   visitArmored(unit) {
//     unit.health -= 32;
//   }
// }