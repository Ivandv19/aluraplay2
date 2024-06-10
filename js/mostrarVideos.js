// Importación del módulo 'conexionAPI' que contiene la función 'listaVideos'
import { conexionAPI } from "./conexionAPI.js";

// Selecciona el elemento HTML con el atributo '[data-lista]' y lo almacena en la variable 'lista'
const lista = document.querySelector('[data-lista]');

// Función para crear una tarjeta de video con los datos proporcionados
export default function crearCard(titulo, descripcion, url, imagen) {
    // Crea un elemento 'li' para representar un elemento de video
    const video = document.createElement('li');
    // Asigna la clase 'videos__item' al elemento 'li' creado
    video.className = 'videos__item';
    // Establece el contenido HTML del elemento 'li' con los datos proporcionados
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <div class="descripcion-video">
    <img src="${imagen}" alt="logo canal alura">
    <h3>${titulo}</h3>
    <p>${descripcion}</p>
    </div>`;

    // Devuelve el elemento 'li' creado
    return video;
}

// Función asincrónica para listar los videos
async function listarVideos() {
    try {
        // Obtiene la lista de videos utilizando la función 'listaVideos' del módulo 'conexionAPI'
        const listaAPI = await conexionAPI.listaVideos();
        // Itera sobre cada elemento de la lista de videos obtenida y agrega una tarjeta de video a la lista HTML
        listaAPI.forEach(video => lista.appendChild(crearCard(video.titulo, video.descripcion, video.url, video.imagen)));
    } catch {
        // En caso de error, muestra un mensaje de error en lugar de la lista de videos
        lista.innerHTML = `<h2 class='mensaje__titulo'>Ha ocurrido un problema con la conexión</h2>`
    }
}

// Llama a la función 'listarVideos' para cargar la lista de videos al cargar la página
listarVideos();