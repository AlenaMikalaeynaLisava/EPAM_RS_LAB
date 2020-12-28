import mainObject from "./mainObject"
import s from "../instructions/functionS"
import t from "../instructions/functionT"
import instructionsObject from "../instructions/instructionsObject"
import instructions from "../instructions/instructins"
export default function startGame(){
    const startGame = document.querySelector(".game-start");
    startGame.addEventListener("click",(e)=>{
        if(e.target.value === "start-game"){
           s();
        } else if(e.target.value === "start-demo"){
          t(); 
        }
        startGame.classList.add("game-nondisplay");
    })
}

