console.log('test');

// text clamp
const moreBtn=document.querySelectorAll('.moreBtn');
const clamp= document.querySelectorAll('.clamp');
 
moreBtn.addEventListener('click',()=>{
    clamp.classList.toggle('clamp');
});

// Navbar toggle button for mobile version
const navbarMenu = document.querySelector('.navbar__menu');
const navbarToggleBtn= document.querySelector('navbar__toggle-btn');
navbarToggleBtn.addEventListener('click',()=>{
    console.log('test');
    navbarMenu.classList.toggle('open');
})
