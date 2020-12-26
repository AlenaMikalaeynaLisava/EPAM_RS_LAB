
import makeScreenFull from "./SeaPartObject/makeScreenFull";
// import circuleDrop from "./Drop-Object/circuleDrop";
import waveMove from "./SeaPartObject/wave"
import startGame from "./mainObject/start";
import mainObject from "./mainObject/mainObject"
// showRendomExpression();
// lis(showRendomExpression(mathOperation));
// circuleDrop();

// circuleAdd();
//Добавить повторяемость пока игра не закончена
// waveMove();

// mainObject.drop.addDrop;
// console.log(mainObject.drop.expectedResultOfExpression);
// mainObject.drop.catchUsersValue;

startGame();
// mainObject.drop.isContinue();
// console.log(mainObject.loseGameCount);
// console.log(mainObect.drop.expectedResult);
// console.log(mainObect.drop.expectedResult);


  waveMove(); 
  // while (mainObject.shouldConyinueGame) {
  //   setTimeout(waveMove, 2000);
  // }
  makeScreenFull();
  let timerId = setInterval(waveMove, 22000);
if(!mainObject.shouldConyinueGame){
  setTimeout(() => { clearInterval(timerId)}, 0);
}
// остановить вывод через 5 секунд

