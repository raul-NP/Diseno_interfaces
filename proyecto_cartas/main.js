document.addEventListener( "DOMContentLoaded", () => {

    //Iniciamos la estructura de cartas aleatorias 
    iniciar();

    let seleccionadas = [];
    let movimientos = 0;
    let finJuego = false;

    //Añadimos una escucha a todas las cartas
    document.querySelectorAll(".carta").forEach(carta => {
        
        //Al hacer click, volteamos la carta
        carta.addEventListener("click", () => {
            if (!carta.classList.contains("select")){
                
                carta.classList.add("select");
                seleccionadas.push(carta);

                //En caso de que haya cartas para poder comparar, cogemos las dos primeras seleccionadas
                if (seleccionadas.length >= 2){

                    let carta1 = seleccionadas.shift()
                    let carta2 = seleccionadas.shift()

                    //Caso en el que no son iguales
                    if (carta1.classList[1] !== carta2.classList[1]){
                        setTimeout( () => {
                            carta1.classList.remove("select");
                            carta2.classList.remove("select");
                        }, 700)

                    //Caso en el que son iguales
                    }else if(carta1.classList[1] === carta2.classList[1]){

                        //Comprobamos si todoas las cartas tienen el selected para marcar el final del juego
                        finJuego = document.querySelectorAll(".select").length === 18; 
                    }

                    movimientos++;
                    console.log(movimientos)
                    console.log(finJuego);
                }
            }
        })
    })

    //Generamos la estructura de cartas aleatorias
    function iniciar() {

        //Duplicamos las cartas
        let cartas = ["exodia", "brazo_dcho", "brazo_izq", "pie_dcho", "pie_izq", "mago", "resu", "ojos_rojos", "dragon"];
        cartas.push(...cartas);

        //Barajeamos el array
        let len = cartas.length;

        while (len != 0){
            let randomIndex = Math.floor(Math.random() * len);
            len --;
            [cartas[randomIndex], cartas[len]] = [cartas[len], cartas[randomIndex]]
        }

        //Integramos los divs con todas las cartas
        let cardElements = "";
        cardElements += `<div class="tapete">`;
        for (let i = 0; i < 3; i++) {
            cardElements += `<div class="fila${i+1}">`;
            for (let j = 0; j < 6; j++) {
                let carta = cartas.pop();
                cardElements += `<div class="carta ${carta}">
                                                <div class="anverso"></div>
                                                <div class="reverso"></div>
                                            </div>`;
            }
            cardElements += `</div>`;
        }
        cardElements += `</div>`;
        document.body.innerHTML += cardElements; 

    }

})