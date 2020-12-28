import instructionsObject from "../instructions/instructionsObject"
import s from "./functionS";
import t from "./functionT";
import firstPage from "./firstPage"
import secondPage from "./secondPage"
import thirdPage from "./thirdPage"

export default function instructions(value){

     function directInstructionFunction(){
         console.log("Я вызвана");
           if(instructionsObject.numberOfInstructionPage === 1){
            firstPage();
            document.querySelector(".instructions__back").classList.add("disabled-gray");
            document.querySelector(".instructions__back").setAttribute("disabled","disabled");
            
           } else if(instructionsObject.numberOfInstructionPage === 2){
            secondPage();
            document.querySelector(".instructions__back").classList.remove("disabled-gray");
            document.querySelector(".instructions__next").classList.remove("disabled-gray");
            if(document.querySelector(".instructions__back").hasAttribute("disabled")){
                document.querySelector(".instructions__back").removeAttribute("disabled");
            };
            if(document.querySelector(".instructions__next").hasAttribute("disabled")){
                document.querySelector(".instructions__next").removeAttribute("disabled"); 
            }
            // secondPage();
           }
           else if(instructionsObject.numberOfInstructionPage === 3){
            thirdPage();
            document.querySelector(".instructions__next").classList.add("disabled-gray");
            document.querySelector(".instructions__next").setAttribute("disabled","disabled");
            // thirdPage();
           }
       }
        // if(event.target.classList.contains("instructions__button")){
            if(value === "start-game"){
                instructionsObject.numberOfInstructionPage = 1;
                setTimeout(s, 500); 
                // return;
            } else if (value === "next"){
                console.log(instructionsObject.numberOfInstructionPage);
                instructionsObject.numberOfInstructionPage++;
                setTimeout(directInstructionFunction, 500); 
            }else if (value === "back"){
                instructionsObject.numberOfInstructionPage--;
                console.log(instructionsObject.numberOfInstructionPage);
                //document.querySelector(".instructions__back").classList.remove("disabled-gray");
                setTimeout(directInstructionFunction, 500); 
            }
        // }
        

return;
}

