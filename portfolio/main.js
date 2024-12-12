document.addEventListener("DOMContentLoaded",  () => {
 
    const num = document.getElementById('charge-num'); 
    const chargeContainer = document.getElementById('charge-bar-container');
    const chargeBar = document.getElementById('charge-bar');
    const cursor = document.getElementById('cursor');
    const menu = document.querySelectorAll('.page-container');
    const sectionContainer = document.querySelector('#container');
    const sections = document.querySelectorAll('#container > div');
    let actual = 0;

    //Iteramos los elementos del menú
    menu.forEach((option, siguiente) => {

        let menuOption = option.querySelector('div');

        //Al hacer click en una opción del menú
        menuOption.addEventListener('click', () => {
            
            //Lógica de desplazamiento de secciones de contenido del portfolio
            let leftInicial = 14.7;
            sectionContainer.style.left = `${-siguiente * 100 + leftInicial}vw`;
            actual = siguiente;

            //Efecto de las secciones al seleccionarlas
            for (let i = 0; i < sections.length; i++) {

                //Efec
                if (i === actual){
                    sections[i].style.scale = '1.2';
                }else{
                    sections[i].style.scale = '1';
                }
            }
            
            //Añadimos efecto de opción de menú selecionada
            menuOption.classList.add('selected');

            //Se la quitamos a las demás
            menu.forEach(element => {
                if (menuOption !== element.querySelector('div')){
                    element.querySelector('div').classList.remove('selected');
                }
            });
        })

        //Efecto de disminución del cursor al hacer hover en las opciones del menú
        option.addEventListener('mouseenter', () => {
            cursor.style.width = '0.9vw';
            cursor.style.height = '0.9vw';
        })
        option.addEventListener('mouseleave', () => {
            cursor.style.width = '1.8vw';
            cursor.style.height = '1.8vw';
        })
    });

    //Posicionamos el cursor para que nos siga
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

    //Cuando nos posicionemos fuera de la pantalla el puntero desaparece
    document.addEventListener('mouseenter', (e) => {
        cursor.style.display = 'block';
    })
    document.addEventListener('mouseleave', (e) => {
        cursor.style.display = 'none';
    })
    
    //Función que asigna el número de porcentaje de la barra de carga
    function asignaNumero(){
        let number = chargeBar.clientWidth / chargeContainer.clientWidth * 100;
        num.textContent = Math.floor(number) + "%";

        if (number < 100){
            setTimeout(asignaNumero, 100);
        }
    };
    asignaNumero();
    
});