const divs = document.querySelectorAll('div');

function logText (e) {
    console.log(this.classList.value)
    e.stopPropagation() // stop bubbling!
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true
}));

/*
First the browser do something called CAPTURE --> When you click on an element,
it goes from the top down captures all of those events.
Then it starts from the bottom to do something called BUBBLE --> The events start triggered from 
bottom to top.
*/

/*
{capture: true} means that the logText function is not going to get run on the bubble up,
It's going to get run on the capture down.
expected output: one two three.

By default, capture is false.
expected output: three two one.

{once: true} It will listen for a click, and then unbind itself = div.removeEventListener('click', logText).
So, it triggers the event once.
*/
