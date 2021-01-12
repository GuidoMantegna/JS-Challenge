const slide = document.querySelector('.main-container')
const images = document.querySelectorAll('img')

let move = false;
let grab = false;

let scrollOptions = {
    left: slide.scrollLeft,
    // top: topInput.value,
    // behavior: scrollInput.checked ? 'smooth' : 'auto'
  }

slide.scrollTo(scrollOptions)

slide.addEventListener('mousedown', settings)

slide.addEventListener('mouseup', settings)

slide.addEventListener('mousemove', e => {

    if(move) {
        slide.scrollLeft -= e.movementX
    };

})

function settings () {
    move = !move;
    grab = !grab;

    images.forEach(img => {
        (grab)
        ?(img.style.cursor = 'grabbing')
        :(img.style.cursor = 'grab')
    })
}