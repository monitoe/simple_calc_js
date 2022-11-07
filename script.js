let buttonPlus = document.getElementById('buttonPlus');
let buttonMinus = document.getElementById('buttonMinus');
let buttonMultiply = document.getElementById('buttonMultiply');
let buttonDivide = document.getElementById('buttonDivide');

function onButtonPlusClick(){
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let number1 = input1.value;
    let number2 = input2.value;
    let summ = Number(number1) + Number(number2);
    window.alert(summ);
}

function onButtonPlusClick(){
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let number1 = input1.value;
    let number2 = input2.value;
    let summ = Number(number1) + Number(number2);
    window.alert(summ);
}

function onButtonMinusClick(){
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let number1 = input1.value;
    let number2 = input2.value;
    let summ = Number(number1) - Number(number2);
    window.alert(summ);
}
function onButtonMultiplyClick(){
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let number1 = input1.value;
    let number2 = input2.value;
    let summ = Number(number1) * Number(number2);
    window.alert(summ);
}
function onButtonDivideClick(){
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let number1 = input1.value;
    let number2 = input2.value;
    let summ = Number(number1) / Number(number2);
}

buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultiply.addEventListener('click', onButtonMultiplyClick);
buttonDivide.addEventListener('click', onButtonDivideClick);
////доделать функциии