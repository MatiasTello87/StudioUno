const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // 1. Obtenemos los valores de los inputs
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const correo = document.querySelector('#email').value;
    const mensaje = document.querySelector('#textarea').value;
    const tel_usu = document.querySelector('#tel_usu').value;

    const telefono = "5492645293298"; // Pon tu número aquí (con código de país, sin el +)

    // 2. Creamos el mensaje formateado
    // Usamos %0A para los saltos de línea (es el código para el 'Enter')
    const textoMensaje = `Hola!%0A` +
                         `*Nombre:* ${nombre}%0A` +
                         `*Apellido:* ${apellido}%0A` +
                         `*Correo:* ${correo}%0A` +
                         `*Mensaje:* ${mensaje}`;

    // 3. Construimos la URL final
    const urlWhatsApp = `https://wa.me/${telefono}?text=${textoMensaje}`;

    // 4. Abrimos la URL en una pestaña nueva
    window.open(urlWhatsApp, '_blank');
});