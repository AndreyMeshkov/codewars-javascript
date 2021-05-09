// PatternCraft - Strategy

// https://www.codewars.com/kata/5682e809386707366d000024

// The Strategy Design Pattern can be used, for example, to determine how a unit moves in the StarCraft game.

// The pattern consists in having a different strategy to one functionality. A unit, for example, could move by walking or flying.

// Your Task
// Complete the code so that when a Viking is flying its position increases by 10 each time it moves. If it is walking then the position is increased by 1.

// In this Kata, Viking starts as a ground unit when it is created.

// You have 3 classes:

// Viking: has a position, moveBehavior and move method.
// Fly and Walk: the move behaviors with the move(unit) method. Fly has to move 10 positions at a time and Walk has to move 1.

class Fly {
  move(unit) {
    return 10;
  }
}

class Walk {
  move(unit) {
    return 1;
  }
}

class Viking {
  constructor() {
    this.position = 0;
    this.moveBehavior = new Walk();
  }

  move() {
    this.position += this.moveBehavior.move();
  }
}

// Best practice:

// class Fly {
//   move(unit) {
//     unit.position += 10;
//   }
// }

// class Walk {
//   move(unit) {
//     unit.position += 1;
//   }
// }

// class Viking {
//   constructor() {
//     this.moveBehavior = new Walk();
//     this.position = 0;
//   }

//   move() {
//     this.moveBehavior.move(this);
//   }
// }

// Clever solution:

// const createMoveBehavior = (n) => class {
//   move(unit) {
//     unit.position += n
//   }
// }

// const Fly = createMoveBehavior(10)
// const Walk = createMoveBehavior(1)

// class Viking {
//   constructor() {
//     this.moveBehavior = new Walk()
//     this.position = 0
//   }

//   move() {
//     this.moveBehavior.move(this)
//   }
// }
