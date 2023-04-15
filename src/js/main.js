const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const nav = $('.nav');
const menuItems = $$('.menu__item');
const btnSearch = $('.nav__search');
const inputSearchDK = $('.input__search--dk');
const btnMore = $('.btn-more-menu');

btnSearch.onclick = () => {
   inputSearchDK.classList.toggle('searching');
};

btnMore.onclick = () => {
   btnMore.classList.toggle('btn-menu--close');
   nav.classList.toggle('nav--opening');
};

if (window.innerWidth > 1050)
   menuItems.forEach((item) => {
      item.addEventListener('mouseover', () => {
         item.classList.toggle('menu__item--active');
      });
      item.addEventListener('mouseout', () => {
         item.classList.remove('menu__item--active');
      });
   });
else
   menuItems.forEach((item) => {
      item.addEventListener('click', () => {
         const itemActive = $('.menu__item--active');
         if (itemActive && itemActive !== item) itemActive.classList.remove('menu__item--active');
         item.classList.toggle('menu__item--active');
      });
   });
