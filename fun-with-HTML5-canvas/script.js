function firstCanvas(){
const controls = document.getElementById('controls');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const color = document.getElementById('color');
const width = document.getElementById('width');
ctx.strokeStyle = color.value;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = width.value;


let isDrawing = false;
let lastX = 0;
let lastY = 0;


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


controls.addEventListener('change', (e)=>{
    if(e.target.name ==='width'){
        ctx.lineWidth = e.target.value;
    } else  if(e.target.name ==='color'){
        ctx.strokeStyle = e.target.value;
    }
   }
)
}

