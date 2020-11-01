const calculatorButtonsHolder = document.querySelector(".calculator__buttons-holder");
const calculatorShowAll = document.querySelector(".calculator__show-all");
const calculatorShow = document.querySelector(".calculator__show");
let number1 = '';
let number2 = '';
let active = 'number1';
let currentResult = 0;
let sign = '';
const disabledButtons = document.querySelectorAll('.disabled');
let previousOpperation = 'resultOperation';


const buttonOnClick = (e)=>{
    if(e.target.classList.contains("button")){
        if(previousOpperation === "cleenOperation"){
            calculatorShow.textContent = "";
            calculatorShowAll.textContent = "";
        }
        if(calculatorShow.textContent === "0"){
            calculatorShow.textContent = "";
        }
        if(e.target.classList.contains("number")){
            numberPress(e.target.textContent);
        } else if(e.target.classList.contains("simple-operation")){
            console.log(e.target.textContent);
            simpleOperationPressed(e.target.textContent);
        } else if(e.target.classList.contains("square-operation")){
            console.log(e.target.textContent)
            squareOperationPressed(e.target.textContent);
        }else if(e.target.classList.contains("sign-change")){
            signChangePressed(e.target.textContent);
        }else if(e.target.classList.contains("decimal-sign")){
            decimalSignPressed(e.target.textContent);
        }else if(e.target.classList.contains("cleen")){
            cleenOperationPressed((e.target.textContent));
        }else if(e.target.classList.contains("result")){
            resultOperationPressed(e.target.textContent);
        }
    }
}

//Numper press
const numberPress = (number) => {
    document.querySelector('.disabled-cleen').removeAttribute("disabled", "disabled");
    let regexp = /\./g;
    if (previousOpperation === 'resultOperation'){
        currentResult = 0;
    }else if ((previousOpperation !== 'number') && (previousOpperation !=='cleenLastOperation')){
        calculatorShow.textContent = ' ';
    }
    for (let i=0; i<disabledButtons.length; i++){
        disabledButtons[i].removeAttribute("disabled", "disabled");
    }
    if (active === 'number1'){
        number1 += number;
        currentResult = number1;
        if (regexp.test(number1)){
            document.querySelector('.decimal-sign').setAttribute("disabled", "disabled");
        }
    } else {
        number2 += number;
        if (regexp.test(number2)){
            document.querySelector('.decimal-sign').setAttribute("disabled", "disabled");
        }
    }   
    previousOpperation = 'number';
    calculatorShowAll.textContent += number;
    calculatorShow.textContent += number;
}

//Simple operations
const simpleOperationPressed = (currentSign) =>{
    document.querySelector('.disabled-cleen').removeAttribute("disabled", "disabled");
    calculatorShow.textContent = '';
    if (previousOpperation === 'resultOperation'){
        calculatorShowAll.textContent = currentResult;
        number1 = currentResult;
    }
    for (let i=0; i<disabledButtons.length; i++){
        disabledButtons[i].setAttribute("disabled", "disabled");
    }
    if(number1 && number2){
        if(sign === "+"){
            currentResult = (+number1 + +number2).toFixed(2);
        } else  if(sign === "-"){
            currentResult = (+number1 - +number2).toFixed(2);
        } else  if(sign == '×'){
            console.log(sign);
            currentResult = (+number1 * +number2).toFixed(2);
        } else  if(sign === "÷"){
            currentResult = (+number1 / +number2).toFixed(2);
        }
        calculatorShowAll.textContent = currentResult + currentSign;
        number1 = currentResult;
        active = 'number2';
        sign = currentSign;
        number2 = '';
    } else if(number1){
        sign = currentSign;
        active = 'number2';
        calculatorShowAll.textContent += sign;
    }
    calculatorShow.textContent = sign;
    previousOpperation = 'simpleOperation' 
}

