import mainObject from "../mainObject/mainObject"
export default function getRandomInt(min, max) {

    // min = 1;
    // max = mainObject.rangeofNumbers;
    return Math.floor(Math.random() * (max - min)) + min;
  }