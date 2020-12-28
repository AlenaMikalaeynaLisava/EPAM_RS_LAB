
import makeScreenFull from "./SeaPartObject/makeScreenFull";
import waveMove from "./SeaPartObject/wave"
import startGame from "./mainObject/start";
import mainObject from "./mainObject/mainObject"
startGame();
  waveMove(); 
  makeScreenFull();
  let timerId = setInterval(waveMove, 22000);
if(!mainObject.shouldConyinueGame){
  setTimeout(() => { clearInterval(timerId)}, 0);
}


