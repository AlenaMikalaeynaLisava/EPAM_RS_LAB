import mathExpressionProduse from "./mathExpressionProduce";
import getRandomInt from "./getRandomInt";
export default function showRendomExpression(){
const rendomOperationShow = document.querySelector(".seapart__math-operation");
rendomOperationShow.innerText = getRandomInt(1, 100) + mathExpressionProduse() + getRandomInt(1, 100);
    }