// 1. Seleccionamos los elementos
const btnHamb = document.querySelector('#btn-hamb');
const btnclose = document.querySelector('#btn-close');
const navMenu = document.querySelector('#nav-menu');

// Función única para abrir
btnHamb.addEventListener('click', () => {
    navMenu.classList.add('active');
});

// Función única para cerrar (Fuera del otro evento)
btnclose.addEventListener('click', () => {
    navMenu.classList.remove('active');
});

// Cerrar al hacer clic en enlaces
document.querySelectorAll('.contain-navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// console.log("hola wach");
// // 1. Seleccionamos los elementos
// const btnHamb = document.querySelector('#btn-hamb');
// const btnclose = document.querySelector('#btn-close');
// const navMenu = document.querySelector('#nav-menu');

// btnHamb.addEventListener('click', ()=>{
//     navMenu.classList.toggle('active');
//     console.log("aoa");
//     if(navMenu.classList.contains('active')){
//       btnclose.addEventListener('click', ()=>{
//         navMenu.classList.remove('active');
//       });
//     }

//     document.querySelectorAll('.contain-navbar a').forEach(link => {
//     link.addEventListener('click', () => {
//     navMenu.classList.remove('active');
//   });
// });
// });



