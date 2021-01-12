const 
input = document.querySelector('input');
list = document.querySelector('ul');

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

async function getData (url) {
    
    try {
        const request = await fetch(url);
        const response = await request.json();
        return response
    } catch (error) {
        console.error(error)
    }

}

function createTemplate (city, state, population) {
    return `
        <li>
            <p>${city}, ${state}</p>
            <p>Population: ${population}</p>
        </li>
    `
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

input.addEventListener('input', async e => {
    
    const data = await getData(endpoint);

    const filteredData = await data.filter(item => {
        return item.city.toLowerCase().includes(e.target.value.toLowerCase())
    });

    if(e.target.value) {
        const template = filteredData.reduce( (acc, item) => {
            return acc + createTemplate(item.city, item.state, numberWithCommas(item.population))
        }, `<li><p>${filteredData.length} cities were found</p><p>↓</p></li>`);

        list.innerHTML = template 
    } else {
        list.innerHTML = `<li><p>Filter for a City</p><p>↑</p></li>`;
    }
})

