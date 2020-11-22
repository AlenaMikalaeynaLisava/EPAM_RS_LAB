function firstCanvas(){
const controls = document.getElementById('controls');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#E478C0';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 5;


let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;


function draw(e) {
  if (!isDrawing) return; 
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);


controls.addEventListener('click', (e)=>{
    if(e.target.name ==='size'){
        console.log(e.target.name);
        ctx.lineWidth = e.target.value;
    } else  if(e.target.name ==='color'){
        console.log(e.target.name);
        ctx.strokeStyle = e.target.value;
        console.log(e.target.value);
    }
   }
)
}

