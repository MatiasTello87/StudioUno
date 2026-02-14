console.log("hola wach");
// 1. Seleccionamos los elementos
const btnMenu = document.querySelector('#btn-menu');
const navMenu = document.querySelector('#nav-menu');
const navspan = document.querySelector('#nav-span');
const body = document.querySelector('body');

btnMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('active');
    // Opcional: Cambiar el icono del botón
  if (navMenu.classList.contains('active')) {
    navspan.innerHTML = '✕'; // Icono de cerrar
  } else {
    navspan.innerHTML = 'Menú';
  };

  // Lógica para anular el scroll
  if (navMenu.classList.contains('active')) {
    body.style.overflow = 'hidden'; // Bloquea el scroll
  } else {
    body.style.overflow = 'auto';   // Devuelve el scroll
  }
});




document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});