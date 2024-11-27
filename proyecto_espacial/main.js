document.addEventListener("DOMContentLoaded", () => {

    let palanca = document.getElementById("palanca");
    let viaje = document.getElementById("fondo2");
    let espacio2 = document.getElementById("fondo3");

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

    });



})


