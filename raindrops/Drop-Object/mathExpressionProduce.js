import mainObject from "../mainObject/mainObject"
import getOperation from "./getOperation";
export default function mathExpressionProduse(){
    const operationsAll =["+", "-", "*", "/"];

        if(mainObject.operationsSet === "+"){
            getOperation(operationsAll.slice(0, 1));
            // checkedOperationHolder.removeEventListener("click",oper);
        }else if(mainObject.operationsSet === "-"){
            getOperation(operationsAll.slice(0, 2));
            // checkedOperationHolder.removeEventListener("click",oper);
        } else {
            getOperation(operationsAll.slice(0, 3));
            // checkedOperationHolder.removeEventListener("click",oper);
        }
    }
