import instructions from "./instructins"
export default function firstPage(){
    const circule = document.createElement("div");
    circule.style.transitionDuration = "30s";
    const dropHolder = document.querySelector(".circule-holder");
    const mathOperation = document.createElement("div");
    const instructionsText = document.querySelector(".instructions__text-holder");
    instructionsText.innerText = "Solve The equation in the raindrop before it reaches the water. Select your answer on the number pad i  the game and click Enter or use your computer key board."
    circule.classList.add("circule");
    circule.style.left = (Math.floor(Math.random() * Math.floor(60)))+ "%";
    dropHolder.append(circule);
    mathOperation.textContent = "3+6";
    circule.append(mathOperation);

    
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

    const chosen = document.querySelector(".chosen");
     const timqrId2 = setTimeout(addColor, 3000,chosen);

    function addColor(button){
        function addColorInner(){
            button.classList.remove("yellow-key");
            button.removeEventListener("transitionend",addColorInner)
        }
        button.classList.add("yellow-key");
        if(document.querySelector(".enterpart__play-panel__screen").innerText !== "9"){
        setTimeout(()=>{document.querySelector(".enterpart__play-panel__screen").innerText = 9;
    }, 3000); 
    } else{
    setTimeout(()=>{document.querySelector(".enterpart__play-panel__screen").innerText = " ";
    }, 3000); 
    }
    button.addEventListener("transitionend",addColorInner)
    } 

    const enter = document.querySelector(".enter");
    const timqrId3 = setTimeout(addColor, 5000,enter);
    setTimeout(() => {
        enter.classList.remove("yellow-key");
        document.querySelector(".enterpart__play-panel__screen").innerText = " ";
    }, 10000); 
function help(e){
    if(e.target.classList.contains("instructions__button")){
                clearTimeout(timqrId1);
                clearTimeout(timqrId2);
                clearTimeout(timqrId3);
                circule.remove();
                instructions(e.target.value);
               return;
            }
}
document.querySelector(".instructions").addEventListener("click", help, "click");

    setTimeout(() => {
        document.querySelector(".instructions").removeEventListener("click", help, "click");
    }, 5000);
}