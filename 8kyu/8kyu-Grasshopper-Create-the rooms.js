// Grasshopper - Create the rooms

// https://www.codewars.com/kata/56a29b237e9e997ff2000048

// Escape the room
// You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).

var rooms = {
  firstRoom: { name: "First", description: "first room", completed: false },
  seconRoom: { name: "Second", description: "second room", completed: false },
  thirdRoom: { name: "Third", description: "third room", completed: false },
};

// Best practice:

// const rooms = {
//   bedroom: {
//     name: 'Bedroom',
//     description: 'For... sleeping',
//     completed: true,
//   },
//   bathroom: {
//     name: 'Bathroom',
//     description: 'This will get you clean',
//     completed: false,
//   },
//   kitchen: {
//     name: 'Kitchen',
//     description: 'Hungry? Why wait?',
//     completed: true,
//   },
// }

// Clever solution:

// var rooms = {
//   "Honeymoon Suite": {
//       title: "The Missing Ingredient",
//       director: "Allison Anders",
//       cast: {
//           "Tim Roth": "Ted",
//           "Valeria Golino": "Athena",
//           "Madonna": "Elspeth",
//           "Alicia Witt": "Kiva",
//           "Sammi Davis": "Jezebel",
//           "Lili Taylor": "Raven",
//           "Ione Skye": "Eva",
//           "Amanda de Cadenet": "Diana"}},
//   "Room 404": {
//       title: "The Wrong Man",
//       director: "Alexandre Rockwell",
//       cast: {
//           "Tim Roth": "Ted",
//           "David Proval": "Siegfried",
//           "Jennifer Beals": "Angela",
//           "Lawrence Bender": "Long Hair Yuppie Scum",
//           "Paul Skemp": "Real Theodore",
//           "Quinn Thomas Hellerman": "Baby Bellhop"}},
//   "Room 309": {
//       title: "The Misbehavers",
//       director: "Robert Rodriguez",
//       cast: {
//           "Tim Roth": "Ted",
//           "Antonio Banderas": "Husband",
//           "Tamlyn Tomita": "Wife",
//           "Lana McKissack": "Sarah",
//           "Danny Verduzco": "Juancho",
//           "Patricia Vonne": "Corpse",
//           "Salma Hayek": "TV Dancing Girl"}},
//   "Penthouse": {
//       title: "The Man from Hollywood",
//       director: "Quentin Tarantino",
//       cast: {
//           "Tim Roth": "Ted",
//           "Quentin Tarantino": "Chester Rush",
//           "Jennifer Beals": "Angela",
//           "Paul Calderón": "Norman",
//           "Bruce Willis": "Leo",
//           "Kimberly Blair": "Hooker"}}};
