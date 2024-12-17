//Hamburger view on mobile.

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navLinks');

//active on mobile
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});