import ballFallTheSea from "./ballFallTheSea";
export default function circuleDrop(){
    const circule = document.querySelector(".sircule");
    circule.addEventListener('click',()=>{
        event.target.classList.add("bottom");
    })
    ballFallTheSea();
}