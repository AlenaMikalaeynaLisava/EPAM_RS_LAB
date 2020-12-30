import mainObject from "../mainObject/mainObject"
export default function s(){
    const aud = document.querySelector('.audio');
    aud.play();
    document.querySelector(".enterpart__score-holder").classList.remove("game-nondisplay");
    document.querySelector(".wave").classList.remove("game-nondisplay");
    document.querySelector(".wave1").classList.remove("game-nondisplay");
    document.querySelector(".seapart__sea-plants").classList.remove("game-nondisplay");
    document.querySelector(".instructions").classList.add("game-nondisplay");
    document.querySelector(".enterpart__play-panel-wrapper").classList.remove("enterpart__play-panel-wrapper-information");
    mainObject.drop.isContinue();
}