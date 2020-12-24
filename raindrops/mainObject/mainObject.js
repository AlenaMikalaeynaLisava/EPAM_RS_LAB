
import enterButton from "../Enter-Object-Observer/enterButton";
import showRendomExpression from "../Drop-Object/showRendomExpression";
import enterCatcher from "../Enter-Object-Observer/enterCatcher";
import mathExpressionProduse from "../Drop-Object/mathExpressionProduce";
import getRandomInt from "../Drop-Object/getRandomInt";
import circuleAdd from "../Drop-Object/circuleAdd";
const mainObject = {
  shouldConyinueGame : true,
  dropSpeed: 1,//Функция, которая изменяет скорость в зависимости от количества очков
  seaLevel: 42,//Функция, которая изменяет скорость в зависимости от количества очков
  score: 0,
  drop:{
      operand1: getRandomInt,
      operand2: getRandomInt,
      operator: mathExpressionProduse,
      // expectedResult: getRandomInt(1,100) + mathExpressionProduse() + getRandomInt(1,100),//Генерируем рандомное выражение
    },
    loseGameCount: 0,
};
let end = false;
let timerId = 10000;
mainObject.drop.isContinue = function isContinueGame(){
  if(mainObject.shouldConyinueGame){
mainObject.drop.expectedResult = getRandomInt(1,100) + mathExpressionProduse() + getRandomInt(1,100);
mainObject.drop.addDrop = circuleAdd(mainObject.drop.expectedResult, mainObject.loseGameCount);//Добавляем каплю на экран
mainObject.drop.showExpectedResult = function(){//Рандомное выражение доб. в каплю
  mainObject.drop.addDrop.innerText = this.expectedResult;
  const expectedResult1 = eval(mainObject.drop.addDrop.innerText);
  console.log(mainObject.loseGameCount);
  return expectedResult1;
        }
mainObject.drop.expectedResultOfExpression =   mainObject.drop.showExpectedResult();//Записываем ожидаемый результат     
mainObject.drop.catchUsersValue = enterCatcher(mainObject.drop.expectedResultOfExpression, timerId);//Записываем и сравниваем ожидаемый результат со введенным Потом можно засунуть в отдельный объект
if(end === false){
  setTimeout( isContinueGame, timerId);
}
  }else {
    alert("Game over!");
    return;
  }
      }
export default mainObject;