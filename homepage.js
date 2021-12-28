//javascript for Toggle Menu
var navlinks = document.getElementById("navlinks")
function ShowMenu() {
    navlinks.style.right = "0";
}
function HideMenu() {
    navlinks.style.right = "-250px";
}
// js for Swiper
const swiper = new Swiper('.swiper', {
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});