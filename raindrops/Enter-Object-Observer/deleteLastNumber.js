export default function deleteLastNumber(){
    const enterpart = document.querySelector(".enterpart__play-panel__screen");
    enterpart.innerText =enterpart.innerText.slice(0, (enterpart.innerText.length-1)) ;
    }