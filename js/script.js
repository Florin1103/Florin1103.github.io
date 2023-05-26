// Login toggle
let login = document.querySelector(".login-form"); 

document.querySelector("#login-btn").onclick = () =>{
    login.classList.toggle('active');
}
let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    login.classList.remove('active');
    navbar.classList.toggle('active')
}  

// Gallery swiper
let swiper = new Swiper(".gallery-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween:20,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints: {
        0:{
            slidesPerView:1
        },
        700:{
            slidesPerView:2
        },
    }
});

// Pop up buttons from Animals section
function openPopup(popup) {
    popup.classList.add("open-popup");
}
function closePopup(popup) {
    popup.classList.remove("open-popup");
}
