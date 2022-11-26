let hamburgerMenu = document.querySelector('.menu')
let hamBtn = document.querySelector('.hamburger')
document.querySelector('.hamburger').onclick = () => {
    hamburgerMenu.classList.toggle('active')
    hamBtn.classList.toggle('open')
}

let header = document.querySelector('header')
window.onscroll = () =>{
    header.classList.add('active')
}

let cookieBox = document.querySelector('.cookie')

document.querySelector('.accept').onclick = () => {
    cookieBox.classList.add('slideout')
}
document.querySelector('.decline').onclick = () => {
    cookieBox.classList.add('slideout')
}