const calculatorButtonsHolder = document.querySelector(".calculator__buttons-holder");
const calculatorShowAll = document.querySelector(".calculator__show-all");
const calculatorShow = document.querySelector(".calculator__show");
let number1 = "";
let number2 = "";
let active = "number1";
let currentResult = 0;
let sign = "";
const disabledButtons = document.querySelectorAll(".disabled");
let previousOpperation = "resultOperation";


const buttonOnClick = (e)=>{
    if(e.target.classList.contains("button")){
        if(previousOpperation === "cleanOperation"){
            calculatorShow.textContent = "";
            calculatorShowAll.textContent = "";
        }
        if(calculatorShow.textContent === "0"){
            calculatorShow.textContent = "";
        }
        if(e.target.classList.contains("number")){
            numberPress(e.target.textContent);
        } else if(e.target.classList.contains("simple-operation")){
            simpleOperationPressed(e.target.textContent);
        } else if(e.target.classList.contains("square-operation")){
            squareOperationPressed(e.target.textContent);
        }else if(e.target.classList.contains("sign-change")){
            signChangePressed(e.target.textContent);
        }else if(e.target.classList.contains("decimal-sign")){
            decimalSignPressed(e.target.textContent);
        }else if(e.target.classList.contains("clean")){
            cleanOperationPressed((e.target.textContent));
        }else if(e.target.classList.contains("result")){
            resultOperationPressed(e.target.textContent);
        }
    }
}

const unDisableCleanButton = ()=>{
    document.querySelector(".disabled-clean").removeAttribute("disabled", "disabled");
}
const unDisableAllButtons = ()=>{
    for (let i=0; i<disabledButtons.length; i++){
        disabledButtons[i].removeAttribute("disabled", "disabled");
    }
}
const disableButton = (button)=>{
    button.setAttribute("disabled", "disabled");
}
const disableAllButtons = ()=>{
    for (let i=0; i<disabledButtons.length; i++){
        disabledButtons[i].setAttribute("disabled", "disabled");
    }
}
//Numper press
const numberPress = (number) => {
    unDisableCleanButton();
    unDisableAllButtons(); 
    let regexp = /\./g;

    if (previousOpperation === "resultOperation"){
        currentResult = 0;
        calculatorShow.textContent = "";
        calculatorShowAll.textContent = "";
    }else if ((previousOpperation !== "number") && (previousOpperation !=="cleanLastOperation")){
        calculatorShow.textContent = "";//Т.е. если там был какой-то знак или се
    }
    
    if (active === "number1"){
        number1 += number;
        currentResult = number1;
        if (regexp.test(number1)){
            disableButton(document.querySelector(".decimal-sign"));
        }
    } else {
        number2 += number;
        if (regexp.test(number2)){
            disableButton(document.querySelector(".decimal-sign"))
        }
    }   
    previousOpperation = "number";
    calculatorShowAll.textContent += number;
    calculatorShow.textContent += number;
}




//Simple operations
const simpleOperationPressed = (currentSign) =>{
    unDisableCleanButton();
    calculatorShowAll.textContent = calculatorShow.textContent;
    calculatorShow.textContent = "";
    if (previousOpperation === "resultOperation"){
        calculatorShowAll.textContent = currentResult;
        number1 = currentResult;
    }
    disableAllButtons();

    if(previousOpperation === "simpleOperation"){
        console.log(calculatorShowAll.textContent.length);
         calculatorShowAll.textContent  = calculatorShowAll.textContent.substring(0,calculatorShowAll.textContent.length);
        console.log(calculatorShowAll.textContent);
        calculatorShow.textContent  = "";
    }
    if(number1 && number2){
        if(sign === "+"){
            currentResult = (+number1 + +number2).toFixed(2);
        } else  if(sign === "-"){
            currentResult = (+number1 - +number2).toFixed(2);
        } else  if(sign == "×"){
            currentResult = (+number1 * +number2).toFixed(2);
        } else  if(sign === "÷"){
            currentResult = (+number1 / +number2).toFixed(2);
        }
        calculatorShowAll.textContent = currentResult + currentSign;
        number1 = currentResult;
        active = "number2";
        sign = currentSign;
        number2 = "";
    } else if(number1){
        calculatorShowAll.textContent = calculatorShow.textContent;
        sign = currentSign;
        active = "number2";
        calculatorShowAll.textContent += sign;
    }
    calculatorShow.textContent = sign;
    previousOpperation = "simpleOperation"; 
}



