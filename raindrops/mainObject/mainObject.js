// import checkTheKey from "../Enter-Object-Observer/checkTheKey";
// import enterButton from "../Enter-Object-Observer/enterButton";
// import showRendomExpression from "../Drop-Object/showRendomExpression";
import enterCatcher from "../Enter-Object-Observer/enterCatcher";
import mathExpressionProduse from "../Drop-Object/mathExpressionProduce";
import getRandomInt from "../Drop-Object/getRandomInt";
import circuleAdd from "../Drop-Object/circuleAdd";

const mainObject = {
  shouldConyinueGame : true,
  dropSpeed:"60s",//Функция, которая изменяет скорость в зависимости от количества очков
  seaLevel: 42,//Функция, которая изменяет уровень моря в зависимости от количества проигрышей?? Нужна лм?
  score: 0,
  pointsToAdd:10,
  operationsSet:"+",
  rangeofNumbers:10,
  timerId: 5000,
  drop:{
      operand1: 0,
      operand2: 0,
      operator:"+",
      expectedResultOfExpression:[],
    },
    dropsAmount:0,
    correctlySolved:0,
    solvedWithMistake:0,
    follenToSea:0,
    isYallowDrop:false,
    yellowDropExpressionResult:0,
    loseGameCount: 0,
    expectedResult:[],
};

let end = false;
mainObject.drop.isContinue = function isContinueGame(){
  mathExpressionProduse();
  
  if(mainObject.shouldConyinueGame){

    if(+mainObject.score > 250){
      mainObject.timerId = 2000;
    } else if(+mainObject.score > 150){
      mainObject.timerId = 2000;
    } else if(+mainObject.score > 100){
      mainObject.timerId = 3500;
    } 

    mainObject.drop.operand1 =getRandomInt(1,+mainObject.rangeofNumbers);
    function isGoodNumber(){
      if(mainObject.drop.operator === "/"){
        if(! (+mainObject.drop.operand1 % 2)){
        } else{
          mainObject.drop.operand1 = +mainObject.drop.operand1 -1;
        }
        mainObject.drop.expectedResult = mainObject.drop.operand1 + mainObject.drop.operator +"2";
      } else {
        mainObject.drop.operand2 = getRandomInt(1,+mainObject.drop.operand1);
        mainObject.drop.expectedResult = mainObject.drop.operand1 + mainObject.drop.operator + mainObject.drop.operand2;
      }
    }
    isGoodNumber();
    
mainObject.drop.addDrop = circuleAdd(mainObject.drop.expectedResult, mainObject.loseGameCount);//Добавляем каплю на экран
const v1 = function(){//Рандомное выражение доб. в каплю
  mainObject.drop.addDrop.innerText = mainObject.drop.expectedResult;
  const expectedResult1 = eval(mainObject.drop.addDrop.innerText);
  return expectedResult1;
        }
        if(document.querySelectorAll(".circule")[document.querySelectorAll(".circule").length -1].classList.contains("circule-yellow")){
          mainObject.yellowDropExpressionResult = v1();
        } else{
          mainObject.drop.showExpectedResult =  v1();   
          mainObject.drop.expectedResultOfExpression.push(mainObject.drop.showExpectedResult);//Записываем ожидаемый результат  
        }
        
mainObject.drop.catchUsersValue = enterCatcher(mainObject.timerId);//Записываем и сравниваем ожидаемый результат со введенным Потом можно засунуть в отдельный объект
if(end === false){
  setTimeout( isContinueGame, mainObject.timerId);
}
  }else {
    document.querySelector(".game-over").innerText = `${mainObject.score} points \n Amount of drops: ${mainObject.dropsAmount}\n Solved correctly: ${mainObject.correctlySolved} \n Solved with mistake: ${mainObject.solvedWithMistake}\n Foll to the Sea: ${mainObject.follenToSea}`;
    document.querySelector(".game-over").classList.remove("game-nondisplay");
    return;
  }
      }
export default mainObject;