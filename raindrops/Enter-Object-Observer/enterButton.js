import mainObject from "../mainObject/mainObject"
export default function enterButton(){
    const enterpart = document.querySelector(".enterpart__play-panel__screen");
    const scoreScreen = document.querySelector(".enterpart__score__score-value");
    const aproved = document.querySelector(".aproved");
    const refused = document.querySelector(".refused");
    const circule = document.querySelector(".circule");
    console.log(mainObject.drop.expectedResultOfExpression);
    //console.log(mainObject.drop.expectedResultOfExpression.shift());
    if(+enterpart.innerText === mainObject.drop.expectedResultOfExpression.shift()){
        scoreScreen.innerText = +scoreScreen.innerText + mainObject.pointsToAdd;
        mainObject.pointsToAdd++;
        mainObject.score = +scoreScreen.innerText;
        if(mainObject.score >= 50){
            mainObject.dropSpeed = "6s";
        }else if (mainObject.score >= 30){
                mainObject.dropSpeed = "10s";
            } else if(mainObject.score >= 20){
                mainObject.dropSpeed = "15s";
            } else if (mainObject.score >= 10){
                mainObject.dropSpeed = "20s";
            }
        aproved.play();
        if(document.querySelectorAll(".circule")[0].classList.contains("circule-yellow")){
            document.querySelectorAll(".circule")[1].remove()
        } else{
            circule.remove();
        }

    }else if((mainObject.isYallowDrop === true)&&(+enterpart.innerText === mainObject.yellowDropExpressionResult)){
        mainObject.drop.expectedResultOfExpression = [];
        let allCirciles = document.querySelectorAll(".circule");
        allCirciles.forEach((eachCircule)=>{
            eachCircule.remove();
        })
    
    }else{
        scoreScreen.innerText = +scoreScreen.innerText - mainObject.pointsToAdd;
        mainObject.score = +scoreScreen.innerText;
        refused.play();
        circule.remove();
    }
    
    enterpart.innerText = " ";
    }