//Square operations
const squareOperationPressed = (currentSign) => {
    disableButton(document.querySelector(".disabled-clean"));
    calculatorShow.textContent = "";
    let length =0;
    let temp = "";
    if(currentSign === "√"){      
        if (active === "number1"){   
            if(+number1 < 0) {
                cleanOperationPressed("ce");
            }else{
            number1 = Math.sqrt(+number1);
           calculatorShowAll.textContent = number1;
            calculatorShow.textContent += number1;
        }
        } else  {
            if(+number2 < 0) {
                cleanOperationPressed("ce");
            }else{
            length = number2.length;
            number2 = Math.sqrt(+number2);
            temp = calculatorShowAll.innerText;
            temp = temp.slice(0, (temp.length-length));
           calculatorShowAll.textContent = temp + number2;
            calculatorShow.textContent += number2;
            }
    }
    } else {
        if (active === "number1"){
            number1 = +number1 * +number1;
           calculatorShowAll.textContent = number1;
            calculatorShow.textContent += number1;
        } else  {
            length = number2.length;
            number2 = +number2 * +number2;
               temp = calculatorShowAll.innerText;
                temp = temp.slice(0, (temp.length-length));
               calculatorShowAll.textContent = temp + number2;
                calculatorShow.textContent += number2;
            }       
    }
    previousOpperation = "squareOperation"; 
};

//Clear the screen
const cleanOperationPressed = (clean) => {
    if(clean === "ce"){
   calculatorShowAll.textContent = "0";
    calculatorShow.textContent = "0";
    number1 = " ";
    active = "number1";
    sign = currentSign = "";
    number2 = "";
    currentResult = 0;
    previousOpperation = "cleanOperation"; 
    } else {
        if(previousOpperation === "number"){
            if (active === "number1"){
                number1 = number1.slice(0, number1.length-1);
               calculatorShowAll.textContent  = calculatorShowAll.  textContent.slice(0, calculatorShowAll.textContent.length-1);
                calculatorShow.textContent  = calculatorShow.textContent.slice(0, calculatorShow.textContent.length-1);
            } else{
                number2 = number2.slice(0, number2.length-1);
               calculatorShowAll.textContent  = calculatorShowAll.textContent.slice(0, calculatorShowAll.textContent.length-1);
                calculatorShow.textContent  = calculatorShow.textContent.slice(0, calculatorShow.textContent.length-1);
            }
        }else if (previousOpperation === "simpleOperation"){
            sign = "";
           calculatorShowAll.textContent  = calculatorShowAll.textContent.slice(0, calculatorShowAll.textContent.length-1);
            calculatorShow.textContent  = calculatorShow.textContent.slice(0, calculatorShow.textContent.length-1);
        }
     previousOpperation = "cleanLastOperation"; 
    }
}

//Change the sign
const signChangePressed = (sign) => {
    if (active === "number1"){
        length = number1.length;
        number1 = -number1;
       temp = calculatorShowAll.innerText;
            temp = temp.slice(0, (temp.length-length));
           calculatorShowAll.textContent = temp + number1;
            calculatorShow.textContent = number1;
    } else  {
        length = number2.length;
        number2 = -number2;
       temp = calculatorShowAll.innerText;
        temp = temp.slice(0, (temp.length-length));
       calculatorShowAll.textContent = temp + number2;
        calculatorShow.textContent = number2;
}
previousOpperation = "signChangeOperation"; 
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
    simpleOperationPressed(currentSign);
   calculatorShowAll.textContent = currentResult;
    calculatorShow.textContent = currentResult;
    number1 = " ";
    active = "number1";
    sign = currentSign = "";
    number2 = "";
    previousOpperation = "resultOperation"; 
    disableButton(document.querySelector(".disabled-clean"));
} 

calculatorButtonsHolder.addEventListener("click", buttonOnClick);