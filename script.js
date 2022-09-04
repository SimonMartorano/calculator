const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1 / num2;
}

const operate = (num1,operator,num2) => {

    if(typeof(num1) != Number)
        num1 = Number(num1); 

    if(typeof(num2) != Number)
        num2 = Number(num2); 


    switch(operator){
        case '+':
           return add(num1,num2);
           break;

        case '-':
            return subtract(num1,num2);
            break;

        case '*':
            return multiply(num1,num2);
            break;

        case '/':
            return divide(num1,num2);
            break;
    }
}

const displayOperation = document.querySelector('.display-operation');
const displayResult = document.querySelector('.display-result');
const numBtns = document.querySelector('.calc-buttons');

let value1 = '';
let value2 = '';
let operator = '';
let result;
let clear = false;


numBtns.addEventListener('click', e => {

    
    if(e.target.hasAttribute('data-num')){

        if(clear){
            displayResult.value = '';
            clear = false;
        }

        displayResult.value += e.target.getAttribute('data-num');

        if(value1 && operator){
            value2 = displayResult.value;
        }
        else value1 = displayResult.value;

    }

    if(e.target.hasAttribute('data-operator')){

        if(value1, operator, value2){

            result = operate(value1, operator, value2);

            displayResult.value = result;
            value1 = result;
            value2 = '';
            operator = e.target.getAttribute('data-operator');
            clear = true;
            
        }

        else if(value1){
            operator = e.target.getAttribute('data-operator');
            clear = true;
        }

        displayOperation.value = `${value1} ${operator} ${value2}`;
    }

    if(e.target.hasAttribute('data-equal')){

        if(value1, operator, value2){
            displayOperation.value = `${value1} ${operator} ${value2} =`;

            result = operate(value1, operator, value2);

            displayResult.value = result;
            value1 = result;
            value2 = '';
            operator = '';
            clear = true;
            
            
        }
    }
    
});



