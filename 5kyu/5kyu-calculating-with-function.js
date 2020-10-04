// Calculating with Functions

// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

// This time we want to write calculations using functions and get the results.Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0("zero") to 9("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy(divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division.For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero(func) {
	if (func === undefined) return 0
	else return func(0)
}
function one(func) {
	if (func === undefined) return 1
	else return func(1)
}
function two(func) {
	if (func === undefined) return 2
	else return func(2)
}
function three(func) {
	if (func === undefined) return 3
	else return func(3)
}
function four(func) {
	if (func === undefined) return 4
	else return func(4)
}
function five(func) {
	console.log(func);
	if (func === undefined) return 5
	else return func(5)
}
function six(func) {
	if (func === undefined) return 6
	else return func(6)
}
function seven(func) {
	if (func === undefined) return 7
	else return func(7)
}
function eight(func) {
	if (func === undefined) return 8
	else return func(8)
}
function nine(func) {
	if (func === undefined) return 9
	else return func(9)
}

function plus(number) {

	return function (current) {
		return current + number
	}
}
function minus(number) {
	return function (current) {
		return current - number
	}
}
function times(number) {
	console.log(number);
	return function (current) {
		console.log(current * number)
		return current * number
	}
}
function dividedBy(number) {
	return function (current) {
		return parseInt(current / number)
	}
}

// Best Practices:

// var n = function (digit) {
// 	return function (op) {
// 		return op ? op(digit) : digit;
// 	}
// };
// var zero = n(0);
// var one = n(1);
// var two = n(2);
// var three = n(3);
// var four = n(4);
// var five = n(5);
// var six = n(6);
// var seven = n(7);
// var eight = n(8);
// var nine = n(9);

// function plus(r) { return function (l) { return l + r; }; }
// function minus(r) { return function (l) { return l - r; }; }
// function times(r) { return function (l) { return l * r; }; }
// function dividedBy(r) { return function (l) { return l / r; }; }

// Clever solution:

// ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
// 	.forEach(function (name, n) {
// 		this[name] = function (f) { return f ? f(n) : n }
// 	});

// function plus(n) { return function (a) { return a + n } }
// function minus(n) { return function (a) { return a - n } }
// function times(n) { return function (a) { return a * n } }
// function dividedBy(n) { return function (a) { return a / n } }