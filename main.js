console.log('test');

// text clamp
const moreBtn=document.querySelector('.moreBtn');
const clamp= document.querySelector('.clamp');
 
moreBtn.addEventListener('click',()=>{
    clamp.classList.toggle('clamp');
});