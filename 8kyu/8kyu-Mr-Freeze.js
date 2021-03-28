// Mr. Freeze

// https://www.codewars.com/kata/514a3996d22ce03198000003

// There is an object/class already created called MrFreeze. Mark this object as frozen so that no other changes can be made to it.

Object.freeze(MrFreeze);

// Best practice:

// Object.freeze(MrFreeze)

// Clever solution:

// function deepFreeze (o) {
//   var prop, propKey;
  
//   Object.freeze( o );
//   for ( propKey in o ) {
//     prop = o[ propKey ];
    
//     if ( !o.hasOwnProperty( propKey ) || !(typeof prop === "object") || Object.isFrozen( prop ) ) {
//       continue;
//     }

//     deepFreeze(prop);
//   }
// }

// deepFreeze(MrFreeze);