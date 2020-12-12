const app = () =>{
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.vid-container video');

    const sounds = document.querySelectorAll('.sound-picker button');

    const timeDisplay = document.querySelector('.time-display');
    const timeSelect = document.querySelectorAll(".time-select button");

    const outlineLength = outline.getTotalLength();
    
    let duration = 600;
    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    sounds.forEach(sound =>{
        sound.addEventListener('click', function(){
            song.src = this.getAttribute('data-sound');
            video.src = this.getAttribute('data-video');
            checkPlaying(song);
        })
    })


    play.addEventListener("click", () => {
        checkPlaying(song);
    });

    timeSelect.forEach(option => {
        option.addEventListener('click', function(){
            duration = this.getAttribute('data-time');
            timeDisplay.textContent = `${Math.floor(duration / 60)}:${Math.floor(duration % 60)}`;
        })
    })

    const checkPlaying = song => {
        if(song.paused){
            song.play();
            video.play();
            play.src = './svg/pause.svg';
        } else{
            song.pause();
            video.pause();
            play.src = './svg/play.svg';
        }
    }
    const setTimeLeft = (elapsed) =>{
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.floor(elapsed / 60);
        timeDisplay.textContent = `${minutes}:${seconds}`;
    }

    song.ontimeupdate = () =>{
        let currrentTime = song.currentTime;
        let elapsed = duration - currrentTime;
        
        let progress = outlineLength * (1 - (currrentTime/duration));
        outline.style.strokeDashoffset = progress;
        setTimeLeft(elapsed);

        if(currrentTime >= duration){
            song.pause();
            song.currentTime = 0;
            play.src = './svg/play.svg';
            video.pause();
        }
    }




}
app();