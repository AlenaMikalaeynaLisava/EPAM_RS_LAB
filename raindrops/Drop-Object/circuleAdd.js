import mainObject from "../mainObject/mainObject"
import ballFallTheSea from "../Drop-Object/ballFallTheSea";
export default function circuleAdd(expectedResult, counter){
    const circule = document.createElement("div");
    circule.style.transitionDuration = mainObject.dropSpeed;
    circule.style.marginLeft = (Math.floor(Math.random() * (50 - 10)) + 50) + "px";
    console.log(circule.style.transitionDuration);
    const mathOperation = document.createElement("div");
    const sea = document.querySelector(".seapart");
    const dropHolder = document.querySelector(".circule-holder");
    circule.classList.add("circule");
    
    dropHolder.append(circule);
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