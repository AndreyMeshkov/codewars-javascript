// The most asked question on CodeWars

// https://www.codewars.com/kata/5935ecef7705f9614500002d

// What is the most asked question on CodeWars?

// Can someone explain /*...*/?

// You need to write a function detect that will check if a string starts with Can someone explain, case sensitive. Return true if so, false otherwise.

// Let's hope you don't write a solution that makes people ask that question at you!

function detect(comment) {
  return /^Can someone explain/.test(comment);
}

// Best practice:

// const detect = comment => comment.startsWith('Can someone explain')

// Clever solution:

// Object.defineProperty(global, 'detect', {
//   get: _=>{
//     switch(Math.random()*7|0) {
//       case 0: return /./.test.bind(/^Can someone explain/)
//       case 1: return s=>/^Can someone explain/.test(s)
//       case 2: return s=>s.startsWith('Can someone explain')
//       case 3: return function f(s,t='Can someone explain'){return !t?true:!s||s[0]!==t[0]?false:f(s.slice(1),t.slice(1))}
//       case 4: return s=>s.slice(0,19)==='Can someone explain'
//       case 5: return s=>[...'Can someone explain'].every((c,i)=>c===s[i])
//       case 6: return s=>{
//         const t='Can someone explain';
//         for(let i=0; i<t.length; i++) if(s[i]!==t[i]) return false;
//         return true;
//       }
//     }
//   }
// })
