(function startFunction(){
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreScreen = document.getElementById('score');
const startButton = document.getElementById('start-button');
const lavelChange = document.getElementById('level-change');
const minMax = document.getElementById('first-level');
const gameContinue = document.querySelector('.continue-game-modal');
const continueGameButtons = document.querySelectorAll('.continue-game-modal .button');
let gameDuration = 20000;
let timeIsOver = false;
let score;
let lastHoleNumber;
let min = minMax.dataset.min;
let max = minMax.dataset.max;


// get local storage score
const getScore = () => {
       scoreScreen.textContent = localStorage.getItem('score');
        
}
const getTimepassed = () =>{
    return localStorage.getItem('timePassed');
}


// set local storage score
const setScore = (timePassed) =>{
    if(!timePassed){
        timePassed = 0;
        scoreScreen.textContent = '0';
    }
           localStorage.setItem('score', scoreScreen.textContent);
           localStorage.setItem('timePassed', timePassed);
   }


// Function to get random mole showing up time
function getShowUpTime(min, max){
    return Math.round(Math.random()*(max-min)+min);
}




// Function to get random hole number
const getHoleNumber = holes => {
    const randomIdHole = Math.floor(Math.random()*holes.length);
    const holeNumber = holes[randomIdHole];
    if(lastHoleNumber === holeNumber){
        getHoleNumber(holes);
    }
    lastHoleNumber = holeNumber;
    return holeNumber;
}



// Function to show the mole
function showMole(startTime, previoustimePassed){
   let timePassed = getTimepassed();
    const time = getShowUpTime(min, max);
    const hole = getHoleNumber(holes);
    hole.classList.add('hole--up');
        let timePassed1 = new Date().getTime();
        timePassed = +(timePassed1 - startTime) + +previoustimePassed;
        setScore(+timePassed);
    setTimeout(()=>{
        hole.classList.remove('hole--up');
        if(!timeIsOver){
            return showMole(startTime, previoustimePassed);
        }
    },time)

}

//Start game function
const startGame = () => {
    setScore();
    let previoustimePassed = 0;
    let startTime = new Date().getTime();
    timeIsOver = false;
    score = 0;
    showMole(startTime,previoustimePassed);
    setTimeout(()=>{
    timeIsOver = true;
    }, gameDuration)
}

startButton.addEventListener('click', startGame);


//Continue game
function continueGame(){
    let startTime = 0;//time of the game beginning
    let timePassed = getTimepassed();
    getScore();
 previoustimePassed = timePassed;
  startTime = new Date().getTime();
    let gameDuration1 = gameDuration - timePassed;
        timeIsOver = false;
        showMole(startTime, previoustimePassed, timePassed);
        setTimeout(()=>{
            timeIsOver = true;
        }, gameDuration1)
    }



// score count function
function countScore(e){
    timePassed = getTimepassed();
    getScore();
    score = scoreScreen.textContent;
    if(!e.isTrusted) return;
    if(e.target.classList.contains('mole')){
        score++;
        this.classList.remove('hole--up');
        scoreScreen.textContent = score;
        setScore(timePassed);
    }

}
moles.forEach(mole => mole.addEventListener('click', countScore));


// change the level function
function changeLevel(e){
    if(e.target.tagName === 'INPUT'){
        min = e.target.dataset.min
        max = e.target.dataset.max
    }

}
lavelChange.addEventListener('click', changeLevel);


function shouldContinueGame(e){
    gameContinue.classList.add('game-continue--hidden');
    if (e.target.value === 'Yes'){
        continueGame();
    }
}

// chack the level function
function CheckTheGaim(){
    let timePassed = getTimepassed();
    getScore();
    if (timePassed !== 0){
        if(timePassed < gameDuration - min){ 
            gameContinue.classList.remove('game-continue--hidden');
            continueGameButtons.forEach(button => button.addEventListener('click', shouldContinueGame));
        }
    }
};
CheckTheGaim();
})();