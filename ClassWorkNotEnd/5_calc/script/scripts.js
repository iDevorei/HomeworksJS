// Не реализованы функции +/- и %


const calc = document.querySelector('.calc');

const result = document.querySelector('#result');

calc.addEventListener('click', function(event) {
    if(!event.target.classList.contains('calc_btn')) return;

    console.log(event.target.innerText);
    const value = event.target.innerText;

    switch(value) {
        case 'C':
            result.innerText = '';
            break;

        case '=':
            if(result.innerText.search(/[^0-9*/+-.]/mi) != -1) return; 

            result.innerText = eval(result.innerText);
            break;

        default:
            result.innerText += value;
    }

    // result.innerText += value;

});



