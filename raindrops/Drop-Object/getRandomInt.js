export default function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    alert(Math.floor(Math.random() * (max - min)) + min);
    return Math.floor(Math.random() * (max - min)) + min;
  }