import mainObject from "../mainObject/mainObject"
import ballFallTheSea from "../Drop-Object/ballFallTheSea";
export default function circuleAdd(expectedResult, counter){
    const circule = document.createElement("div");
    circule.style.transitionDuration = mainObject.dropSpeed;
    const dropHolder = document.querySelector(".circule-holder");
    const mathOperation = document.createElement("div");
    const sea = document.querySelector(".seapart");
    circule.classList.add("circule");
    if(dropHolder.childNodes.length===3){
        circule.classList.add("circule-yellow");
        mainObject.isYallowDrop = true;
}
        circule.style.left = (Math.floor(Math.random() * Math.floor(90)))+ "%";
    dropHolder.append(circule);
    mainObject.dropsAmount++;
    mathOperation.innerText= expectedResult;
    
    circule.append(mathOperation);
    const f = function(){
        circule.classList.add("bottom");
        ballFallTheSea(circule, counter);
    }
     timeFrame(f);

    function timeFrame(fn){
        window.requestAnimationFrame(
            function(){
                fn();
            }
        )
    }
    return mathOperation;
}