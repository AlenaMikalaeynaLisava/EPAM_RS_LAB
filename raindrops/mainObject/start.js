import mainObject from "./mainObject"
import instructionsObject from "../instructions/instructionsObject"
import instructions from "../instructions/instructins"
export default function startGame(){
    const startGame = document.querySelector(".game-start");
    startGame.addEventListener("click",(e)=>{
        function s(){
            const aud = document.querySelector('.audio');
            aud.play();
            document.querySelector(".enterpart__score-holder").classList.remove("game-nondisplay");
            document.querySelector(".wave").classList.remove("game-nondisplay");
            document.querySelector(".wave1").classList.remove("game-nondisplay");
            document.querySelector(".seapart__sea-plants").classList.remove("game-nondisplay");
            document.querySelector(".enterpart__play-panel-wrapper").classList.remove("enterpart__play-panel-wrapper-information");
            mainObject.drop.isContinue();
        }
        function t(){
            document.querySelector(".enterpart__score-holder").classList.add("game-nondisplay");
            document.querySelector(".wave").classList.add("game-nondisplay");
            document.querySelector(".wave1").classList.add("game-nondisplay");
            document.querySelector(".seapart__sea-plants").classList.add("game-nondisplay");
            document.querySelector(".instructions").classList.remove("game-nondisplay");
            document.querySelector(".enterpart__play-panel-wrapper").classList.add("enterpart__play-panel-wrapper-information");
            instructions();
            if(instructionsObject === "start-game"){
                s();
            } else {
                setTimeout(t, 11000);
            }
        }
        if(e.target.value === "start-game"){
           s();
        } else if(e.target.value === "start-demo"){
          t(); 
        }
        startGame.classList.add("game-nondisplay");
    })
}