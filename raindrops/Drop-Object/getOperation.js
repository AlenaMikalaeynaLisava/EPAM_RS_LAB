import mainObject from "../mainObject/mainObject"
export default function getOperation(operationsToUse){
    const randomOperation = Math.floor(Math.random()*operationsToUse.length);
    const operation = operationsToUse[randomOperation];
    mainObject.drop.operator = operation;
    return mainObject.drop.operator;
}