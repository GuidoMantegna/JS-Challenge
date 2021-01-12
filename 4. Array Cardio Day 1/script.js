const 
fifteen = document.querySelector(".fifteen");
oldest = document.querySelector(".oldest");
names = document.querySelector(".names");
accYears = document.querySelector(".accYears");
mostLived = document.querySelector(".mostLived");

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
]

const people = async () => {
    let data = await fetch('https://randomuser.me/api/?results=50');
    let response = await data.json();

    return response.results
}

const peopleHard = [
{firstName: "Felien", lastName: "Ridderhof"}, {firstName: "Oliver", lastName: "Thomsen"}, 
{firstName: "Viljami", lastName: "Latvala"}, {firstName: "Darren", lastName: "Ford"}, 
{firstName: "Summer", lastName: "Thomas"}, {firstName: "Gonca", lastName: "Demirel"}, 
{firstName: "Norma", lastName: "Ward"}, {firstName: "Amelia", lastName: "Beck"},
{firstName: "Eliezer", lastName: "da Cunha"}, {firstName: "Victoria", lastName: "Møller"}, 
{firstName: "Janita", lastName: "Verdouw"}, {firstName: "Ian", lastName: "Harper"}, 
{firstName: "Mariano", lastName: "Hidalgo"}, {firstName: "Roberto", lastName: "Wade"}, 
{firstName: "Luke", lastName: "Kumar"}, {firstName: "Ljiljana", lastName: "Lefebvre"},
{firstName: "Pippa", lastName: "Martin"}, {firstName: "Giovanny", lastName: "Marchena"}, 
{firstName: "Salvador", lastName: "Herrero"}, {firstName: "Luis", lastName: "Hoffman"}, 
{firstName: "Edward", lastName: "Anderson"}, {firstName: "Rosalyn", lastName: "Perkins"}, 
{firstName: "Johan", lastName: "Christiansen"}, {firstName: "Esat", lastName: "Keçeci"}, 
{firstName: "Russell", lastName: "Parker"}, {firstName: "Kenan", lastName: "Kuday"}, 
{firstName: "Soham", lastName: "Hicks"}, {firstName: "Jackson", lastName: "Griffin"}, 
{firstName: "Leah", lastName: "Taylor"}, {firstName: "Hilla", lastName: "Kivela"}, 
{firstName: "Isabella", lastName: "Taylor"}, {firstName: "Loyd", lastName: "Dağ"}, 
{firstName: "Nurdan", lastName: "Karadaş"}, {firstName: "William", lastName: "Petersen"}, 
{firstName: "Steinar", lastName: "Svendsen"}, {firstName: "Duane", lastName: "Burns"}, 
{firstName: "Andrea", lastName: "Gallardo"}, {firstName: "Joanne", lastName: "Graves"}, 
{firstName: "Célia", lastName: "Legrand"}, {firstName: "William", lastName: "Johnston"}, 
{firstName: "Elli", lastName: "Moilanen"}, {firstName: "Nermin", lastName: "Pitz"}, 
{firstName: "Jordan", lastName: "Parker"}, {firstName: "Vedat", lastName: "Özkara"}, 
{firstName: "Oğuzhan", lastName: "Gümüşpala"}, {firstName: "Katherine", lastName: "Lawson"}
]

const itemTemplate = data => `<li>${data}</li>`;

// Array.prototype.filter()
// 1. Filter the list of inventors fot those whose were born in the 1.500's
const fourteensCentury = inventors.filter(inventor => inventor.year > 1499 && inventor.year < 1600);

const fifteenTemplate = fourteensCentury.reduce((list, item) => {
    return list + itemTemplate(`${item.first} ${item.last}`)
}, '')

fifteen.innerHTML = fifteenTemplate;

// Array.prototype.map()
// 2. Give us an array of the inventory first and last names
const inventorsFirstLast = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

const namesTemplate = inventorsFirstLast.reduce((list, item) => list + itemTemplate(item), '');
names.innerHTML = namesTemplate

// Array.prototype.sort()
// 3. Sort the inventors by birthday, oldest to youngest
const oldestToYoungest = inventors.sort((a , b) => {
    if(a.year < b.year) {
        return -1
    } else {
        return 1
    } 
})

const oldestTemplate = oldestToYoungest.reduce((list, item) => {
    return list + itemTemplate(`${item.first} ${item.last} (${item.year})`)
}, '');
oldest.innerHTML = oldestTemplate


// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const accumYears = inventors.reduce( (accumulator, inventor) => accumulator + (inventor.passed - inventor.year), 0 );

const accYearsTemplate = itemTemplate(`They lived ${accumYears} years togheter`);
accYears.innerHTML = accYearsTemplate;

// 5. Sort the inventors by years lived
const mostLivedYears = inventors.sort((a, b) => {
    if ((a.passed - a.year) < (b.passed - b.year)) {
        return -1
    } else {
        return 1
    }
})

const mostLivedTemplate = mostLivedYears.reduce((list, item) => { 
    return list + itemTemplate(`${item.first} ${item.last} (${item.passed - item.year})`)
}, '');
mostLived.innerHTML = mostLivedTemplate

// 6. Create a list of boulevards in Paris that contains 'de' anywhere in the name
// https://commons.wikimedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links 
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));

// 7. Sort exercise
// Sort the people alphabetically by last name
const lastNameAlphabetically = peopleHard.sort((a, b) => {
    if (a.lastName < b.lastName) {
        return -1
    } else {
        return 1
    }
})
console.table(lastNameAlphabetically)

// 8. Reduce exercise
// Sum up the instances of each of these
const data = [
    'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 
    'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'
]

const sum = data.reduce((sumObject, item) => {
    
    (sumObject[item] == null)
    ? sumObject[item] = 1
    : sumObject[item] += 1;

    return sumObject
}, {})
console.log(sum)