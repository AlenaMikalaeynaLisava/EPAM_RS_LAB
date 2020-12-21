// import ballFallTheSea from "./ballFallTheSea";
import lis from "../Enter-Object-Observer/enterCatcher";
import showRendomExpression from "./showRendomExpression";
import circuleDrop from "./circuleDrop";
export default function circuleAdd(){
    const circule = document.createElement("div");
    const mathOperation = document.createElement("div");
    // const btn = document.querySelector(".button");
    const sea = document.querySelector(".seapart");
    circule.classList.add("sircule");
    sea.append(circule);
    circule.append(mathOperation);
   const a = lis(showRendomExpression(mathOperation));
   
    const f = function(){
        circule.classList.add("top");
    }
     timeFrame(f);

    function timeFrame(fn){
        window.requestAnimationFrame(
            function(){
                window.requestAnimationFrame(
                    function(){
                        fn();
                    }
                )
            }
        )
    }

    circule.addEventListener("transitionend",circuleDrop(circule));
//
    // circule.addEventListener('click',()=>{
    //     event.target.classList.add("bottom");
    // })
    // ballFallTheSea();
}