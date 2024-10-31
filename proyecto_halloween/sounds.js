// Array con los ids de las imágenes y sus rutas de sonido
const elementosConSonido = [
    { id: 'imagen1', sonido: '../sound/' },
    { id: 'imagen2', sonido: '../sound/' },
    { id: 'imagen3', sonido: '../sound/' }
];

//Agregamos Eventos (sonidos) de hover de ratón para cada imágen
elementosConSonido.forEach(elemento => {

    //Seleccionamos imagen y su sonido por el id
    const imagen = document.getElementById(elemento.id);
    const sonido = new Audio(elemento.sonido);

    imagen.addEventListener('mouseenter', () => {
        sonido.play();
    });
    imagen.addEventListener('mouseleave', () => {
        sonido.pause();
    });
});