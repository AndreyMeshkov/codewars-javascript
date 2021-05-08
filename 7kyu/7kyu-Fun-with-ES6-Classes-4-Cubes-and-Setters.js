// Fun with ES6 Classes #4 - Cubes and Setters

// https://www.codewars.com/kata/56fcc1ee45040039ab0016da

// Fun with ES6 Classes #4 - Cubes and Setters
// Overview
// In Fun with ES6 Classes #3 - Cuboids, Cubes and Getters, we learned that if we knew all the dimensions (i.e. length, width, height) of a cuboid, we could easily work out its corresponding volume and surface area. The way we achieved this in our code was by the use of getters which automatically computed the volume and surface area of the cuboid whenever either one of length, width, height changed. However, in the previouos exercise, one thing we could not do is define setters for surface area or volume of a cuboid because for a given volume/SA, there were an infinite number of possibilities to the dimensions of the cuboid.

// However, for cubes (a special type of cuboid), since their length, width and height are always the same, it is possible to figure out the side length of a cube given its surface area and/or volume. Therefore, in this Kata, you will be asked to define setters as well as getters for both the surface area and volume of a cube.

// Task
// Define a class Cube whose constructor function takes exactly one parameter length and stores the value of the argument into this.length. You will then define both a getter and a setter for the surfaceArea and volume of the cube.

// No initial code will be given. You are free to use whatever syntax you like to complete this Kata but it is highly recommended that you use ES6 syntax and features to complete this Kata.

class Cube {
  constructor(length) {
    this.length = length;
  }
  get surfaceArea() {
    return this.length ** 2 * 6;
  }
  get volume() {
    return this.length ** 3;
  }
  set surfaceArea(num) {
    this.length = Math.sqrt(num / 6);
  }
  set volume(num) {
    this.length = Math.cbrt(num);
  }
}

// Best practice:

// class Cube {
//   constructor(length){
//     this.length = length;
//   }
//   get volume() {
//     return Math.pow(this.length, 3);
//   }
//   set volume(volume){
//     this.length = Math.cbrt(volume);
//   }
//   get surfaceArea() {
//     return 6 * Math.pow(this.length, 2);
//   }
//   set surfaceArea(surfaceArea){
//     this.length = Math.sqrt(surfaceArea / 6);
//   }
// }

// Clever solution:

// class Cube {
//   constructor(length) {
//     this.length = length;
//   }
//   get surfaceArea(){
//     return 6 * this.length**2;
//   }
//   set surfaceArea(a){
//     this.length = (a/6)**0.5;
//   }
//   get volume(){
//     return this.length**3;
//   }
//   set volume(v){
//     this.length = v**(1/3);
//   }
// }
