document.addEventListener("DOMContentLoaded",  () => {
 
    const num = document.getElementById('charge-num'); 
    const chargeContainer = document.getElementById('charge-bar-container');
    const chargeBar = document.getElementById('charge-bar');
    const cursor = document.getElementById('cursor');
    const minCursor = document.querySelectorAll('.minCursor');
    const menu = [
        document.getElementById('page-home'),
        document.getElementById('page-about'),
        document.getElementById('page-projects'),
        document.getElementById('page-career'),
        document.querySelector('#logo-img')
    ];
    const sectionContainer = document.querySelector('#container');
    const sections = document.querySelectorAll('#container > div');
    let leftInicial = 20;
    let actualOption = 0;

    cursor.style.left = "-20px";
    cursor.style.top = "-20px";

    //Iteramos los elementos del menú
    menu.forEach((option, siguiente) => {

        //Al hacer click en una opción del menú
        option.addEventListener('click', () => {

            //En caso del logo redirigir a home
            if (siguiente === 4){
                siguiente = 0;
                option = menu[0];
            } 
            
            //Lógica de desplazamiento de secciones de contenido del portfolio
            sectionContainer.style.left = `${-siguiente * 100 + leftInicial}vw`;
            actualOption = siguiente;

            //Efecto de las secciones al seleccionarlas
            for (let i = 0; i < sections.length; i++) {

                //Efecto de las secciones actual y el resto
                sections[i].style.scale = i === actualOption? '1.2': '1';
                
                //Coger el elemento interno img de la seccion y cambiar de blur 5px a 0
                if(sections[i].querySelector('img')){
                    sections[i].querySelector('img').style.filter = i === actualOption? 'blur(0px)': 'blur(5px)';
                }

                //Subir el título
                // if(sections[i].querySelector('#home-title')){
                //     sections[i].querySelector('#home-title').style.top = i === actualOption? '1vh': '6vh';
                // }
            }
            
            //Añadimos efecto de opción de menú selecionada y se la quitamos a las demás
            menu.forEach(element => {
                option === element? element.classList.add('selected'): element.classList.remove('selected');
            });
        })
    });

    //Efecto de disminución del cursor al hacer hover en el menú del menú
    minCursor.forEach(element => {
        element.addEventListener('mouseenter', () => {
            console.log(element);
            cursor.style.width = '0.9vw';
            cursor.style.height = '0.9vw';
        })
        element.addEventListener('mouseleave', () => {
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
    
    //Función recursiva que asigna el número de porcentaje de la barra de carga
    function asignaNumero(){
        let number = chargeBar.clientWidth / chargeContainer.clientWidth * 100;
        num.textContent = Math.floor(number) + "%";
        if (number < 100){
            setTimeout(asignaNumero, 100);
        }
    };
    asignaNumero();
    
});