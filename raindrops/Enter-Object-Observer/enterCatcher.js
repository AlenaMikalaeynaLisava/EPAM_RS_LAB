// import { NoEmitOnErrorsPlugin } from "webpack";
import numberPress from "./numberPress";
import clearScreen from "./clearScreen";
import deleteLastNumber from "./deleteLastNumber";
import enterButton from "./enterButton";
export default function enterCatcher(timerId)  {
    const buttonsHolder = document.querySelector(".enterpart__play-panel__buttons-holder");
    // const currrentNumber = "";
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
    
    buttonsHolder.addEventListener("click", buttonOnClick);
 const removeEv = function(){
    buttonsHolder.removeEventListener("click", buttonOnClick);
 }

    const keyOnClick = (e)=>{
        if(e.code.slice(0,e.code.length-1)==="Digit"){
            numberPress(e.code.slice(-1));
        } else if (e.code == "Delete"){
            clearScreen();
        }else if (e.code == "Backspace"){
            deleteLastNumber();
        }else if (e.code === "Enter"){
            enterButton();
        }
    }
    document.addEventListener("keypress", keyOnClick);
    const removeEv1 = function(){
    document.removeEventListener("keypress", keyOnClick);
    }

    setTimeout(removeEv, timerId);
    setTimeout(removeEv1, timerId);
    // buttonsHolder.removeEventListener("click", buttonOnClick);
}
