const play =document.getElementById('play');
const player =document.getElementById('player');
const video = document.getElementById('video');


function toggleVideo(e){
    video.play();
    if(playing){
        console.log ("yo");
    }

}
play.addEventListener('click', toggleVideo);

console.log(video.poused);
