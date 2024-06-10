// Importa la función 'conexionAPI' desde el archivo 'conexionAPI.js'
import { conexionAPI } from "./conexionAPI.js";

// Selecciona el formulario utilizando el atributo '[data-formulario]'
const formulario = document.querySelector('[data-formulario]');

// Función asincrónica para crear un nuevo video
async function crearVideo(evento) {
    // Evita el comportamiento predeterminado del formulario al enviar
    evento.preventDefault();
    // Obtiene los valores de los campos del formulario (título, URL e imagen)
    const titulo = document.querySelector('[data-titulo]').value;
    const url = document.querySelector('[data-url]').value;
    const imagen = document.querySelector('[data-imagen]').value;

    // Genera una descripción aleatoria para el video
    const descripcion = Math.floor(Math.random() * 10).toString();

    try {
        // Llama a la función 'enviarVideo' del módulo 'conexionAPI' para enviar los datos del video al servidor
        await conexionAPI.enviarVideo(titulo, descripcion, url, imagen);
        // Redirige al usuario a la página 'envio-concluido.html' después de enviar el video exitosamente
        window.location.href = './envio-concluido.html';
    } catch (e) {
        // Muestra una alerta en caso de error al enviar el video
        alert(e);
    }
}

// Agrega un evento de envío al formulario que llama a la función 'crearVideo' cuando se envía el formulario
formulario.addEventListener('submit', evento => crearVideo(evento));