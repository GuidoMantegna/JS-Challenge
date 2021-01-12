const mainContainer = document.querySelector('.main-container');
const list = document.querySelector('.list')
const input = document.getElementById('add-input');

function setTemplate(item) {
    return `
    <li class="item">
        <input type="checkbox">
        <p>${item}</p>
        <i class="icon-local_restaurant" data-id="${item}"></i>
    </li>
    `  
};
function addNewItem () {
    input.value 
    ? localStorage.setItem(input.value, input.value)
    : input.classList.add('add-input-empty')
};
function printItems () {
    let template = "";

        for (let property in localStorage) {
            if(localStorage.hasOwnProperty(property)) {
    
                let item = setTemplate(property);
                template += item;  
            };
        };

        list.innerHTML = template;
        input.value = '';
};
function deleteItem (e) {
    localStorage.removeItem(e.target.dataset.id)
};

window.addEventListener('load', printItems);
input.addEventListener('input', () => input.classList.remove('add-input-empty'));

mainContainer.addEventListener('click', e => {
    if(e.target.localName === "button") {
        addNewItem();
        printItems();
    };
    if(e.target.className === "icon-local_restaurant") {
        deleteItem(e);
        printItems();
    };
});








