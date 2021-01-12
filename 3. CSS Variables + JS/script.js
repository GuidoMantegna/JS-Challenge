const root = document.querySelector(':root');
loveLevel = document.querySelector('.love');
anxietyLevel = document.querySelector('.anxiety');
colorPick = document.querySelectorAll('.color-box span');
inLoveCheckbox = document.getElementById('in-love-checkbox');
havingFunCheckbox = document.getElementById('having-fun-checkbox');


// State settings
inLoveCheckbox.addEventListener('click', (e) => {
    if (e.target.checked = true) {
        root.style.setProperty('--body-color', 'cornsilk')
        root.style.setProperty('--font-color', 'rosybrown')
        root.style.setProperty('--container-color', 'rgba(128, 125, 125, 0.1)')
        havingFunCheckbox.checked = false
    }
})

havingFunCheckbox.addEventListener('click', (e) => {
    if (e.target.checked = true) {
        root.style.setProperty('--body-color', 'rgb(66, 58, 58)')
        root.style.setProperty('--font-color', 'rgb(65, 225, 145)')
        root.style.setProperty('--container-color', 'rgba(65, 105, 225, 0.2)')
        inLoveCheckbox.checked = false
    }
})

// Heart colour settings
colorPick.forEach((color) => {
    color.addEventListener('click', (e) => {
        root.style.setProperty('--heart-color', e.target.style.background)
    })
});

// Love level settings
function setLoveLevel (e) {
    let level = `${e.target.value}px`;

    root.style.setProperty('--love-level', level)
};

loveLevel.addEventListener('click', setLoveLevel)

// Anxiety level settings
function setAnxietyLevel (e) {
    let seconds;
    let value = e.target.value;

    if (value <= 20){
        seconds = '5s'
    }          
    if (value >20 && value <= 40){
        seconds = '4s'
    }
    if (value >40 && value <= 60){
        seconds = '3s'
    }
    if (value >60 && value <= 80){
        seconds = '2s'
    }
    if (value >80 && value <= 100){
        seconds = '1s'
    }

    root.style.setProperty('--beat-time', seconds)
};

anxietyLevel.addEventListener('click', setAnxietyLevel)

