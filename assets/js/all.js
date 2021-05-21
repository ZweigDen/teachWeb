const closeAlert = document.querySelector('.alertNew');
const closeBtn = document.querySelector('.closeBtn');
closeBtn.addEventListener('click',function(){
  closeAlert.classList.add('d-none');
});


function currSwiper(){
  var swiper = new Swiper(".currSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
function swiper() {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      766: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4.2,
        spaceBetween: 30,
      },
    }
  });
}
// menuBtn
function btn() {
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", myPrev);
  function myPrev() {
    $('.menu-button').toggleClass("cross bgBlack");
  }
}

function init() {
  btn();
  swiper();
  currSwiper();
}
window.onload = init;

