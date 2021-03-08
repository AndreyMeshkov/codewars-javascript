// New Cashier Does Not Know About Space or Shift

// https://www.codewars.com/kata/5d23d89906f92a00267bb83d

// Some new cashiers started to work at your restaurant.

// They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

// All the orders they create look something like this:

// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

// Their preference is to get the orders as a nice clean string with spaces and capitals like so:

// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

// The kitchen staff expect the items to be in the same order as they appear in the menu.

// The menu items are fairly simple, there is no overlap in the names of the items:

// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke

function getOrder(input) {
  const arr = [
    "Burger",
    "Fries",
    "Chicken",
    "Pizza",
    "Sandwich",
    "Onionrings",
    "Milkshake",
    "Coke",
  ];
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    while (input.includes(arr[i].toLowerCase())) {
      result += arr[i] + " ";
      input =
        input.slice(0, input.indexOf(arr[i].toLowerCase())) +
        input.slice(input.indexOf(arr[i].toLowerCase()) + arr[i].length);
    }
  }
  return result.slice(0, -1);
}

// Best practice:

// const menu = ["Burger", "Fries", "Chicken", "Pizza", "Sandwich", "Onionrings", "Milkshake", "Coke"];
// const capitalize = word => word.slice(0, 1).toUpperCase() + word.slice(1);
// const comparator = (a, b) => menu.indexOf(a) - menu.indexOf(b);

// function getOrder(input) {
//   return input.match(new RegExp(menu.join("|"), "ig")).map(capitalize).sort(comparator).join(" ");
// }

// Clever solution:

// const MENU = {
//   Burger:     1,
//   Fries:      2,
//   Chicken:    3,
//   Pizza:      4,
//   Sandwich:   5,
//   Onionrings: 6,
//   Milkshake:  7,
//   Coke:       8,
// };
// const REG_CMD = new RegExp(Object.keys(MENU).join('|'), 'gi');

// function getOrder(cmd) {
//   return cmd.match(REG_CMD)
//             .map(s=>s.charAt(0).toUpperCase()+s.slice(1))
//             .sort((x,y)=>MENU[x]-MENU[y])
//             .join(' ');
// }
