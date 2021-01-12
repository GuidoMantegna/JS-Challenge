const list = document.querySelector('.bands');

const bands = ['The Plot In You', 'The Devil Wears Prada', 'Pierce The Veil', 'Norma Jean',
'The Bled', 'Say Anything', 'The Midway State', 'We Came As Romans', 'Counterparts', 'Oh, Sleepers', 
'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function createTemplate (band) {
    return `
    <li class='item'><i class="icon-rock-n-roll"></i>${band}</li>
    `
}

window.addEventListener('load', () => {
   
    let template = '';

    bands.sort((a, b) => {
        if(ignoreTheArticle(a) > ignoreTheArticle(b)) { 
            return 1 
        } else {
            return -1
        }
    });

    bands.forEach(band => {
        template += createTemplate(band)
    });

    list.innerHTML = template;
    
})

function ignoreTheArticle (word) {
    let spaceIndex = word.indexOf(" ");
    let article = word.substring(0, spaceIndex);

    if (article === 'An' || article === 'A' || article === 'The') {
        return word.substring(spaceIndex+1, word.length);
    } else {
        return word;
    };
};

