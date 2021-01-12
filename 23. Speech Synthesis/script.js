const text = document.querySelector('textarea')
const playBtn = document.getElementById('speak')
const stopBtn = document.getElementById('stop')
const selectVoices = document.getElementById('voices')
const inputs = document.querySelectorAll('input')
let voices = [];
let msg = new SpeechSynthesisUtterance();

/* Set the options of languages for the select input */
function setOptions () {  

    voices = this.getVoices();

    voices.forEach(voice => {
        let option = document.createElement('option');
    
        option.setAttribute('value', voice.lang);
        option.innerText = voice.name;
        
        selectVoices.appendChild(option)
    });
}

function setVoice () {
    msg.voice = voices.find(voice => voice.lang === this.value)
}

speechSynthesis.addEventListener('voiceschanged', setOptions);

playBtn.addEventListener('click', () => {

    msg.text = text.value;    
    speechSynthesis.speak(msg);
});

stopBtn.addEventListener('click', () => speechSynthesis.pause());

selectVoices.addEventListener('change', setVoice);

inputs.forEach(input => {
    input.addEventListener('change', e => {
        if (e.target.name === 'pitch') {
            msg.pitch = e.target.value
        };
        if (e.target.name === 'rate') {
            msg.rate = e.target.value;
        };
    });
});
