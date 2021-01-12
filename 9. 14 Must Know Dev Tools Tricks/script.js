const p = document.querySelector('p');
function makeGreen() {
    p.style.color = 'tomato';
    p.style.fontSize = '2em';
}

const dogs = [
    {name: 'Snickers', age: 2},
    {name: 'Hugo', age: 8},
]

// TO DEBUG STYLING
// elements --> select the element --> right click --> Break On --> Attribute Modifications 

// Regular 
console.log('Hello')

// Interpolated
console.log('Hello my name is %s', 'Guido')

// Styled 
console.log('%cI am a great text', 'font-size: 2em; color: tomato;')

// Warning!
console.warn('Ohh NOooOo!')

// Error :/
console.error('Shit!')

// Info
console.info('Crocodiles eat 3-4 people per year')

// Testing
console.assert(1===2, "You did not select the right element!")

// Clearing
// console.clear() will clear your console

// Viewing DOM elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.groupEnd(`${dog.name}`)
})

// Counting
console.count('Messi');
console.count('Messi');
console.count('Cristiano');
console.count('Cristiano');
console.count('Messi');

// Timing
// It's a tool to know how long some elements are taking to load (for ex.)

// Table
console.table(dogs)