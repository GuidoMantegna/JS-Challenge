const texts = document.querySelector('.texts');
const body = document.querySelector('body');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

/* Create a new instance of SpeechRecognition */
const recognition = new SpeechRecognition();

recognition.lang = 'en-US';

/* Controls whether interim results should be returned (true) or not (false.) 
Interim results are results that are not yet final */
recognition.interimResults = true;

/* result
Fired when the speech recognition service returns a result 
— a word or phrase has been positively recognized and this has been communicated back to the app. */

let paragraphs = [];
let i = 0;

recognition.addEventListener('result', e => {
    const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    paragraphs[i] = `<p>${text}</p>`;

    if(paragraphs[i].includes('red')) {body.style.background = 'tomato'}
    if(paragraphs[i].includes('yellow')) {body.style.background = 'rgba(247, 236, 94)'}
    if(paragraphs[i].includes('green')) {body.style.background = 'rgb(105, 151, 105)'}
    if(paragraphs[i].includes('blue')) {body.style.background = 'cadetblue'}
    if(paragraphs[i].includes('default')) {body.style.background = 'rgb(91, 94, 100)'}

    texts.innerHTML = paragraphs.join('');

    if(e.results[0].isFinal) {i++};
    
});

/* Fired when the speech recognition service has disconnected.
So when it ends, we can restart to continue speeching */
recognition.addEventListener('end', recognition.start)

/* Starts the speech recognition service listening to incoming audio with intent to 
recognize grammars associated with the current SpeechRecognition. */
recognition.start()