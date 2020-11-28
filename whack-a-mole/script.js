const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.hole');
const scoreScreen = document.getElementById('score');
const startButton = document.getElementById('start-button');
const lavelChange = document.getElementById('level-change');
const minMax = document.getElementById('first-level');

let min = minMax.dataset.min;
let max = minMax.dataset.max;
let levelChanged = 0;

// Function to get random mole showing up time
const getShowUpTime = (min, max) => {
    return Math.round(Math.random()*(max-min)+min);
}

let lastHoleNumber;
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
let timeIsOver = false;
const showMole = () => {
    const time = getShowUpTime(min, max);
    const hole = getHoleNumber(holes);
    hole.classList.add('up');
    setTimeout(()=>{
        hole.classList.remove('up');
        if(!timeIsOver){
            return showMole();
        }
    },time)

}

// get Lockal storage score
const getScore = () => {
    if(localStorage.getItem('score') === null){
        scoreScreen.textContent = "0"
        return +scoreScreen.textContent;
    } else {
        scoreScreen.textContent = localStorage.getItem('score');
        return localStorage.getItem('score');
    }
}
getScore();

// set Lockal storage score
const setScore = () =>{
           localStorage.setItem('score', scoreScreen.textContent);
           console.log("Score from licak storage: "+localStorage.getItem('score'));
   }
setScore();


//Start game function
let score;
const startGame = () => {
    localStorage.removeItem('score');
    scoreScreen.textContent = '0';
    timeIsOver = false;
     score = 0;
    showMole();
    setTimeout(()=>{
        timeIsOver = true;
    }, 60000)
}

startButton.addEventListener('click', startGame);




// score count fonction
function countScore(e){
    score = getScore();
    if(!e.isTrusted) return;
    if(e.target.classList.contains("mole")){
        score++;
        this.classList.remove('up');
        scoreScreen.textContent = score;
        setScore();
    }

}
moles.forEach(mole => mole.addEventListener('click', countScore));

// cgange the level function
function changeLevel(e){
    if(e.target.tagName === "INPUT"){
        min = e.target.dataset.min
        max = e.target.dataset.max
        console.log(min, max);
    }

}
lavelChange.addEventListener('click', changeLevel);