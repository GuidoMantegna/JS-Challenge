const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2001 },
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 },
];

// Some and Every Checks
// Array.some() // is at least one person 19?

const someNineteen = people.some( person => (2020-person.year) === 19)
console.log(someNineteen)

// Array.every() // is everyone 19?

const everyNineteen = people.every( person => (2020-person.year) === 19)
console.log(everyNineteen)


// Array.find()
// find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const findID = comments.find( comment => comment.id === 823423 )
console.log(findID.text)

// Array.findIndex()
// Find the comment with this ID
// Delete the comment with the ID of 823423 

const findIndex = comments.findIndex( comment => comment.id === 823423 )
const deleteEl = comments.splice(1, 1)
console.log(comments)