const links = document.querySelectorAll('a');
const div = document.querySelector('div');

links.forEach(link => {
    link.addEventListener('mouseover', setPosition)
});

function setPosition (e) {
    div.style.top = `${e.target.offsetTop}px`;
    div.style.left = `${e.target.offsetLeft}px`;
    div.style.width = `${e.target.offsetWidth}px`;
    div.style.height = `${e.target.offsetHeight}px`;
};


/* How to get the coords of an element */

links.forEach(link => link.addEventListener('mouseenter', getCoords))

function getCoords () {
    const coords = this.getBoundingClientRect();
    console.log(coords);
};