const root = document.querySelector(':root')

window.addEventListener('mousemove', e => {

    let moveX = (e.offsetX - (innerWidth/2)) * 0.02;
    let moveY = (e.offsetY - (innerHeight/2)) * 0.04;

    root.style.setProperty('--screen-X', `${moveX}px`);
    root.style.setProperty('--screen-Y', `${moveY}px`);
})