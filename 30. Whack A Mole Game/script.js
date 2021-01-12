const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const score = document.querySelector('.score');
const startBTN = document.querySelector('.start');

let scoreNum = 0;
let countdown = 10;
let play;
let end;

function randTime (min, max) {
    return Math.random() * (max - min) + min;
}   

function randMole () {
    let num = randTime(1, 7)

    switch (Math.floor(num)) {
        case 1:
            // console.log('Mole 1')
            showMole(0)
            setTimeout(() => hideMole(0), 1000)
            break;
        case 2:
            // console.log('Mole 2')
            showMole(1)
            setTimeout(() => hideMole(1), 1000)
            break;
        case 3:
            // console.log('Mole 3')
            showMole(2)
            setTimeout(() => hideMole(2), 1000)
            break;
        case 4:
            // console.log('Mole 4')
            showMole(3)
            setTimeout(() => hideMole(3), 1000)
            break;
        case 5:
            // console.log('Mole 5')
            showMole(4)
            setTimeout(() => hideMole(4), 1000)
            break;
        case 6:
            // console.log('Mole 6')
            showMole(5)
            setTimeout(() => hideMole(5), 1000)
            break;
    }
}

function showMole (moleNum) {
    holes[moleNum].children[0].style.top = '0';
}

function hideMole (moleNum) {
    holes[moleNum].children[0].style.top = '200px'
}

function startCountdown () {
    if(countdown > 1) {
        
        countdown --;
        startBTN.textContent = countdown;
        
    } else {
        startBTN.textContent = "START";
    }

    // countdown = 10;
    
}

startBTN.addEventListener('click', () => {

    scoreNum = 0;

    if (countdown === 10) {


        play = setInterval(randMole, 750);
        
        end = setInterval(startCountdown, 1000);

        setTimeout(() => clearInterval(play), 11000)
        setTimeout(() => {
            clearInterval(end);
            countdown = 10;
        }, 10000)
    };
 
});

holes.forEach(hole => hole.addEventListener('click', e => {
    e.target.className === 'mole'? scoreNum++ : '';

    score.textContent = scoreNum
}))
