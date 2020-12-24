import mainObject from "../mainObject/mainObject"
export default function enterButton(expectedResult){
    const enterpart = document.querySelector(".enterpart__play-panel__screen");
    const scoreScreen = document.querySelector(".enterpart__score__score-value");
    const aproved = document.querySelector(".aproved");
    const refused = document.querySelector(".refused");
    const circule = document.querySelector(".circule");
    
    if(+ enterpart.innerText === expectedResult){
        scoreScreen.innerText = +scoreScreen.innerText + 10;
        mainObject.score = +scoreScreen.innerText;
        console.log(mainObject.score);
            if (mainObject.score === 30){
                circule.style.transition = " top 10s line, opacity 3s  ease;"
                console.log(circule.style.transition);
            }
        aproved.play();
        circule.remove();
    }else {
        scoreScreen.innerText = +scoreScreen.innerText - 10;
        mainObject.score = +scoreScreen.innerText;
        refused.play();
        circule.remove();
    }
    enterpart.innerText = " ";
    }