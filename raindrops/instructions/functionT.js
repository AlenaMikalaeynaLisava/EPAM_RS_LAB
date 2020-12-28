import s from "./functionS"
import instructionsObject from "./instructionsObject"
import instructions from "./instructins"
import firstPage from "./firstPage";
export default function t(){
    document.querySelector(".enterpart__score-holder").classList.add("game-nondisplay");
    document.querySelector(".wave").classList.add("game-nondisplay");
    document.querySelector(".wave1").classList.add("game-nondisplay");
    document.querySelector(".seapart__sea-plants").classList.add("game-nondisplay");
    document.querySelector(".instructions").classList.remove("game-nondisplay");
    document.querySelector(".enterpart__play-panel-wrapper").classList.add("enterpart__play-panel-wrapper-information");
    firstPage();
    // if(instructionsObject === "start-game"){
    //     console.log(instructionsObject);
    //     s();
    // } else {
    //     
    // }
}