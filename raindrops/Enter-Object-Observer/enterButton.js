import mainObject from "../mainObject/mainObject"
export default function enterButton(){
    const enterpart = document.querySelector(".enterpart__play-panel__screen");
    const scoreScreen = document.querySelector(".enterpart__score__score-value");
    const aproved = document.querySelector(".aproved");
    const refused = document.querySelector(".refused");
    const circule = document.querySelector(".circule");
    if(+enterpart.innerText === mainObject.drop.expectedResultOfExpression.shift()){
        scoreScreen.innerText = +scoreScreen.innerText + mainObject.pointsToAdd;
        mainObject.pointsToAdd++;
        mainObject.correctlySolved++;
        mainObject.score = +scoreScreen.innerText;
        if(mainObject.score >= 350){
            mainObject.dropSpeed = "25s";
        }else if (mainObject.score >= 250){
                mainObject.dropSpeed = "30s";
            } else if(mainObject.score >= 150){
                mainObject.dropSpeed = "35s";
            } else if (mainObject.score >= 100){
                mainObject.dropSpeed = "40s";
            }
        aproved.play();
        if(document.querySelectorAll(".circule")[0].classList.contains("circule-yellow")){
            if(document.querySelectorAll(".circule")[1].classList.contains("circule-yellow")){
            
                document.querySelectorAll(".circule")[2].remove()
            } else{document.querySelectorAll(".circule")[1].remove()}
        } else{
            circule.remove();
        }

    }else if((mainObject.isYallowDrop === true)&&(+enterpart.innerText === mainObject.yellowDropExpressionResult)){
        mainObject.drop.expectedResultOfExpression = [];
        mainObject.correctlySolved++;
        let allCirciles = document.querySelectorAll(".circule");
        allCirciles.forEach((eachCircule)=>{
            eachCircule.remove();
        })
    
    }else{
        scoreScreen.innerText = +scoreScreen.innerText - mainObject.pointsToAdd;
        mainObject.score = +scoreScreen.innerText;
        mainObject.solvedWithMistake++;
        refused.play();
        circule.remove();
    }
    
    enterpart.innerText = " ";
    }