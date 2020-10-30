const calculatorButtonsHolder = document.querySelector(".calculator__buttons-holder");
const calculatorShowAll = document.querySelector(".calculator__show-all");
const calculatorShow = document.querySelector(".calculator__show");
let number1 = '';
let number2 = '';
let active = 'number1';
let currentResult = 0;
let sign = '';
let screenTrigger =0;
const disabledButtons = document.querySelectorAll('.disabled');


const buttonOnClick = (e)=>{
    if(e.target.classList.contains("button")){
        if(screenTrigger === 1){
            calculatorShow.textContent = "";
            calculatorShowAll.textContent = "";
            screenTrigger = 0;
        }
        //заменить функцией вывода 
        if(calculatorShow.textContent === "0"){
            calculatorShow.textContent = "";
        }
        calculatorShowAll.textContent += e.target.textContent;
        calculatorShow.textContent += e.target.textContent;

        if(e.target.classList.contains("number")){
            numberPress(e.target.textContent);
        } else if(e.target.classList.contains("simple-operation")){
            console.log(e.target.textContent);
            simpleOperationPressed(e.target.textContent);
        } else if(e.target.classList.contains("square-operation")){
            console.log(e.target.textContent)
            squareOperationPressed();
        }else if(e.target.classList.contains("sign-change")){
            signChangePressed();
        }else if(e.target.classList.contains("decimal-sign")){
            decimalSignPressed();
        }else if(e.target.classList.contains("cleen")){
            cleenOperationPressed((e.target.textContent));
        }else if(e.target.classList.contains("result")){
            resultOperationPressed(e.target.textContent);
        }
    }


}
//Numper press
const numberPress = (number) => {
    for (let i=0; i<disabledButtons.length; i++){
        disabledButtons[i].removeAttribute("disabled", "disabled");
    }
    if (active === 'number1'){
        number1 += number;
        console.log("number1 = " + number1);
    } else {
        number2 += number;
        console.log("number2 = " + number2);
    }    
}

//Simple operations
const simpleOperationPressed = (currentSign) =>{
    for (let i=0; i<disabledButtons.length; i++){
        disabledButtons[i].setAttribute("disabled", "disabled");
    }
    if(number1 && number2){
        if(sign === "+"){
            currentResult = +number1 + +number2;
        } else  if(sign === "-"){
            currentResult = +number1 - +number2;
        } else  if(sign == '×'){
            console.log(sign);
            currentResult = +number1 * +number2;
        } else  if(sign === "÷"){
            sign = +number1 / +number2;
        }
        calculatorShowAll.textContent = currentResult + sign;
        console.log(currentResult);
        number1 = currentResult;
        active = 'number2';
        sign = currentSign;
        console.log("sign = " +sign);
        number2 = '';
    } else if(number1){
        sign = currentSign;
        console.log("sign = currentSign = " +currentSign);
        active = 'number2';
        currentResult = number1;
    }
}

//Square operations
const squareOperationPressed = (currentSign) => {
    if(currentSign === "√"){
        currentResult = +number1 + +number2;
    } else  {}
};

//Clear the screen
const cleenOperationPressed = (clean) => {
 if(clean === 'ce'){
    calculatorShowAll.textContent = '\00';
    calculatorShow.textContent = '0';
    number1 = " ";
    active = 'number1';
    sign = currentSign = "";
    number2 = '';
    currentResult = 0;
    screenTrigger = 1;
 } else {

 }
}

//Result
const resultOperationPressed = (currentSign) => {
    simpleOperationPressed(currentSign)
    calculatorShowAll.textContent = currentResult;
    calculatorShow.textContent = currentResult;
    number1 = " ";
    active = 'number1';
    sign = currentSign = "";
    number2 = '';
    currentResult = 0;
    screenTrigger = 0;
} 
calculatorButtonsHolder.addEventListener('click', buttonOnClick);