// Start with strings, numbers, booleans
let age = 100;
let age2 = age;
console.log(age, age2);
// expected output: 100 100
age = 200;
console.log(age, age2);
// expected output: 200 100

// ARRAYS
// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poopy']

// And we want to take a copy of it.
const team = players; //Team is not an array, is just a reference to the original array.

console.log(players, team);
// expected output: ['Wes', 'Sarah', 'Ryan', 'Poopy']

// You might think you can just do something like this:
team[3] = 'Lux';
// players and team = ['Wes', 'Sarah', 'Ryan', 'Lux']

// However what happens when we update that anyway? We edited the original array too!
// Why? It's because that is an array reference, not an array copy. The both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();

team2[4] = 'Guido';
// team2 ["Wes", "Sarah", "Ryan", "Lux", "Guido"]
// players ["Wes", "Sarah", "Ryan", "Lux"]


// Or create a new array and concat the old one in
const team3 = [].concat(players) // ["Wes", "Sarah", "Ryan", "Lux"]

// Or use the new ES6 Spread
const team4 = [...players] // ["Wes", "Sarah", "Ryan", "Lux"]

// Now when we update it, the original one isn't changed
team4[4] = 'Sheila';
// team4 ["Wes", "Sarah", "Ryan", "Lux", "Sheila"]
// players ["Wes", "Sarah", "Ryan", "Lux"]

const team5 = Array.from(players) // ["Wes", "Sarah", "Ryan", "Lux"]

// The same thing goes for objects, let's say we have a person object
const person = {
    name: 'Wes Bos',
    age: 80,
};

// and think we make a copy, how we do take a copy?

const captain = person; // captain is a reference of person

const cap2 = Object.assign({}, person, { age: 57 })

// person {name: "Wes Bos", age: 80}
// cap2 {name: "Wes Bos", age: 57}

// We also can spread and object into another new one
const cap3 = {...person} //{name: "Wes Bos", age: 80}

// Things to note - this is only a level deep - both for Arrays and Objects. 
// Ladash has a clone deep method, but yo should think twice before using it

const wes = {
    name: 'Wes',
    age: 100,
    social: {
        twiter: '@wesbos',
        facebook: 'wesbos.developer'
    },
}

const dev = Object.assign({}, wes);

dev.social.twiter = '@example';
// wes.social.twitter @example
// dev.social.twitter @example
// This works only a level deep, so if we change a value which is inside another object, 
// it will change both value (the current object and the original one).

const dev2 = JSON.parse(JSON.stringify(wes));