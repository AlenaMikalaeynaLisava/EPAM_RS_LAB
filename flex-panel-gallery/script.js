const panels = document.querySelectorAll('.panel');


const clickedPanel = (e) => {
    const elem = e.target.closest('.panel')
    elem.classList.toggle("open");
}
const clickedPanelWords = (e) => {
    const elem = e.target.closest('.panel')
    if(e.propertyName.includes('flex')){
        for(let child of elem.children){
            child.classList.toggle('open-active');
        }
    }
 }


panels.forEach(panel =>{
    panel.addEventListener("click", clickedPanel);
})
panels.forEach(panel =>{
    panel.addEventListener("transitionend", clickedPanelWords);
})
