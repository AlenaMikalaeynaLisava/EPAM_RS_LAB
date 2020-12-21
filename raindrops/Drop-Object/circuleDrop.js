import ballFallTheSea from "./ballFallTheSea";
export default function circuleDrop(circule){
    // const circule = document.querySelector(".sircule");
    //     circule.addEventListener('click',()=>{
    //     circule.classList.add("bottom");
    // })
 
        circule.classList.add("bottom");
   
    // setTimeout(function(){
    //     alert("it's here");
    //     circule.classList.add("bottom");
    // }, 100)
        // circule.classList.add("bottom");

    ballFallTheSea(circule);
}