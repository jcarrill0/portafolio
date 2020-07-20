document.addEventListener('DOMContentLoaded', () => {
    cargarPortafolio();
});

function cargarPortafolio() {
    fetch('datos.json')
     .then(respuesta => {
         return respuesta.json();
     })
     .then(datos => {
         let html = '';

         datos.portafolio.forEach(portafolio => {
             let {id, nombre, desc} = portafolio;
             // Crear el template
             html += `
                <div class="elemento">
                    <img src="img/${id}.jpg">
                    <div class="contenido">
                        <h3>${nombre}</h3>
                        <p>${desc}</p>
                    </div>
                </div>
             `;   
         });
         // despues de crear el template inyectarlo al html
         document.querySelector('#listado').innerHTML = html; 
     }) 
}