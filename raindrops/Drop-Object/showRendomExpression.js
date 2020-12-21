import mathExpressionProduse from "./mathExpressionProduce";
import getRandomInt from "./getRandomInt";
export default function showRendomExpression(){
const rendomOperationShow = document.querySelector(".seapart__math-operation");
// Проверка на целочисленное деление, т.к. у польз-ля нет дробных чисел
rendomOperationShow.innerText = getRandomInt(1, 100) + mathExpressionProduse() + getRandomInt(1, 100);
const expectedResult = eval(rendomOperationShow.innerText);
return expectedResult;
    }