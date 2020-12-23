export default function waveMove(){
    const wave = document.querySelector(".wave");
    const removeA = ()=>{
        wave.classList.add("wave-left");
    }
    
    const addA = function(){
        wave.classList.add("wave-start-left");
    }
     timeFrame(removeA);
    
    function timeFrame(fn){
        window.requestAnimationFrame(
            function(){
                window.requestAnimationFrame(
                    function(){
                        fn();
                    }
                )
            }
        )
    }  
    wave.addEventListener("transitionend",addA);

    
}
