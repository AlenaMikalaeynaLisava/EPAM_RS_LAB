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

const isNight = hours => (hours>0 && hours <5) || hours>=22;
const isMorning =hours =>  hours>=5 && hours <12;
const isAfternoon = hours => hours>=12 && hours <18;
let daytime = isNight(hours) ? 'night' : 
                         isMorning(hours) ? 'morning' :
                         isAfternoon(hours) ? 'afternoon' :
                         'evening';
greeting.innerText = `Good ${daytime}, `
body.style.background = `url(./pictures/${daytime}.jpg)`;
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize = "cover";

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
const setStaff = [name, focus];

const setNameFocus = (e) =>{
 if(e.type === 'keypress'){
    if(e.code === 'Enter'){
        localStorage.setItem(`${e.target.id}`, e.target.textContent);
        e.target.blur();
    }
 } else{
     localStorage.setItem(`${e.target.id}`, e.target.textContent);
 }
}
setStaff.forEach(item =>{
    item.addEventListener('keypress', setNameFocus);
    item.addEventListener('blur', setNameFocus);
   })
})();
