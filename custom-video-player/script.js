function mainfunc(){
const player = document.getElementById('player');
const video = document.getElementById('viewer');
const showTime = document.getElementById('player__showtime');
const progress = document.getElementById('progress');
const progressBar = document.getElementById('progress__filled');
const toggle = document.getElementById('toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
  }

  video.addEventListener('play', updateButton);
  video.addEventListener('pause', updateButton);

  function updateButton() {
    toggle.textContent  = video.paused ? '►' : '❚ ❚';
  }

  video.addEventListener('timeupdate', handleProgress);

  function handleProgress() {
    progressBar.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`;
    showTime.innerText = Math.trunc(video.currentTime/60) +" : "+Math.trunc(video.currentTime%60);
    console.log(video.currentTime);
  }


  ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
//   ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
  function handleRangeUpdate() {
    video[this.name] = this.value;
  }


  skipButtons.forEach(button => button.addEventListener('click', skip));
  function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
   }


   let mousedown = false;
   progress.addEventListener('click', scrub);
   progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
   progress.addEventListener('mousedown', () => mousedown = true);
   progress.addEventListener('mouseup', () => mousedown = false);

   function scrub(e) {
    video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
  }


  player.addEventListener('dblclick', makeFullscreen);
  function makeFullscreen(){
    if(video.requestFullscreen) {
        video.requestFullscreen();
      } else if(video.webkitrequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if(video.mozRequestFullscreen) {
        video.mozRequestFullScreen();
      }
  }

}