//Square operations
const squareOperationPressed = (currentSign) => {
    document.querySelector('.disabled-cleen').setAttribute("disabled", "disabled");
    calculatorShow.textContent = '';
    let length =0;
    let temp = '';
    if(currentSign === "√"){
        if (active === "number1"){     
            number1 = Math.sqrt(+number1);
            active = "number2"
            calculatorShowAll.textContent = number1;
            calculatorShow.textContent += number1;
        } else  {
            length = number2.length;
            console.log(length);
            number2 = Math.sqrt(+number2);
            active = "number1"
            temp = calculatorShowAll.innerText;
            console.log(calculatorShowAll.innerText);
            console.log(temp);
            temp = temp.slice(0, (temp.length-length));
            console.log(temp);
            calculatorShowAll.textContent = temp + number2;
            calculatorShow.textContent += number2;
    }
    } else {
        if (active === "number1"){
            number1 = +number1 * +number1;
            active = "number2"
            calculatorShowAll.textContent = number1;
            calculatorShow.textContent += number1;
        } else  {
            length = number2.length;
            number2 = +number2 * +number2;
            active = "number1"
                temp = calculatorShowAll.innerText;
                console.log(calculatorShowAll.innerText);
                console.log(temp);
                temp = temp.slice(0, (temp.length-length));
                console.log(temp);
                calculatorShowAll.textContent = temp + number2;
                calculatorShow.textContent += number2;
            }       
    }
    previousOpperation = 'squareOperation'; 
};

//Clear the screen
const cleenOperationPressed = (clean) => {
    if(clean === 'ce'){
    calculatorShowAll.textContent = '0';
    calculatorShow.textContent = '0';
    number1 = " ";
    active = 'number1';
    sign = currentSign = "";
    number2 = '';
    currentResult = 0;
    previousOpperation = 'cleenOperation'; 
    } else {
        if(previousOpperation === "number"){
            if (active === 'number1'){
                number1 = number1.slice(0, number1.length-1);
                console.log(number1);
                calculatorShowAll.textContent  = calculatorShowAll.textContent.slice(0, calculatorShowAll.textContent.length-1);
                calculatorShow.textContent  = calculatorShow.textContent.slice(0, calculatorShow.textContent.length-1);
            } else{
                number2 = number2.slice(0, number2.length-1);
                console.log(number2);
                calculatorShowAll.textContent  = calculatorShowAll.textContent.slice(0, calculatorShowAll.textContent.length-1);
                calculatorShow.textContent  = calculatorShow.textContent.slice(0, calculatorShow.textContent.length-1);
            }
        }else if (previousOpperation === "simpleOperation"){
            sign = '';
            calculatorShowAll.textContent  = calculatorShowAll.textContent.slice(0, calculatorShowAll.textContent.length-1);
            calculatorShow.textContent  = calculatorShow.textContent.slice(0, calculatorShow.textContent.length-1);
        }
     previousOpperation = 'cleenLastOperation'; 
    }
}

//Change the sign
// calculatorShow.textContent = ''
const signChangePressed = (sign) => {
    if (active === "number1"){
        length = number1.length;
        number1 = -number1;
        active = "number2"
        temp = calculatorShowAll.innerText;
            console.log(calculatorShowAll.innerText);
            console.log(temp);
            temp = temp.slice(0, (temp.length-length));
            console.log(temp);
            calculatorShowAll.textContent = temp + number1;
            calculatorShow.textContent = number1;
    } else  {
        length = number2.length;
        number2 = -number2;
        active = "number1"
        temp = calculatorShowAll.innerText;
        console.log(calculatorShowAll.innerText);
        console.log(temp);
        temp = temp.slice(0, (temp.length-length));
        console.log(temp);
        calculatorShowAll.textContent = temp + number2;
        calculatorShow.textContent = number2;
}
previousOpperation = 'signChangeOperation'; 
}

//Decimal
const decimalSignPressed = (sign) => {
    if (active === "number1"){
        number1 += ".";
        active = "number1"
    } else  {
        number2 += ".";
        active = "number2"
}
calculatorShowAll.textContent += sign;
    calculatorShow.textContent += sign;
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
    previousOpperation = 'resultOperation'; 
    document.querySelector('.disabled-cleen').setAttribute("disabled", "disabled");
} 

calculatorButtonsHolder.addEventListener('click', buttonOnClick);