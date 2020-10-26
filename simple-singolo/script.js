const hamburger_wrapper = document.querySelector('.hamburger-wrapper');
const hamburger = document.querySelector('.hamburger');
const menu_375__list_holder = document.querySelector('.menu-375__list-holder');
const menu_375__item = document.querySelector('.menu-375__item');
const menu_375_hidden = document.querySelector('.menu-375-hidden');
const navigation = document.querySelector('.navigation');
const portfolio__filter_list = document.querySelector('.portfolio__filter-list');
const links = document.querySelectorAll(".navigation a");
const linksMenu375 = document.querySelectorAll(".menu-375 a");

hamburger_wrapper.addEventListener("click", ()=>{
    hamburger.classList.toggle('rotate');
    menu_375_hidden.classList.toggle('menu-375-hidden');
})
menu_375__list_holder.addEventListener("click", (event)=>{
    menu_375__list_holder.querySelectorAll('a').forEach(el => el.classList.remove('menu-375__active-item'));
    hamburger.classList.toggle('rotate');
    event.target.classList.add('menu-375__active-item');
    menu_375_hidden.classList.toggle('menu-375-hidden');
})

navigation.addEventListener("click", (event)=>{
    navigation.querySelectorAll('a').forEach(el => el.classList.remove('navigation__active-item'));
    if(event.target.nodeName==='A'){
        event.target.classList.add('navigation__active-item');
}  
})

portfolio__filter_list.addEventListener("click", (event)=>{
    portfolio__filter_list.querySelectorAll('.portfolio__active-item').forEach(el => el.classList.remove('portfolio__active-item'));
     if(event.target.classList[0] === 'portfolio__item'){
        event.target.classList.add('portfolio__active-item');
 }  
})

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

document.addEventListener('scroll', onScrollSide);
function onScrollSide(event){
    const curPoss = window.scrollY;
    document.querySelectorAll('.header'&&'body>section').forEach((el) => {el.getAttribute('id')
    if(el.offsetTop <= curPoss && (el.offsetTop + el.offsetHeight) > curPoss){
        linksMenu375.forEach((a) => {
            a.classList.remove("menu-375__active-item");
            if(el.getAttribute('id') === a.getAttribute('href').substring(1)){
                a.classList.add("menu-375__active-item");
            }
        })
    }})
}

// arrows
const arrows = document.querySelectorAll('.arrow');
const slider__wrapper = document.querySelector(".slider__wrapper");
const slider = document.querySelector('.slider');
const vertical_phone_wrapper = document.querySelector('.vertical-phone-wrapper');
const horizontal_phone_wrapper = document.querySelector('.horizontal-phone-wrapper');
const element = document.querySelector('.element');
slider__wrapper.addEventListener('click', sliderChange);
function sliderChange(event){
    if(event.target.classList.contains("arrow-right")){
        if(!element.classList.contains('element1')&&!element.classList.contains('element2')){
        element.classList.remove('element3');
        element.classList.remove('element4');
            element.classList.add('element1');
        } else{
            element.classList.remove('element1');
            element.classList.remove('element2');
            element.classList.add('element3');
        }
    } else if(event.target.classList.contains("arrow-left")){
        if(!element.classList.contains('element1')&&!element.classList.contains('element2')){
        element.classList.remove('element3');
        element.classList.remove('element4');
            element.classList.add('element2');
        } else{
            element.classList.remove('element1');
            element.classList.remove('element2');
            element.classList.add('element4');
        }
    

    }
}

//portfolio

const portfolio__item = document.querySelector('.portfolio__item');
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