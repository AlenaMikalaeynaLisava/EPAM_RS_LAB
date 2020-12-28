import instructionsObject from "../instructions/instructionsObject"
import s from "./functionS";
import t from "./functionT";
export default function instructions(color){
    const circule = document.createElement("div");
    circule.style.transitionDuration = "30s";
    const dropHolder = document.querySelector(".circule-holder");
    const mathOperation = document.createElement("div");
    const instructionsText = document.querySelector(".instructions__text-holder");
    instructionsText.innerText = "Solve The equation in the raindrop before it reaches the water. Select your answer on the number pad i  the game and click Enter or use your computer key board."
    circule.classList.add("circule");
    if(color==="yellow"){
        circule.classList.add("circule-yellow");
}
    circule.style.left = (Math.floor(Math.random() * Math.floor(60)))+ "%";
    dropHolder.append(circule);
    mathOperation.textContent = "3+6";
    circule.append(mathOperation);
    // setTimeout(circule.classList.add("bottom"), 3000);

    
    const f = function(){
        circule.classList.add("bottom");
    }
     timeFrame(f);

    function timeFrame(fn){
        window.requestAnimationFrame(
            function(){
                fn();
            }
        )
    }
    const timqrId1 = setTimeout(()=>{
        circule.remove();
    }, 8000);

     const timqrId2 = setTimeout(addColor, 3000);
    function addColor(){
        const chosen = document.querySelector(".chosen");
        function addColorInner(){
            chosen.classList.remove("yellow-key");
            chosen.removeEventListener("transitionend",addColorInner)
        }
        chosen.classList.add("yellow-key");
        chosen.addEventListener("transitionend",addColorInner)

    }   
    document.querySelector(".instructions").addEventListener("click", function(event){
        instructionsObject.buttonPressedValue = event.target.value;
        if(instructionsObject.buttonPressedValue === "start-game"){
            setTimeout(s, 500); 
        }
        clearTimeout(timqrId1);
        clearTimeout(timqrId2);
        circule.remove();
        return;
    });
return;
}