// Surface Area and Volume of a Box

// https://www.codewars.com/kata/565f5825379664a26b00007c

// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth) {
  return [
    width * height * 2 + height * depth * 2 + width * depth * 2,
    width * height * depth,
  ];
}

// Best practice:

// function getSize(width, height, depth){
//   var box = { width: width, height:height, depth:depth};

//   return [getArea(box), getVolume(box)];
// }

// function getArea(box){
//   return (2 * (box.depth * box.height)) + (2 * (box.width * box.height)) + (2 * (box.width * box.depth));
// }

// function getVolume(box){
//   return box.width * box.height * box.depth;
// }

// Clever solution:

// const getSize = (w, h, d) => [
//   (w * h + w * d + h * d) * 2,
//   w * h * d
// ];
