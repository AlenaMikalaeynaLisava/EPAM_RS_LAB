const calculatorButtonsHolder = document.querySelector(".calculator__buttons-holder");
console.log(calculatorButtonsHolder);
const buttonOnClick = (e)=>{
    console.log(e.target.textContent);
}
calculatorButtonsHolder.addEventListener('click', buttonOnClick);