function swiper(){
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
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
            767: {
              slidesPerView: 2.5,
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
function btn(){
  var menuButton = document.querySelector(".menu-button");
        menuButton.addEventListener("click",myPrev);
        function myPrev(){
            $('.menu-button').toggleClass("cross bgBlack");
        }
}

function init(){
  btn();
  swiper();
}
window.onload = init;