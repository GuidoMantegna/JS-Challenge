let items = document.querySelectorAll('li');
let totalDurationSpan = document.querySelector('span');

// ONE WAY

// let totalMinutes = 0;
// let totalSeconds = 0;

// function getMinSec (stringNum) {

//     let minSec = stringNum.split(':');

//     totalMinutes += parseInt(minSec[0]);
//     totalSeconds += parseInt(minSec[1]);
// }

// items.forEach(item => getMinSec(item.dataset.time));

// OTHER WAY 

let minutesArray = [];
let secondsArray = [];

function getMinSec (stringNum, i) {

    let minSec = stringNum.split(':');

    minutesArray[i] = parseInt(minSec[0]);
    secondsArray[i] = parseInt(minSec[1]);
};

let i = 0;

items.forEach(item => {
    getMinSec(item.dataset.time, i);
    i++
})

let totalMinutes = minutesArray.reduce((acc, num) => acc + num)
let totalSeconds = secondsArray.reduce((acc, num) => acc + num)

function getHour(minutes, seconds) {

    let sec = 0;
    let min = 0;
    let hours = 0;

    (seconds > 59)
    ? sec = seconds%60
    : sec = seconds;

    min = minutes + (seconds-seconds%60)/60;
    hours = (min - min%60)/60;

    (min > 59)
    ? min = min%60
    : min = min; 

    return `${addZero(hours)}:${addZero(min)}:${addZero(sec)}`
}

function addZero(number) {
    
    return (number < 10 ? '0' : '') + number
};

totalDurationSpan.innerText = getHour(totalMinutes, totalSeconds)