(function(){
const hamburger_wrapper = document.querySelector('.hamburger-wrapper');
const hamburger = document.querySelector('.hamburger');
const header_navigation = document.querySelector('.header-navigation');
const navigation = document.querySelector('.navigation');
const portfolio__filter_list = document.querySelector('.portfolio__filter-list');
const links = document.querySelectorAll(".navigation a");

const computedStyle = getComputedStyle(hamburger_wrapper);

hamburger_wrapper.addEventListener("click", ()=>{
    document.querySelector('.logo').classList.toggle('logo-shift');
    hamburger.classList.toggle('rotate');
    header_navigation.classList.toggle('header-navigation-hidden');
});

navigation.addEventListener("click", (event)=>{
    navigation.querySelectorAll('.navigation__link').forEach(el => el.classList.remove('navigation__active-item'));
    if(event.target.nodeName==='A'){
    event.target.classList.add('navigation__active-item');
        if(computedStyle.display !== 'none'){
        hamburger.classList.toggle('rotate');
        header_navigation.classList.toggle('header-navigation-hidden');
        document.querySelector('.logo').classList.toggle('logo-shift');
        }
    }
});

//portfolio
portfolio__filter_list.addEventListener("click", (event)=>{
    portfolio__filter_list.querySelectorAll('.portfolio__active-item').forEach(el => el.classList.remove('portfolio__active-item'));
     if(event.target.classList[0] === 'portfolio__item'){
        event.target.classList.add('portfolio__active-item');
 }  
});

document.addEventListener('scroll', onScroll);
function onScroll(event){
    const curPoss = window.scrollY;
    document.querySelectorAll('.header'&&'body>section').forEach((el) => {el.getAttribute('id')
    if(el.offsetTop <= curPoss && (el.offsetTop + el.offsetHeight) > curPoss){
        links.forEach((a) => {
            a.classList.remove("navigation__active-item");
            if(el.getAttribute('id') === a.getAttribute('href').substring(1)){
                a.classList.add("navigation__active-item");
            }
        })
    }})
}

// arrows
const slider__wrapper = document.querySelector(".slider__wrapper");
const element = document.querySelector('.slider__element');
slider__wrapper.addEventListener('click', sliderChange);
function sliderChange(event){
    if(event.target.classList.contains("arrow-right")){
        if(!element.classList.contains('slider__element1')&&!element.classList.contains('slider__element2')){
        element.classList.remove('slider__element3');
        element.classList.remove('slider__element4');
            element.classList.add('slider__element1');
        } else{
            element.classList.remove('slider__element1');
            element.classList.remove('slider__element2');
            element.classList.add('slider__element3');
        }
    } else if(event.target.classList.contains("arrow-left")){
        if(!element.classList.contains('slider__element1')&&!element.classList.contains('slider__element2')){
        element.classList.remove('slider__element3');
        element.classList.remove('slider__element4');
            element.classList.add('slider__element2');
        } else{
            element.classList.remove('slider__element1');
            element.classList.remove('slider__element2');
            element.classList.add('slider__element4');
        }
    

    }
}

//portfolio
const portfolio__pictures_holder = document.querySelector('.portfolio__pictures-holder');
portfolio__filter_list.addEventListener('click', portfolioMix);
function portfolioMix(event){
    if(event.target.classList.contains("portfolio__item")){
        const allPictures = portfolio__pictures_holder.querySelectorAll('.portfolio__picture');
        const temp = allPictures[0];
        let i=0;
        for(i=0; i<allPictures.length; i++){
            if(allPictures[i+2]){
                portfolio__pictures_holder.insertBefore(allPictures[i+2], allPictures[i]);
            } else {portfolio__pictures_holder.insertBefore(allPictures[i], temp) }
        }
    }
}
}());