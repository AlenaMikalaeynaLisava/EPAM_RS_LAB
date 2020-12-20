export default function enterButton(){
    const expectedResult = 15;
    const enterpart = document.querySelector(".enterpart__play-panel__screen");
    const scoreScreen = document.querySelector(".enterpart__score__score-value");
    if(+ enterpart.innerText === expectedResult){
        scoreScreen.innerText = +scoreScreen.innerText + 10;
    }else {
        scoreScreen.innerText = +scoreScreen.innerText - 10;
    }
    enterpart.innerText = ""
    }