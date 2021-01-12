const panel = document.querySelectorAll('.panel');

panel.forEach(element => {
    element.addEventListener('mouseenter', e => mouseEnter(e))
    element.addEventListener('mouseleave', e => mouseOut(e))
})

function mouseEnter (e) {
    e.target.style.flexGrow = "2";
    e.target.firstElementChild.style.top = "30%";
    e.target.lastElementChild.style.bottom = "30%";
}

function mouseOut (e) {
    e.target.style.flexGrow = "1"
    e.target.firstElementChild.style.top = "";
    e.target.lastElementChild.style.bottom = "";
}