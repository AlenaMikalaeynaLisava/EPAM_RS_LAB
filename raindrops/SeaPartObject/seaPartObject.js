const sealevel = document.querySelector(".seapart__sea-level");
const aud = document.querySelector('.audio');
sealevel.addEventListener('click', function() {
    aud.play();
  });


const seaObject ={
    sealevelHeight: sealevel.style.height,
}
export default seaObject;


