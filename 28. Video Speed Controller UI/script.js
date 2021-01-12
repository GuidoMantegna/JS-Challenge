const video = document.querySelector('video');
const speedBar = document.querySelector('.speed-bar');
const speedFill = document.querySelector('.speed-fill');
const rateTxt = document.querySelector('.speed-bar > p')

speedBar.addEventListener('mousemove', e => {
    
    let height = speedBar.clientHeight;
    offsetTop = speedBar.offsetTop;
    movement = e.clientY - offsetTop;
    percent = ((height-movement)/height)*100
    rate = ((height-movement)/(height/2)).toFixed(1)

    speedFill.style.height = `${percent}%`;
    video.playbackRate = rate;
    rateTxt.textContent = `${rate}x`
})