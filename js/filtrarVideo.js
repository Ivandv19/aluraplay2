// Importa la función 'conexionAPI' desde el archivo 'conexionAPI.js'
import { conexionAPI } from "./conexionAPI.js";
// Importa la función 'crearCard' desde el archivo 'mostrarVideos.js'
import crearCard from "./mostrarVideos.js";

// Función asincrónica para filtrar videos
async function filtrarVideo(evento) {
    // Evita el comportamiento predeterminado del formulario al enviar
    evento.preventDefault();
    // Obtiene el valor del campo de búsqueda
    const datosDeBusqueda = document.querySelector('[data-busqueda]').value;
    // Realiza una búsqueda de videos utilizando la función 'buscarVideos' del módulo 'conexionAPI'
    const busqueda = await conexionAPI.buscarVideos(datosDeBusqueda);

    // Selecciona el elemento HTML con el atributo '[data-lista]' y lo almacena en la variable 'lista'
    const lista = document.querySelector('[data-lista]');

    // Elimina todos los elementos hijos del elemento 'lista' para borrar los resultados anteriores
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }

    // Itera sobre cada elemento de la lista de resultados de la búsqueda y crea una tarjeta de video para cada uno
    busqueda.forEach(video => lista.appendChild(crearCard(video.titulo, video.descripcion, video.url, video.imagen)));

    // Si no se encuentran resultados para la búsqueda, muestra un mensaje indicando que no se encontraron elementos
    if(busqueda.length == 0){
        lista.innerHTML = `<h2 class='mensaje__titulo'> No se encontraron elementos para "${datosDeBusqueda}"</h2>`;
    }
}

// Selecciona el botón de búsqueda y agrega un evento de clic que llama a la función 'filtrarVideo'
const boton = document.querySelector('[data-boton-busqueda]');
boton.addEventListener('click', evento => filtrarVideo(evento));