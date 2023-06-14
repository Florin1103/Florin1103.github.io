// Non-functional button until I find a use for it.
//Login toggle
// let login = document.querySelector(".login-form"); 

// document.querySelector("#login-btn").onclick = () =>{
//     login.classList.toggle('active');
// }
// let navbar = document.querySelector('.header .navbar');
// document.querySelector('#menu-btn').onclick = () =>{
//     login.classList.remove('active');
//     navbar.classList.toggle('active')
// }  
// document.addEventListener("click", (event) => {
//         if (!event.target.closest(".login-form") && !event.target.closest("#login-btn")) {
//         login.classList.remove('active');
//     }
// });
// document.addEventListener("click", (event) => {
//     if (!event.target.closest(".header .navbar") && !event.target.closest("#menu-btn")) {
//         navbar.classList.remove('active')
// }
// });


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
// Year automatically update
const yearSpan = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Automatic message
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      let messageBox = document.getElementById("message-box");
      messageBox.style.display = "block";
      messageBox.style.transition = "width 0.4s, height 0.4s";
      messageBox.style.width = "200px";
      messageBox.style.height = "100px";
  
      setTimeout(function() {
        messageBox.style.width = "500px";
        messageBox.style.height = "250px";
  
        setTimeout(function() {
          let textElement = messageBox.querySelector("h3");
          textElement.style.transition = "transform 0.4s";
          textElement.style.transform = "translateX(0)"; 
        }, 300); 
      }, 100);
    }, 4000);
  });
  
  document.addEventListener("click", function(event) {
    let messageBox = document.getElementById("message-box");
    let targetElement = event.target;
  
    if (targetElement === messageBox || messageBox.contains(targetElement)) {
      messageBox.style.display = "none";
    }
  });
  
  

