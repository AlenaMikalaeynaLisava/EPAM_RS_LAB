 import ballFallTheSea from "../Drop-Object/ballFallTheSea";
// import lis from "../Enter-Object-Observer/enterCatcher";
// import showRendomExpression from "./showRendomExpression";
// import circuleDrop from "./circuleDrop";
export default function circuleAdd(expectedResult){
    const circule = document.createElement("div");
    const mathOperation = document.createElement("div");
    const sea = document.querySelector(".seapart");
    circule.classList.add("circule");
    sea.append(circule);
    mathOperation.innerText= expectedResult;
    
    circule.append(mathOperation);
    // const a = lis(showRendomExpression(mathOperation));//lis-заменить
   
    const f = function(){
        circule.classList.add("bottom");
        ballFallTheSea(circule);
    }
     timeFrame(f);

    function timeFrame(fn){
        window.requestAnimationFrame(
            function(){
                fn();
            }
        )
    }

    // circule.addEventListener("transitionend",() =>{
    //     circule.classList.add("bottom");
    // });
    // circuleDrop(circule)
    //Добавим шум моря по щелчку по экрану (можно сделать в другом месте)

    return mathOperation;

}