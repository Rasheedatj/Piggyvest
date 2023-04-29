let hamburgerMenu = document.querySelector('.menu');
let hamBtn = document.querySelector('.hamburger');

hamBtn.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  hamBtn.classList.toggle('open');
});

let header = document.querySelector('header');
window.onscroll = () => {
  header.classList.add('active');
};

window.addEventListener('scroll', function () {
  if (document.documentElement.scrollTop === 0) {
    header.classList.remove('active');
  }
});

let cookieBox = document.querySelector('.cookie');
let button = document.querySelectorAll('.disappear');
let logo = document.querySelector('.logo');

button.forEach((accept) =>
  accept.addEventListener('click', () => {
    cookieBox.classList.add('slideout');
  })
);

logo.addEventListener('click', () => {
  cookieBox.style.display = 'block';
});

setTimeout(() => logo.click(), 5000);

var swiper = new Swiper('.mySwiper', {
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  direction: 'vertical',
  slidesPerView: 1.7,
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
