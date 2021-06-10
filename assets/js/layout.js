// 由上角menubar使用
window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        $('.menuAnimated').addClass('menufadeIn');
        $('.tittleFixed').addClass('menufadeIn');
    } else if (window.scrollY < 500) {
        $('.menuAnimated').removeClass('menufadeIn');
        $('.tittleFixed').removeClass('menufadeIn');
    }
});

// menuBtn
const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", myPrev);
function myPrev() {
    $('.menu-button').toggleClass("cross bgBlack");
}