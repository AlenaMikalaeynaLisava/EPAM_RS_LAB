(function() {
const time = document.getElementById("time"),
greeting = document.getElementById("greeting"),
name = document.getElementById("name"),
focus = document.getElementById("focus");

// Show Data
const showFullDate = () => {
let data = new Date(),
hours = data.getHours(),
minutes = data.getMinutes(),
seconds = data.getSeconds();
hours = hours % 12 || 12;
minutes = minutes<10 ? "0" + minutes : minutes;
seconds = seconds<10 ? "0" + seconds : seconds;
time.innerText = `${hours}:${minutes}:${seconds} ${amPm()}`;
setTimeout(showFullDate, 1000)
};

const amPm = () => {
    let data = new Date(),
    hours = data.getHours();
    return hours <= 12 ? "AM":"PM";
}
showFullDate();

//Change background
const changeBackground = () =>{
const body = document.getElementsByClassName("body")[0];
let data = new Date(),
hours = data.getHours();
if ((hours>0 && hours <5) || hours>=22){
    greeting.innerText = "Good night, "
    body.style.background = "url(./pictures/night.jpg)";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
} else if (hours>=5 && hours <12){
    greeting.innerText = "Good morning, "
    body.style.background = "url(./pictures/morning.jpg)";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
}else if (hours>=12 && hours <18){
    greeting.innerText = "Good afternoon, "
    body.style.background = "url(./pictures/day.jpg)";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
}else {
    greeting.innerText = "Good evening, "
    body.style.background = "url(./pictures/evening.jpg)";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
}
}
changeBackground();

//Get Name + Focus
const getName = () => {
    if(localStorage.getItem('name') === null){
        name.textContent = "[Enter name]"
    } else {
        name.textContent = localStorage.getItem('name');
    }
}
getName();

const getFocus = () => {
    if(localStorage.getItem('focus') === null){
        focus.textContent = "[Enter focus]"
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}
getFocus();


// Set Name + Focus
const setName = (e) =>{
 if(e.type === 'keypress'){
    if(e.which == 13 || e.keycode == 13){
        localStorage.setItem('name', e.target.textContent);
        name.blur();
    }
 } else{
     localStorage.setItem('name', e.target.textContent);
 }
}
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

const setFocus = (e) =>{
    if(e.type === 'keypress'){
       if(e.which == 13 || e.keycode == 13){
           localStorage.setItem('focus', e.target.textContent);
           focus.blur();
       }
    } else{
        localStorage.setItem('focus', e.target.textContent);
    }
   }
   focus.addEventListener('keypress', setFocus);
   focus.addEventListener('blur', setFocus);
// setNameFocus(e);
})();