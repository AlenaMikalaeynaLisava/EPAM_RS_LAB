// import { NoEmitOnErrorsPlugin } from "webpack";
import numberPress from "./numberPress";
import clearScreen from "./clearScreen";
import deleteLastNumber from "./deleteLastNumber";
import enterButton from "./enterButton";
export default function enterCatcher(vara, timerId)  {
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
            enterButton(vara);
        }
    }
    
    
    buttonsHolder.addEventListener("click", buttonOnClick);
 const removeEv = function(){
    buttonsHolder.removeEventListener("click", buttonOnClick);
 }
    setTimeout(removeEv, timerId);
    // buttonsHolder.removeEventListener("click", buttonOnClick);
}
