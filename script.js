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

const numBtns = document.querySelector('.calc-buttons');
const displayResult = document.querySelector('.display-result');

numBtns.addEventListener('click', e => {

    if(e.target.hasAttribute('data-num')){
        displayResult.value += e.target.getAttribute('data-num');
    }
    
});
