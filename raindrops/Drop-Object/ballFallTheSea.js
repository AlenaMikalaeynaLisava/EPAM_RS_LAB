export default function ballFallTheSea(circule){
    // const ballBottom = document.querySelector(".sircule");
    const seaTop = document.querySelector(".seapart__sea-level");
    // alert(ballBottom.getBoundingClientRect().top);
    // alert(seaTop.getBoundingClientRect().bottom);
    const a = function(){
    if(seaTop.getBoundingClientRect().top >= circule.getBoundingClientRect().bottom){
       setTimeout(a, 1000);
       return;
    } else{
        alert("Упал в море");
        //setTimeout(() => { clearInterval(timerId)}, 0);
        // setTimeout(() => { clearInterval(timerId)}, 0);
        return;
    }

    }
    a();
}

