import instructions from "./instructins"
import addDrop from "./addDrop"
export default function thirdPage(){
    const instructionsText = document.querySelector(".instructions__text-holder");
    instructionsText.innerText = "Suns are bonuses! Solve the equation inside the sun and all the raindrops dry up. If sun reaches the water, it doesn't count against you.";
    addDrop("3+6");
    const timqrId1 = setTimeout(addDrop, 200, "10-8");
    const timqrId2 = setTimeout(addDrop, 500, "22/11", "yellow");

    const chosen2 = document.querySelector(".chosen2");
    const timqrId3 = setTimeout(addColor, 3000,chosen2);

    function addColor(button){
        function addColorInner(){
            button.classList.remove("yellow-key");
            button.removeEventListener("transitionend",addColorInner)
        }
        button.classList.add("yellow-key");
        if(document.querySelector(".enterpart__play-panel__screen").innerText !== "2"){
        setTimeout(()=>{document.querySelector(".enterpart__play-panel__screen").innerText = 2;
    }, 3000); 
} else{
    setTimeout(()=>{document.querySelector(".enterpart__play-panel__screen").innerText = " ";
    }, 3000); 
}
    button.addEventListener("transitionend",addColorInner)
    } 

    const enter = document.querySelector(".enter");
    const timqrId4 = setTimeout(addColor, 5000,enter);
    setTimeout(() => {
        enter.classList.remove("yellow-key");
        document.querySelector(".enterpart__play-panel__screen").innerText = " ";
    }, 10000); 


    function helper(event){
        if(event.target.classList.contains("instructions__button")){
            clearTimeout(timqrId1);
            clearTimeout(timqrId2);
            clearTimeout(timqrId3);
            clearTimeout(timqrId4);
            let allCirciles = document.querySelectorAll(".circule");
            allCirciles.forEach((eachCircule)=>{
                eachCircule.remove();
            })
            // seaTop.style.height = "10%";
            console.log(event.target.value);
            instructions(event.target.value);
            return;
        }
    }

        document.querySelector(".instructions").addEventListener("click", helper, "click");
  
   
    setTimeout(() => {
        document.querySelector(".instructions").removeEventListener("click", helper, "click");
    }, 5000);
   
}