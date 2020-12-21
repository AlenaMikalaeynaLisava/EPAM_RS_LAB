import mathExpressionProduse from "./mathExpressionProduce";
import getRandomInt from "./getRandomInt";
export default function showRendomExpression(mathOperation){
// const rendomOperationShow = document.querySelector(".seapart__math-operation");
// Проверка на целочисленное деление, т.к. у польз-ля нет дробных чисел
mathOperation.innerText = getRandomInt(1, 100) + mathExpressionProduse() + getRandomInt(1, 100);
const expectedResult = eval(mathOperation.innerText);
return expectedResult;
    }