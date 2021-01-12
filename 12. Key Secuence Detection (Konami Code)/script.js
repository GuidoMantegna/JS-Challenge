const body = document.querySelector('body');
titleOne = document.querySelector('h1');
titleTwo = document.querySelector('h2');

let passwordString = '';

window.addEventListener('keydown', e => {

    passwordString += e.key;

    if (passwordString.toLocaleLowerCase().includes('the secret code')) {
        body.classList.add("body-background");
        titleOne.style.display = "none";
        titleTwo.style.display = "block";
    }
})