const timeSelect = document.querySelectorAll('label');
const input = document.querySelector('input');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const backHour = document.querySelector('.back-hour');
const backMinutes = document.querySelector('.back-minutes');

let currentMinutes;
let currentSeconds;
let countdownRun;

timeSelect.forEach(button => button.addEventListener('click', e => {

    setClock(e.target.attributes.for.nodeValue);
    
    stopCountDown()
    countdownRun = setInterval(countdown, 1000);

    backTime()
}))

function setClock (interval) {

    switch (interval) {
        case '20s':
            currentMinutes = 0;
            currentSeconds = 20;
            break;
        case '5m':
            currentMinutes = 5;
            currentSeconds = 0;
            break;
        case '15m':
            currentMinutes = 15;
            currentSeconds = 0;
            break;
        case '20m':
            currentMinutes = 20;
            currentSeconds = 0;
            break;
        case '30m':
            currentMinutes = 30;
            currentSeconds = 0;
            break;
    }

    minutes.textContent = addZero(currentMinutes);
    seconds.textContent = addZero(currentSeconds);
}

input.addEventListener('change', e => {

    currentMinutes = parseInt(e.target.value);
    currentSeconds = 0;

    stopCountDown();
    countdownRun = setInterval(countdown, 1000);

    backTime()
   
})

function countdown () {

    if (currentMinutes > 0) {
        if (currentSeconds != 0) {
            currentSeconds --;
        } else {
            currentSeconds = 59;
            currentMinutes --;
        }
    } else {
        if (currentSeconds != 0) {
            currentSeconds --;
        } else {
            clearInterval(countdownRun)    
        }
    };

    minutes.textContent = addZero(currentMinutes);
    seconds.textContent = addZero(currentSeconds);
};

function stopCountDown() {
    clearInterval(countdownRun);
};

function backTime () {

    let now = new Date()
    let hour = now.getHours()
    let minutes = now.getMinutes()

    let minutesToBack = minutes + currentMinutes;
    let hoursToBack;

    if (minutesToBack < 59) {
        minutesToBack = minutesToBack;
        hoursToBack = hour;
    } 
    else {
        minutesToBack = minutesToBack - 60;
        hoursToBack = hour + 1;
        // hoursToBack = hour + (Math.floor(currentMinutes/60));
    }


    backHour.textContent = addZero(hoursToBack);
    backMinutes.textContent = addZero(minutesToBack);

}

function addZero (num) {
    return num < 10 ? `0${num}` : num
}
