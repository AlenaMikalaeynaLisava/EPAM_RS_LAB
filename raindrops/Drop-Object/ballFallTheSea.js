
import mainObject from "../mainObject/mainObject"
export default function ballFallTheSea(circule){
    const seaTop = document.querySelector(".seapart__sea-level");
    const a = function(){
    if(seaTop.getBoundingClientRect().top >= circule.getBoundingClientRect().bottom){
       setTimeout(a, 1000);
    } else if(circule.classList.contains("circule-yellow")){
        circule.classList.add("circule-disappear");
        setTimeout(() => { circule.remove()}, 1000); 
    }else{
        mainObject.follenToSea++;
        circule.classList.add("circule-disappear");
        setTimeout(() => { circule.remove()}, 1000); 
        mainObject.drop.expectedResultOfExpression.shift();
        if(!seaTop.style.height){
            seaTop.style.height = "20%"
        } else{
            seaTop.style.height = seaTop.style.height.slice(0, +seaTop.style.height.length-1)*2 +"%";
        }
        mainObject.loseGameCount ++;
        if (mainObject.loseGameCount === 3){
            mainObject.shouldConyinueGame = false;
        }
        return true;
        }

    }
    a();
}

