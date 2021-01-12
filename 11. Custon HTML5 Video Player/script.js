const video = document.querySelector('.html-video');
playPauseBTN = document.getElementById('play-pause')
volume = document.querySelector('.vol-range');
speed = document.querySelector('.speed-range');
speedTxt = document.querySelector('.speed-num');
icons = document.querySelectorAll('.icon');
progressBar = document.querySelector('.progress-percentage');
progress = document.querySelector('.progress')
time = document.querySelector('.time');
root = document.querySelector(':root');

function playVideo () {
    if (video.paused) {
        video.play();
        playPauseBTN.classList.remove('icon-play');
        playPauseBTN.classList.add('icon-pause');
    } else {
        video.pause();
        playPauseBTN.classList.remove('icon-pause');
        playPauseBTN.classList.add('icon-play')
    }
};

function setSpeed (e) {
    video.playbackRate = e.target.valueAsNumber / 50;
    speedTxt.textContent = `${e.target.valueAsNumber / 50}x`;
    speedValue = Math.ceil(e.target.valueAsNumber/10) * 10;
}

function addZero(number) {
    
    return (number < 10 ? '0' : '') + number
};

function handleProgress () {
    const percent = (video.currentTime / video.duration) * 100; 
    root.style.setProperty('--progress-bar-width', `${percent}%`)
}

video.addEventListener('click', playVideo);

let volumeValue = 0.5;

volume.addEventListener('change', e => {
    video.volume = e.target.valueAsNumber / 100;
    volumeValue = e.target.valueAsNumber / 100;
});

let speedValue = 50;

speed.addEventListener('change', e => setSpeed(e));

icons.forEach(icon => {

    icon.addEventListener('click', e => {
        if(icon.classList[1] === "icon-first" && speedValue > 0) {
            speedValue -= 10;
            speed.value = speedValue;
            video.playbackRate = speedValue / 50;
            speedTxt.textContent = `${speedValue / 50}x`;
        };
        if(icon.classList[1] === "icon-last" && speedValue < 100) {
            speedValue += 10;
            speed.value = speedValue;
            video.playbackRate = speedValue / 50;
            speedTxt.textContent = `${speedValue / 50}x`;
        };
        if(icon.classList[1] === "icon-play" || icon.classList[1] === "icon-pause") {
            playVideo()
        }
        if(icon.classList[1] === "icon-volume-high" || icon.classList[1] === "icon-volume-decrease") {
            if (video.volume === 0) {
                video.volume = volumeValue;
                volume.value = volumeValue * 100;
                icon.classList.add("icon-volume-high");
                icon.classList.remove("icon-volume-decrease");
            } else {
                video.volume = 0;
                volume.value = 0;
                icon.classList.add("icon-volume-decrease");
                icon.classList.remove("icon-volume-high");
            }
        }
    });

});

video.addEventListener('timeupdate', e => {
    handleProgress()

    time.textContent = getHour(e.target.currentTime.toFixed(0));
});

progress.addEventListener('click', e => {
    const selectedTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = selectedTime;
});

function getHour(seconds) {

    let sec = 0;
    let min = 0;
    let hours = 0;

    (seconds > 59)
    ? sec = seconds%60
    : sec = seconds;

    min = (seconds-seconds%60)/60;
    hours = (min - min%60)/60;

    (min > 59)
    ? min = min%60
    : min = min; 

    return `${addZero(hours)}:${addZero(min)}:${addZero(sec)}`
}