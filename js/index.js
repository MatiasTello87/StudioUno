console.log("hola wach");
// 1. Seleccionamos los elementos
const btnHamb = document.querySelector('#btn-hamb');
const btnclose = document.querySelector('#btn-close');
const navMenu = document.querySelector('#nav-menu');

btnHamb.addEventListener('click', ()=>{
    navMenu.classList.toggle('active');
    console.log("aoa");
    if(navMenu.classList.contains('active')){
      btnclose.addEventListener('click', ()=>{
        navMenu.classList.remove('active');
      });
    }
});


