const contains = document.querySelectorAll('.contain-img-btnvermas')

contains.forEach(contain => {
    const btnActivar = contain.querySelector('.btn-vermas');
    const capaTexto = contain.querySelector('.capa-texto');
    const btnCerrar = contain.querySelector('.btn-cerrar-overlay');
    
    btnActivar.addEventListener('click', () => {
      capaTexto.classList.add('activo');
      btnActivar.style.opacity = 0;
    });
    
    btnCerrar.addEventListener('click', (e) => {
        //   e.stopPropagation(); // Para que no interfiera con otros clics
          capaTexto.classList.remove('activo');
          btnActivar.style.opacity = 1;
        });
})


// // 1. Capturamos todos los contenedores de fotos
// const contenedores = document.querySelectorAll('.card-foto');

// contenedores.forEach(contenedor => {
//   // 2. Buscamos los elementos PERO solo dentro de este contenedor específico
//   const btnVer = contenedor.querySelector('.btn-ver'); // Nota que usamos 'contenedor' no 'document'
//   const overlay = contenedor.querySelector('.overlay-foto');

//   btnVer.addEventListener('click', () => {
//     overlay.classList.toggle('mostrar');

//     // Cambiar texto del botón opcionalmente
//     if (overlay.classList.contains('mostrar')) {
//       btnVer.innerText = "Cerrar";
//     } else {
//       btnVer.innerText = "Ver más";
//     }
//   });
// });