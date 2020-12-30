export default function makeScreenFull(){
    const fullScreenElement = document.querySelector(".full-screen-game");
    const normalScreenElement = document.querySelector(".normal-screen-game");
    const screenElements = document.querySelectorAll(".screen-symbol");
    const gameField = document.querySelector(".wrapper");
    screenElements.forEach((element)=>{
        element.addEventListener("click",()=>{
            if(element.classList.contains("full-screen-game")){
                launchFullScreen(gameField);
            }else{
                cancelFullscreen(document);
            }
            fullScreenElement.classList.toggle("game-nondisplay");
            normalScreenElement.classList.toggle("game-nondisplay");
        })
    })


    //Запустить отображение в полноэкранном режиме
function launchFullScreen(element) {
    if(element.requestFullScreen) {
      element.requestFullScreen();
    } else if(element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if(element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }
  }
  
  // Выход из полноэкранного режима
  function cancelFullscreen() {
    if(document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if(document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if(document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}