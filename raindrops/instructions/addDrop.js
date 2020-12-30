export default function addDrop(vari, color){
    const dropHolder = document.querySelector(".circule-holder");
    const circule = document.createElement("div");
    circule.style.transitionDuration = "30s";
    const mathOperation = document.createElement("div");
    circule.classList.add("circule");
    circule.style.left = (Math.floor(Math.random() * Math.floor(70)))+ "%";
    if(color === "yellow"){
        circule.classList.add("circule-yellow");
    }
    dropHolder.append(circule);
    mathOperation.textContent = vari;
    circule.append(mathOperation);
    const f = function(){
        circule.classList.add("bottom");
    }
     timeFrame(f);

    function timeFrame(fn){
        window.requestAnimationFrame(
            function(){
                fn();
            }
        )
    }
        const seaTop = document.querySelector(".seapart__sea-level");
        const a = function(){
        if(seaTop.getBoundingClientRect().top >= circule.getBoundingClientRect().bottom){
           setTimeout(a, 1000);
        } else{
            circule.classList.add("circule-disappear");
            setTimeout(() => { circule.remove()}, 1000); 
            if(!seaTop.style.height){
                seaTop.style.height = "20%"
                console.log(seaTop.style.height.slice(0, +seaTop.style.height.length-1));
            } else{
                seaTop.style.height = seaTop.style.height.slice(0, +seaTop.style.height.length-1)*2 +"%";
            }
            return true;
            }
    
        }
        a();
}