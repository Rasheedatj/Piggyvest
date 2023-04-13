let hamburgerMenu = document.querySelector(".menu");
let hamBtn = document.querySelector(".hamburger");

hamBtn.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  hamBtn.classList.toggle("open");
});

let header = document.querySelector("header");
window.onscroll = () => {
  header.classList.add("active");
};

let cookieBox = document.querySelector(".cookie");
let button = document.querySelectorAll(".disappear");

button.forEach((accept) =>
  accept.addEventListener("click", () => {
    cookieBox.classList.add("slideout");
  })
);

var swiper = new Swiper(".mySwiper", {
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  direction: "vertical",
  slidesPerView: 1.7,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
