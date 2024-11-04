document.addEventListener("DOMContentLoaded", () => {

    //Objeto con los ids de las imágenes y sus rutas de sonido
    const imagenesConRuta = [
        { id: 'arañas-izq', sonido: './sound/arañas.mp3' },
        { id: 'arañas-dcha', sonido: './sound/arañas.mp3' },
        { id: 'calabaza', sonido: './sound/calabaza.mp3' },
        { id: 'casa', sonido: './sound/esqueleto.mp3' },
        { id: 'fantasma2', sonido: './sound/fantasma_izq.mp3' },
        { id: 'fantasma1', sonido: './sound/fantasma_dcha.mp3' },
        { id: 'luna', sonido: './sound/luna.mp3' },
        { id: 'ojo-izq', sonido: './sound/ojos.mp3' },
        { id: 'ojo-medio', sonido: './sound/ojos.mp3' },
        { id: 'ojo-dcho', sonido: './sound/ojos.mp3' },
        { id: 'nube', sonido: './sound/witch.mp3' }
    ];

    //Agregamos eventos de hover para cada imagen
    imagenesConRuta.forEach(elemento => {
        
        const sonido = new Audio(elemento.sonido);
        let imagen;

        //Arreglo para que funcione en el div de la luna
        if (elemento.id == 'luna'){
            imagen = document.querySelector('.luna');
        }else{
            imagen = document.getElementById(elemento.id);
        }
        
        imagen.addEventListener('mouseenter', () => sonido.play());
        imagen.addEventListener('mouseleave', () => {
            sonido.pause();
            sonido.currentTime = 0;
        });
    });

    //Sonido de fondo en bucle
    const sonidoFondo = new Audio('./sound/fondo.mp3');
    sonidoFondo.loop = true;
    document.addEventListener('click', () => {
        sonidoFondo.play();
    }); 
});
