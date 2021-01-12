const images = document.querySelectorAll('.img');

window.addEventListener('scroll', function() {

    images.forEach(image => {
        
        let position = image.getBoundingClientRect();

        // checking whether fully visible
        // if(position.top >= 0 && position.bottom <= window.innerHeight) {
        //     console.log('Element is fully visible in screen');
        // }

        // checking for partial visibility
        if(position.top < window.innerHeight && position.bottom >= 0) {
            image.style.transform = 'translateX(0px)';
        } else {
            if(image.classList[1] === "right") {
                image.style.transform = 'translateX(300px)';
            } else {
                image.style.transform = 'translateX(-400px)';
            }
        };
    });	
});


/* The getBoundingClientRect method returns a few properties, 
which could be used to know whether the element is hidden or visible in the current viewport :

top : distance from the top of the viewport
bottom : distance from the bottom of the viewport

Positive values of top and bottom mean they lie on the same side. Negative values mean they lie on either sides. */