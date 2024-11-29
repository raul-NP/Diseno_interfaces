document.addEventListener("DOMContentLoaded", () => {

    let palanca = document.getElementById("palanca");
    let viaje = document.getElementById("fondo2");
    let espacio2 = document.getElementById("fondo3");
    let radio1 = document.getElementById("radio1");
    let radio2 = document.getElementById("radio2");
    let copkit = document.getElementById("copkit-container");
    let empiece = false;
    const musica1 = new Audio("./sounds/sonidito.mp3");
    const musica2 = new Audio("./sounds/tatuado.mp3");
    const musica_zona1 = new Audio("./sounds/zona1.mp3");
    const musica_zona2 = new Audio("./sounds/zona2.mp3");
    const alarma = new Audio("./sounds/palanca.mp3");
    const musica_viaje = new Audio("./sounds/viaje_espacial.mp3");
    const musica_aliens = new Audio("./sounds/aliens.mp3");

    //Musica de inicio, al clickar la pantalla
    copkit.addEventListener("click", () => {
        if (!empiece){
            musica_zona1.play();
            musica_viaje.play();
            empiece = true;
        }
    })

    //Gestión de música al cambiar de escenario con viaje espacial
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
        setTimeout( () => {
            musica_viaje.play();
        }, 300)

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

        //Al cambiar de zona, iniciamos un sonido que suena en x segundos aleatorios
        setTimeout( () => {
            musica_aliens.play();
        }, Math.floor(Math.random() * 5000 - 2300) + 2300); 

    });

    //Música 1 de la radio 
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

    //Música 2 de la radio 
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


