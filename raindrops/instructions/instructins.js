import instructionsObject from "../instructions/instructionsObject"
import s from "./functionS";
import t from "./functionT";
import firstPage from "./firstPage"
import secondPage from "./secondPage"
import thirdPage from "./thirdPage"

export default function instructions(value){

     function directInstructionFunction(){
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
           }
           else if(instructionsObject.numberOfInstructionPage === 3){
            thirdPage();
            document.querySelector(".instructions__next").classList.add("disabled-gray");
            document.querySelector(".instructions__next").setAttribute("disabled","disabled");
           }
       }
            if(value === "start-game"){
                instructionsObject.numberOfInstructionPage = 1;
                setTimeout(s, 500); 
            } else if (value === "next"){
                instructionsObject.numberOfInstructionPage++;
                setTimeout(directInstructionFunction, 500); 
            }else if (value === "back"){
                instructionsObject.numberOfInstructionPage--;
                setTimeout(directInstructionFunction, 500); 
            }

return;
}

