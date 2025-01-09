document.addEventListener('DOMContentLoaded', () => {

    const contador = (+localStorage.getItem('contador') || 0) + 1;
    
    localStorage.setItem('contador', contador);
    
    document.getElementById('contador').textContent = contador;

    //Conocer latitudd y altitud en la que nos encontramos ubicados
    navigator.geolocation.getCurrentPosition(function(position){
        position.coords.latitude
    });

})