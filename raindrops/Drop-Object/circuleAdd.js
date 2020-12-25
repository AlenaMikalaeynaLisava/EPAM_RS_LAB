import mainObject from "../mainObject/mainObject"
import ballFallTheSea from "../Drop-Object/ballFallTheSea";
export default function circuleAdd(expectedResult, counter){
    const circule = document.createElement("div");
    circule.style.transitionDuration = mainObject.dropSpeed;
    const dropHolder = document.querySelector(".circule-holder");
    // console.log(document.querySelector(".circule-holder").childNodes.length);

    // circule.style.marginLeft = (Math.floor(Math.random() * (20 - 1)) + 10) + "%";
    // console.log(circule.style.transitionDuration);
    const mathOperation = document.createElement("div");
    const sea = document.querySelector(".seapart");
    circule.classList.add("circule");
    if(dropHolder.childNodes.length===3){
        circule.classList.add("circule-yellow");
        mainObject.isYallowDrop = true;
        //запускаем функцию
}
    
    // if(dropHolder.childNodes.length%2){
        // circule.style.left = (Math.floor(Math.random() * (40 - 2)) + 40) + "%";
        circule.style.left = (Math.floor(Math.random() * Math.floor(90)))+ "%";
    // }else{
    //     circule.style.right = (Math.floor(Math.random() * (20 - 1)) + 20) + "%";
    //     console.log(circule.style.marginRight);
    // }
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