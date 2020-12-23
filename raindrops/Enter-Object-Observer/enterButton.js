export default function enterButton(expectedResult){
    const enterpart = document.querySelector(".enterpart__play-panel__screen");
    const scoreScreen = document.querySelector(".enterpart__score__score-value");
    const aproved = document.querySelector(".aproved");
    const refused = document.querySelector(".refused");
    const circule = document.querySelector(".circule");
    
    if(+ enterpart.innerText === expectedResult){
        scoreScreen.innerText = +scoreScreen.innerText + 10;
        aproved.play();
        circule.remove();
    }else {
        scoreScreen.innerText = +scoreScreen.innerText - 10;
        refused.play();
        circule.remove();
    }
    enterpart.innerText = " ";
    }