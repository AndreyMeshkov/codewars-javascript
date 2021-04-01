// Thinkful - Number Drills: Congo warehouses

// https://www.codewars.com/kata/5862e7c63f8628a126000e18

// Your company, Congo Pizza, is the second-largest online frozen pizza retailer. You own a number of international warehouses that you use to store your frozen pizzas, and you need to figure out how many crates of pizzas you can store at each location.

// Congo recently standardized its storage containers: all pizzas fit inside a cubic crate, 16-inches on a side. The crates are super tough so you can stack them as high as you want.

// Write a function box_capacity() that figures out how many crates you can store in a given warehouse. The function should take three arguments: the length, width, and height of your warehouse (in feet) and should return an integer representing the number of boxes you can store in that space.

// For example: a warehouse 32 feet long, 64 feet wide, and 16 feet high can hold 13,824 boxes because you can fit 24 boxes across, 48 boxes deep, and 12 boxes high, so box_capacity(32, 64, 16) should return 13824.

function boxCapacity(length, width, height) {
  return (
    Math.floor(length / (32 / 24)) *
    Math.floor(width / (64 / 48)) *
    Math.floor(height / (16 / 12))
  );
}

// Best practice:

// const boxCapacity = (...args) =>
//   args.reduce((pre, val) => pre * (val * 3 >> 2), 1);

// Clever solution:

// const boxCapacity = (length, width, height) =>
//     // 🍕 🍕 🍕
//     // 🍕 🍕 🍕
//     // 🍕 🍕 🍕
//     // 🍕 🍕 🍕
//     [length, width, height].map(x => Math.floor(x * (12 / 16))).reduce((a, x) => x * a, 1);
