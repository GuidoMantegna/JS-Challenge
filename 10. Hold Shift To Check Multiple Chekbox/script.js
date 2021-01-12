const inputs = Array.from(document.querySelectorAll('#checkbox'));

let inputsChecked = [];

inputs.forEach(input => {
    input.addEventListener('click', e => {

        if (input.checked) {
            inputsChecked[inputsChecked.length] = input.dataset.num;
            input.nextElementSibling.classList.add("label-checked");
        } else {
            input.nextElementSibling.classList.remove("label-checked")
            let i = inputsChecked.findIndex( num => num == input.dataset.num );

            for( let i = 0; i < inputsChecked.length; i++){ 
                if ( inputsChecked[i] === input.dataset.num) { 
                    inputsChecked.splice(i, 1); 
                }
            }
        }
        
        inputsChecked.sort();
        let firstCheck = inputsChecked[0];
        let indexOfLast = inputsChecked.length - 1;
        let lastCheck = inputsChecked[indexOfLast];

        if (e.shiftKey) {
            inputs.forEach(input => {
                if(input.dataset.num > firstCheck && input.dataset.num < lastCheck) {
                    input.checked = true;
                    input.nextElementSibling.classList.add("label-checked");
                };
            });
        };
    });
});

