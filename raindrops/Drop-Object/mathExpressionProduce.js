import mainObject from "../mainObject/mainObject"
import getOperation from "./getOperation";
export default function mathExpressionProduse(){
    const operationsAll =["+", "-", "*", "/"];

        if(mainObject.operationsSet === "+"){
            getOperation(operationsAll.slice(0, 1));
        }else if(mainObject.operationsSet === "-"){
            getOperation(operationsAll.slice(0, 2));
        } else if(mainObject.operationsSet === "*"){
            getOperation(operationsAll.slice(0, 3));
        } else {
            getOperation(operationsAll);
        }
    }
