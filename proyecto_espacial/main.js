document.addEventListener("DOMContentLoaded", () => {

    let palanca = document.getElementById("palanca");
    let viaje = document.getElementById("fondo2");
    let espacio2 = document.getElementById("fondo3");
    let radio1 = document.getElementById("radio1");
    let radio2 = document.getElementById("radio2");
    const musica1 = new Audio("./sounds/sonidito.mp3");
    const musica2 = new Audio("./sounds/tatuado.mp3");
    const musica_zona1 = new Audio("./sounds/zona1.mp3");
    const musica_zona2 = new Audio("./sounds/zona2.mp3");
    const alarma = new Audio("./sounds/palanca.mp3");
    const musica_viaje = new Audio("./sounds/viaje_espacial.mp3");

    musica_zona1.play();
    musica_viaje.play();

    palanca.addEventListener("click", () => {

        //Reiniciamos la animación cada vez que pulsamos la palanca
        viaje.style.animation = "none";
        viaje.offsetWidth;        
        viaje.style.animation = "";
        
        //Cambiamos de capa a uno de los fondos
        if (espacio2.style.zIndex == 2){
            espacio2.style.zIndex = 12;
        }else{
            espacio2.style.zIndex = 2;
        }

        //Iniciamos la música del viaje espacial
        alarma.play();
        musica_viaje.play();

        //Manejamos las músicas de cada zona espacial
        if(!musica_zona1.paused){
            musica_zona1.pause()
            setTimeout( () => {
                musica_zona2.play();
                alarma.pause();
                alarma.currentTime = 0;
                musica_viaje.pause();
                musica_viaje.currentTime = 0; 
            }, 2300)
        }else{
            musica_zona2.pause();
            setTimeout( () => {
                musica_zona1.play();
                alarma.pause();
                alarma.currentTime = 0;
                musica_viaje.pause();
                musica_viaje.currentTime = 0; 
            }, 2300)
        }

        //Cambio de imagen de palanca al ser pulsada
        palanca.setAttribute("src", "./img/palanca_abajo.png");
        setTimeout( () => {
            palanca.setAttribute("src", "./img/palanca.png");
        }, 500)

    });

    radio1.addEventListener("click", () => {

        //Si no está la otra música podemos activar esta
        if (musica2.paused){

            //Manejamos el efecto de play visual y el inicio o pausa de la canción
            if (musica1.paused){
                radio1.style.transform = 'rotateX(0deg)';
                musica1.play();
            }else{
                radio1.style.transform = 'rotateX(180deg)';
                musica1.pause();
            }
        }


    })

    radio2.addEventListener("click", () => {

        //Si no está la otra música podemos activar esta
        if (musica1.paused){

            //Manejamos el efecto de play visual y el inicio o pausa de la canción
            if (musica2.paused){
                radio2.style.transform = 'rotateX(180deg)';
                musica2.play();
            }else{
                radio2.style.transform = 'rotateX(0deg)';
                musica2.pause();
            }
        }

    })



})


