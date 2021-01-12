const links = document.querySelectorAll('li');
const activeBack = document.querySelector('.active-back');

links.forEach(link => link.addEventListener('mouseover', () => {
    const linkDesc = link.childNodes[3];

    linkDesc.style.display = 'block'
    spanPosition(linkDesc)  
}))

links.forEach(link => link.addEventListener('mouseleave', () => {

    link.childNodes[3].style.display = 'none'
    activeBack.style.display = 'none'
}))

function spanPosition (target) {
    const background = activeBack.style;

    background.display = 'block'
    background.top = `${target.offsetTop}px`;
    background.left = `${target.offsetLeft}px`;
    background.width = `${target.offsetWidth}px`;
    background.height = `${target.offsetHeight}px`;
}