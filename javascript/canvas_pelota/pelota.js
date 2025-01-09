document.addEventListener("DOMContentLoaded", () => {

    const marco = document.getElementById('marco');
    const context = marco.getContext("2d");

    //Lineas clave para los tamaños
    const w = marco.offsetWidth;
    const h = marco.offsetHeight;
    marco.width = w;
    marco.height = h;

    //Linea superior
    context.fillRect(0, 0, w, 1);

    //Linea lateral izquierda
    //Punto inicial
    context.moveTo(0, 0); 
    //Punto final
    context.lineTo(0, h); 
    //Grosor
    context.lineWidth = 1; 
    //Color
    context.strokeStyle = 'black'; 
    //Dibujar
    context.stroke();

    //Linea lateral derecha
    context.moveTo(w, 0); 
    context.lineTo(w, h); 
    context.lineWidth = 1; 
    context.strokeStyle = 'black'; 
    context.stroke();

    //Linea inferior
    context.moveTo(0, h);
    context.lineTo(w, h);
    context.lineWidth = 1;
    context.strokeStyle = 'black';
    context.stroke();

    //Funcion que mueve la pelota
    let px = 30;
    let py = 30;
    let vx = 5;
    let vy = 4;
    let r = 10;

    function moverBola(){

        //Limpiamos canvas antes de actualizar
        context.clearRect(0, 0, w, h);

        //Actualizamos posicion
        px += vx;
        py += vy;
        
        //Dibujamos la pelota
        context.beginPath();
        context.arc(px, py, r, 0, 2 * Math.PI);
        context.fillStyle = 'blue';
        context.strokeStyle = 'black';
        context.fill();
        context.stroke();
        context.closePath();

        //En caso de chocar
        if (px > w){
            vx *= -1;
            r+=3;

        }else if(py > h){
            vy *= -1;
            r+=3;
        }
        
        if(px < 0){
            vx *= -1;
            r+=3;
        }else if(py < 0){
            vy *= -1;
            r+=3;
        }
    }
    setInterval(moverBola, 1);

})