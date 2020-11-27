function mainFunction(){
    const video = document.getElementById('video');
    const speed = document.getElementById('speed');
    const chosenSpeed = document.getElementById('speed__chosen');
    
    speed.addEventListener('mousemove', changeSpeed);
    
    function changeSpeed(e){
        const persent = (e.pageY - this.offsetTop)/this.offsetHeight;
        const min = 0.3;
        const max =3;
        chosenSpeed.style.height = Math.round(persent*100) + "%";
        const playbackRate = persent*(max-min)+min;
        chosenSpeed.textContent = playbackRate.toFixed(2)+"x";
        video.playbackRate = playbackRate;
    }
    }