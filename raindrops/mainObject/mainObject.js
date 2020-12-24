
import enterButton from "../Enter-Object-Observer/enterButton";
import showRendomExpression from "../Drop-Object/showRendomExpression";
import enterCatcher from "../Enter-Object-Observer/enterCatcher";
import mathExpressionProduse from "../Drop-Object/mathExpressionProduce";
import getRandomInt from "../Drop-Object/getRandomInt";
import circuleAdd from "../Drop-Object/circuleAdd";
const mainObject = {
  shouldConyinueGame : true,
  dropSpeed:"30s",//Функция, которая изменяет скорость в зависимости от количества очков
  seaLevel: 42,//Функция, которая изменяет скорость в зависимости от количества очков
  score: 0,
  pointsToAdd:1,
  drop:{
      operand1: 0,
      operand2: 0,
      operator:"+",
      expectedResultOfExpression:[],
    },
    loseGameCount: 0,
    expectedResult:[],
};
let end = false;
let timerId = 5000;
mainObject.drop.isContinue = function isContinueGame(){
  if(mainObject.shouldConyinueGame){
    mainObject.drop.operand1 =getRandomInt(1,20);
    mainObject.drop.operator = mathExpressionProduse();
    mainObject.drop.operand2 = getRandomInt(1,mainObject.drop.operand1);
mainObject.drop.expectedResult = mainObject.drop.operand1 + mainObject.drop.operator + mainObject.drop.operand2;
mainObject.drop.addDrop = circuleAdd(mainObject.drop.expectedResult, mainObject.loseGameCount);//Добавляем каплю на экран
const v1 = function(){//Рандомное выражение доб. в каплю
  mainObject.drop.addDrop.innerText = mainObject.drop.expectedResult;
  const expectedResult1 = eval(mainObject.drop.addDrop.innerText);
  return expectedResult1;
        }
        mainObject.drop.showExpectedResult =  v1();   
        console.log(mainObject.drop.showExpectedResult);
mainObject.drop.expectedResultOfExpression.push(mainObject.drop.showExpectedResult);//Записываем ожидаемый результат     
mainObject.drop.catchUsersValue = enterCatcher(timerId);//Записываем и сравниваем ожидаемый результат со введенным Потом можно засунуть в отдельный объект
if(end === false){
  setTimeout( isContinueGame, timerId);
}
  }else {
    document.querySelector(".game-over").innerText = mainObject.score + " points";
    document.querySelector(".game-over").classList.remove("game-nondisplay");
    alert("Game over!");
    return;
  }
      }
export default mainObject;