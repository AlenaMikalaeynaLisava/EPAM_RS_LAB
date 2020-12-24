import getOperation from "./getOperation";

export default function mathExpressionProduse(){
    const operations =["+", "-", "*", "/"];
    const currentScore = document.querySelector(".enterpart__score__score-value");
    if(+currentScore.innerText <= 30){
        return getOperation(operations.slice(0, 1));
    } else if(+currentScore.innerText<70){
        return getOperation(operations.slice(0, 2));
    } else {
        return getOperation(operations.slice(0, 3));
    }
    // if(+currentScore.innerText<100){
    //     return getOperation(operations.slice(0, 3));
    // } else {
    //     return getOperation(operations);
    // }
    }