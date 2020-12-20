export default function numberPress(value){
    alert(value);
    const enterpart = document.querySelector(".enterpart__play-panel__screen");
    enterpart.innerText += value;
}