// The reject() function

// Let's implement the reject()/Reject() function...

// var odds = reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => [1, 3, 5]

function reject(array, iterator) {
  return array.filter((i) => !iterator(i));
}
