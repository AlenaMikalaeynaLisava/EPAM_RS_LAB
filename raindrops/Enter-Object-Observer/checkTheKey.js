
export default function checkTheKey(){
document.addEventListener('keypress', (event) => {
  let value;
    if(event.code.slice(0,event.code.length-1)==="Digit"){
      value = event.code.slice(-1);
    } else if(event.code === "Enter"){
      value = "Enter";
    }else if(event.code === "Backspace"){
      value = "Clear";
    }else if(event.code === "Delete"){
      value = "Delete";
    }
    numberPress(value);
  });
  
}