// Función asincrónica para obtener la lista de videos desde el servidor
async function listaVideos() {
    // Realiza una solicitud fetch para obtener la lista de videos desde la URL proporcionada
    const conexion = await fetch('http://localhost:3001/videos');

    // Convierte la respuesta de la solicitud fetch a formato JSON
    const conexionConvertida = conexion.json();

    // Retorna la lista de videos convertida en formato JSON
    return conexionConvertida;
}

// Función asincrónica para enviar un nuevo video al servidor
async function enviarVideo(titulo, descripcion, url, imagen) {
    // Realiza una solicitud fetch con el método POST para enviar los datos del video al servidor
    const conexion = await fetch('http://localhost:3001/videos', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            titulo: titulo,
            descripcion: `${descripcion} mil visualizaciones`,
            url: url,
            imagen: imagen
        })
    });

    // Convierte la respuesta de la solicitud fetch a formato JSON
    const conexionConvertida = conexion.json();

    // Verifica si la solicitud fetch fue exitosa
    if (!conexion.ok) {
        // Si la solicitud fetch no fue exitosa, lanza un error con un mensaje personalizado
        throw new Error('Ha ocurrido un error al enviar el video');
    }

    // Retorna la respuesta de la solicitud fetch convertida en formato JSON
    return conexionConvertida;
}

// Función asincrónica para buscar videos en el servidor utilizando una palabra clave
async function buscarVideos(palabraClave) {
    // Realiza una solicitud fetch para buscar videos que coincidan con la palabra clave proporcionada
    const conexion = await fetch(`http://localhost:3001/videos?q=${palabraClave}`);

    // Convierte la respuesta de la solicitud fetch a formato JSON
    const conexionConvertida = conexion.json();

    // Retorna los videos encontrados en formato JSON
    return conexionConvertida;
}

// Exporta las funciones listaVideos, enviarVideo y buscarVideos como parte del objeto conexionAPI
export const conexionAPI = {
    listaVideos, enviarVideo, buscarVideos
}