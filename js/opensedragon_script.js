// Obtener el parámetro de la URL
const urlParams = new URLSearchParams(window.location.search);
const imagenDZI = urlParams.get('imagen');

// Verificar si se proporcionó una imagen DZI en la URL
if (imagenDZI) {
    // Crear el visor OpenSeadragon con la imagen DZI
    const viewer = OpenSeadragon({
        showNavigator: true,
        id: 'openseadragon1',
        prefixUrl: './openseadragon/openseadragon-bin-4.1.0/images/',
        tileSources: imagenDZI
    });

    viewer.initializeAnnotations();

    // Actualizar título y descripción
    const { titulo, descripcion } = obtenerTituloYDescripcion(imagenDZI);
    document.getElementById('titulo').textContent = titulo;
    document.getElementById('cuerpo').textContent = descripcion;

} else {
    // Si no se proporciona una imagen DZI, utilizar una imagen predeterminada o mostrar un mensaje de error
    console.error("No se proporcionó una imagen DZI en la URL.");
}






// Función para obtener el título y la descripción basados en la imagen
function obtenerTituloYDescripcion(imagenDZI) {
    switch (imagenDZI) {
        case './images/dzi/31-2656.dzi':
            return {
                titulo: 'Mucous Tissue , CS',
                descripcion: 'Cod: 31-2656 '
            };
        case './images/dzi/31-2752.dzi':
            return {
                titulo: 'ELASTIC TISSUE, LS',
                descripcion: 'Cod: 31-2752'
            };   

        case './images/dzi/31-2806.dzi':
            return {
                titulo: 'MUSCLE-TENDOM JUNCT, MAMMAL, LS',
                descripcion: 'Cod. 31-2806'
            };
        case './images/dzi/31-2946.dzi':
            return {
                titulo: 'BONE, SPONGY, HUMAN, SEC',
                descripcion: 'Cod: 31-2946'
            };

            case './images/dzi/31-2952.dzi':
            return {
                titulo: 'BONE, COMPACT, MAMMAL, CS',
                descripcion: 'Cod: 31-2952'
            };
        case './images/dzi/31-3012.dzi':
            return {
                titulo: 'BONE, DEVELOPING MEMBRANE, SEC',
                descripcion: 'Cod. 31-3012'
            };




        default:
            return {
                titulo: 'Título predeterminado',
                descripcion: 'Descripción predeterminada para la imagen.'
            };
    }
}
