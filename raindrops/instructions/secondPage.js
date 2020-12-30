import addDrop from "./addDrop"
import instructions from "./instructins"
export default function secondPage(){
    const instructionsText = document.querySelector(".instructions__text-holder");
    instructionsText.innerText = "The game is over when three raindrops reach the water level";
    addDrop("3+6");
    const timqrId1 = setTimeout(addDrop, 200, "10-8");
    const timqrId2 = setTimeout(addDrop, 500, "22/11");

    function help(e){
        if(e.target.classList.contains("instructions__button")){
            const seaTop = document.querySelector(".seapart__sea-level");
            seaTop.style.height = "10%";
            clearTimeout(timqrId1);
            clearTimeout(timqrId2);
            let allCirciles = document.querySelectorAll(".circule");
            allCirciles.forEach((eachCircule)=>{
                eachCircule.remove();
            })
            instructions(e.target.value);
            return;
        }
    }

        document.querySelector(".instructions").addEventListener("click", help, "click");
 
   

    setTimeout(() => {
        document.querySelector(".instructions").removeEventListener("click", help, "click");
    }, 5000);
   
}