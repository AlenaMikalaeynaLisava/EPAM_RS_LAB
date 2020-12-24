import mainObject from "./mainObject"

export default function startGame(){
    const startGame = document.querySelector(".game-start");
    startGame.addEventListener("click",(e)=>{
        const aud = document.querySelector('.audio');
        aud.play();
        if(e.target.value === "start-game"){
            mainObject.drop.isContinue();
            startGame.classList.add("game-nondisplay");
        }
    })
}