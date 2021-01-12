const navInfo = document.querySelector('.nav-info');

window.addEventListener('scroll', e => {
    if(e.srcElement.scrollingElement.scrollTop > 300) {
        navInfo.style.maxWidth = '300px'
    } else {
        navInfo.style.maxWidth = '0px'
    }
});