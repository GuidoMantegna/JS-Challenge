const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 1;

let isDrawing = false;
let hue = 0;
let direction = true;

function draw(e) {
    if(!isDrawing) return; //stop the function

    ctx.stroke();
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    
    // start from
    ctx.moveTo(e.offsetX, e.offsetY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    
    hue++;
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    } 
    if(direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
};

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);


