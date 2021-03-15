// Follow that Spy

// https://www.codewars.com/kata/5899a4b1a6648906fe000113

// We are tracking down our rogue agent Matthew Knight also known as Roy Miller. He travels from places to places to avoid being tracked. Each of his travels are based on a list of itineraries in an unusual or incorrect order. The task is to determine the routes he will take in his every journey.

// Task
// You are given an array of routes of his itineraries. List down the only places where he will go in correct order based on his itineraries.

// Example
// Given the following routes:

// [ [USA, BRA], [JPN, PHL], [BRA, UAE], [UAE, JPN] ]
// The result will be:

// "USA, BRA, UAE, JPN, PHL"
// Note:

// It is safe to assume that there will be no repeating place with a different route.
// There are no empty routes.
// There will be at least one (1) route (from one waypoint to another).

function findRoutes(routes) {
  const arr = routes[0];
  for (let i = 0; i < routes.length; i++)
    for (let j = 1; j < routes.length; j++)
      if (routes[j][0] == arr[arr.length - 1]) {
        arr.push(routes[j][1]);
      } else if (routes[j][1] == arr[0]) {
        arr.unshift(routes[j][0]);
      }
  return arr.join(", ");
}

// Best practice and clever solution:

// function findRoutes(routes) {
//     var r1=routes.map(x=>x[0]),r2=routes.map(x=>x[1]),r={},
//         start=r1.filter(x=>!r2.includes(x))[0],rs=[start]
//     routes.forEach(x=>r[x[0]]=x[1])
//     while(rs.length<=routes.length) rs.push(start=r[start])
//     return rs.join(", ")
//   }
