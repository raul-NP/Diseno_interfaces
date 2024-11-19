document.addEventListener("DOMContentLoaded", () => {

    //Al hacer click se inician todas las animaciones
    document.body.addEventListener("click", () => {

        const elements = document.querySelectorAll("[id]");
        const insulto = new Audio("./sound/insulto.mp3");

        //Cambiamos la propiedad de las animaciones a running
        elements.forEach((element) => {
            element.style.animationPlayState = "running"; 
        });

        //Sonido del insulto
        setTimeout( () => insulto.play(), 780)

    });


});
