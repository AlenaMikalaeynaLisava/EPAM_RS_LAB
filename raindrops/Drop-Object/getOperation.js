export default function getOperation(operationsToUse){
    const randomOperation = Math.floor(Math.random()*operationsToUse.length);
    const operation = operationsToUse[randomOperation];
    return operation;
}