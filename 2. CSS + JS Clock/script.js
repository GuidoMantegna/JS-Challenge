const 
hourHand = document.querySelector('.hour-hand');
minHand = document.querySelector('.min-hand');
secondsHand = document.querySelector('.seconds-hand');
digSeconds = document.querySelector('.seconds');
digMinutes = document.querySelector('.minutes');
digHours = document.querySelector('.hour');

let now = new Date()

// I subtract '90' in each case to caculate each hand from 12:00
let initialHour = (30 * now.getHours()) - 90;
hourHand.style.transform = `rotate(${initialHour}deg)`;

let initialMin = (6 * now.getMinutes()) - 90;
minHand.style.transform = `rotate(${initialMin}deg)`;

let initialSec = (6 * now.getSeconds()) - 90;
secondsHand.style.transform = `rotate(${initialSec}deg)`;

function addZero(number) {
    return (number < 10 ? '0' : '') + number
}

digMinutes.innerText = `${addZero(now.getMinutes())}`
digHours.innerText = `${addZero(now.getHours())}`

// Set a counter to calculate the second hand deegrees
let secondsCounter = initialSec;

setInterval(() => {
    let now = new Date()
    let minutes = (6 * now.getMinutes()) - 90;
    let hour = (30 * now.getHours()) - 90;

    secondsCounter += 6;

    secondsHand.style.transform = `rotate(${secondsCounter}deg)`;
    digSeconds.innerText = addZero(now.getSeconds());

    if (now.getSeconds() == 0) {
        minHand.style.transform = `rotate(${minutes}deg)`;
        digMinutes.innerText = `${addZero(now.getMinutes())}`;
    }
    if (now.getMinutes() == 0) {
        hourHand.style.transform = `rotate(${hour}deg)`;
        digHours.innerText = `${addZero(now.getHours())}`;
    }

}, 1000)