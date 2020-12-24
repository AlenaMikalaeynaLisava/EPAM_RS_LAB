export default function waveMove(){
    // alert("Ia!");
    const wave = document.querySelector(".wave");
    const addA = ()=>{
        wave.classList.add("wave-left");
    }
    
    const removeA = function(){
        wave.classList.remove("wave-left");
    }
     timeFrame(addA);
    
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
    wave.addEventListener("transitionend",removeA);
}
