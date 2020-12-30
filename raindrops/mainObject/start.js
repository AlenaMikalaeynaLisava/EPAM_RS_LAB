import mainObject from "./mainObject"
import getRandomInt from "../Drop-Object/getRandomInt"
import mathExpressionProduse from "../Drop-Object/mathExpressionProduce"
import s from "../instructions/functionS"
import t from "../instructions/functionT"
import instructionsObject from "../instructions/instructionsObject"
import instructions from "../instructions/instructins"
export default function startGame(){
  const checkedOperationHolder = document.querySelector(".mathOperations");
  const checkedOperatios = checkedOperationHolder.querySelectorAll("input");
  checkedOperationHolder.addEventListener("click",oper,event);
  function oper(e){
          checkedOperatios.forEach((operation)=>{
                      if(operation.checked){
                          operation.removeAttribute("checked","checked");
                      }
                 })
          e.target.setAttribute("checked","checked");
          console.log(e.target.value);
          mainObject.operationsSet = e.target.value;
          mathExpressionProduse();
          return mainObject.operationsSet;
      }
  
      const numbersRange = document.querySelector(".numbersRange");
      const numbersRangeS = numbersRange.querySelectorAll("input");
      numbersRange.addEventListener("click",numbers,event);
        function numbers(e){
          numbersRangeS.forEach((num)=>{
                            if(num.checked){
                                num.removeAttribute("checked","checked");
                            }
                       })
                e.target.setAttribute("checked","checked");
                mainObject.rangeofNumbers = e.target.value;
                getRandomInt();
                return  mainObject.rangeofNumbers;
            }
            numbersRange.removeEventListener("click",numbers,event);

    const startGame = document.querySelector(".game-start");
    startGame.addEventListener("click",(e)=>{
        if(e.target.value === "start-game"){
           s();
           startGame.classList.add("game-nondisplay");
        } else if(e.target.value === "start-demo"){
          t(); 
          startGame.classList.add("game-nondisplay");
        }
    })
    // startGame.removeEventListener("click");
}

