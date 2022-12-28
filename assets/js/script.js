/*
BUTTONS
*/
//Constante com todos os números da calculadora
const btnNumberClick = document.querySelectorAll('.-number');
//Constate com todos os operadores da calculadora
const btnOperatorClick = document.querySelectorAll('.-operator');
//Constante com o botão de resultado
const btnResultClick = document.querySelector('#btn-result');
//Constante com o botão C
const btnCClick = document.querySelector('#btn-c');
//Constante com o botão CE
const btnCeClick = document.querySelector('#btn-ce');
//Constante com o botão DEL
const btnDelClick = document.querySelector('#btn-del');
//Constante com o botão Clear
const btnClearClick = document.querySelector('.clear');


/*
TEXTS
*/
//Constante com o elemento que exibe o resultado
const result = document.querySelector('#result');
//Constante com o elemento que exibe os operandos
const operating = document.querySelector('#operating');
//Constante com o elemento que exibe o histórico
const history = document.querySelector('#history-text');


/*
FUNCTIONS
*/
addNumber = () => {
    for (let i = 0; i < btnNumberClick.length; i++) {
        btnNumberClick[i].addEventListener('click', () => {
            if (result.innerHTML == 0) {
                result.innerHTML = ''
            }
            result.innerHTML += `${btnNumberClick[i].value}`;
        })
    }
}

addOperator = () => {
    for (let i = 0; i < btnOperatorClick.length; i++) {
        btnOperatorClick[i].addEventListener('click', () => {
            if (operating.innerHTML == '') {
                operating.innerHTML = `${result.innerHTML} ${btnOperatorClick[i].value}`;
                result.innerHTML = '';
            }
            else {
                operating.innerHTML = `${eval(operating.innerHTML + result.innerHTML)} ${btnOperatorClick[i].value}`;
                result.innerHTML = '';
            }
        })
    }
}

showResult = () => {
    btnResultClick.addEventListener('click', () => {
        if (history.innerHTML == 'Ainda não há histórico') {
            history.innerHTML = '';
        }
        history.innerHTML += `${operating.innerHTML} ${result.innerHTML} =\n${eval(operating.innerHTML + result.innerHTML)}\n\n`;
        result.innerHTML = `${eval(operating.innerHTML + result.innerHTML)}`;
        operating.innerHTML = '';
    })
}

clearItens = () => {
    btnCClick.addEventListener('click', () => {
        result.innerHTML = '0';
        operating.innerHTML = '';
    })
    btnCeClick.addEventListener('click', () => {
        result.innerHTML = '0';
    })
    btnDelClick.addEventListener('click', () => {
        if (result.innerHTML != '0' && 
            result.innerHTML.length != 1) {
            result.innerHTML = result.innerHTML = result.innerHTML.replace(result.innerHTML.slice(result.innerHTML.length -1), '');
        }
        else if (result.innerHTML.length == 1) {
            result.innerHTML = result.innerHTML = result.innerHTML.replace(result.innerHTML.slice(result.innerHTML.length -1), '');
            result.innerHTML = '0';
        }
    })
    btnClearClick.addEventListener('click', () => {
        history.innerHTML = 'Ainda não há histórico';
    })
}

//EXECUTE
addNumber();
addOperator();
showResult();
clearItens();
