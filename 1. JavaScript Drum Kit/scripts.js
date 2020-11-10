const 
keys = document.querySelectorAll('.key');
clap = document.getElementById('clap');
hihat = document.getElementById('hihat');
kick = document.getElementById('kick');
openhat = document.getElementById('openhat');
boom = document.getElementById('boom');
ride = document.getElementById('ride');
snare = document.getElementById('snare');
tom = document.getElementById('tom');
tink = document.getElementById('tink');

document.addEventListener('keypress', e => {

    switch (e.key) {
        case "a": 
            clap.play();  
            keys[0].classList.toggle('key-press');        
            setTimeout(() => {keys[0].classList.toggle('key-press')}, 300 )
            break;
        case "s": 
            hihat.play()
            keys[1].classList.toggle('key-press')
            setTimeout(() => {keys[1].classList.toggle('key-press')}, 300 )
            break;
        case "d": 
            kick.play()
            keys[2].classList.toggle('key-press')
            setTimeout(() => {keys[2].classList.toggle('key-press')}, 300 )
            break;
        case "f": 
            openhat.play()
            keys[3].classList.toggle('key-press')
            setTimeout(() => {keys[3].classList.toggle('key-press')}, 300 )
            break;
        case "g": 
            boom.play()
            keys[4].classList.toggle('key-press')
            setTimeout(() => {keys[4].classList.toggle('key-press')}, 300 )
            break;
        case "h": 
            ride.play()
            keys[5].classList.toggle('key-press')
            setTimeout(() => {keys[5].classList.toggle('key-press')}, 300 )
            break;
        case "j": 
            snare.play()
            keys[6].classList.toggle('key-press')
            setTimeout(() => {keys[6].classList.toggle('key-press')}, 300 )
            break;
        case "k": 
            tom.play()
            keys[7].classList.toggle('key-press')
            setTimeout(() => {keys[7].classList.toggle('key-press')}, 300 )
            break;
        case "l": 
            tink.play()
            keys[8].classList.toggle('key-press')
            setTimeout(() => {keys[8].classList.toggle('key-press')}, 300 )
            break;
    }

    
})