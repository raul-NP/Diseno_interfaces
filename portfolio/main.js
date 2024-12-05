document.addEventListener("DOMContentLoaded",  () => {
 
    const num = document.getElementById('charge-num'); 
    const chargeContainer = document.getElementById('charge-bar-container');
    const chargeBar = document.getElementById('charge-bar');
    const cursor = document.getElementById('cursor');

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