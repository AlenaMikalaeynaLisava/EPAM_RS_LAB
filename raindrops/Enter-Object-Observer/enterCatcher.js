// import { NoEmitOnErrorsPlugin } from "webpack";
import numberPress from "./numberPress";
import clearScreen from "./deleteLastNumber";
import deleteLastNumber from "./deleteLastNumber";
import enterButton from "./enterButton";
export default function lis(){
    const buttonsHolder = document.querySelector(".enterpart__play-panel__buttons-holder");
    const currrentNumber = "";
    
    
    const buttonOnClick = (e)=>{
        if(e.target.classList.contains("number")||e.target.classList.contains("ziro")){
            numberPress(e.target.textContent);
        } else if (e.target.classList.contains("clear")){
            clearScreen();
        }else if (e.target.classList.contains("delete")){
            deleteLastNumber();
        }else if (e.target.classList.contains("enter")){
            enterButton();
        }
    }
    
    // const numberPress = (number) => {
    //     alert(number);
    // }
    // const clearScreen = (clear) => {
    //     alert(clear);
    // }
    // const deleteLastNumber = (number) => {
    //     alert(number);
    // }
    // const enterButton = () => {
    //     alert("enter");
    // }
    
    
    // //Numper press
    // const numberPress = (number) => {

        
    //     if (active === "number1"){
    //         number1 += number;
    //         currentResult = number1;
    //         if (regexp.test(number1)){
    //             disableButton(document.querySelector(".decimal-sign"));
    //         }
    //     } else {
    //         number2 += number;
    //         if (regexp.test(number2)){
    //             disableButton(document.querySelector(".decimal-sign"))
    //         }
    //     }   
    //     previousOpperation = "number";
    //     calculatorShowAll.textContent += number;
    //     calculatorShow.textContent += number;
    // }
    
    
    
    
    
    
    
    // //Clear the screen
    // const cleanOperationPressed = (clean) => {
    //     if(clean === "ce"){
    //    calculatorShowAll.textContent = "0";
    //     calculatorShow.textContent = "0";
    //     number1 = " ";
    //     active = "number1";
    //     sign = currentSign = "";
    //     number2 = "";
    //     currentResult = 0;
    //     previousOpperation = "cleanOperation"; 
    //     } else {
    //         if(previousOpperation === "number"){
    //             if (active === "number1"){
    //                 number1 = number1.slice(0, number1.length-1);
    //                calculatorShowAll.textContent  = calculatorShowAll.  textContent.slice(0, calculatorShowAll.textContent.length-1);
    //                 calculatorShow.textContent  = calculatorShow.textContent.slice(0, calculatorShow.textContent.length-1);
    //             } else{
    //                 number2 = number2.slice(0, number2.length-1);
    //                calculatorShowAll.textContent  = calculatorShowAll.textContent.slice(0, calculatorShowAll.textContent.length-1);
    //                 calculatorShow.textContent  = calculatorShow.textContent.slice(0, calculatorShow.textContent.length-1);
    //             }
    //         }else if (previousOpperation === "simpleOperation"){
    //             sign = "";
    //            calculatorShowAll.textContent  = calculatorShowAll.textContent.slice(0, calculatorShowAll.textContent.length-1);
    //             calculatorShow.textContent  = calculatorShow.textContent.slice(0, calculatorShow.textContent.length-1);
    //         }
    //      previousOpperation = "cleanLastOperation"; 
    //     }
    // }
    
    
    // //Result
    // const resultOperationPressed = (currentSign) => {
    //     simpleOperationPressed(currentSign);
    //    calculatorShowAll.textContent = currentResult;
    //     calculatorShow.textContent = currentResult;
    //     number1 = " ";
    //     active = "number1";
    //     sign = currentSign = "";
    //     number2 = "";
    //     previousOpperation = "resultOperation"; 
    //     disableButton(document.querySelector(".disabled-clean"));
    // } 
    
    buttonsHolder.addEventListener("click", buttonOnClick);
}
