const hamburger_wrapper = document.querySelector('.hamburger-wrapper');
const hamburger = document.querySelector('.hamburger');
const menu_375__list_holder = document.querySelector('.menu-375__list-holder');
const menu_375__item = document.querySelector('.menu-375__item');
const menu_375_hidden = document.querySelector('.menu-375-hidden');
const navigation = document.querySelector('.navigation');
const portfolio__filter_list = document.querySelector('.portfolio__filter-list');

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