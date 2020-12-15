(function startFunction(){
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreScreen = document.getElementById('score');
const startButton = document.getElementById('start-button');
const lavelChange = document.getElementById('level-change');
const minMax = document.getElementById('first-level');
const gameContinue = document.querySelector('.game-continue');
const buttons = document.querySelectorAll('.button');
let gameDuration = 10000;
let timeIsOver = false;
let score;
let startTime = 0;//time of the game beginning
let timePassed=0;
let lastHoleNumber;

let min = minMax.dataset.min;
let max = minMax.dataset.max;



// get local storage score
const getScore = () => {
        scoreScreen.textContent = localStorage.getItem('score');
        timePassed = localStorage.getItem('timePassed');
}


// set local storage score
const setScore = () =>{
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
function showMole(){
    const time = getShowUpTime(min, max);
    const hole = getHoleNumber(holes);
    hole.classList.add('hole--up');
    timePassed1 = new Date();
    timePassed2 = timePassed1.getTime();
    timePassed = timePassed2- startTime;
    setScore();
    setTimeout(()=>{
        hole.classList.remove('hole--up');
        if(!timeIsOver){
            return showMole();
        }
    },time)

}

//Start game function
const startGame = () => {
    startTime = new Date();
    startTime = startTime.getTime();
    scoreScreen.textContent = '0';
    timeIsOver = false;
    timePassed = 0;
    score = 0;
    setScore();
    showMole();
    setTimeout(()=>{
    timeIsOver = true;
    }, gameDuration)
}

startButton.addEventListener('click', startGame);


//Continue game
function continueGame(){
 getScore();
  startTime = new Date();
  startTime = startTime.getTime();
    gameDuration1 = gameDuration - timePassed;
        timeIsOver = false;
        showMole();
        setTimeout(()=>{
            timeIsOver = true;
        }, gameDuration1)
    }



// score count function
function countScore(e){
    getScore();
    score = scoreScreen.textContent;
    if(!e.isTrusted) return;
    if(e.target.classList.contains('mole')){
        score++;
        this.classList.remove('hole--up');
        scoreScreen.textContent = score;
        setScore();
    }

}
moles.forEach(mole => mole.addEventListener('click', countScore));




// cgange the level function
function changeLevel(e){
    if(e.target.tagName === 'INPUT'){
        min = e.target.dataset.min
        max = e.target.dataset.max
        console.log(min, max);
    }

}
lavelChange.addEventListener('click', changeLevel);


function shoulContinueGame(e){
    if (e.target.value === 'Yes'){
        gameContinue.classList.add('hide-button');
        continueGame();
    }
    gameContinue.classList.add('hide-button');
}

// chack the level function
(function CheckTheGaim(){
    getScore();
    if (timePassed !== 0){
        if(timePassed<gameDuration){
            gameContinue.classList.remove('hide-button');
            buttons.forEach(button => button.addEventListener('click', shoulContinueGame));
        }
    }
})();

})();