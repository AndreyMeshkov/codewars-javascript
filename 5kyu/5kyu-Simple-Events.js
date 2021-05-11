// Simple Events

// https://www.codewars.com/kata/52d3b68215be7c2d5300022f

// Your goal is to write an Event constructor function, which can be used to make event objects.

// An event object should work like this:

// it has a .subscribe() method, which takes a function and stores it as its handler
// it has an .unsubscribe() method, which takes a function and removes it from its handlers
// it has an .emit() method, which takes an arbitrary number of arguments and calls all the stored functions with these arguments
// As this is an elementary example of events, there are some simplifications:

// all functions are called with correct arguments (e.g. only functions will be passed to unsubscribe)
// you should not worry about the order of handlers' execution
// the handlers will not attempt to modify an event object (e.g. add or remove handlers)
// the context of handlers' execution is not important
// each handler will be subscribed at most once at any given moment of time. It can still be unsubscribed and then subscribed again
// Also see an example test fixture for suggested usage

function Event() {
  this.functions = [];
}
Event.prototype.subscribe = function (fn) {
  this.functions.push(fn);
};
Event.prototype.unsubscribe = function (fn) {
  if (this.functions.indexOf(fn) > -1) {
    this.functions.splice(this.functions.indexOf(fn), 1);
  }
};
Event.prototype.emit = function () {
  const args = arguments;
  this.functions.forEach(function (fn) {
    fn.apply(null, args);
  });
};

// Best practice and clever solution:

// class Event {
//   constructor() {
//     this.subscribers = new Set();
//   }

//   subscribe(func) {
//     this.subscribers.add(func);
//   }

//   unsubscribe(func) {
//     this.subscribers.delete(func);
//   }

//   emit(...args) {
//     this.subscribers.forEach(s => s(...args));
//   }
// }
