const media = document.querySelectorAll(".IMG");
const navlinks = document.getElementById("navlinks");
//javascript for Toggle Menu
function ShowMenu() {
    navlinks.style.right = "0";
}
function HideMenu() {
    navlinks.style.right = "-250px";
}
// js for Swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// js for social media
var flag = 1;
function time() {
    const func = (opt) =>{
        media.forEach(e => {
            if (opt === "add") {
                e.classList.add("animate");
                flag = 0;
            }
            else{
                e.classList.remove("animate");
                flag = 1 ;
            }
        });
    }
    if (flag === 1) {
        func("add");
    } 
    else if (flag === 0) {
        func("remove");
    }
    
}
// setTimeout(time(),1000);

setInterval(() => {
   time();
}, 5000);
