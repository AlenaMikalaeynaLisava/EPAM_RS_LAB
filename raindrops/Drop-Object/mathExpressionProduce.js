import getOperation from "./getOperation";

export default function mathExpressionProduse(){
    const operations =["+", "-", "*", "/"];
    const currentScore = document.querySelector(".enterpart__score__score-value");
    if(+currentScore.innerText <= 50){
        return getOperation(operations.slice(0, 1));
    } else if(+currentScore.innerText<90){
        return getOperation(operations.slice(0, 2));
    } else if(+currentScore.innerText<140){
        return getOperation(operations.slice(0, 3));
    } else {
        return getOperation(operations);
    }
    }