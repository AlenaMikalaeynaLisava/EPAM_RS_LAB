export default function ballFallTheSea(circule){
    const seaTop = document.querySelector(".seapart__sea-level");

    const a = function(){
// console.log(seaTop.getBoundingClientRect().top);
// console.log(circule.getBoundingClientRect().bottom);
    if(seaTop.getBoundingClientRect().top >= circule.getBoundingClientRect().bottom){
       setTimeout(a, 1000);
    //    return;
    } else{
        circule.classList.add("circule-disappear");

        setTimeout(() => { circule.remove()}, 2000);      
        return;
    }

    }
    a();
}

