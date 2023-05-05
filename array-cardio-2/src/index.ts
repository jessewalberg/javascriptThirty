const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const someoneNineteenOrOlder = people.some(
  (person) => new Date().getFullYear() - person.year >= 19
);
// Array.prototype.every() // is everyone 19 or older?
const everyoneNineTeenOrOlder = people.every(
  (person) => new Date().getFullYear() - person.year >= 19
);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findCommentById = (id: number) =>
  comments.find((comment) => comment.id === id);

// Array.prototype.findIndex()
// Find the comment with this ID
const findCommentIndexById = (id: number) =>
  comments.findIndex((comment) => comment.id === id);
// delete the comment with the ID of 823423
comments.splice(findCommentIndexById(823423), 1);
