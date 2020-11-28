const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.hole');
const scoreScreen = document.getElementById('score');
const startButton = document.getElementById('start-button');

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
    const time = getShowUpTime(900, 1000);
    const hole = getHoleNumber(holes);
    hole.classList.add('up');
    setTimeout(()=>{
        hole.classList.remove('up');
        if(!timeIsOver){
            return showMole();
        }
    },time)

}

let score;
//Start game function
const startGame = () => {
    scoreScreen.textContent = '0';
    timeIsOver = false;
     score= 0;
    showMole();
    setTimeout(()=>{
        timeIsOver = true;
    }, 20000)
}

startButton.addEventListener('click', startGame);
// score count fonction
function countScore(e){
    if(!e.isTrusted) return;
    if(e.target.classList.contains("mole")){
        score++;
        this.classList.remove('up');
        scoreScreen.textContent = score;
    }

}
moles.forEach(mole => mole.addEventListener('click', countScore));