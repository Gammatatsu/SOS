import 'normalize.css'
import './styles/main.scss';

let menuButton = document.querySelector('.header__navigation-button')
let navigationList = document.querySelector('.header__navigation-list')
let clickButton = document.querySelector('.header__hero-arrow')
let main = document.querySelector('.main')

clickButton.addEventListener('click',(evt)=>{
  evt.preventDefault()
  main.scrollIntoView({
    block: 'nearest',
    behavior:'smooth',

  })
   

})

document.addEventListener("DOMContentLoaded", function() {
  if (window.innerWidth > 700) {
    var container = document.querySelector("body");
    var blocks = document.querySelectorAll(".block");
    var currentBlockIndex = 0;
    var isScrolling = false; // Флаг для определения состояния прокрутки
    var timeoutDuration = 100; // Длительность таймаута в миллисекундах
    var scrollTimeout; // Таймаут для задержки прокрутки

    container.addEventListener("wheel", function(event) {
      event.preventDefault(); // Отменить стандартное поведение прокрутки страницы

      if (!isScrolling) {
        clearTimeout(scrollTimeout); // Очистить предыдущий таймаут, если он был установлен

        if (event.deltaY > 0) {
          // Прокрутка вниз
          currentBlockIndex++;
        } else {
          // Прокрутка вверх
          currentBlockIndex--;
        }

        // Ограничение индекса текущего блока в пределах диапазона блоков
        if (currentBlockIndex < 0) {
          currentBlockIndex = 0;
        } else if (currentBlockIndex >= blocks.length) {
          currentBlockIndex = blocks.length - 1;
        }

        // Прокрутка к текущему блоку
        blocks[currentBlockIndex].scrollIntoView({
          behavior: "smooth"
        });

        isScrolling = true;

        // Задержка перед снятием флага прокрутки
        scrollTimeout = setTimeout(function() {
          isScrolling = false;
        }, timeoutDuration);
      } else {
        // Если прокрутка уже в процессе, отменяем текущую прокрутку и начинаем новую
        clearTimeout(scrollTimeout);

        // Прокрутка к текущему блоку
        blocks[currentBlockIndex].scrollIntoView({
          behavior: "smooth"
        });

        // Задержка перед снятием флага прокрутки
        scrollTimeout = setTimeout(function() {
          isScrolling = false;
        }, timeoutDuration);
      }
    });
  }
});



const swiper = new Swiper(".swiper1", {
    autoplay:{
        delay: 3500,
        disableOnInteraction:false,
    },
});
const secondSwiper = new Swiper(".about__swiper", {
    // autoplay:{
    //     // delay: 5300,
    //     disableOnInteraction:false,
    // },
    navigation: {
        nextEl: ".about__swiper-next",
        prevEl: ".about__swiper-prev",
      },
      pagination: {
        el: ".about__swiper-pagination",
      },
      loop:true,
});

menuButton.addEventListener('click',()=>{
   menuButton.classList.toggle('header__navigation-button--active')
   navigationList.classList.toggle('header__navigation-list--active')

})



